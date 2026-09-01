import React from 'react'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import ScrollReveal from '../components/ScrollReveal'
import { companyInfo, serviceRegions } from '../data/siteData'

const Contact = () => {
  return (
    <div>
      <Hero
        title="Get in Touch"
        subtitle="Contact Us"
        description="Reach out to discuss gold supply, logistics solutions, or international business coordination."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27aee?w=1920&q=80"
        primaryButton={{ text: 'Send a Message', to: '#contact-form' }}
        secondaryButton={{ text: 'Our Services', to: '/services' }}
      />

      {/* Contact Info Cards */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="section-padding max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0}>
              <div className="bg-dark-card border border-white/5 rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-400 text-sm">{companyInfo.email}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-dark-card border border-white/5 rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-gray-400 text-sm">{companyInfo.phone}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-dark-card border border-white/5 rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-white font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-400 text-sm">{companyInfo.officeHours}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-dark-card border border-white/5 rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-white font-semibold mb-2">Regions</h3>
                <p className="text-gray-400 text-sm">International Operations</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20 sm:py-28 lg:py-36 bg-dark-card">
        <div className="section-padding max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <SectionHeading 
                subtitle="Send a Message"
                title="Let's Start a Conversation"
                align="left"
                className="mb-8"
              />
              <ContactForm />
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Service Regions</h3>
                <div className="space-y-4">
                  {serviceRegions.map((region, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium text-sm">{region.name}</h4>
                        <p className="text-gray-500 text-xs mt-0.5">{region.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-xl bg-gold/5 border border-gold/10">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    <span className="text-gold font-semibold">Note:</span> Contact details provided on this page are placeholder/demo values. Please replace with actual business contact information before deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
