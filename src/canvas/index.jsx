import React from 'react'

import { Canvas as CanvasR3F } from '@react-three/fiber'

import Scene from './Scene'

/**
 * 3D Experience ~ Entry Point ~ d::-_-::b
 */
const Canvas = () => (
  <CanvasR3F
    className='webgl'
    gl={{ alpha: true, antialias: true }}
    camera={{ position: [1, 1, 40], fov: 75, near: 0.001, far: 5000 }}
  >
    <Scene />
  </CanvasR3F>
)

export default Canvas
