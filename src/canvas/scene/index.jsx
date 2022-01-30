import { useFrame } from '@react-three/fiber'

// import Icosahedron from '../components/Icosahedron'
import TorusKnot from '../components/TorusKnot'

import useGroup from '../hooks/useGroup'

const Scene = () => {
  const { groupRef } = useGroup()

  return (
    <>
      <group ref={groupRef} position={[0, 0, 21]}>
        <TorusKnot position={[0, 0, 0]} scale={[1, 1, 1]} args={[10, 1]} />

        <TorusKnot
          position={[0, 0, 0]}
          scale={[0.5, 0.5, 0.5]}
          // rotation={[0, 0, Math.PI / 6]}
          args={[10, 1]}
        />
      </group>
    </>
  )
}

export default Scene
