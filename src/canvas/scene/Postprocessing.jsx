import {
  EffectComposer,
  Bloom,
  Noise,
  HueSaturation,
} from '@react-three/postprocessing'
import { Resizer, BlendFunction } from 'postprocessing'

const Postprocessing = ({ enabled, ...props }) => {
  if (!enabled) return null

  return (
    <EffectComposer {...props}>
      <Bloom
        intensity={0.25}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.4}
        height={Resizer.AUTO_SIZE} // render width
        width={Resizer.AUTO_SIZE} // render height
      />

      <Noise opacity={0.15} />

      <HueSaturation
        blendFunction={BlendFunction.NORMAL} // blend mode
        hue={0.5} // hue in radians
        saturation={0.5} // saturation in radians
      />
    </EffectComposer>
  )
}

export default Postprocessing
