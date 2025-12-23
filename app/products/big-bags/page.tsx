'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '../../components/Navigation'

export default function BigBagsPage() {
  const bagTypes = [
    {
      title: '4-Loop Big Bag',
      subtitle: 'The Standard Model',
      description: 'The standard model big bag for a wide range of applications. Four lifting loops ensure stable handling and transport.',
      image: '/images/products/4-loop-bigbag.jpg',
      features: [
        'Four sturdy lifting loops',
        'Versatile for various industries',
        'Easy handling with standard equipment',
        'Cost-effective solution',
        'Customizable dimensions'
      ],
      gradient: 'from-blue-600 to-cyan-500',
      link: '/products/big-bags/4-loop'
    },
    {
      title: 'One/Two-Loop Big Bag',
      subtitle: 'Easy & Efficient',
      description: 'Easy and efficiently manageable big bag with single or double loop design for optimized handling.',
      image: '/images/products/2-loop-bigbag.jpg',
      features: [
        'Simplified handling',
        'Reduced loop material',
        'Compatible with crane hooks',
        'Faster filling process',
        'Space-efficient storage'
      ],
      gradient: 'from-green-600 to-emerald-500',
      link: '/products/big-bags/one-two-loop'
    },
    {
      title: 'Quadro Big Bag',
      subtitle: 'Form-Stable Design',
      description: 'The form-stable big bag with internal baffles for optimal loading and space utilization.',
      image: '/images/products/quadro-bigbag.jpg',
      features: [
        'Internal baffle panels',
        'Maintains rectangular shape when filled',
        'Optimal pallet loading',
        'Perfect for fine powders',
        'Maximum space efficiency',
        'Excellent product flow'
      ],
      gradient: 'from-purple-600 to-pink-500',
      link: '/products/big-bags/quadro'
    }
  ]

  const additionalDesigns = [
    {
      title: 'U-Panel Bag',
      description: 'Long U-shaped panel forms bottom and two sides',
      icon: '📦'
    },
    {
      title: '4-Panel Bag',
      description: 'Four separate side panels sewn together',
      icon: '🔲'
    },
    {
      title: 'Tubular Bag',
      description: 'Woven on round loom with tubular fabric',
      icon: '⭕'
    },
    {
      title: 'Conical Bag',
      description: 'Pyramid-shaped corners for better flow',
      icon: '🔺'
    },
    {
      title: 'Combo-Cube®',
      description: 'Patented design by Louis Blockx',
      icon: '✨'
    }
  ]

  const industries = [
    { name: 'Food Industry', icon: '🍽️' },
    { name: 'Chemical Industry', icon: '⚗️' },
    { name: 'Agriculture', icon: '🌾' },
    { name: 'Construction', icon: '🏗️' },
    { name: 'Mining', icon: '⛏️' },
    { name: 'Pharmaceuticals', icon: '💊' },
    { name: 'Animal Feed', icon: '🐄' },
    { name: 'Waste Management', icon: '♻️' }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
          <motion.div 
            className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <nav className="text-sm text-gray-600 mb-6">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-blue-600">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Big Bags</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                  FIBC - Flexible Intermediate Bulk Containers
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Big Bags
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Big bags (FIBCs) are the perfect packaging solution to store and transport dry bulk goods. 
                  Louis Blockx designs and produces big bags for every sector. Sturdy, reliable and custom-made for your business.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600">500-2000kg</div>
                    <div className="text-sm text-gray-600">Capacity Range</div>
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="text-2xl font-bold text-green-600">ISO 21898</div>
                    <div className="text-sm text-gray-600">Certified Design</div>
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="text-2xl font-bold text-purple-600">5:1 / 6:1</div>
                    <div className="text-sm text-gray-600">Safety Factor</div>
                  </div>
                </div>

                <Link 
                  href="/contact"
                  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
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
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-50 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                  <Image 
                    src="/images/bigbag-render-shade.webp" 
                    alt="Big Bags" 
                    width={600}
                    height={600}
                    className="object-contain p-8"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Big Bag Types */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Big Bag Types</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Various options and materials designed to your product requirements and processes
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {bagTypes.map((bag, index) => (
                <motion.div
                  key={bag.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={bag.link}>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      <div className={`h-64 bg-gradient-to-br ${bag.gradient} relative overflow-hidden`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-48 h-48 bg-white/10 rounded-lg backdrop-blur-sm"></div>
                        </div>
                        <motion.div
                          className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full"
                          whileHover={{ scale: 1.2, rotate: 90 }}
                        />
                      </div>
                      
                      <div className="p-6 flex-grow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{bag.title}</h3>
                        <p className="text-sm text-blue-600 font-semibold mb-4">{bag.subtitle}</p>
                        <p className="text-gray-600 mb-6">{bag.description}</p>
                        
                        <ul className="space-y-2 mb-6">
                          {bag.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all">
                          <span>Learn More</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Custom Designs */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Custom Designs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We select an appropriate basic model for your product and supply chain requirements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-6">
              {additionalDesigns.map((design, index) => (
                <motion.div
                  key={design.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center"
                >
                  <div className="text-4xl mb-4">{design.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{design.title}</h3>
                  <p className="text-sm text-gray-600">{design.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/products/custom-design"
                className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Explore Custom Designs
              </Link>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our packaging solutions for food, chemicals, agriculture, construction and more
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center cursor-pointer"
                >
                  <div className="text-5xl mb-3">{industry.icon}</div>
                  <h3 className="font-bold text-gray-900">{industry.name}</h3>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/products/industries"
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                View All Industries
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Need Custom Big Bags?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Our experts will help you design the perfect packaging solution for your specific needs
              </p>
              <Link 
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
              >
                Contact Our Team
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
