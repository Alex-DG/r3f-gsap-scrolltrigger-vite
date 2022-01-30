import { useEffect, useRef } from 'react'

import { gsap } from 'gsap'

/**
 * Custom hook handling dom sections tweens
 */
const useTweens = () => {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(['h1', '.arrow-container'], {
      yPercent: 100,
      autoAlpha: 0,
      ease: 'back',
      delay: 0.3,
    })
    tl.to('.arrow-container', {
      animation: 'moveArrowDown 0.9s alternate-reverse infinite',
      delay: 1,
      ease: 'back',
    })

    gsap.to('#company', {
      opacity: 1,
      duration: 3,
      scale: 1.4,
      ease: 'power3.out',
    })
  }, [])
}

export default useTweens
