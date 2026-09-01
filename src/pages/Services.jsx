import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Gem, CircleDot, TrendingUp, Shield, Plane, Network } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import CTASection from '../components/CTASection'
import { services } from '../data/siteData'

gsap.registerPlugin(ScrollTrigger)

const iconMap = {
  Gem,
  CircleDot,
  TrendingUp,
  Shield,
  Plane,
  Network,
}

const Services = () => {
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-detail-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, cardsRef)

    return () => ctx.revert()
  }, [])

  return (
    <div>
      <Hero
        title="Our Services"
        subtitle="What We Offer"
        description="Comprehensive gold supply and logistics solutions designed for security, transparency, and reliability."
        backgroundImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
        primaryButton={{ text: 'Contact Us', to: '/contact' }}
        secondaryButton={{ text: 'Learn About Gold', to: '/gold' }}
      />

      {/* Services Grid */}
      <section ref={cardsRef} className="py-20 sm:py-28 lg:py-36">
        <div className="section-padding max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Services"
            title="End-to-End Solutions"
            description="From sourcing to delivery, we provide coordinated services that ensure security and transparency at every stage."
          />

          <div className="mt-16 space-y-20">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Gem
              const isReversed = index % 2 === 1

              return (
                <div key={service.id} className="service-detail-card">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                    <ScrollReveal direction={isReversed ? 'right' : 'left'} className={isReversed ? 'lg:order-2' : ''}>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                          <div className="w-12 h-12 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-gold" />
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>

                    <div className={isReversed ? 'lg:order-1' : ''}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-gold text-sm font-semibold tracking-widest uppercase">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="w-8 h-px bg-gold/30" />
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Key Capabilities</h4>
                        {service.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                            <span className="text-gray-300 text-sm">{capability}</span>
                          </div>
                        ))}
                      </div>

                      <Link 
                        to="/contact"
                        className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all duration-300"
                      >
                        Discuss This Service
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Need a Custom Solution?"
        description="Every business has unique requirements. Let's discuss how we can tailor our services to your specific needs."
        buttonText="Start a Conversation"
        buttonTo="/contact"
      />
    </div>
  )
}

export default Services
