'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

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
