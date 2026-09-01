import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Globe, Shield, Package, Clock, Award, Lock } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import AnimatedCounter from '../components/AnimatedCounter'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import ProcessStep from '../components/ProcessStep'
import WhyChooseCard from '../components/WhyChooseCard'
import WorldMap from '../components/WorldMap'
import { services, stats, processSteps, whyChooseUs } from '../data/siteData'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const statsRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Moving Value. Delivering Trust."
        description="Prime Link Logistics Company connects trusted sourcing, secure gold supply, and dependable logistics solutions across borders."
        backgroundImage="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1920&q=80"
        primaryButton={{ text: 'Explore Our Services', to: '/services' }}
        secondaryButton={{ text: 'Contact Us', to: '/contact' }}
      />

      {/* Trust / Statistics Section */}
      <section ref={statsRef} className="py-16 sm:py-20 bg-dark-card border-y border-white/5">
        <div className="section-padding max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <AnimatedCounter 
                key={index} 
                value={stat.value} 
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                    alt="Professional logistics operations"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold/20 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>

            <div>
              <SectionHeading 
                subtitle="About Us"
                title="Built Around Trust. Driven by Precision."
                align="left"
                className="mb-8"
              />
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  At Prime Link Logistics Company, we believe that moving valuable goods requires more than transportation—it demands integrity, precision, and unwavering commitment to security.
                </p>
                <p>
                  Our approach combines transparent processes, reliable coordination, and professional operations to build long-term partnerships with clients worldwide.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: 'Transparency' },
                  { icon: Clock, text: 'Reliability' },
                  { icon: Lock, text: 'Security' },
                  { icon: Award, text: 'Professionalism' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-white text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all duration-300"
                >
                  Discover Prime Link Logistics Company
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 sm:py-28 lg:py-36 bg-dark-card">
        <div className="section-padding max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Our Services"
            title="Comprehensive Solutions for Gold & Logistics"
            description="From sourcing to delivery, we provide end-to-end coordination for gold supply and logistics operations."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.id} className="service-card">
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Section */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading 
                subtitle="Gold Services"
                title="Responsible Gold. Reliable Supply."
                align="left"
                className="mb-8"
              />
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  We coordinate gold sourcing and supply with an emphasis on documentation, responsible practices, and secure handling. Our network connects verified suppliers with qualified buyers across international markets.
                </p>
                <p>
                  Every transaction is supported by thorough documentation, quality considerations, and secure transportation coordination to ensure peace of mind for all parties.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Verified supplier connections',
                  'Comprehensive documentation support',
                  'Quality assessment coordination',
                  'Secure handling protocols',
                  'International supply coordination',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link 
                  to="/gold"
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all duration-300"
                >
                  Explore Gold Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523293188086-b15e4af18e6b?w=800&q=80" 
                    alt="Gold bullion and precious metals"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold/10 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Logistics Process */}
      <section className="py-20 sm:py-28 lg:py-36 bg-dark-card">
        <div className="section-padding max-w-4xl mx-auto">
          <SectionHeading 
            subtitle="Our Process"
            title="How Logistics Works"
            description="A streamlined four-stage process designed for security, transparency, and reliability."
          />

          <div className="mt-16">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1}>
                <ProcessStep 
                  step={step} 
                  index={index} 
                  isLast={index === processSteps.length - 1} 
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="section-padding max-w-6xl mx-auto">
          <SectionHeading 
            subtitle="Global Reach"
            title="Operating Across Continents"
            description="Our network spans key regions, enabling seamless coordination of gold supply and logistics services worldwide."
          />

          <div className="mt-16">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 lg:py-36 bg-dark-card">
        <div className="section-padding max-w-6xl mx-auto">
          <SectionHeading 
            subtitle="Why Prime Link Logistics Company"
            title="Why Choose Us"
            description="We combine industry expertise with a commitment to excellence in every engagement."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <WhyChooseCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Let's Move Your Business Forward."
        description="Talk to our team about gold supply, logistics, and international business solutions."
        buttonText="Contact Our Team"
        buttonTo="/contact"
      />
    </div>
  )
}

export default Home
