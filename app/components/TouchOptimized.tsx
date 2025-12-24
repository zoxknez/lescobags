'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

interface TouchOptimizedProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  enableHaptic?: boolean
}

/**
 * Touch-optimized wrapper component for mobile devices
 * Provides better touch feedback and performance
 */
export default function TouchOptimized({ 
  children, 
  className = '', 
  href, 
  onClick,
  enableHaptic = false 
}: TouchOptimizedProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const update = (event?: MediaQueryListEvent) => setIsMobile(event?.matches ?? mediaQuery.matches)
    update()

    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])
  
  const handleTap = () => {
    // Haptic feedback on supported devices
    if (enableHaptic && 'vibrate' in navigator) {
      navigator.vibrate(10)
    }
    onClick?.()
  }

  const touchProps = prefersReducedMotion
    ? {}
    : isMobile
      ? {
          whileTap: { scale: 0.97 },
          transition: { duration: 0.1 }
        }
      : {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          transition: { duration: 0.2 }
        }

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        onTap={handleTap}
        {...touchProps}
        style={{
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation'
        }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.div
      className={className}
      onTap={handleTap}
      {...touchProps}
      style={{
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation'
      }}
    >
      {children}
    </motion.div>
  )
}
