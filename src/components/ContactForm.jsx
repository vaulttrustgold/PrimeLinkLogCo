import React, { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { contactServices , companyInfo} from '../data/siteData'
import Button from './Button'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="bg-dark-card border border-gold/20 rounded-xl p-8 sm:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-gold" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Sent</h3>
        <p className="text-gray-400 mb-8">
          Thank you for reaching out. Our team will review your inquiry and get back to you shortly.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-dark-card border border-white/5 rounded-xl p-6 sm:p-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-dark-surface border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
              errors.fullName ? 'border-red-500/50' : 'border-white/10 focus:border-gold/30'
            }`}
            placeholder="John Doe"
          />
          {errors.fullName && <p className="mt-1 text-red-400 text-sm">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/30 transition-all"
            placeholder="Company Name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-dark-surface border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
              errors.email ? 'border-red-500/50' : 'border-white/10 focus:border-gold/30'
            }`}
            placeholder="john@company.com"
          />
          {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/30 transition-all"
            placeholder="+254 755 316 580"
          />
          <a
              href={companyInfo.phone}
              className="inline-flex items-center gap-2 mt-2 text-sm text-gray-500 hover:text-gold transition-colors"
            >
              <span>Call Prime Link Logistics</span>
          </a>
        
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
          Service <span className="text-gold">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-dark-surface border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all appearance-none ${
            errors.service ? 'border-red-500/50' : 'border-white/10 focus:border-gold/30'
          }`}
        >
          <option value="" className="bg-dark-card">Select a service</option>
          {contactServices.map((service) => (
            <option key={service} value={service} className="bg-dark-card">{service}</option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-red-400 text-sm">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 bg-dark-surface border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none ${
            errors.message ? 'border-red-500/50' : 'border-white/10 focus:border-gold/30'
          }`}
          placeholder="Tell us about your requirements..."
        />
        {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        className="w-full sm:w-auto"
        showArrow
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

export default ContactForm
