import { Canvas as CanvasR3F, useThree } from '@react-three/fiber'

import { OrbitControls } from '@react-three/drei'

import Light from './Light'

import Icosahedron from './components/Icosahedron'

const Scene = () => {
  const { camera } = useThree()

  return (
    <>
      <Light />
      <OrbitControls {...{ camera }} />
      <Icosahedron position={[0, 0, 0]} scale={[1, 1, 1]} args={[20, 1]} />
    </>
  )
}

export default Scene
