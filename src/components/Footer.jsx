import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { companyInfo, footerLinks, socialLinks } from '../data/siteData'

const iconMap = {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
}

const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-white/5">
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-white tracking-wider">{companyInfo.shortName}</span>
              <span className="block text-xs text-gold tracking-[0.2em] uppercase font-medium mt-0.5">
                Gold & Logistics
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
              {companyInfo.tagline} Connecting trusted sourcing, secure gold supply, and dependable logistics solutions across borders.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon]
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-gold hover:bg-gold/10 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{companyInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{companyInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">International Operations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {companyInfo.year} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-500 hover:text-gold transition-colors duration-300 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
