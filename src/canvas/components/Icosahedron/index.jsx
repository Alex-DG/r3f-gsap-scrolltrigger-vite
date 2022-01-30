import React, { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import {
  Icosahedron as IcosahedronDrei,
  shaderMaterial,
} from '@react-three/drei'

import { vertex } from './shader/vertex'
import { fragment } from './shader/fragment'

/**
 * Shader definition
 */
const PositionShiftMaterial = shaderMaterial({ uTime: 0 }, vertex, fragment)
extend({ PositionShiftMaterial })

const Icosahedron = React.forwardRef((props, ref) => {
  const materialRef = useRef()

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    materialRef.current.uniforms.uTime.value = time * 1.5
  })

  return (
    <IcosahedronDrei {...props} {...{ ref }}>
      <positionShiftMaterial ref={materialRef} attach='material' wireframe />
    </IcosahedronDrei>
  )
})

export default Icosahedron
