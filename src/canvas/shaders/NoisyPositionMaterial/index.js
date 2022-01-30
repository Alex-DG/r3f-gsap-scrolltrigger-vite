import * as THREE from 'three'
import { extend } from '@react-three/fiber'

import { vertex } from './vertex'
import { fragment } from './fragment'

class NoisyPositionMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    })
  }

  get time() {
    return this.uniforms.uTime.value
  }

  set time(value) {
    this.uniforms.uTime.value = value
  }
}

extend({ NoisyPositionMaterial })
