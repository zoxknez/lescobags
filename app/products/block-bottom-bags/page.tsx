'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '../../components/Navigation'

export default function BlockBottomBagsPage() {
  const bagTypes = [
    {
      title: 'Block Bottom Bag with Open Mouth',
      description: 'These block bottom bags are completely open at the top. Once filled, the bags are sewn up or sealed with tape for secure closure.',
      features: [
        'Fully open top for easy filling',
        'Sewn or tape sealed closure',
        'Flat bottom for stable standing',
        'Excellent stacking properties',
        'Various closure methods available'
      ],
      gradient: 'from-green-600 to-emerald-500'
    },
    {
      title: 'Block Bottom Bag with Valve',
      description: 'This block bottom bag has a self-closing filling valve, sealable valve, or pocket valve. Results in super-efficient filling and neat shape.',
      features: [
        'Self-closing valve system',
        'Efficient automated filling',
        'Neat, uniform appearance',
        'Reduced material spillage',
        'Multiple valve options'
      ],
      gradient: 'from-blue-600 to-cyan-500'
    }
  ]

  const specifications = [
    {
      label: 'Width',
      value: '30-60 cm',
      icon: '📏'
    },
    {
      label: 'Length',
      value: '43-102 cm',
      icon: '📐'
    },
    {
      label: 'Width',
      value: '8-18 cm',
      icon: '🔲'
    },
    {
      label: 'Material',
      value: 'Coated woven PP',
      icon: '🧵'
    }
  ]

  const features = [
    {
      title: 'Flat Bottom Design',
      description: 'Cassette design provides exceptional stability for filling and stacking',
      icon: '📦'
    },
    {
      title: 'Water Resistant',
      description: 'Coated woven polypropylene fabric protects against moisture',
      icon: '💧'
    },
    {
      title: 'Dust Resistant',
      description: 'Sealed construction prevents dust penetration and product loss',
      icon: '🌪️'
    },
    {
      title: 'Product Visibility',
      description: 'Printing visible on top and sides even when stacked on shelves',
      icon: '👁️'
    },
    {
      title: 'Flexible Dimensions',
      description: 'Customizable sizes to fit your specific product requirements',
      icon: '⚙️'
    },
    {
      title: 'Easy Stacking',
      description: 'Form and structure allow efficient pallet loading',
      icon: '📚'
    }
  ]

  const applications = [
    'Granulates',
    'Cement',
    'Malt',
    'Animal feed',
    'Additives',
    'Construction materials',
    'Agricultural products',
    'Chemical powders'
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
          <motion.div 
            className="absolute top-20 right-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <nav className="text-sm text-gray-600 mb-6">
              <Link href="/" className="hover:text-green-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-green-600">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Block Bottom Bags</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                  AD*Star Cassette Bags
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Block Bottom Bags
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Block bottom bags are the most advanced type of small bags. These cassette bags have a flat 
                  bottom for hassle-free filling and stacking. Firmly sealed and available in various sizes for 
                  optimal product visualization.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {specifications.map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-200"
                    >
                      <div className="text-2xl mb-1">{spec.icon}</div>
                      <div className="text-sm text-gray-600">{spec.label}</div>
                      <div className="text-lg font-bold text-green-600">{spec.value}</div>
                    </motion.div>
                  ))}
                </div>

                <Link 
                  href="/contact"
                  className="inline-block px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Request a Quote
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-green-100 to-emerald-50 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 flex items-center justify-center">
                    <div className="text-center text-green-700">
                      <div className="text-6xl mb-4">📦</div>
                      <div className="text-2xl font-bold">Block Bottom Bags</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Optimal filling and stacking with advanced cassette bag technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bag Types */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Types</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose between open mouth and valve options based on your filling process
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {bagTypes.map((bag, index) => (
                <motion.div
                  key={bag.title}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div className={`h-48 bg-gradient-to-br ${bag.gradient} flex items-center justify-center`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-white text-6xl"
                    >
                      {index === 0 ? '📭' : '🔒'}
                    </motion.div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{bag.title}</h3>
                    <p className="text-gray-600 mb-6">{bag.description}</p>
                    
                    <ul className="space-y-3">
                      {bag.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ideal packaging solution for a wide range of products and industries
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-4">
              {applications.map((app, index) => (
                <motion.div
                  key={app}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-6 text-center font-semibold text-gray-900 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  {app}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Printing Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">High-Quality Printing</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Personalized printing on your packaging for optimal product presentation. 
                  The form and structure of filled bags ensures printing on top and sides remains visible even when stacked.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Up to 4 colors per side using flexography</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Visible branding even when stacked on shelves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Increased product visualization and brand recognition</span>
                  </li>
                </ul>
                <Link 
                  href="/products/options#printing"
                  className="inline-block px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Learn About Printing Options
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-2xl flex items-center justify-center">
                  <div className="text-9xl">🎨</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Need Block Bottom Bags?</h2>
              <p className="text-xl mb-8 text-green-100">
                Contact us to discuss your specific requirements and get a customized solution
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
                >
                  Request Quote
                </Link>
                <Link 
                  href="/products/industries"
                  className="inline-block px-8 py-4 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition-colors border-2 border-white/20"
                >
                  View Industries
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
