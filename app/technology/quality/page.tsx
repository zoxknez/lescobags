'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function QualityPage() {
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

  const certificates = [
    'BRCGS standard',
    'ISO 22000',
    'ISO 9001',
    'ISO 14001',
    'ISO 45001',
    'EFIBCA Q'
  ]

  const foodSafetyFeatures = [
    {
      title: 'Expert internal quality department',
      description: 'Our expert internal quality department constantly oversees production.'
    },
    {
      title: 'Clean room production',
      description: 'Production takes place in clean room environments ensuring the highest standards.'
    },
    {
      title: 'HACCP & GMP procedures',
      description: 'Food safety risks are excluded by applying HACCP (Hazard Analysis and Critical Control Points) and GMP (Good Manufacturing Practice) quality procedures.'
    },
    {
      title: 'Critical Control Points',
      description: 'Contamination is avoided thanks to integrated Critical Control Points (CCP):',
      subFeatures: [
        'Visual control on contrast light table',
        'Air wash technology',
        'Metal detection',
        'Preventive measures such as an HEPA-filtered confection environment with positive pressure'
      ]
    }
  ]

  const testingLabFeatures = [
    'Intermediary products tested at every stage of production.',
    'Final finished bags tested and validated.',
    'Authorised by the IBE-BVI as an accredited big bag testing laboratory in accordance with the ISO21898 standard.'
  ]

  return (
    <main className="min-h-screen bg-white pt-24 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-44 px-6 bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-100/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <motion.div
            className="mb-12 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-600/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link href="/" className="hover:text-emerald-600">Home</Link>
            <span className="w-4 h-[1px] bg-emerald-600/30"></span>
            <Link href="/technology" className="hover:text-emerald-600">Technology</Link>
            <span className="w-4 h-[1px] bg-emerald-600/30"></span>
            <span className="text-gray-900">Quality</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-9xl font-black text-gray-900 mb-10 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Uncompromising <br /> <span className="bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text text-transparent italic">Standards</span>
          </motion.h1>

          <motion.p
            className="text-2xl text-gray-600 max-w-4xl leading-relaxed mb-12 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Quality is not a department—it is a <span className="text-emerald-700 font-semibold italic">foundational mandate</span>. Our certified production lines and accredited labs guarantee absolute safety for every industry.
          </motion.p>
        </div>
      </section>

      {/* Certificates Section (Moved up for authority) */}
      <section className="py-32 px-6 bg-white relative z-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-emerald-600 mb-4">GLOBAL COMPLIANCE</h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Certified Excellence</h3>
            </div>
            <p className="text-xl text-gray-500 font-light italic max-w-sm">Every bag is a testament to international safety protocols.</p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl border border-gray-50 hover:border-emerald-100 transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">{cert}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Food-Safe Packaging */}
      <section className="py-32 px-6 relative overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">Food-Safe Vertical</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">The food industry demands absolute purity. We deliver it through a stringent Quality Management System (QMS).</p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {foodSafetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-700 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-emerald-600 rounded-[1rem] flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {feature.description}
                    </p>
                    {feature.subFeatures && (
                      <div className="mt-8 space-y-3">
                        {feature.subFeatures.map((sub, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                            {sub}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* In-House Testing Lab */}
      <section className="py-32 px-6 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-emerald-600 mb-6">INTERNAL VALIDATION</h2>
              <h3 className="text-5xl font-black text-gray-900 mb-8 tracking-tight">In-house laboratory</h3>
              <p className="text-2xl text-gray-600 leading-relaxed font-light mb-10 italic">
                Our quality staff carry out constant <span className="text-emerald-600 font-bold">inline tests</span> in our accredited lab. This enables us to guarantee safety, quality and functionality beyond industry norms.
              </p>

              <div className="space-y-6">
                {testingLabFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-md">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" /></svg>
                    </div>
                    <span className="text-lg font-bold text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl group">
                <Image
                  src="/images/technology/testing-fabric.jpg"
                  alt="In-house testing lab"
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent flex items-end p-12">
                  <div className="max-w-md">
                    <div className="inline-block px-4 py-2 bg-emerald-500 text-white text-xs font-black uppercase tracking-widest rounded-full mb-6 shadow-xl">ISO 21898 ACCREDITED</div>
                    <h4 className="text-4xl font-black text-white mb-4">Science of <span className="text-emerald-400 italic">Integrity</span></h4>
                    <p className="text-emerald-50/70 font-light">Every fiber is subjected to tensile, UV, and load testing before shipment.</p>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center p-4 boarder border-emerald-50 z-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-full h-full text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 bg-gradient-to-br from-emerald-950 via-slate-950 to-blue-950 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.2] pointer-events-none"></div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-600/10 rounded-full filter blur-[120px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">
            Quality is <br /> <span className="text-emerald-500 italic">Total</span>
          </h2>
          <p className="text-2xl text-emerald-100/90 mb-16 leading-relaxed font-light">
            Partner with a manufacturer where safety is woven into every thread.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-12 py-6 bg-white text-emerald-950 rounded-[2rem] font-black hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] transition-all duration-300 text-lg"
              >
                Start Your Project
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
