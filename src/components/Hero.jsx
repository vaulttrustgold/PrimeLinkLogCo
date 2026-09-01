import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import Button from './Button'

const Hero = ({ 
  title, 
  subtitle, 
  description,
  backgroundImage,
  primaryButton = { text: 'Explore Our Services', to: '/services' },
  secondaryButton = { text: 'Contact Us', to: '/contact' },
  className = '' 
}) => {
  const heroRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-bg', {
        scale: 1.1,
        duration: 1.5,
      })
      .from('.hero-overlay', {
        opacity: 0,
        duration: 1,
      }, 0)
      .from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, 0.5)
      .from('.hero-title', {
        y: 40,
        opacity: 0,
        duration: 1,
      }, 0.7)
      .from('.hero-description', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, 0.9)
      .from('.hero-buttons', {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, 1.1)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={heroRef}
      className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background image */}
      <div className="hero-bg absolute inset-0">
        <img 
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Dark overlay */}
      <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark" />

      {/* Gold accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 section-padding max-w-5xl mx-auto text-center pt-20">
        {subtitle && (
          <p className="hero-subtitle text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            {subtitle}
          </p>
        )}

        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="hero-description mt-6 sm:mt-8 text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        <div className="hero-buttons mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to={primaryButton.to} variant="primary" showArrow>
            {primaryButton.text}
          </Button>
          <Button to={secondaryButton.to} variant="outline">
            {secondaryButton.text}
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  )
}

export default Hero
