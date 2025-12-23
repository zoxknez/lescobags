'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'

export default function FacilityPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const facilities = [
    { icon: '🏭', title: 'Main Production Hall', size: '2000 m²', status: 'Active' },
    { icon: '📦', title: 'Expansion Hall', size: '2000 m²', status: 'Ready' },
    { icon: '🏗️', title: 'Future Expansion', size: '5000 m²', status: 'Available Land' },
  ]

  const equipment = [
    { name: 'Circular Looms', count: '24 units', description: 'High-speed production' },
    { name: 'Cutting Machines', count: '8 units', description: 'Precision cutting' },
    { name: 'Sewing Machines', count: '32 units', description: 'Expert finishing' },
    { name: 'Quality Control', count: 'Automated', description: 'ISO certified' },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 overflow-hidden">
      {/* Header */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
        <motion.div 
          className="absolute top-10 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-700 to-teal-700 text-white rounded-full text-sm font-semibold mb-8 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>9000m² Production Capacity</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-slate-800 via-blue-900 to-teal-700 bg-clip-text text-transparent">
              Infrastructure & Facilities
            </span>
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Equipped with state-of-the-art machinery to produce our products to international standards
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                State-of-the-Art Manufacturing
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Lescobags doo is operating in area of 2000 square metre, and there is another 
                  production hall of 2000 square metre ready for expansion of production when needed. 
                  Also there is land available in case that we need to construct additional production 
                  Hall of 5000m2.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Our manufacturing complex is completely air conditioned and equipped with a full range 
                  of machinery for conversion and finishing.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Collectively we focus on pioneering new and innovative packaging concepts by investing 
                  in the latest technologies available.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  We combine the right machines and resources to create a manufacturing line that is 
                  highly efficient and immensely productive. Superior machines, innovative techniques 
                  and qualified personnel synergize to deliver products of premium quality and finesse.
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-slate-100 via-blue-100 to-teal-100 rounded-2xl flex items-center justify-center p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <svg className="w-64 h-64 text-blue-700 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </motion.div>
                  <div className="text-4xl font-bold text-blue-600">9000 m²</div>
                  <div className="text-gray-700 text-xl mt-2">Total Available Area</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Facility Cards */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Facilities</h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="text-6xl mb-6">{facility.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-blue-600">{facility.size}</span>
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      facility.status === 'Active' ? 'bg-green-100 text-green-600' :
                      facility.status === 'Ready' ? 'bg-blue-100 text-blue-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {facility.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Equipment */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Manufacturing Equipment</h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {equipment.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{item.count}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <motion.div 
                className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Climate Controlled</h3>
              <p className="text-gray-600 leading-relaxed">
                Fully air-conditioned facilities ensure optimal working conditions and product quality 
                throughout the year.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-teal-100"
            >
              <motion.div 
                className="w-16 h-16 bg-teal-700 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety Standards</h3>
              <p className="text-gray-600 leading-relaxed">
                Compliant with international safety regulations with regular inspections and maintenance 
                protocols.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100"
            >
              <motion.div 
                className="w-16 h-16 bg-emerald-700 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Energy Efficient</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern equipment designed for maximum efficiency and minimal environmental impact.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <motion.div 
                className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Production</h3>
              <p className="text-gray-600 leading-relaxed">
                Multiple shifts ensure continuous production capability to meet urgent demands.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800 via-blue-900 to-teal-800 text-white relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visit Our Facility
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Schedule a tour to see our state-of-the-art production capabilities firsthand
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a 
              href="mailto:info@lescobags.com" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 text-lg"
            >
              Schedule a Tour
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
    </>
  )
}
