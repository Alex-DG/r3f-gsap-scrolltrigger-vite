import { useRef } from 'react'
import { extend } from '@react-three/fiber'
import {
  Icosahedron as IcosahedronDrei,
  shaderMaterial,
} from '@react-three/drei'

import { vertex } from '../../shaders/PositionShift/vertex'
import { fragment } from '../../shaders/PositionShift/fragment'

import useJawDroppingScrollBasedAnimations from '../../hooks/useJawDroppingScrollBasedAnimations'
import usePositionShift from '../../hooks/usePositionShift'

import '../../shaders/PositionShift'

/**
 * Shader definition
 */
const PositionShiftMaterial = shaderMaterial({ uTime: 0 }, vertex, fragment)
extend({ PositionShiftMaterial })

const Icosahedron = (props) => {
  const icosahedronRef = useRef()
  useJawDroppingScrollBasedAnimations(icosahedronRef)

  const { materialRef } = usePositionShift()

  return (
    <IcosahedronDrei ref={icosahedronRef} {...props}>
      <positionShiftMaterial ref={materialRef} attach='material' wireframe />
    </IcosahedronDrei>
  )
}

export default Icosahedron
