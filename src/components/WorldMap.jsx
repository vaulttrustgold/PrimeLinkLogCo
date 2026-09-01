import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { serviceRegions } from '../data/siteData'

gsap.registerPlugin(ScrollTrigger)

const WorldMap = () => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.map-dot', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.map-region', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="relative">
      {/* Stylized world map representation */}
      <div className="relative aspect-[2/1] max-w-4xl mx-auto">
        <svg viewBox="0 0 800 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Simplified world map paths */}
          <path 
            d="M180 120 Q200 100 220 110 Q240 105 250 120 Q260 130 255 150 Q250 170 230 180 Q210 185 195 175 Q180 165 175 150 Q170 135 180 120Z" 
            fill="rgba(201,169,98,0.05)" 
            stroke="rgba(201,169,98,0.15)" 
            strokeWidth="1"
          />
          <path 
            d="M380 100 Q400 90 420 95 Q440 100 450 115 Q460 130 455 145 Q450 160 435 165 Q420 170 405 165 Q390 160 385 145 Q380 130 380 115 Q380 105 380 100Z" 
            fill="rgba(201,169,98,0.05)" 
            stroke="rgba(201,169,98,0.15)" 
            strokeWidth="1"
          />
          <path 
            d="M360 180 Q380 170 400 175 Q420 180 430 195 Q440 210 435 225 Q430 240 415 245 Q400 250 385 245 Q370 240 365 225 Q360 210 360 195Q360 185 360 180Z" 
            fill="rgba(201,169,98,0.05)" 
            stroke="rgba(201,169,98,0.15)" 
            strokeWidth="1"
          />
          <path 
            d="M520 120 Q540 110 560 115 Q580 120 590 135 Q600 150 595 165 Q590 180 575 185 Q560 190 545 185 Q530 180 525 165 Q520 150 520 135Q520 125 520 120Z" 
            fill="rgba(201,169,98,0.05)" 
            stroke="rgba(201,169,98,0.15)" 
            strokeWidth="1"
          />
          <path 
            d="M580 220 Q600 210 620 215 Q640 220 650 235 Q660 250 655 265 Q650 280 635 285 Q620 290 605 285 Q590 280 585 265 Q580 250 580 235Q580 225 580 220Z" 
            fill="rgba(201,169,98,0.05)" 
            stroke="rgba(201,169,98,0.15)" 
            strokeWidth="1"
          />
          <path 
            d="M120 220 Q140 210 160 215 Q180 220 190 235 Q200 250 195 265 Q190 280 175 285 Q160 290 145 285 Q130 280 125 265 Q120 250 120 235Q120 225 120 220Z" 
            fill="rgba(201,169,98,0.05)" 
            stroke="rgba(201,169,98,0.15)" 
            strokeWidth="1"
          />

          {/* Connection lines */}
          <line x1="220" y1="140" x2="400" y2="130" stroke="rgba(201,169,98,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="400" y1="130" x2="560" y2="150" stroke="rgba(201,169,98,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="400" y1="130" x2="400" y2="210" stroke="rgba(201,169,98,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="400" y1="210" x2="620" y2="250" stroke="rgba(201,169,98,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="400" y1="210" x2="160" y2="250" stroke="rgba(201,169,98,0.1)" strokeWidth="1" strokeDasharray="4 4" />

          {/* Dots */}
          <circle cx="220" cy="140" r="4" fill="#C9A962" className="map-dot" />
          <circle cx="400" cy="130" r="4" fill="#C9A962" className="map-dot" />
          <circle cx="400" cy="210" r="4" fill="#C9A962" className="map-dot" />
          <circle cx="560" cy="150" r="4" fill="#C9A962" className="map-dot" />
          <circle cx="620" cy="250" r="4" fill="#C9A962" className="map-dot" />
          <circle cx="160" cy="250" r="4" fill="#C9A962" className="map-dot" />

          {/* Pulse rings */}
          <circle cx="220" cy="140" r="8" fill="none" stroke="#C9A962" strokeWidth="1" opacity="0.3">
            <animate attributeName="r" from="4" to="16" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="130" r="8" fill="none" stroke="#C9A962" strokeWidth="1" opacity="0.3">
            <animate attributeName="r" from="4" to="16" dur="2s" repeatCount="indefinite" begin="0.3s" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="400" cy="210" r="8" fill="none" stroke="#C9A962" strokeWidth="1" opacity="0.3">
            <animate attributeName="r" from="4" to="16" dur="2s" repeatCount="indefinite" begin="0.6s" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" begin="0.6s" />
          </circle>
        </svg>
      </div>

      {/* Region labels */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {serviceRegions.map((region) => (
          <div key={region.name} className="map-region text-center p-4 rounded-lg bg-white/[0.02] border border-white/5">
            <h4 className="text-gold font-semibold text-sm">{region.name}</h4>
            <p className="text-gray-500 text-xs mt-1">{region.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorldMap
