import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { companyInfo } from '../data/siteData'

const PrivacyPolicy = () => {
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

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: {companyInfo.year}</p>

        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Introduction</h2>
            <p>
              {companyInfo.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
            <p className="mb-3">We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal data you voluntarily provide when filling out contact forms</li>
              <li>Information automatically collected through cookies and analytics</li>
              <li>Usage data including pages visited and time spent on site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Use of Your Information</h2>
            <p className="mb-3">We may use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Send you relevant communications about our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at {companyInfo.email}.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
