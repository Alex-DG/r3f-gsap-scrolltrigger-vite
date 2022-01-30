export const fragment = `
    varying vec2 vUv;

    void main() {
        gl_FragColor = vec4 (vUv, .7, 1.0);
    }
`
