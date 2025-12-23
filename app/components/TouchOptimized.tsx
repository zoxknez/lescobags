'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

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
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  const handleTap = () => {
    // Haptic feedback on supported devices
    if (enableHaptic && 'vibrate' in navigator) {
      navigator.vibrate(10)
    }
    onClick?.()
  }

  const touchProps = isMobile ? {
    whileTap: { scale: 0.97 },
    transition: { duration: 0.1 }
  } : {
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
