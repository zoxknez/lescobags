'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const images = [
  { id: 1, name: 'FIBC Bags Production', url: 'fibc-bags-1.jpg', category: 'Production' },
  { id: 2, name: 'Standard Big Bags', url: 'fibc-bags-2.jpg', category: 'Products' },
  { id: 3, name: 'Quality Control', url: 'fibc-bags-3.jpg', category: 'Quality' },
  { id: 4, name: 'Baffle Bags', url: 'fibc-bags-4.jpg', category: 'Products' },
  { id: 5, name: 'Manufacturing Process', url: 'fibc-bags-5.jpg', category: 'Production' },
  { id: 7, name: 'Finished Products', url: 'fibc-bags-7.jpg', category: 'Products' },
  { id: 8, name: 'Warehouse Storage', url: 'fibc-bags-8.jpg', category: 'Facility' },
  { id: 9, name: 'Production Line', url: 'fibc-bags-9.jpg', category: 'Production' },
  { id: 10, name: 'Bulk Bags', url: 'fibc-bags-10.jpg', category: 'Products' },
  { id: 13, name: 'Facility Overview', url: 'fibc-bags-13.jpg', category: 'Facility' },
  { id: 14, name: 'Quality Inspection', url: 'fibc-bags-14.jpg', category: 'Quality' },
  { id: 16, name: 'Ready for Shipment', url: 'fibc-bags-16.jpg', category: 'Products' },
]

const categories = ['All', 'Production', 'Products', 'Quality', 'Facility']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredImages, setFilteredImages] = useState(images)

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredImages(images)
    } else {
      setFilteredImages(images.filter(img => img.category === activeCategory))
    }
  }, [activeCategory])

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <main className="min-h-screen bg-white pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-blue-50/50 via-white to-emerald-50/50 overflow-hidden">
        {/* Animated Background Orbs */}
        <motion.div
          className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-emerald-100/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -50, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/50 backdrop-blur-md border border-blue-100 text-blue-900 rounded-full text-sm font-bold mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Visual Archive
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-emerald-900 bg-clip-text text-transparent">
              Capture <span className="font-serif italic font-light">Excellence</span>
            </span>
          </motion.h1>

          {/* Category Filter Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-12 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 -translate-y-1'
                  : 'bg-white text-slate-500 border border-slate-100 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  layout
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative aspect-[4/5] bg-slate-50 rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Placeholder with Soft Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center">
                    <div className="text-center p-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-500"
                      >
                        <svg className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </motion.div>
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-500 mb-2">
                        {image.name}
                      </h3>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{image.category}</p>
                    </div>
                  </div>

                  {/* High-End Glass Reveal Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.div
                      className="w-16 h-16 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white shadow-2xl"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Category Accent Badge */}
                  <div className="absolute top-6 left-6 z-10 transition-transform duration-500 group-hover:scale-110">
                    <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest leading-none backdrop-blur-md shadow-lg flex items-center gap-2 ${image.category === 'Production' ? 'bg-blue-600/90 text-white shadow-blue-500/20' :
                        image.category === 'Products' ? 'bg-emerald-600/90 text-white shadow-emerald-500/20' :
                          image.category === 'Quality' ? 'bg-teal-600/90 text-white shadow-teal-500/20' :
                            'bg-slate-900/90 text-white'
                      }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">Photo Categories</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: "Products", desc: "FIBC & Bulk Bags", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", color: "blue" },
              { title: "Facility", desc: "Production Area", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011-1v5m-4 0h4", color: "emerald" },
              { title: "Production", desc: "Process Line", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", color: "teal" },
              { title: "Quality", desc: "Control & Testing", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "slate" }
            ].map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeInUp}
                className="bg-white rounded-3xl p-8 border border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className={`w-14 h-14 bg-${cat.color}-50 text-${cat.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Production Stats Bar */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Circular Looms", value: "24", color: "from-blue-600 to-blue-400" },
              { label: "m² Facility", value: "2000", color: "from-emerald-600 to-emerald-400" },
              { label: "Quality Tested", value: "100%", color: "from-teal-600 to-teal-400" },
              { label: "Production", value: "24/7", color: "from-slate-700 to-slate-500" }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center md:text-left"
              >
                <div className={`text-4xl md:text-6xl font-black mb-2 tracking-tighter bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
