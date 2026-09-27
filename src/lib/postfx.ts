/**
 * Fragment post-processing for the sky, ported from moonshine's
 * `packages/shaders` runtime (compile/link/fullscreen-triangle conventions,
 * same uniform names: u_time, u_resolution) and extended with canvas-texture
 * input and ping-pong framebuffers for datamosh feedback.
 */

const VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  v_uv.y = 1.0 - v_uv.y;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

/** Macro-block displacement + horizontal feedback smear. */
const MOSH_FRAG = `
precision highp float;
varying vec2 v_uv;
uniform sampler2D u_scene;
uniform sampler2D u_prev;
uniform float u_time;
uniform float u_mosh;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  float t = floor(u_time * 9.0);
  vec2 blocks = vec2(20.0, 11.0);
  vec2 bid = floor(v_uv * blocks);
  float n = hash(bid + t * 0.77);
  float gate = step(1.0 - u_mosh * 0.55, n);

  vec2 uv = v_uv;
  // row tearing: wrap-shift whole bands
  uv.x = fract(uv.x + gate * (hash(bid + t) - 0.5) * 0.9 * u_mosh);
  uv.y += gate * (hash(bid - t) - 0.5) * 0.05 * u_mosh;

  // chromatic split grows with the mosh
  vec2 split = vec2(0.012, 0.0) * u_mosh * (0.4 + n);
  vec3 scene;
  scene.r = texture2D(u_scene, clamp(uv + split, 0.0, 1.0)).r;
  scene.g = texture2D(u_scene, clamp(uv, 0.0, 1.0)).g;
  scene.b = texture2D(u_scene, clamp(uv - split, 0.0, 1.0)).b;

  // block brightness quantize
  scene *= 1.0 + (hash(bid + t * 1.3) - 0.5) * 0.6 * gate * u_mosh;

  // feedback bleed from last frame, smeared horizontally
  vec2 prevUv = clamp(v_uv + vec2((n - 0.5) * 0.1 * u_mosh, 0.0), 0.0, 1.0);
  vec3 bleed = texture2D(u_prev, prevUv).rgb * mix(0.70, 0.985, u_mosh);
  vec3 col = max(scene, bleed * step(0.4, n + u_mosh * 0.35));
  col = mix(scene, col, clamp(u_mosh * 1.5, 0.0, 1.0));
  gl_FragColor = vec4(col, 1.0);
}
`;

/** Bayer 8x8 ordered dither into a dusk palette + grain + vignette. */
const DITHER_FRAG = `
precision highp float;
varying vec2 v_uv;
uniform sampler2D u_tex;
uniform vec2 u_resolution;
uniform float u_time;

float bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2.0 + a.y * a.y * 0.75);
}

float bayer4(vec2 a) {
  return bayer2(0.5 * a) * 0.25 + bayer2(a);
}

float bayer8(vec2 a) {
  return bayer4(0.5 * a) * 0.25 + bayer2(a);
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  vec3 col = texture2D(u_tex, v_uv).rgb;

  vec3 pal0 = vec3(0.031, 0.043, 0.090); // deep navy
  vec3 pal1 = vec3(0.404, 0.443, 0.588); // dusk slate
  vec3 pal2 = vec3(0.980, 0.780, 0.520); // warm peach

  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  float b = bayer8(gl_FragCoord.xy / 2.0);
  float q = lum + (b - 0.5) * 0.26;
  float l1 = smoothstep(0.02, 0.48, q);
  float l2 = smoothstep(0.48, 0.84, q);
  vec3 dith = mix(mix(pal0, pal1, l1), pal2, l2);

  col = mix(col, dith, 0.82);

  // film grain
  col += (hash(v_uv * 941.7 + fract(u_time) * 17.0) - 0.5) * 0.05;

  // vignette
  float d = length(v_uv - 0.5) * 1.35;
  col *= 1.0 - 0.38 * pow(clamp(d, 0.0, 1.4), 2.0);

  gl_FragColor = vec4(col, 1.0);
}
`;

type Prog = {
  program: WebGLProgram;
  uniforms: Record<string, WebGLUniformLocation | null>;
};

function compile(gl: WebGLRenderingContext, type: number, src: string): WebGLShader {
  const sh = gl.createShader(type);
  if (!sh) throw new Error("postfx: createShader failed");
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(sh) ?? "unknown";
    gl.deleteShader(sh);
    throw new Error(`postfx: compile failed: ${info}`);
  }
  return sh;
}

function makeProgram(gl: WebGLRenderingContext, fragSrc: string): Prog {
  const vert = compile(gl, gl.VERTEX_SHADER, VERT);
  const frag = compile(gl, gl.FRAGMENT_SHADER, fragSrc);
  const program = gl.createProgram();
  if (!program) throw new Error("postfx: createProgram failed");
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);
  gl.deleteShader(vert);
  gl.deleteShader(frag);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program) ?? "unknown";
    throw new Error(`postfx: link failed: ${info}`);
  }
  const uniforms: Record<string, WebGLUniformLocation | null> = {};
  for (const name of ["u_scene", "u_prev", "u_tex", "u_resolution", "u_time", "u_mosh"]) {
    uniforms[name] = gl.getUniformLocation(program, name);
  }
  return { program, uniforms };
}

export class PostFX {
  private host: HTMLElement;
  private source: HTMLCanvasElement;
  private canvas: HTMLCanvasElement;
  private gl: WebGLRenderingContext;
  private moshProg: Prog;
  private ditherProg: Prog;
  private quad: WebGLBuffer | null;
  private sceneTex: WebGLTexture;
  private pingTex: WebGLTexture;
  private pongTex: WebGLTexture;
  private pingFbo: WebGLFramebuffer;
  private pongFbo: WebGLFramebuffer;
  private raf = 0;
  private t0 = performance.now();
  private mosh = 0;
  private lastScroll = 0;
  private flip = false;
  private destroyed = false;

  constructor(host: HTMLElement, source: HTMLCanvasElement) {
    this.host = host;
    this.source = source;
    this.canvas = document.createElement("canvas");
    this.canvas.className = "sky-post";
    this.canvas.setAttribute("aria-hidden", "true");

    const gl = this.canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    });
    if (!gl) throw new Error("postfx: webgl unavailable");
    this.gl = gl;
    this.moshProg = makeProgram(gl, MOSH_FRAG);
    this.ditherProg = makeProgram(gl, DITHER_FRAG);

    this.quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

    this.sceneTex = this.makeTexture();
    this.pingTex = this.makeTexture();
    this.pongTex = this.makeTexture();
    this.pingFbo = this.makeFbo(this.pingTex);
    this.pongFbo = this.makeFbo(this.pongTex);

    this.resize();
    window.addEventListener("resize", this.resize);
  }

  start(): void {
    this.host.insertBefore(this.canvas, this.host.querySelector(".sky-scrim"));
    this.loop();
  }

  /** Feed scroll deltas (from moonshine's scrollY signal) into the mosh. */
  nudge(scroll: number): void {
    const d = Math.abs(scroll - this.lastScroll);
    this.lastScroll = scroll;
    this.mosh = Math.min(1, this.mosh + d * 0.009);
  }

  destroy(): void {
    this.destroyed = true;
    cancelAnimationFrame(this.raf);
    window.removeEventListener("resize", this.resize);
    this.canvas.remove();
  }

  private resize = (): void => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
    const w = Math.max(1, Math.floor(window.innerWidth * dpr));
    const h = Math.max(1, Math.floor(window.innerHeight * dpr));
    this.canvas.width = w;
    this.canvas.height = h;
    for (const tex of [this.pingTex, this.pongTex]) {
      this.gl.bindTexture(this.gl.TEXTURE_2D, tex);
      this.gl.texImage2D(
        this.gl.TEXTURE_2D, 0, this.gl.RGBA, w, h, 0,
        this.gl.RGBA, this.gl.UNSIGNED_BYTE, null,
      );
    }
  };

  private makeTexture(): WebGLTexture {
    const gl = this.gl;
    const tex = gl.createTexture();
    if (!tex) throw new Error("postfx: createTexture failed");
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return tex;
  }

  private makeFbo(tex: WebGLTexture): WebGLFramebuffer {
    const gl = this.gl;
    const fbo = gl.createFramebuffer();
    if (!fbo) throw new Error("postfx: createFramebuffer failed");
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return fbo;
  }

  private bindQuad(prog: Prog): void {
    const gl = this.gl;
    gl.useProgram(prog.program);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quad);
    const loc = gl.getAttribLocation(prog.program, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  }

  private loop = (): void => {
    if (this.destroyed) return;
    this.raf = requestAnimationFrame(this.loop);
    const gl = this.gl;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const time = (performance.now() - this.t0) / 1000;

    // idle bursts + scroll-driven bursts, decaying back to calm
    if (Math.random() < 0.0035) this.mosh = Math.min(1, this.mosh + 0.45 + Math.random() * 0.4);
    this.mosh = Math.max(0, this.mosh * 0.955 - 0.0015);

    // upload the vanta scene
    gl.bindTexture(gl.TEXTURE_2D, this.sceneTex);
    try {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.source);
    } catch {
      return; // source not ready this frame
    }

    // pass 1: datamosh, reading the previous output for feedback
    const read = this.flip ? this.pongTex : this.pingTex;
    const writeFbo = this.flip ? this.pingFbo : this.pongFbo;
    gl.bindFramebuffer(gl.FRAMEBUFFER, writeFbo);
    gl.viewport(0, 0, w, h);
    this.bindQuad(this.moshProg);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.sceneTex);
    gl.uniform1i(this.moshProg.uniforms.u_scene, 0);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, read);
    gl.uniform1i(this.moshProg.uniforms.u_prev, 1);
    gl.uniform2f(this.moshProg.uniforms.u_resolution, w, h);
    gl.uniform1f(this.moshProg.uniforms.u_time, time);
    gl.uniform1f(this.moshProg.uniforms.u_mosh, this.mosh);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // pass 2: ordered dither + grade to screen
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    this.bindQuad(this.ditherProg);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.flip ? this.pingTex : this.pongTex);
    gl.uniform1i(this.ditherProg.uniforms.u_tex, 0);
    gl.uniform2f(this.ditherProg.uniforms.u_resolution, w, h);
    gl.uniform1f(this.ditherProg.uniforms.u_time, time);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    this.flip = !this.flip;
  };
}
