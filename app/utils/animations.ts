/**
 * Optimized Framer Motion animations for mobile and desktop
 * GPU-accelerated with reduced motion support
 */

// Check if user prefers reduced motion
const prefersReducedMotion = 
  typeof window !== 'undefined' && 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Detect mobile device
export const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

// Base transition config - optimized for mobile
export const baseTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 0.5
}

// Fast transition for mobile
export const fastTransition = {
  type: "tween",
  duration: 0.3,
  ease: "easeOut"
}

// Fade in up animation - GPU optimized
export const fadeInUp = {
  initial: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
  animate: { opacity: 1, y: 0 },
  transition: isMobile ? fastTransition : { duration: 0.6, ease: "easeOut" }
}

// Fade in left - GPU optimized
export const fadeInLeft = {
  initial: { opacity: 0, x: prefersReducedMotion ? 0 : -40 },
  animate: { opacity: 1, x: 0 },
  transition: isMobile ? fastTransition : { duration: 0.6, ease: "easeOut" }
}

// Fade in right - GPU optimized
export const fadeInRight = {
  initial: { opacity: 0, x: prefersReducedMotion ? 0 : 40 },
  animate: { opacity: 1, x: 0 },
  transition: isMobile ? fastTransition : { duration: 0.6, ease: "easeOut" }
}

// Scale animation - optimized for mobile
export const scaleIn = {
  initial: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: isMobile ? fastTransition : { duration: 0.5, ease: "easeOut" }
}

// Stagger container for multiple children
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: isMobile ? 0.05 : 0.1,
      delayChildren: isMobile ? 0.1 : 0.2
    }
  }
}

// Hover animations - disabled on mobile (touch devices)
export const hoverScale = isMobile ? {} : {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 }
}

export const hoverLift = isMobile ? {} : {
  whileHover: { y: -5 },
  transition: { duration: 0.2 }
}

// Viewport options for scroll animations
export const viewportOptions = {
  once: true,
  margin: isMobile ? "-50px" : "-100px",
  amount: isMobile ? 0.2 : 0.3
}

// Reduced animation variants for mobile performance
export const mobileOptimized = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: fastTransition
  }
}

// Background animation - lighter on mobile
export const backgroundFloat = prefersReducedMotion ? {} : {
  animate: {
    scale: isMobile ? [1, 1.1, 1] : [1, 1.2, 1],
    x: isMobile ? [0, 20, 0] : [0, 50, 0],
    y: isMobile ? [0, 15, 0] : [0, 30, 0],
  },
  transition: {
    duration: isMobile ? 6 : 8,
    repeat: Infinity,
    ease: "easeInOut"
  }
}
