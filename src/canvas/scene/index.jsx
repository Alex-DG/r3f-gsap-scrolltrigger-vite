import Icosahedron from '../components/Icosahedron'
import TorusKnot from '../components/TorusKnot'
import Stars from '../components/Stars'

import useGroup from '../hooks/useGroup'

import Postprocessing from './Postprocessing'

const Scene = () => {
  const { groupRef } = useGroup({ speed: 0.25 })

  return (
    <>
      <Stars starsCount={800} boxSize={45} />

      <group ref={groupRef} position={[0, 0, 21]}>
        {/* Exemple 1 */}
        {/* <Icosahedron
          position={[0, 0, 0]}
          scale={[1.1, 1.1, 1.1]}
          args={[10, 0]}
          scrollAnimation
        /> */}
        {/* <Icosahedron
          position={[0, 0, 0]}
          scale={[0.5, 0.5, 0.5]}
          args={[10, 0]}
          scrollAnimation
        /> */}

        {/* Exemple 2 */}
        <TorusKnot
          position={[0, 0, 0]}
          scale={[1, 1, 1]}
          args={[10, 1]}
          scrollAnimation
        />
        <TorusKnot
          position={[0, 0, 0]}
          scale={[0.5, 0.5, 0.5]}
          args={[10, 1]}
          scrollAnimation
        />

        {/* Exmple 3
        <TorusKnot
          position={[0, 0, 0]}
          scale={[2.5, 2.5, 2.5]}
          args={[10, 0.5]}
          scrollAnimation
        />
        */}
      </group>

      <Postprocessing />
    </>
  )
}

export default Scene
