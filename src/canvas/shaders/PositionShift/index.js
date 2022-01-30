import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

import { vertex } from './vertex'
import { fragment } from './fragment'

/**
 * Shader definition
 */
const PositionShiftMaterial = shaderMaterial({ uTime: 0 }, vertex, fragment)
extend({ PositionShiftMaterial })

export default PositionShiftMaterial
