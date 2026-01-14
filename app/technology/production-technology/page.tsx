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
    <main className="min-h-screen bg-white pt-24 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-40 px-6 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-green-200/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <motion.div
            className="mb-12 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="w-4 h-[1px] bg-blue-600/30"></span>
            <Link href="/technology" className="hover:text-blue-600">Technology</Link>
            <span className="w-4 h-[1px] bg-blue-600/30"></span>
            <span className="text-gray-900">Production</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-9xl font-black text-gray-900 mb-10 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Production <br /> <span className="bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text text-transparent italic">Intelligence</span>
          </motion.h1>

          <motion.p
            className="text-2xl text-gray-600 max-w-4xl leading-relaxed mb-12 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We operate a <span className="text-blue-700 font-semibold italic">vertically integrated ecosystem</span> where every stage of production—from polymer extrusion to technical weaving—is monitored by expert intelligence.
          </motion.p>
        </div>
      </section>

      {/* Production Sites */}
      <section className="py-32 px-6 relative bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-slate-50/50 -skew-y-3 origin-top-right"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="space-y-32"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {productionSites.map((site, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-1.5 h-12 bg-blue-600 rounded-full"></div>
                      <div>
                        <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-600 mb-1">{site.location}</h3>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">{site.title}</h2>
                      </div>
                    </div>

                    <div className="mb-10 p-8 bg-blue-50/50 rounded-[2rem] border border-blue-100/50">
                      <p className="text-xl text-gray-600 leading-relaxed font-light italic">
                        {site.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                      {site.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:border-blue-200 transition-colors">
                          <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center flex-shrink-0 text-blue-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <span className="text-sm font-bold text-gray-700 leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Site Visuals */}
                  <div className="relative min-h-[500px]">
                    {site.images ? (
                      <div className="h-full grid grid-rows-2 gap-6">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group/img">
                          <Image
                            src={site.images[0].src}
                            alt={site.images[0].alt}
                            fill
                            className="object-cover scale-110 group-hover/img:scale-100 transition-transform duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <p className="text-white font-black uppercase tracking-widest text-sm">{site.images[0].title}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          {site.images.slice(1, 3).map((img, idx) => (
                            <div key={idx} className="relative rounded-[2rem] overflow-hidden shadow-xl group/sub">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover scale-110 group-hover/sub:scale-100 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover/sub:bg-transparent transition-colors"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="h-full bg-slate-900 rounded-[3rem] p-12 flex flex-col justify-end text-white overflow-hidden relative shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="relative">
                          <div className="text-6xl font-black opacity-20 mb-4 tracking-tighter">CENTRAL HUB</div>
                          <h4 className="text-3xl font-bold mb-4 italic">Operational Excellence</h4>
                          <p className="text-gray-300 font-light max-w-sm">Strategic location enabling flexible logistics and just-in-time printing capabilities.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-green-950 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.2] pointer-events-none"></div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-green-600/10 rounded-full filter blur-[120px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">
            Production <br /> <span className="text-green-500 italic">Ecosystem</span>
          </h2>
          <p className="text-2xl text-blue-100/90 mb-16 leading-relaxed font-light">
            Discover how our state-of-the-art facilities deliver superior packaging solutions for global leaders.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/facility"
                className="inline-flex items-center gap-3 px-12 py-6 bg-white text-slate-900 rounded-[2rem] font-black hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all duration-300 text-lg"
              >
                View Our Facility
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-12 py-6 border-2 border-white/30 text-white rounded-[2rem] font-black hover:bg-white/10 hover:border-white transition-all duration-300 text-lg"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
