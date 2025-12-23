'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'

export default function ContainerLinersPage() {
  const features = [
    { title: 'For 20 & 40-foot containers', icon: '📦', desc: 'Standard models for both container sizes' },
    { title: 'Food-safe materials', icon: '✅', desc: 'BRCGS and ISO 22000 certified production' },
    { title: 'Custom filling systems', icon: '⚙️', desc: 'Valves and flaps tailored to your needs' },
    { title: 'Dust & moisture protection', icon: '🛡️', desc: 'Sealed design prevents contamination' }
  ]

  const materials = [
    { name: 'PP Woven Fabric', desc: 'Standard material, optionally coated' },
    { name: 'PE Film (LDPE)', desc: 'Extruded polyethylene, welded construction' },
    { name: 'PP + PE Combination', desc: 'Combined materials for specific applications' }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 via-white to-red-50">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm text-gray-600 mb-6">
              <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span className="font-medium text-gray-900">Container Liners</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                <h1 className="text-5xl font-bold mb-6">Container Liners</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Convert a sea container instantly into a hygienic bulk container. The container liner forms a huge, 
                  sealed bag suspended inside the structure, protecting bulk products from contamination.
                </p>
                <Link href="/contact" className="inline-block px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700">
                  Get Quote
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="h-96 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center text-9xl">
                🚢
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-5xl mb-4">{f.icon}</div>
                  <h3 className="font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Materials</h2>
            <div className="space-y-4">
              {materials.map((m, i) => (
                <motion.div key={i} whileHover={{ x: 10 }} className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600">
                  <h3 className="font-bold text-xl mb-2">{m.name}</h3>
                  <p className="text-gray-600">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
