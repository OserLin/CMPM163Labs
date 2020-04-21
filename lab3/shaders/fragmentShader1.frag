varying vec3 vUv;

uniform vec3 colorF;
uniform vec3 colorG;


void main() {
  gl_FragColor = vec4(mix(colorF, colorG, vUv.z), 1.0);
}
