import type { ShaderMaterial } from "three";

/** Grade Vanta's own fragment output. No canvas readback or second GL context. */
export function ditherClouds(material: ShaderMaterial, daylight: boolean): void {
  const bayer = `
float accompanyBayer2(vec2 p) {
  return mod(2.0 * mod(p.x, 2.0) + 3.0 * mod(p.y, 2.0), 4.0);
}
float accompanyBayer8(vec2 p) {
  p = floor(p);
  return (accompanyBayer2(p) * 16.0 +
    accompanyBayer2(floor(p / 2.0)) * 4.0 +
    accompanyBayer2(floor(p / 4.0))) / 64.0;
}
`;
  const grade = `
  vec3 col = gl_FragColor.rgb;
  float b = accompanyBayer8(floor(gl_FragCoord.xy / 2.0));
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  ${daylight ? `
  float stepped = floor(lum * 7.0 + b) / 7.0;
  vec3 poster = col * (stepped / max(lum, 0.08));
  col = clamp(mix(col, poster, 0.9), 0.0, 1.0);
  ` : `
  float q = floor(lum * 4.0 + b * 1.35) / 4.0;
  vec3 dusk = mix(vec3(0.031, 0.043, 0.090), vec3(0.404, 0.443, 0.588), smoothstep(0.08, 0.45, q));
  dusk = mix(dusk, vec3(0.980, 0.780, 0.520), smoothstep(0.45, 0.80, q));
  col = mix(col, dusk, 0.9);
  `}
  gl_FragColor = vec4(col, 1.0);
`;
  // Vanta 0.5.24 CLOUDS ends with main(); its fullscreen mesh owns this material.
  material.fragmentShader = bayer + material.fragmentShader.replace(/\n}\s*$/, `\n${grade}\n}`);
  material.needsUpdate = true;
}
