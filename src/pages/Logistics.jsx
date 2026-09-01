import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Plane, Ship, Truck, Warehouse, Lock, ArrowDown } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import CTASection from '../components/CTASection'
import { transportModes, logisticsWorkflow } from '../data/siteData'

gsap.registerPlugin(ScrollTrigger)

const iconMap = {
  Plane,
  Ship,
  Truck,
  Warehouse,
  Lock,
}

const Logistics = () => {
  const workflowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.workflow-step', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: workflowRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, workflowRef)

    return () => ctx.revert()
  }, [])

  return (
    <div>
      <Hero
        title="Global Logistics. Local Precision."
        subtitle="Logistics Services"
        description="Air, sea, and land freight coordination with secure handling for high-value cargo across international routes."
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
        primaryButton={{ text: 'Contact Us', to: '/contact' }}
        secondaryButton={{ text: 'View Services', to: '/services' }}
      />

      {/* Transport Modes */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="section-padding max-w-6xl mx-auto">
          <SectionHeading 
            subtitle="Transport Modes"
            title="How We Move Cargo"
            description="Multi-modal logistics solutions tailored to your cargo requirements, timeline, and destination."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {transportModes.map((mode, index) => {
              const IconComponent = iconMap[mode.icon] || Truck
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="group bg-dark-card border border-white/5 rounded-xl p-6 sm:p-8 card-hover h-full">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{mode.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{mode.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Logistics Workflow */}
      <section className="py-20 sm:py-28 lg:py-36 bg-dark-card">
        <div className="section-padding max-w-4xl mx-auto">
          <SectionHeading 
            subtitle="Workflow"
            title="Our Logistics Process"
            description="A structured six-stage workflow designed for transparency and reliability."
          />

          <div ref={workflowRef} className="mt-16">
            <div className="relative">
              {/* Vertical line for mobile, horizontal for desktop */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4">
                {logisticsWorkflow.map((step, index) => (
                  <div key={index} className="workflow-step relative">
                    {/* Desktop dot */}
                    <div className="hidden lg:flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-dark-surface border border-gold/30 flex items-center justify-center mb-4 relative z-10">
                        <span className="text-gold font-bold">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-2">{step.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                    </div>

                    {/* Mobile layout */}
                    <div className="lg:hidden flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-dark-surface border border-gold/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-gold font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        {index < logisticsWorkflow.length - 1 && (
                          <div className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent mt-2" />
                        )}
                      </div>
                      <div className="pb-8">
                        <h4 className="text-white font-bold mb-1">{step.title}</h4>
                        <p className="text-gray-500 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Ready to Ship?"
        description="Let's coordinate your next freight operation with precision and security."
        buttonText="Get a Quote"
        buttonTo="/contact"
      />
    </div>
  )
}

export default Logistics
