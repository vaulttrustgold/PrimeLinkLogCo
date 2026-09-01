import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimatedCounter = ({ value, label, suffix = '' }) => {
  const counterRef = useRef(null)
  const [displayValue, setDisplayValue] = useState('0')
  const isNumeric = /^\d+$/.test(value)

  useEffect(() => {
    if (!isNumeric) {
      setDisplayValue(value)
      return
    }

    const ctx = gsap.context(() => {
      const obj = { val: 0 }
      gsap.to(obj, {
        val: parseInt(value),
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counterRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          setDisplayValue(Math.round(obj.val).toString())
        },
      })
    }, counterRef)

    return () => ctx.revert()
  }, [value, isNumeric])

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold gold-gradient-text">
        {displayValue}{suffix}
      </div>
      <div className="mt-2 text-gray-400 text-sm sm:text-base font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  )
}

export default AnimatedCounter
