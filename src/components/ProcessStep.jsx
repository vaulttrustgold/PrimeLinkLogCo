import React from 'react'

const ProcessStep = ({ step, index, isLast }) => {
  return (
    <div className="relative flex gap-6 sm:gap-8">
      {/* Number and line */}
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
          <span className="text-gold font-bold text-lg sm:text-xl">{step.number}</span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-gold/30 to-transparent min-h-[60px] mt-4" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
          {step.title}
        </h3>
        <p className="text-gray-400 leading-relaxed max-w-lg">
          {step.description}
        </p>
      </div>
    </div>
  )
}

export default ProcessStep
