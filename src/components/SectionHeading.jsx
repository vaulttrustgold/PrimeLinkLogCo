import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SectionHeading = ({ 
  subtitle, 
  title, 
  description, 
  align = 'center',
  className = '' 
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll('.animate-item'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  const alignClass = align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'

  return (
    <div ref={ref} className={`${alignClass} ${className}`}>
      {subtitle && (
        <div className="animate-item">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            {subtitle}
          </span>
        </div>
      )}
      {title && (
        <h2 className="animate-item mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="animate-item mt-4 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      <div className={`animate-item mt-6 ${align === 'center' ? 'mx-auto' : ''} gold-line ${align === 'center' ? '' : ''}`} />
    </div>
  )
}

export default SectionHeading
