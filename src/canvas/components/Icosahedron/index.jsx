import { Icosahedron as IcosahedronDrei } from '@react-three/drei'

const Icosahedron = (props) => {
  return (
    <IcosahedronDrei {...props}>
      <meshNormalMaterial attach='material' wireframe />
    </IcosahedronDrei>
  )
}

export default Icosahedron
