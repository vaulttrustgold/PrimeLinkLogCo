import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollReveal = ({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 0.8,
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fromVars = { opacity: 0, duration, delay, ease: 'power3.out' }

      if (direction === 'up') fromVars.y = distance
      if (direction === 'down') fromVars.y = -distance
      if (direction === 'left') fromVars.x = distance
      if (direction === 'right') fromVars.x = -distance

      gsap.from(ref.current, {
        ...fromVars,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [delay, direction, distance, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default ScrollReveal
