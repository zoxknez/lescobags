'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Lescobags Packaging Solutions
              </motion.h1>
              <motion.p 
                className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-4 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Excellence Delivered
              </motion.p>
              <motion.p 
                className="text-xl text-gray-600 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Leading manufacturer of FIBC and bulk bags. Quality packaging solutions since 1919.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link 
                href="/products" 
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
              >
                <span className="flex items-center gap-2">
                  View Products
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="/contact" 
                className="group px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-xl font-semibold hover:border-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-lg"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">Unmatched Quality. Best-in-the-class Market Value.</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Standard Bags */}
            <motion.div variants={fadeInUp}>
              <Link href="/products" className="group block">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 h-full hover:-translate-y-2 hover:border-blue-300">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors">Standard Big Bags</h3>
                  <p className="text-gray-600 text-center">
                    Used for carrying and storage of dry non-hazardous materials in powder, flake and granular form.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Baffle Bags */}
            <motion.div variants={fadeInUp}>
              <Link href="/products" className="group block">
                <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 h-full hover:-translate-y-2 hover:border-green-300">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-green-600 transition-colors">Baffle Bags</h3>
                  <p className="text-gray-600 text-center">
                    Chosen to use the area for carried and stocked big bags as optimal as possible.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Conductive Bags */}
            <motion.div variants={fadeInUp}>
              <Link href="/products" className="group block">
                <div className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 h-full hover:-translate-y-2 hover:border-yellow-300">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-yellow-600 transition-colors">Conductive Bags</h3>
                  <p className="text-gray-600 text-center">
                    Specialized bags with conductive properties for sensitive materials and environments.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Food Grade Bags */}
            <motion.div variants={fadeInUp}>
              <Link href="/products" className="group block">
                <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 h-full hover:-translate-y-2 hover:border-purple-300">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-purple-600 transition-colors">Food Grade Bags</h3>
                  <p className="text-gray-600 text-center">
                    HACCP certified bags suitable for food products with the highest safety standards.
                  </p>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/products" 
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600">Committed to quality and excellence</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl shadow-xl p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">ISO 9001:2008</h3>
                <p className="text-gray-600">Quality Management System</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl shadow-xl p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">ISO 14001:2004</h3>
                <p className="text-gray-600">Environmental Management</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl shadow-xl p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">HACCP</h3>
                <p className="text-gray-600">Food Safety Management</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Excellence Since <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">1919</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                For over a century, Lescobags has been at the forefront of packaging innovation. 
                From humble beginnings to becoming a trusted global supplier of FIBC bags.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to quality, safety, and customer satisfaction drives everything we do. 
                We combine traditional craftsmanship with modern technology to deliver exceptional products.
              </p>
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Learn More About Us
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-blue-600 mb-2">104+</div>
                <div className="text-gray-700 font-semibold">Years of Excellence</div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-green-600 mb-2">2000m²</div>
                <div className="text-gray-700 font-semibold">Production Facility</div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-gray-700 font-semibold">ISO Certifications</div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-yellow-600 mb-2">100%</div>
                <div className="text-gray-700 font-semibold">Quality Guaranteed</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Customer Satisfaction is Our Priority</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We don't just deliver products – we deliver solutions that exceed expectations
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={fadeInUp}
              className="text-center group"
            >
              <motion.div 
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-blue-100">Quick turnaround times without compromising quality</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="text-center group"
            >
              <motion.div 
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">Certified Quality</h3>
              <p className="text-blue-100">ISO certified processes and HACCP compliance</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="text-center group"
            >
              <motion.div 
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">Expert Support</h3>
              <p className="text-blue-100">Dedicated team to assist with your needs</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <motion.div 
          className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Contact us today to discuss your packaging needs and discover how Lescobags can help your business succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 text-lg"
                >
                  Get in Touch
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/products" 
                  className="inline-block px-10 py-5 border-2 border-gray-300 text-gray-900 rounded-xl font-semibold hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 text-lg"
                >
                  Browse Products
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
