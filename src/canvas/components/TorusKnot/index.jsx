import { useRef } from 'react'
import { TorusKnot as TorusKnotDrei, shaderMaterial } from '@react-three/drei'

import useJawDroppingScrollBasedAnimations from '../../hooks/useJawDroppingScrollBasedAnimations'
import usePositionShift from '../../hooks/usePositionShift'

import '../../shaders/PositionShift'

const TorusKnot = (props) => {
  const torusKnotRef = useRef()
  useJawDroppingScrollBasedAnimations(torusKnotRef)

  const { materialRef } = usePositionShift()

  return (
    <TorusKnotDrei ref={torusKnotRef} {...props}>
      <positionShiftMaterial ref={materialRef} attach='material' wireframe />
    </TorusKnotDrei>
  )
}

export default TorusKnot
