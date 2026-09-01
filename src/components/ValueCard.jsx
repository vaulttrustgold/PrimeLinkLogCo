import React from 'react'
import { Shield, Lock, Target, Eye, Handshake, Award } from 'lucide-react'

const iconMap = {
  Integrity: Shield,
  Security: Lock,
  Precision: Target,
  Transparency: Eye,
  Partnership: Handshake,
  Excellence: Award,
}

const ValueCard = ({ value }) => {
  const IconComponent = iconMap[value.title] || Shield

  return (
    <div className="group bg-dark-card border border-white/5 rounded-xl p-6 sm:p-8 card-hover">
      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
        <IconComponent className="w-6 h-6 text-gold" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
    </div>
  )
}

export default ValueCard
