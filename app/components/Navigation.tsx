'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    let rafId: number | null = null

    const handleScroll = () => {
      if (rafId !== null) return
      rafId = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        const lastScrollY = lastScrollYRef.current

        // Show nav when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY || currentScrollY < 100) {
          setIsVisible(true)
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
          setMobileMenuOpen(false) // Close mobile menu when hiding nav
        }

        lastScrollYRef.current = currentScrollY
        rafId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId !== null) window.cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileMenuOpen])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-sm shadow-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">LESCOBAGS</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                Products
                <svg className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase">Main Products</div>
                  <Link href="/products/big-bags" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Big Bags (FIBC)</Link>
                  <Link href="/products/block-bottom-bags" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Block Bottom Bags</Link>
                  <Link href="/products/pillow-bags" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Pillow Bags</Link>
                  <Link href="/products/container-liners" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Container Liners</Link>
                  <div className="my-2 border-t border-gray-200"></div>
                  <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase">Specializations</div>
                  <Link href="/products/recycled-bags" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Recycled Bags</Link>
                  <Link href="/products/special-usage" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Special Usage</Link>
                  <Link href="/products/custom-design" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Custom Design</Link>
                  <Link href="/products/industries" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Industries</Link>
                </div>
              )}
            </div>


            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                Company
                <svg className={`w-4 h-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {companyOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">About Us</Link>
                  <Link href="/organisation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Organisation</Link>
                  <Link href="/facility" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Facility</Link>
                  <Link href="/technology" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Technology</Link>
                  <Link href="/centenary" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">100 Years Legacy</Link>
                  <Link href="/jobs" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Careers / Jobs</Link>
                  <Link href="/distribution-partners" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Distribution Partners</Link>
                </div>
              )}
            </div>

            <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors">
              Gallery
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 rounded-lg text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-nav" className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-4">
              <Link href="/" className="py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={closeMobileMenu}>Home</Link>
              <Link href="/products" className="py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={closeMobileMenu}>Products</Link>

              <div className="flex flex-col gap-2 py-2">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Company</div>
                <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-100">
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm" onClick={closeMobileMenu}>About Us</Link>
                  <Link href="/organisation" className="text-gray-600 hover:text-blue-600 text-sm" onClick={closeMobileMenu}>Organisation</Link>
                  <Link href="/facility" className="text-gray-600 hover:text-blue-600 text-sm" onClick={closeMobileMenu}>Facility</Link>
                  <Link href="/technology" className="text-gray-600 hover:text-blue-600 text-sm" onClick={closeMobileMenu}>Technology</Link>
                  <Link href="/centenary" className="text-gray-600 hover:text-blue-600 text-sm" onClick={closeMobileMenu}>100 Years Legacy</Link>
                  <Link href="/jobs" className="text-gray-600 hover:text-blue-600 text-sm" onClick={closeMobileMenu}>Careers / Jobs</Link>
                  <Link href="/distribution-partners" className="text-gray-600 hover:text-blue-600 text-sm" onClick={closeMobileMenu}>Partners</Link>
                </div>
              </div>

              <Link href="/gallery" className="py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={closeMobileMenu}>Gallery</Link>
              <Link href="/contact" className="mt-4 px-6 py-4 bg-blue-600 text-white rounded-xl text-center font-bold shadow-lg" onClick={closeMobileMenu}>Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
