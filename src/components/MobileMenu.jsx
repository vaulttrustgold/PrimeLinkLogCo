import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'
import { navLinks, companyInfo } from '../data/siteData'

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    onClose()
  }, [location.pathname])

  return (
    <div 
      className={`fixed inset-0 z-50 transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-dark/95 backdrop-blur-xl transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Menu content */}
      <div 
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-dark-card border-l border-white/5 p-8 flex flex-col transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-xl font-bold text-white tracking-wider">{companyInfo.shortName}</span>
            <span className="block text-xs text-gold tracking-widest uppercase mt-0.5">Gold & Logistics</span>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-4 px-4 rounded-lg text-lg font-medium transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'text-gold bg-gold/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ 
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-8 border-t border-white/5">
          <p className="text-gray-500 text-sm">{companyInfo.email}</p>
          <p className="text-gray-500 text-sm mt-1">{companyInfo.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
