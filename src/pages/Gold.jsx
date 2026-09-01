import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, FileText, Scale, Truck, MessageSquare, CheckCircle } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import FAQItem from '../components/FAQItem'
import CTASection from '../components/CTASection'
import { faqs } from '../data/siteData'

const goldFeatures = [
  {
    icon: Shield,
    title: 'Gold Sourcing',
    description: 'We connect buyers with verified suppliers through a structured vetting process that emphasizes documentation and responsible practices.',
  },
  {
    icon: Scale,
    title: 'Gold Supply',
    description: 'Structured coordination between suppliers and buyers, ensuring smooth transactions with proper documentation and delivery scheduling.',
  },
  {
    icon: FileText,
    title: 'Quality & Documentation',
    description: 'Comprehensive documentation support including certificates of origin, quality reports, and compliance verification for every transaction.',
  },
  {
    icon: Truck,
    title: 'Secure Handling',
    description: 'Specialized transportation protocols for high-value cargo, maintaining chain of custody and insurance coverage throughout transit.',
  },
  {
    icon: MessageSquare,
    title: 'Buyer/Supplier Communication',
    description: 'Transparent communication channels between all parties, ensuring clarity and alignment throughout the transaction process.',
  },
]

const Gold = () => {
  return (
    <div>
      <Hero
        title="Gold. Handled With Precision."
        subtitle="Gold Services"
        description="Professional coordination for gold sourcing, supply, and secure transportation across international markets."
        backgroundImage="https://images.unsplash.com/photo-1565378435245-2528d587e524?w=1920&q=80"
        primaryButton={{ text: 'Contact Our Team', to: '/contact' }}
        secondaryButton={{ text: 'View Logistics', to: '/logistics' }}
      />

      {/* Gold Bar Visual Section */}
      <section className="py-20 sm:py-28 lg:py-36 bg-dark-card">
        <div className="section-padding max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80" 
                    alt="Gold bullion bars"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gold/10 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 border border-gold/20 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>

            <div>
              <SectionHeading 
                subtitle="Our Approach"
                title="Responsible Gold. Reliable Supply."
                align="left"
                className="mb-8"
              />
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  We coordinate gold supply with an emphasis on transparency, documentation, and responsible business practices. Our process connects qualified buyers with verified suppliers while ensuring every transaction meets rigorous standards.
                </p>
                <p>
                  From initial sourcing to final delivery, we maintain strict protocols for quality assessment, documentation verification, and secure handling.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  'Verified suppliers',
                  'Documentation support',
                  'Quality coordination',
                  'Secure transport',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Features */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="section-padding max-w-6xl mx-auto">
          <SectionHeading 
            subtitle="Services"
            title="Comprehensive Gold Coordination"
            description="Every aspect of gold supply managed with precision and professionalism."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {goldFeatures.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group bg-dark-card border border-white/5 rounded-xl p-6 sm:p-8 card-hover h-full">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 lg:py-36 bg-dark-card">
        <div className="section-padding max-w-3xl mx-auto">
          <SectionHeading 
            subtitle="FAQ"
            title="Common Questions"
            description="Answers to frequently asked questions about our gold services."
          />

          <div className="mt-12">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 sm:py-16">
        <div className="section-padding max-w-3xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Prime Link Logistics Company does not provide investment advice or guarantee returns. 
            All gold-related services involve coordination and logistics support only. 
            Clients should conduct their own due diligence before entering into any transactions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Interested in Gold Supply?"
        description="Let's discuss your requirements and explore how we can support your gold sourcing and supply needs."
        buttonText="Start a Conversation"
        buttonTo="/contact"
      />
    </div>
  )
}

export default Gold
