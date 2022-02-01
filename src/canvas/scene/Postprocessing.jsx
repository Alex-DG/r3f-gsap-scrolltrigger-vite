import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { Resizer } from 'postprocessing'

const Postprocessing = ({ enabled, ...props }) => {
  if (!enabled) return null

  return (
    <EffectComposer disableNormalPass={true}>
      <Bloom
        intensity={0.8}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.4}
        height={Resizer.AUTO_SIZE} // render width
        width={Resizer.AUTO_SIZE} // render height
      />

      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  )
}

export default Postprocessing
