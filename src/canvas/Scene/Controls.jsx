import { useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Controls = (props) => {
  const { camera } = useThree()
  return <OrbitControls {...props} {...{ camera }} />
}

export default Controls
