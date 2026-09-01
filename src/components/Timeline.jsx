import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Timeline = ({ items }) => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
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
      <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="timeline-item relative pl-12 sm:pl-16">
            <div className="absolute left-2 sm:left-4 top-1 w-4 h-4 rounded-full bg-gold border-4 border-dark" />
            <div className="bg-dark-card border border-white/5 rounded-lg p-5 sm:p-6">
              <span className="text-gold text-sm font-semibold">{item.period}</span>
              <h4 className="text-white font-bold mt-1">{item.title}</h4>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
