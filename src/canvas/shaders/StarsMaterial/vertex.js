export const vertex = `
    uniform float uPixelRatio;
    uniform float uSize;
    uniform float uTime;
    uniform float uSpeed;
    
    attribute float aScale; 

    void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        
        // Update positions
        modelPosition.y += sin(uTime + modelPosition.x) * aScale * uSpeed;
        modelPosition.z += cos(uTime + modelPosition.x) * aScale * uSpeed;
        modelPosition.x += cos(uTime + modelPosition.x) * aScale * uSpeed;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPostion = projectionMatrix * viewPosition;  

        gl_Position = projectionPostion;

        gl_PointSize = uSize * aScale * uPixelRatio; // Point size responsive to the screen
        gl_PointSize *= (1.0 / - viewPosition.z); // Point size based on z-depth
    }
`
