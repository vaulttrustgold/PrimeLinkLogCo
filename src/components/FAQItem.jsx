import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-white font-medium text-lg pr-8 group-hover:text-gold transition-colors duration-300">
          {faq.question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-gold text-dark' : 'bg-white/5 text-gray-400 group-hover:bg-white/10'
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      <div 
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-400 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export default FAQItem
