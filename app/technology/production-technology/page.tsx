'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProductionTechnologyPage() {
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

  const features = [
    'Efficient output',
    'Consistent high quality',
    'Safe production environment'
  ]

  const productionSites = [
    {
      title: 'Serbia - production',
      location: 'Novi Sad',
      size: '20,000 m²',
      description: 'Our largest production site is located near the Serbian city of Novi Sad. This 20,000-m2 site is equipped with a high-tech product line. So it is the European production facility for food-safe big bags and other woven packaging products. Our highly trained team supervises the entire production flow.',
      features: [
        'Production of big bags, container liners and block bottom bags.',
        'High-tech production in a conditioned environment that is food safe.',
        'Consistent high quality thanks to our certified quality policy (BRCGS, ISO22001, ISO9001, ISO14001, ISO45001).',
        'Flexible supply for the European market thanks to central location.',
        'Recycling unit for production of recycled polypropylene. We use this to make the Responsible Line recycled big bags.',
        'Reprocessing of big bags to make multi-trip big bags by giving them a new liner.'
      ],
      images: [
        { title: 'Weaving', alt: 'Weaving process', src: '/images/technology/weaving-serbia.jpg' },
        { title: 'Confection', alt: 'Confection process', src: '/images/technology/confection.jpg' },
        { title: 'AD Star line for production of block bottom bags', alt: 'AD Star production line', src: '/images/technology/ad-star-line.jpg' }
      ]
    },
    {
      title: 'Arendonk - printing',
      location: 'Arendonk',
      description: 'The printing unit for the pillow bags is located at our head office in Arendonk. Here we print plastic WPP bags and jute bags with your product presentation.',
      features: [
        'Personalised printing on packaging.',
        'Printing of variable data such as batch codes and production details on packaging.',
        'Flexography machines for five-colour printing.',
        'Adapted flat stacking of printed bags for efficient processing on automatic filling lines.',
        'Last-minute printing of standard bags if they are in stock at our adjacent central warehouse.'
      ]
    },
    {
      title: 'Arendonk – central warehousing',
      location: 'Arendonk',
      size: '12,000 m²',
      description: 'The central warehouse is located at our head office in Arendonk. From this central hub, we distribute our products throughout western Europe.',
      features: [
        '12,000-m2 warehouse to store our packaging.',
        'Convenient location near the ports of Antwerp and Rotterdam.',
        'Special unit for repacking and handling packaging.'
      ]
    },
    {
      title: 'Arendonk and Novi Sad - Research & Development',
      location: 'Arendonk & Novi Sad',
      description: 'Optimal packaging should meet the requirements of your product and operating processes to the full. So our R&D team works daily to develop and improve various packagings.',
      features: [
        'Product design for improved protection and easy use.',
        'Minimum use of material thanks to optimised tape extrusion and appropriate fabric constructions.',
        'Innovative recycling techniques to reprocess post-consumer big bags to make recycled polypropylene.',
        'Adapted production techniques for the Responsible Line recycled PP packaging.'
      ]
    }
  ]

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
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <motion.div 
            className="mb-8 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            {' > '}
            <Link href="/technology" className="hover:text-blue-600 transition-colors">Technology</Link>
            {' > '}
            <span className="text-gray-900">Production technology</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Production technology
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our production sites are equipped with state of the art technology. We are able to produce sophisticated packaging thanks to this vertically integrated production line. In addition, the conditioned production environment guarantees the safety of our staff and your products.
          </motion.p>

          {/* Features List */}
          <motion.ul 
            className="flex flex-wrap gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-lg text-gray-700">{feature}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Production Sites */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Production sites
          </motion.h2>

          <motion.div 
            className="space-y-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {productionSites.map((site, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <h3 className="text-3xl font-bold text-gray-900">{site.title}</h3>
                      {site.size && (
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                          {site.size}
                        </span>
                      )}
                    </div>
                    {site.location && (
                      <p className="text-lg text-blue-600 font-semibold mb-6">
                        {site.location}
                      </p>
                    )}
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {site.description}
                    </p>
                    <ul className="space-y-4">
                      {site.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Images */}
                  {site.images && (
                    <div className="grid grid-cols-1 gap-6">
                      {site.images.map((img, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          className="relative aspect-video rounded-xl overflow-hidden shadow-lg"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <p className="text-white font-semibold">{img.title}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 15,
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
            Experience Our Production Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Discover how our state-of-the-art facilities deliver superior packaging solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/facility" 
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 text-lg"
              >
                View Our Facility
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-10 py-5 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

