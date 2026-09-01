import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { navLinks, companyInfo } from '../data/siteData'
import MobileMenu from './MobileMenu'
import Button from './Button'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-dark/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                {/* Company Logo */}
                <img
                  src="/logo1.png"
                  alt={`${companyInfo.shortName} logo1`}
                  className="h-10 sm:h-12 w-auto object-contain"
                />

                {/* Brand Text */}
                <div className="flex flex-col justify-center leading-none">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wider group-hover:text-gold transition-colors duration-300">
                    {companyInfo.shortName}
                  </span>

                  <span className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gold font-medium">
                    Gold & Logistics
                  </span>
                </div>
              </Link>


            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-lg ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button to="/contact" variant="primary" className="px-6 py-2.5 text-sm">
                Get in Touch
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}

export default Navbar
