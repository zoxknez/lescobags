'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">LESCOBAGS</div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/organisation" className="text-gray-700 hover:text-blue-600 transition-colors">
              Organisation
            </Link>
            <Link href="/facility" className="text-gray-700 hover:text-blue-600 transition-colors">
              Facility
            </Link>
            <Link href="/technology" className="text-gray-700 hover:text-blue-600 transition-colors">
              Technology
            </Link>
            <Link href="/centenary" className="text-gray-700 hover:text-blue-600 transition-colors">
              100 Years
            </Link>
            <Link href="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors">
              Jobs
            </Link>
            <Link href="/distribution-partners" className="text-gray-700 hover:text-blue-600 transition-colors">
              Partners
            </Link>
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
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/organisation" className="text-gray-700 hover:text-blue-600">Organisation</Link>
              <Link href="/facility" className="text-gray-700 hover:text-blue-600">Facility</Link>
              <Link href="/technology" className="text-gray-700 hover:text-blue-600">Technology</Link>
              <Link href="/centenary" className="text-gray-700 hover:text-blue-600">100 Years</Link>
              <Link href="/jobs" className="text-gray-700 hover:text-blue-600">Jobs</Link>
              <Link href="/distribution-partners" className="text-gray-700 hover:text-blue-600">Partners</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600">Gallery</Link>
              <Link href="/contact" className="px-6 py-2 bg-blue-600 text-white rounded-lg text-center">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
