import React from 'react'
import { ShieldCheck, Clock, MessageCircle, Globe, Briefcase, Users } from 'lucide-react'

const iconMap = {
  'Secure Handling': ShieldCheck,
  'Reliable Coordination': Clock,
  'Transparent Communication': MessageCircle,
  'Global Reach': Globe,
  'Professional Operations': Briefcase,
  'Long-Term Partnerships': Users,
}

const WhyChooseCard = ({ item }) => {
  const IconComponent = iconMap[item.title] || ShieldCheck

  return (
    <div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-white/[0.02] transition-colors duration-300">
      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
        <IconComponent className="w-5 h-5 text-gold" />
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}

export default WhyChooseCard
