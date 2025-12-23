'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'

export default function SpecialUsagePage() {
  const categories = [
    {
      title: 'Food Contact',
      icon: '🍽️',
      description: 'Big bags for foodstuffs must fulfill specific conditions. Our production is fully geared to food-safe packaging.',
      features: [
        'Food contact materials',
        'BRCGS and ISO 22000 certified',
        'Contamination prevention design',
        'Extra barrier liners available',
        'Hygiene standard compliance',
        'Heat-treated pallets delivery'
      ],
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'UN Bags',
      icon: '⚠️',
      description: 'Packaging for hazardous substances complying with international UN regulations (Orange Book).',
      features: [
        'UN certified (13H1, 13H2, 13H3, 13H4)',
        'BVI certified and tested',
        'Specialized production environment',
        'Coated or uncoated variants',
        'With or without liner',
        'Tailored to application'
      ],
      gradient: 'from-orange-600 to-red-500'
    },
    {
      title: 'ATEX Antistatic',
      icon: '⚡',
      description: 'Protective antistatic big bags meeting ATEX guidelines for explosive or inflammable environments.',
      features: [
        'Type B: Spark prevention',
        'Type C: Conductive with earthing',
        'Type D: Chromiq® fabric dispersion',
        'IEC 61340-4-4 compliant',
        'Conductive liner options',
        'Food-safe variants available'
      ],
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      title: 'Ventilated Big Bags',
      icon: '💨',
      description: 'Ideal for agricultural products like potatoes, onions, fruit and wood requiring good ventilation.',
      features: [
        'Special weave pattern',
        'Vertical ventilation strips',
        'Maintains sturdy fabric',
        'Heavy load capacity',
        'Perfect for agriculture',
        'Optimal air circulation'
      ],
      gradient: 'from-green-600 to-emerald-500'
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                Specialized Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Special Usage</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Foodstuffs and hazardous substances require appropriate packaging. We offer food-safe bags, 
                ventilated big bags, UN bags, and antistatic big bags.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className={`h-48 bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                    <div className="text-8xl">{category.icon}</div>
                  </div>
                  
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{category.description}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-4">Key Features:</h3>
                      <ul className="space-y-3">
                        {category.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-bold mb-6">Certified Safety & Quality</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our specialized production facilities are certified to the highest standards, ensuring your products 
                  are packaged safely and compliantly.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['BRCGS', 'ISO 22000', 'ISO 9001', 'IEC 61340-4-4'].map((cert, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">{cert}</div>
                      <div className="text-sm text-gray-400">Certified</div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur"
              >
                <div className="text-9xl">🏆</div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-6">Need Specialized Packaging?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Our experts will help you select the right special usage bags for your specific requirements
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
                Contact Specialists
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
