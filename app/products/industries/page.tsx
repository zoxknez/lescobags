'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Agriculture',
      icon: '🌾',
      description: 'Food-safe packaging for potatoes, seeds, grain and onions',
      features: ['Extra ventilation options', 'Hermetically sealed variants', 'Food-safe materials', 'Efficient handling design'],
      gradient: 'from-green-600 to-emerald-500'
    },
    {
      name: 'Animal Feed',
      icon: '🐄',
      description: 'Safe solutions for finished feeds, pre-mixes, and additives',
      features: ['Food-safe certified', 'Multiple product specs', 'Custom printing', 'Optimal branding'],
      gradient: 'from-amber-600 to-yellow-500'
    },
    {
      name: 'Chemicals',
      icon: '⚗️',
      description: 'Specialized packaging for chemicals, additives, and polymers',
      features: ['UN certified bags', 'ATEX antistatic options', 'Contamination prevention', 'Appropriate liners'],
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      name: 'Construction',
      icon: '🏗️',
      description: 'Robust packaging for sand, gravel, mortar mixes and stones',
      features: ['Perfect for temp storage', 'Flexible design options', 'Reusable bags', 'Easy discharge system'],
      gradient: 'from-gray-600 to-slate-500'
    },
    {
      name: 'Food Industry',
      icon: '🍽️',
      description: 'Sugar, malt, flour, milk powder, salt, coffee and more',
      features: ['BRCGS & ISO 22000', 'Barrier liners available', 'Thorough QMS', 'Food contact materials'],
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      name: 'Pharmaceuticals',
      icon: '💊',
      description: 'High protection for capsules, adjuvants and intermediates',
      features: ['Maximum protection', 'Contamination prevention', 'Specialized production', 'Clean room options'],
      gradient: 'from-red-600 to-rose-500'
    },
    {
      name: 'Mining',
      icon: '⛏️',
      description: 'Safe handling of ores, minerals and salt',
      features: ['UN certified options', 'ATEX compliance', 'Appropriate liners', 'Difficult conditions rated'],
      gradient: 'from-stone-600 to-zinc-500'
    },
    {
      name: 'Waste Management',
      icon: '♻️',
      description: 'Construction waste, industrial waste, and recycling materials',
      features: ['Asbestos-safe bags', 'Reusable multi-trip', 'rPP Responsible Line', 'UN certified variants'],
      gradient: 'from-green-600 to-lime-500'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                Industry Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Industries We Serve</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized packaging solutions tailored to 8 different industries and sectors. 
                From food to chemicals, agriculture to pharmaceuticals.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                >
                  <div className={`h-48 bg-gradient-to-br ${industry.gradient} flex items-center justify-center`}>
                    <div className="text-7xl">{industry.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <ul className="space-y-2">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-6">Need Industry-Specific Solutions?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Our experts understand your industry requirements and will design the perfect packaging solution
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
                Contact Industry Experts
              </Link>
            </motion.div>
          </div>
        </section>
    </main>
  )
}
