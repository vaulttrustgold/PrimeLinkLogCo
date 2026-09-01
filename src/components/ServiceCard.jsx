import React from 'react'
import { ArrowRight, Gem, CircleDot, TrendingUp, Shield, Plane, Network } from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap = {
  Gem,
  CircleDot,
  TrendingUp,
  Shield,
  Plane,
  Network,
}

const ServiceCard = ({ service, index }) => {
  const IconComponent = iconMap[service.icon] || Gem

  return (
    <Link 
      to="/services"
      className="group relative bg-dark-card border border-white/5 rounded-xl p-6 sm:p-8 card-hover overflow-hidden"
    >
      {/* Gold accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
          <IconComponent className="w-6 h-6 text-gold" />
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="flex items-center text-gold text-sm font-semibold">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* Background number */}
      <div className="absolute -bottom-4 -right-4 text-8xl font-bold text-white/[0.02] select-none">
        {String(index + 1).padStart(2, '0')}
      </div>
    </Link>
  )
}

export default ServiceCard
