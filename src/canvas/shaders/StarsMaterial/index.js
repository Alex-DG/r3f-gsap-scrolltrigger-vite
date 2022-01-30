import * as THREE from 'three'
import { extend } from '@react-three/fiber'

import { vertex } from './vertex'
import { fragment } from './fragment'

const defaultColor = new THREE.Color('#fff')

class StarsMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: defaultColor },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uSize: { value: 125 },
        uSpeed: { value: 0.2 },
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

extend({ StarsMaterial })
