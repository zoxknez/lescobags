'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'

export default function PillowBagsPage() {
  const bagTypes = [
    {
      title: 'Woven Plastic Bags',
      subtitle: 'Extremely strong and versatile',
      description: 'WPP bags are strong, versatile and reliable. Made of woven plastic fabric, possibly combined with inserted liners.',
      features: ['Personalized printing', 'Breathable if required', 'Moisture and leak-proof', 'Compatible with automatic filling'],
      gradient: 'from-purple-600 to-pink-500',
      link: '/products/pillow-bags/woven-plastic',
      icon: '🔷'
    },
    {
      title: 'Jute Bags',
      subtitle: 'Natural, strong packaging',
      description: 'Natural product made of jute plant fibers. Perfect for foodstuffs with biodegradable properties.',
      features: ['Perfect for foodstuffs', 'Biodegradable', 'Natural ventilation', 'Absorbs moisture'],
      gradient: 'from-amber-600 to-orange-500',
      link: '/products/pillow-bags/jute-bags',
      icon: '🌿'
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm text-gray-600 mb-6">
              <Link href="/" className="hover:text-purple-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-purple-600">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Pillow Bags</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Pillow Bags</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Most versatile standard packaging for bulk goods up to 100 kg. Easy to transport, stack and fill. 
                  Available in plastic fabric, natural jute or plastic film.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="px-4 py-3 bg-white rounded-lg shadow-sm border">
                    <div className="text-2xl font-bold text-purple-600">Up to 100kg</div>
                    <div className="text-sm text-gray-600">Capacity</div>
                  </div>
                  <div className="px-4 py-3 bg-white rounded-lg shadow-sm border">
                    <div className="text-2xl font-bold text-pink-600">Custom</div>
                    <div className="text-sm text-gray-600">Printing Available</div>
                  </div>
                </div>
                <Link href="/contact" className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700">
                  Request Quote
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-8xl">
                🎒
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Available Types</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {bagTypes.map((bag, i) => (
                <Link key={i} href={bag.link}>
                  <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                    <div className={`h-48 bg-gradient-to-br ${bag.gradient} flex items-center justify-center text-6xl`}>
                      {bag.icon}
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{bag.title}</h3>
                      <p className="text-sm text-purple-600 font-semibold mb-4">{bag.subtitle}</p>
                      <p className="text-gray-600 mb-6">{bag.description}</p>
                      <ul className="space-y-2">
                        {bag.features.map((f, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
