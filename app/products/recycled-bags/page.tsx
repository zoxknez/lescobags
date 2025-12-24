'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function RecycledBagsPage() {
  const benefits = [
    { title: 'Reduce new raw materials', icon: '📉', color: 'green' },
    { title: 'Lower plastic waste', icon: '♻️', color: 'blue' },
    { title: 'Reduce CO₂ footprint', icon: '🌍', color: 'emerald' },
    { title: 'Attain sustainability goals', icon: '🎯', color: 'teal' }
  ]

  const benefitColorClasses: Record<string, string> = {
    green: 'bg-green-50 border-green-200',
    blue: 'bg-blue-50 border-blue-200',
    emerald: 'bg-emerald-50 border-emerald-200',
    teal: 'bg-teal-50 border-teal-200'
  }

  const process = [
    { step: '1', title: 'Collection', desc: 'We collect used big bags from customers', icon: '📦' },
    { step: '2', title: 'Shredding & Cleaning', desc: 'Controlled washing to produce purified flakes', icon: '♻️' },
    { step: '3', title: 'Recycling', desc: 'Reprocess flakes to high-quality rPP granulate', icon: '🔄' },
    { step: '4', title: 'Extrusion', desc: 'Extruded and woven to fabric', icon: '🧵' },
    { step: '5', title: 'Production', desc: 'New bags fully up to standard', icon: '✅' }
  ]

  return (
    <main className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                Sustainable Packaging
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Recycled Bags</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sustainable business starts with responsible raw material management. We adopt the Closed Loop principle - 
                recycling used big bags to produce high-quality, recycled packaging.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`${benefitColorClasses[b.color] ?? 'bg-gray-50 border-gray-200'} p-6 rounded-xl text-center border-2`}
                >
                  <div className="text-5xl mb-3">{b.icon}</div>
                  <h3 className="font-bold text-gray-900">{b.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Louis Blockx Responsible Line</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">Surprisingly sustainable!</p>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-green-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {[
                      'We control the entire production process',
                      'rPP content between 40% and 100%',
                      'Production according to ISO standards',
                      'Own testing lab accredited by Belgian Packaging Institute',
                      'Available for various sectors (except food-safe)',
                      'rPP fabric for bags and container liners'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="h-96 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-9xl text-white">
                ♻️
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">How Does It Work?</h2>
            <p className="text-xl text-gray-600 text-center mb-12">A fully integrated system</p>
            
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {p.step}
                    </div>
                    <div className="text-4xl mb-3">{p.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-600">{p.desc}</p>
                  </div>
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-green-300" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
              <h2 className="text-4xl font-bold mb-6">Join the Closed Loop</h2>
              <p className="text-xl mb-8 text-green-100">
                We close the loop by recycling used big bags and reprocessing them to make high-quality rPP granulate
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100">
                Learn More About Recycling
              </Link>
            </motion.div>
          </div>
        </section>
    </main>
  )
}
