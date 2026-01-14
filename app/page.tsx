'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

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
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
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
          className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
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
                className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-teal-800 mb-4 font-normal drop-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Excellence Delivered
              </motion.p>
              <motion.p
                className="text-xl text-gray-700 mb-12 leading-relaxed font-medium"
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
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  View Products
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contact"
                className="group w-full sm:w-auto px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-xl font-semibold hover:border-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-lg text-center"
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                    className="w-full h-48 relative mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="/images/bigbag-render-shade.webp"
                      alt="Standard Big Bags"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
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
                <div className="bg-gradient-to-br from-white to-teal-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 h-full hover:-translate-y-2 hover:border-teal-300">
                  <motion.div
                    className="w-full h-48 relative mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="/images/blockbottombags-render.webp"
                      alt="Baffle Bags"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-teal-700 transition-colors">Block Bottom Bags</h3>
                  <p className="text-gray-600 text-center">
                    Flat bottom design for stable standing, perfect for storage and product display.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Conductive Bags */}
            <motion.div variants={fadeInUp}>
              <Link href="/products" className="group block">
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 h-full hover:-translate-y-2 hover:border-slate-300">
                  <motion.div
                    className="w-full h-48 relative mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="/images/pillowbags-render.webp"
                      alt="Conductive Bags"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-slate-700 transition-colors">Conductive Bags</h3>
                  <p className="text-gray-600 text-center">
                    Type C and D bags designed for safely transporting flammable materials and preventing static discharge.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Container Liners */}
            <motion.div variants={fadeInUp}>
              <Link href="/products" className="group block">
                <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 h-full hover:-translate-y-2 hover:border-emerald-300">
                  <motion.div
                    className="w-full h-48 relative mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="/images/linerbagsfull.webp"
                      alt="Container Liners"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-emerald-700 transition-colors">Container Liners</h3>
                  <p className="text-gray-600 text-center">
                    Additional protection for products during transport in containers, protecting from moisture and contamination.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Pillow Bags */}
            <motion.div variants={fadeInUp}>
              <Link href="/products" className="group block">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 h-full hover:-translate-y-2 hover:border-blue-300">
                  <motion.div
                    className="w-full h-48 relative mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="/images/pillowbags-render.webp"
                      alt="Pillow Bags"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-700 transition-colors">Pillow Bags</h3>
                  <p className="text-gray-600 text-center">
                    Versatile bags suitable for a wide range of products, available in plastic fabric, jute, or film.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Recycled Bags */}
            <motion.div variants={fadeInUp}>
              <Link href="/products" className="group block">
                <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 h-full hover:-translate-y-2 hover:border-emerald-300">
                  <motion.div
                    className="w-full h-48 relative mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="/images/bigbagscustom.webp"
                      alt="Recycled Bags"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-emerald-600 transition-colors">Recycled Bags</h3>
                  <p className="text-gray-600 text-center">
                    Environmentally friendly packaging solutions made from recycled materials, maintaining quality and durability.
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
              <div
                onClick={() => setSelectedCertificate('iso-9001')}
                className="bg-white rounded-2xl shadow-xl p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group cursor-pointer"
              >
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="https://lescobags.com/images/certificate-iso-9001.png"
                    alt="ISO 9001:2008"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">ISO 9001:2008</h3>
                <p className="text-gray-600">Quality Management System</p>
                <p className="text-sm text-blue-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click to view certificate</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div
                onClick={() => setSelectedCertificate('iso-14001')}
                className="bg-white rounded-2xl shadow-xl p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group cursor-pointer"
              >
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="https://lescobags.com/images/certificare-iso-14001.png"
                    alt="ISO 14001:2004"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">ISO 14001:2004</h3>
                <p className="text-gray-600">Environmental Management</p>
                <p className="text-sm text-teal-700 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click to view certificate</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div
                onClick={() => setSelectedCertificate('haccp')}
                className="bg-white rounded-2xl shadow-xl p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group cursor-pointer"
              >
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="https://lescobags.com/images/certificate-haacp.png"
                    alt="HACCP"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">HACCP</h3>
                <p className="text-gray-600">Food Safety Management</p>
                <p className="text-sm text-emerald-700 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click to view certificate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Excellence Since <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-700">1919</span>
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
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-2">104+</div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">Years of Excellence</div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700 mb-2 truncate">2000m²</div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">Production Facility</div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-700 mb-2">3</div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">ISO Certifications</div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-700 mb-2">100%</div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">Quality Guaranteed</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800 via-blue-900 to-teal-800 text-white relative overflow-hidden">
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
          className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full filter blur-3xl"
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
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
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
                className="w-20 h-20 bg-blue-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600/40 group-hover:scale-110 transition-all duration-300 border border-white/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg className="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-blue-100 font-medium">Quick turnaround times without compromising quality</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center group"
            >
              <motion.div
                className="w-20 h-20 bg-teal-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-teal-600/40 group-hover:scale-110 transition-all duration-300 border border-white/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg className="w-10 h-10 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">Certified Quality</h3>
              <p className="text-blue-100 font-medium">ISO certified processes and HACCP compliance</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center group"
            >
              <motion.div
                className="w-20 h-20 bg-amber-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-amber-600/40 group-hover:scale-110 transition-all duration-300 border border-white/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg className="w-10 h-10 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">Expert Support</h3>
              <p className="text-blue-100 font-medium">Dedicated team to assist with your needs</p>
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
              <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="group w-full inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 text-lg"
                >
                  Get in Touch
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/products"
                  className="inline-block w-full px-10 py-5 border-2 border-gray-300 text-gray-900 rounded-xl font-semibold hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 text-lg"
                >
                  Browse Products
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full h-[80vh]">
              <Image
                src={
                  selectedCertificate === 'iso-9001'
                    ? '/images/certificates/certificate-iso-9001.png'
                    : selectedCertificate === 'iso-14001'
                      ? '/images/certificates/certificare-iso-14001.png'
                      : '/images/certificates/certificate-haacp.png'
                }
                alt={
                  selectedCertificate === 'iso-9001'
                    ? 'ISO 9001:2008 Certificate'
                    : selectedCertificate === 'iso-14001'
                      ? 'ISO 14001:2004 Certificate'
                      : 'HACCP Certificate'
                }
                fill
                className="object-contain p-8"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            <div className="p-6 bg-gray-50 text-center">
              <p className="text-sm text-gray-600">
                Click outside or press the X button to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  )
}
