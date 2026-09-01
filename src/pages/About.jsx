import React from 'react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ValueCard from '../components/ValueCard'
import ScrollReveal from '../components/ScrollReveal'
import Timeline from '../components/Timeline'
import CTASection from '../components/CTASection'
import { coreValues } from '../data/siteData'

const timelineItems = [
  {
    period: 'Conceptual Foundation',
    title: 'Vision Established',
    description: 'Prime Link Logistics Company was conceptualized as a modern bridge between commodity supply and dependable logistics, built on principles of transparency and security.',
  },
  {
    period: 'Network Development',
    title: 'Global Partnerships',
    description: 'Strategic relationships established with verified suppliers, logistics providers, and industry professionals across multiple continents.',
  },
  {
    period: 'Service Expansion',
    title: 'Comprehensive Solutions',
    description: 'Expanded service portfolio to include end-to-end gold sourcing, supply coordination, secure logistics, and international freight management.',
  },
  {
    period: 'Present Day',
    title: 'Trusted Operations',
    description: 'Continuing to build long-term partnerships through professional operations, transparent communication, and unwavering commitment to security.',
  },
]

const About = () => {
  return (
    <div>
      <Hero
        title="About Prime Link Logistics Company"
        subtitle="Our Story"
        description="A modern company focused on connecting commodity supply with dependable logistics."
        backgroundImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80"
        primaryButton={{ text: 'Our Services', to: '/services' }}
        secondaryButton={{ text: 'Contact Us', to: '/contact' }}
      />

      {/* Our Story */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <SectionHeading 
            subtitle="Our Story"
            title="Connecting Value Across Borders"
          />
          <div className="mt-8 space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Prime Link Logistics Company was founded on a simple principle: that the movement of valuable goods deserves the highest standards of professionalism, security, and transparency.
            </p>
            <p>
              In an increasingly connected global economy, we recognized the need for a coordinated approach to gold supply and logistics—one that prioritizes trust, documentation, and reliable execution at every stage.
            </p>
            <p>
              Today, we work with a network of verified partners across multiple continents to facilitate secure transactions and dependable logistics operations for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28 lg:py-36 bg-dark-card">
        <div className="section-padding max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal direction="left">
              <div className="bg-dark-surface border border-white/5 rounded-2xl p-8 sm:p-10 h-full">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                  <span className="text-gold text-2xl font-bold">M</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  To make the movement of valuable goods more secure, transparent, and dependable. We strive to eliminate uncertainty from international transactions by providing structured coordination, rigorous documentation, and professional logistics support.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-dark-surface border border-white/5 rounded-2xl p-8 sm:p-10 h-full">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                  <span className="text-gold text-2xl font-bold">V</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  To become a trusted bridge between global suppliers, buyers, and logistics networks. We envision a world where cross-border commodity transactions are seamless, secure, and accessible to businesses of all sizes.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="section-padding max-w-6xl mx-auto">
          <SectionHeading 
            subtitle="Our Values"
            title="What We Stand For"
            description="These principles guide every decision we make and every relationship we build."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <ValueCard value={value} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 lg:py-36 bg-dark-card">
        <div className="section-padding max-w-4xl mx-auto">
          <SectionHeading 
            subtitle="Our Journey"
            title="Conceptual Development"
            description="The evolution of Prime Link Logistics Company from vision to operation."
          />

          <div className="mt-16">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Ready to Work Together?"
        description="Let's discuss how Prime Link Logistics Company can support your gold supply and logistics needs."
        buttonText="Get in Touch"
        buttonTo="/contact"
      />
    </div>
  )
}

export default About
