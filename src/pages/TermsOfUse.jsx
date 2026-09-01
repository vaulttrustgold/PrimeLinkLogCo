import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { companyInfo } from '../data/siteData'

const TermsOfUse = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="section-padding max-w-4xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Terms of Use</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: {companyInfo.year}</p>

        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Use of Website</h2>
            <p className="mb-3">You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the website. Prohibited behavior includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Harassing or causing distress to other users</li>
              <li>Transmitting obscene or offensive content</li>
              <li>Disrupting the normal flow of dialogue</li>
              <li>Attempting to gain unauthorized access to systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of {companyInfo.name} and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Disclaimer</h2>
            <p>
              This website is provided for informational purposes only. {companyInfo.name} makes no representations or warranties of any kind regarding the accuracy or completeness of the information provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
            <p>
              For questions about these Terms of Use, please contact us at {companyInfo.email}.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfUse
