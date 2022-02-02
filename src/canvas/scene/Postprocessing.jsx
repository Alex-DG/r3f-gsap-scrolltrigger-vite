import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Resizer } from 'postprocessing'

const Postprocessing = ({ enabled, ...props }) => {
  if (!enabled) return null

  return (
    <EffectComposer disableNormalPass={true} {...props}>
      <Bloom
        intensity={0.5}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.4}
        height={Resizer.AUTO_SIZE} // render width
        width={Resizer.AUTO_SIZE} // render height
      />
    </EffectComposer>
  )
}

export default Postprocessing
