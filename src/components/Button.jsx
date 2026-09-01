import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  onClick, 
  className = '',
  showArrow = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50'

  const variants = {
    primary: 'bg-gold text-dark hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5',
    outline: 'border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/60',
    ghost: 'text-gold hover:bg-gold/10',
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`group ${classes}`} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`group ${classes}`} {...props}>
      {content}
    </button>
  )
}

export default Button
