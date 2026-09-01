import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from './Button'

gsap.registerPlugin(ScrollTrigger)

const CTASection = ({ 
  title, 
  description, 
  buttonText = 'Contact Our Team',
  buttonTo = '/contact',
  className = '' 
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll('.cta-animate'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className={`py-20 sm:py-28 lg:py-36 ${className}`}>
      <div className="section-padding max-w-5xl mx-auto text-center">
        <h2 className="cta-animate text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
          {title}
        </h2>
        {description && (
          <p className="cta-animate mt-6 text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        <div className="cta-animate mt-10">
          <Button to={buttonTo} variant="primary" showArrow>
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
