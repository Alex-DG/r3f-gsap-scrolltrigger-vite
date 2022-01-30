import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

import '../../shaders/StarsMaterial'

// import useJawDroppingScrollBasedAnimations from '../../hooks/useJawDroppingScrollBasedAnimations'

const Stars = ({ starsCount = 30, boxSize = 30 }) => {
  const materialRef = useRef()
  const pointsRef = useRef()
  // useJawDroppingScrollBasedAnimations(pointsRef)

  const [positionArray, scaleArray] = useMemo(() => {
    const positionArray = new Float32Array(starsCount * 3) // randomise position
    const scaleArray = new Float32Array(starsCount) // randomise scale

    for (let i = 0; i < starsCount; i++) {
      new THREE.Vector3(
        Math.random() * boxSize - boxSize / 2,
        Math.random() * boxSize - boxSize / 2,
        Math.random() * boxSize - boxSize / 2
      ).toArray(positionArray, i * 3)

      scaleArray[i] = Math.random()
    }
    return [positionArray, scaleArray]
  }, [starsCount])

  useFrame(({ clock }) => (materialRef.current.time = clock.getElapsedTime()))

  return (
    <points ref={pointsRef} key={starsCount}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={starsCount}
          array={positionArray}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'aScale']}
          count={starsCount}
          array={scaleArray}
          itemSize={1}
        />
      </bufferGeometry>

      <starsMaterial ref={materialRef} transparent depthWrite={false} />
    </points>
  )
}

export default Stars
