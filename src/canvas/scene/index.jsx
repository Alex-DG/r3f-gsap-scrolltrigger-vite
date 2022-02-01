// import Icosahedron from '../components/Icosahedron'
import TorusKnot from '../components/TorusKnot'
import Stars from '../components/Stars'

import useGroup from '../hooks/useGroup'

import Postprocessing from './Postprocessing'

const Scene = () => {
  const { groupRef } = useGroup({ speed: 0.25 })

  return (
    <>
      <Stars starsCount={600} boxSize={45} />

      <group ref={groupRef} position={[0, 0, 21]}>
        <TorusKnot position={[0, 0, 0]} scale={[1, 1, 1]} args={[10, 1]} />

        <TorusKnot
          position={[0, 0, 0]}
          scale={[0.5, 0.5, 0.5]}
          // rotation={[0, 0, Math.PI / 6]}
          args={[10, 1]}
        />
      </group>

      <Postprocessing />
    </>
  )
}

export default Scene
