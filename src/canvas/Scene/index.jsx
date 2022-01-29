import Controls from './Controls'

import Icosahedron from '../components/Icosahedron'

const Scene = () => {
  return (
    <>
      <Controls
        enabled
        enableDamping
        autoRotate
        enablePan={false}
        enableZoom={false}
        dampingFactor={0.05}
        maxDistance={1000}
        minDistance={30}
      />

      <Icosahedron position={[0, 0, 0]} scale={[1, 1, 1]} args={[20, 1]} />
    </>
  )
}

export default Scene
