import React from 'react'
import { Icosahedron as IcosahedronDrei } from '@react-three/drei'

const Icosahedron = React.forwardRef((props, ref) => {
  return (
    <IcosahedronDrei {...props} {...{ ref }}>
      <meshNormalMaterial attach='material' wireframe />
    </IcosahedronDrei>
  )
})

export default Icosahedron
