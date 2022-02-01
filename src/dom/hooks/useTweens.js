import { useEffect } from 'react'

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
 * Custom hook handling dom sections tweens
 */
const useTweens = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section')

    /**
     * Landing > time line
     */
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

    /**
     * Scrolling > tweens
     */
    if (sections) {
      gsap.fromTo(
        '.section--1-title',
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sections[1],
          },
        }
      )

      gsap.to('.section--2-title', {
        opacity: 1,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sections[2],
        },
      })

      gsap.fromTo(
        ['.section--3-title', '.section--3-title2', '.section--3-title3'],
        {
          y: 250,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: 'expo.out',
          stagger: 0.25,
          scrollTrigger: {
            trigger: sections[3],
          },
        },
        '-=20'
      )
    }
  }, [])
}

export default useTweens
