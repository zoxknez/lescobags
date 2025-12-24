'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CustomDesignPage() {
  const designs = [
    {
      title: 'U-Panel Bag',
      description: 'Long U-shaped panel forms the bottom and two side walls. Other two sides sewn in. The most common standard design.',
      icon: '📦',
      features: ['Cost-effective standard', 'Quick production', 'Versatile options', 'All sizes available'],
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      title: '4-Panel Big Bag',
      description: 'Four separate side panels and bottom panel sewn together. Virtually all options can be added to this model.',
      icon: '🔲',
      features: ['Maximum customization', 'Premium strength', 'Clean corners', 'Professional appearance'],
      gradient: 'from-green-600 to-emerald-500'
    },
    {
      title: 'Tubular Bag',
      description: 'Produced from tubular fabric woven on round loom. Often as one/two-loop or with cross corner loops.',
      icon: '⭕',
      features: ['Seamless sides', 'Round loom production', 'Efficient design', 'Reduced sewing'],
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      title: 'Quadro Bag (Q-Bag)',
      description: 'Form-stable with internal baffles between walls. Maintains rectangular shape when filled for optimal loading.',
      icon: '🟦',
      features: ['Form stability', 'Optimal load factor', 'Pallet dimensions', 'Net baffle options', 'Perfect for powders'],
      gradient: 'from-amber-600 to-orange-500'
    },
    {
      title: 'Conical Bag',
      description: 'Pyramid-shaped corners with fabric sewn to create cone shape. Better product flow during filling/emptying.',
      icon: '🔺',
      features: ['Better flow', 'Direct valve connection', 'Efficient emptying', 'Reduced corners'],
      gradient: 'from-red-600 to-rose-500'
    },
    {
      title: 'Combo-Cube®',
      description: 'Patented by Louis Blockx. Baffles formed by side panels themselves - efficient alternative to quadro bag.',
      icon: '✨',
      features: ['Patented design', 'Cost-effective', 'Form-stable', 'Material efficient', 'Sturdy construction'],
      gradient: 'from-indigo-600 to-violet-500'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
                Tailored Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Custom Designs</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Big bags are used for a wide variety of purposes. We select an appropriate basic model for your 
                product and the path followed through your supply chain.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designs.map((design, index) => (
                <motion.div
                  key={design.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                >
                  <div className={`h-48 bg-gradient-to-br ${design.gradient} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <div className="text-7xl">{design.icon}</div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{design.title}</h3>
                    <p className="text-gray-600 mb-6">{design.description}</p>
                    
                    <div className="space-y-2">
                      {design.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-6">ISO 21898:2004 Certified Design</h2>
              <p className="text-xl text-gray-300 mb-6">
                All our big bag designs comply with ISO 21898:2004 certification standards, ensuring safety, 
                reliability, and quality in every bag we produce.
              </p>
              <ul className="space-y-4">
                {['Professional engineering team', 'Computer-aided design', 'Load testing verification', 'Safety factor 5:1 or 6:1'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-9xl">
              🎨
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
              <h2 className="text-4xl font-bold mb-6">Need a Custom Design?</h2>
              <p className="text-xl mb-8 text-indigo-100">
                Our R&D team will work with you to create the perfect big bag design for your specific application
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100">
                  Request Custom Design
                </Link>
                <Link href="/products/options" className="px-8 py-4 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 border-2 border-white/20">
                  View All Options
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
    </main>
  )
}
