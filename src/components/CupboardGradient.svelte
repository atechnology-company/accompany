<script lang="ts">
  import { onMount } from "svelte";

  let host: HTMLDivElement;
  let canvas: HTMLCanvasElement;
  // Same shader and warm Mono preset as cupboard/apps/site/src/animated-gradient.tsx.
const FRAGMENT_SHADER = `#version 300 es
precision highp float;
uniform float u_time;
uniform float u_pixelRatio;
uniform vec2 u_resolution;
uniform float u_scale;
uniform float u_rotation;
uniform vec4 u_color1;
uniform vec4 u_color2;
uniform vec4 u_color3;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;
out vec4 fragColor;
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
vec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {
  vec3 color1 = c1.rgb * c1.a;
  vec3 color2 = c2.rgb * c2.a;
  vec3 color3 = c3.rgb * c3.a;
  float r1 = smoothstep(.0 + .35 * edgesWidth, .7 - .35 * edgesWidth + .5 * edge_blur, mixer);
  float r2 = smoothstep(.3 + .35 * edgesWidth, 1. - .35 * edgesWidth + edge_blur, mixer);
  vec3 blended_color_2 = mix(color1, color2, r1);
  float blended_opacity_2 = mix(c1.a, c2.a, r1);
  vec3 c = mix(blended_color_2, color3, r2);
  float o = mix(blended_opacity_2, c3.a, r2);
  return vec4(c, o);
}
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float t = .5 * u_time;
  float noise_scale = .0005 + .006 * u_scale;
  uv -= .5;
  uv *= noise_scale * u_resolution;
  uv = rotate(uv, u_rotation * .5 * PI);
  uv /= u_pixelRatio;
  uv += .5;
  float n1 = noise(uv * 1. + t);
  float n2 = noise(uv * 2. - t);
  float angle = n1 * TWO_PI;
  uv.x += 4. * u_distortion * n2 * cos(angle);
  uv.y += 4. * u_distortion * n2 * sin(angle);
  float iterations_number = ceil(clamp(u_swirlIterations, 1., 30.));
  for (float i = 1.; i <= iterations_number; i++) {
    uv.x += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1.5 * uv.y);
    uv.y += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1. * uv.x);
  }
  float proportion = clamp(u_proportion, 0., 1.);
  float shape = 0.;
  float mixer = 0.;
  if (u_shape < .5) {
    vec2 checks_shape_uv = uv * (.5 + 3.5 * u_shapeScale);
    shape = .5 + .5 * sin(checks_shape_uv.x) * cos(checks_shape_uv.y);
    mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
  } else if (u_shape < 1.5) {
    vec2 stripes_shape_uv = uv * (.25 + 3. * u_shapeScale);
    float f = fract(stripes_shape_uv.y);
    shape = smoothstep(.0, .55, f) * smoothstep(1., .45, f);
    mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
  } else {
    float sh = 1. - uv.y;
    sh -= .5;
    sh /= noise_scale * u_resolution.y;
    sh += .5;
    float shape_scaling = .2 * (1. - u_shapeScale);
    shape = smoothstep(.45 - shape_scaling, .55 + shape_scaling, sh + .3 * (proportion - .5));
    mixer = shape;
  }
  vec4 color_mix = blend_colors(u_color1, u_color2, u_color3, mixer, 1. - clamp(u_softness, 0., 1.), .01 + .01 * u_scale);
  fragColor = vec4(color_mix.rgb, color_mix.a);
}`;


  onMount(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let gl: WebGL2RenderingContext | null = null;
    let program: WebGLProgram | null = null;
    let buffer: WebGLBuffer | null = null;
    const shaders: WebGLShader[] = [];
    let timeUniform: WebGLUniformLocation | null = null;
    let frame = 0;
    let visible = false;
    let failed = false;
    let disposed = false;

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const release = () => {
      stop();
      if (!gl) return;
      shaders.forEach((shader) => gl?.deleteShader(shader));
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      program = null;
      canvas.style.visibility = "hidden";
    };
    const resize = () => {
      if (!gl || !program) return;
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5, Math.sqrt(600_000 / (width * height)));
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(gl.getUniformLocation(program, "u_resolution"), canvas.width, canvas.height);
      gl.uniform1f(gl.getUniformLocation(program, "u_pixelRatio"), ratio);
    };
    const initialize = () => {
      gl = canvas.getContext("webgl2", { alpha: false, antialias: false });
      if (!gl) throw new Error("WebGL2 unavailable");
      program = gl.createProgram();
      buffer = gl.createBuffer();
      if (!program || !buffer) throw new Error("Gradient allocation failed");
      for (const [type, source] of [
        [gl.VERTEX_SHADER, "#version 300 es\nin vec2 a_position; void main() { gl_Position = vec4(a_position, 0., 1.); }"],
        [gl.FRAGMENT_SHADER, FRAGMENT_SHADER],
      ] as const) {
        const shader = gl.createShader(type);
        if (!shader) throw new Error("Shader allocation failed");
        shaders.push(shader);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error("Gradient compilation failed");
        gl.attachShader(program, shader);
      }
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("Gradient link failed");
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
      const position = gl.getAttribLocation(program, "a_position");
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      for (const [name, value] of Object.entries({
        u_scale: .55, u_rotation: -40 * Math.PI / 180, u_proportion: .42,
        u_softness: .88, u_shape: 2, u_shapeScale: .64, u_distortion: .16,
        u_swirl: .56, u_swirlIterations: 8,
      })) gl.uniform1f(gl.getUniformLocation(program, name), value);
      gl.uniform4f(gl.getUniformLocation(program, "u_color1"), 0, 0, 0, 1);
      gl.uniform4f(gl.getUniformLocation(program, "u_color2"), 138 / 255, 98 / 255, 61 / 255, 1);
      gl.uniform4f(gl.getUniformLocation(program, "u_color3"), 36 / 255, 23 / 255, 12 / 255, 1);
      timeUniform = gl.getUniformLocation(program, "u_time");
      resize();
    };
    const paint = (time: number) => {
      if (!gl || disposed || failed) return;
      gl.uniform1f(timeUniform, time / 1000 * .6 - 1.8);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = requestAnimationFrame(paint);
    };
    const sync = () => {
      stop();
      canvas.style.visibility = "hidden";
      if (disposed || failed || motion.matches || document.hidden || !visible) return;
      try {
        if (!program) initialize();
        canvas.style.visibility = "visible";
        frame = requestAnimationFrame(paint);
      } catch {
        failed = true;
        release();
      }
    };
    const lost = () => { failed = true; release(); };
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    const size = new ResizeObserver(resize);
    intersection.observe(host);
    size.observe(host);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    canvas.addEventListener("webglcontextlost", lost);

    return () => {
      disposed = true;
      intersection.disconnect();
      size.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      canvas.removeEventListener("webglcontextlost", lost);
      release();
    };
  });
</script>

<div bind:this={host} class="cupboard-gradient" aria-hidden="true">
  <canvas bind:this={canvas} style="visibility:hidden"></canvas>
</div>
