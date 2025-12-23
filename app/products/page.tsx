'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProductsPage() {
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

  return (
    <main className="min-h-screen bg-white pt-24 overflow-hidden">
      {/* Header */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        <motion.div 
          className="absolute top-10 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
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
            Our Products
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Unmatched Quality. Best-in-the-class Market Value.
          </motion.p>
        </div>
      </section>

      {/* Standard Bags Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <svg className="w-64 h-64 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Standard Big Bags</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Used for the carrying and storage of dry non-hazardous materials in powder, flake and 
                granular form. These large capacity bags are robust, versatile and an economical alternative 
                to more traditional forms of industrial packaging.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: "#dbeafe" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Capacity Range</h3>
                    <p className="text-gray-600">500 Kg to 2000 Kg</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: "#dbeafe" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Safety Factor</h3>
                    <p className="text-gray-600">5:1 or 6:1</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: "#dbeafe" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Top Options</h3>
                    <p className="text-gray-600">Open top, duffle top, skirt top</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Baffle Bags */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Baffle Bags</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Baffle bags are chosen to use the area for carried and stocked big bags as optimal as possible. 
                Standard big bags have a tendency of becoming round when being filled. This is eliminated when 
                using baffled big bags.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Baffled bags can be configured to fill out an exact square or rectangular footprint. Offering 
                the same capacity they require less storage space and weigh less than a standard bag. This 
                results in reduced freight costs.
              </p>
              
              <motion.div 
                className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <svg className="w-64 h-64 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Conductive Bags */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <svg className="w-64 h-64 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Conductive Bags</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Type C FIBCs or conductive bags are designed to safely package flammable powders and are 
                used in environments where flammable gases, vapors or combustible dust is present.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                These bags feature interwoven conductive threads that safely ground any electrostatic charge 
                to prevent dangerous sparks in hazardous environments.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Safety Notice
                </h3>
                <p className="text-gray-600">Must be properly grounded during filling and discharging operations</p>
              </div>
            </motion.div>
          </div>

          {/* Food Grade Bags */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Food Grade Bags</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our food-grade FIBCs are manufactured in accordance with HACCP guidelines and are suitable 
                for direct contact with food products.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                These bags are produced in a controlled environment with stringent quality checks to ensure 
                they meet food safety standards and protect your products from contamination.
              </p>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp} className="bg-purple-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">HACCP</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-purple-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Food Safe</div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <svg className="w-64 h-64 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Management */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Quality Management System</h2>
            <p className="text-xl text-blue-100">ISO 9001:2008 Certified Excellence</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <motion.div 
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Raw Material Inspection</h3>
              <p className="text-blue-100">Quality checks from the source</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <motion.div 
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Production Monitoring</h3>
              <p className="text-blue-100">Continuous quality control</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <motion.div 
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Final Product Testing</h3>
              <p className="text-blue-100">Certified quality assurance</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Contact us to discuss your specific requirements and get a customized quote
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 text-lg"
            >
              Contact Us
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
