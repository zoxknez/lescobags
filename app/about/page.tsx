'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutPage() {
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
    <main className="min-h-screen bg-white pt-24 overflow-hidden">
      {/* Header */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        <motion.div 
          className="absolute top-10 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Us
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Excellence in packaging solutions since <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 font-bold">1919</span>
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Lescobags d.o.o.
              </h2>
              <h3 className="text-2xl text-blue-600 font-semibold mb-8">
                We accompany your business as we help it grow
              </h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Lescobags d.o.o. began its journey in the FIBC segment with a small, dedicated team 
                  of engineers offering reliable services with unmatched technical precision.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  We have integrated our services to become a one-stop solutions shop for our clients 
                  for their packaging needs. We evaluate each request systematically, present customized 
                  solutions, and manufacture FIBCs tailored to the needs of our client.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Our scalable infrastructure is a testament to our excellence, and operates on the 
                  latest technologies the world of packaging has to offer.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Being a small to medium sized company allows us to minimise and control overheads as 
                  well as provide our products at very competitive prices. The quality of our products 
                  supplied, combined with our personal service is the key element in our success and has 
                  ensured that Lescobags d.o.o. has enjoyed continued growth.
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="h-full flex items-center justify-center p-8">
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-7xl font-bold text-blue-600 mb-4">104+</div>
                    <div className="text-2xl text-gray-700 font-semibold">Years of Excellence</div>
                    <div className="text-lg text-gray-600 mt-2">Since 1919</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-green-200 to-blue-200"></div>
              
              <motion.div 
                className="space-y-12"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-8">
                  <div className="flex-1 text-right">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div className="text-3xl font-bold text-blue-600 mb-2">1919</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Foundation</h3>
                      <p className="text-gray-600">Company established in Leskovac, Serbia</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div className="flex-1"></div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-center gap-8">
                  <div className="flex-1"></div>
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div className="text-3xl font-bold text-green-600 mb-2">2000s</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Modernization</h3>
                      <p className="text-gray-600">Invested in state-of-the-art FIBC technology</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-center gap-8">
                  <div className="flex-1 text-right">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div className="text-3xl font-bold text-purple-600 mb-2">Present</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Global Excellence</h3>
                      <p className="text-gray-600">ISO certified with international partnerships</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1"></div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <motion.div 
                  className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We never compromise on quality. Every product meets the highest international standards.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <motion.div 
                  className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your success is our success. We provide personalized solutions for every client.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <motion.div 
                  className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Constantly evolving with the latest technologies and packaging solutions.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-blue-600 mb-2">2000m²</div>
              <div className="text-gray-700 font-semibold">Production Area</div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-700 font-semibold">ISO Certifications</div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-700 font-semibold">Production Capacity</div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="text-center p-8 bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-yellow-600 mb-2">100%</div>
              <div className="text-gray-700 font-semibold">Quality Assured</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
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
            Partner with Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join hundreds of satisfied clients who trust Lescobags for their packaging needs
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 text-lg"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
