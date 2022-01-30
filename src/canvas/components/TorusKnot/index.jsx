import { useRef } from 'react'
import { TorusKnot as TorusKnotDrei } from '@react-three/drei'

import useJawDroppingScrollBasedAnimations from '../../hooks/useJawDroppingScrollBasedAnimations'
import usePositionShift from '../../hooks/usePositionShift'

import '../../shaders/NoisyPositionMaterial'

const TorusKnot = (props) => {
  const torusKnotRef = useRef()
  useJawDroppingScrollBasedAnimations(torusKnotRef)

  const { materialRef } = usePositionShift()

  return (
    <TorusKnotDrei ref={torusKnotRef} {...props}>
      <noisyPositionMaterial ref={materialRef} attach='material' wireframe />
    </TorusKnotDrei>
  )
}

export default TorusKnot
