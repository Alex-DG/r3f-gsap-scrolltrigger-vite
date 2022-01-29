import React from 'react'

import { Canvas as CanvasR3F } from '@react-three/fiber'
import Scene from './Scene'

/**
 * 3D Experience Entry Point
 */
const Canvas = () => (
  <CanvasR3F
    gl={{ alpha: true, antialias: true }}
    camera={{ position: [1, 1, 40], fov: 75, near: 0.001, far: 5000 }}
  >
    <Scene />
  </CanvasR3F>
)

export default Canvas
