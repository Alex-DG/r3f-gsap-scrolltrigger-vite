import { useEffect, useState } from 'react'
import Stars from '../components/Stars'

import useGroup from '../hooks/useGroup'
import Demo from './Demo'

import Postprocessing from './Postprocessing'

const Scene = () => {
  const { groupRef } = useGroup({ speed: 0.25 })
  const [queryString, set] = useState(null)

  useEffect(() => {
    const queryString = window.location.search
    set(queryString)
  }, [])

  return (
    <>
      <Stars starsCount={800} boxSize={45} />

      <group ref={groupRef} position={[0, 0, 21]}>
        <Demo {...{ queryString }} />
      </group>

      <Postprocessing enabled={false} />
    </>
  )
}

export default Scene
