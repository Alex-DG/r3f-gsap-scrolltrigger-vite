import { useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Init. gsap+scrolltrigger
 */
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
  scrub: 3,
})

/**
 * Very long name custom hook:
 * Icosahedron tweens based on on the dom sections
 *
 * @param meshRef - Icosahedron
 */
const useJawDroppingScrollBasedAnimations = (meshRef) => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    const shouldTween = sections && meshRef?.current

    if (shouldTween) {
      const mesh = meshRef.current

      gsap.fromTo(
        mesh.scale,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        {
          x: 1,
          y: 1,
          z: 1,
          duration: 4,
          ease: 'expo',
        }
      )

      gsap.from(mesh.position, {
        y: 1,
        duration: 1,
        ease: 'expo',
      })

      gsap.to(mesh.rotation, {
        x: Math.PI * 2,
        scrollTrigger: {
          trigger: sections[1],
        },
      })

      gsap.to(mesh.scale, {
        x: 2,
        y: 2,
        scrollTrigger: {
          trigger: sections[2],
        },
      })

      gsap.to(mesh.rotation, {
        y: Math.PI * 2,
        scrollTrigger: {
          trigger: sections[3],
        },
      })
    }
  }, [meshRef])
}

export default useJawDroppingScrollBasedAnimations
