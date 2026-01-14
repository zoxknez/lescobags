'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function TechnologyPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <main className="min-h-screen bg-white pt-24 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-48 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-teal-200/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-xl border border-white/80 text-blue-900 rounded-full text-sm font-bold mb-12 shadow-xl"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
            <span className="tracking-widest uppercase">The Future of Packaging</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-9xl font-black mb-12 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-950 to-teal-900 bg-clip-text text-transparent">
              Technology <br className="hidden md:block" />
              <span className="italic">Pillars</span>
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our woven bags are <span className="text-blue-700 font-semibold">high-tech precision instruments</span>. We combine decades of expertise with cutting-edge vertical integration.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Technology Sections */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 mb-32"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Production Technology */}
            <motion.div
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-blue-50/30 rounded-[3rem] p-12 shadow-2xl hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] transition-all duration-700 border border-blue-50/50"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-12">
                  <div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-600/60 vertical-text">
                    INNOVATION
                  </div>
                </div>

                <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Production Technology</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-12 font-light">
                  State-of-the-art vertically integrated production lines ensuring maximum safety and sophistication in every fiber.
                </p>

                <div className="mt-auto">
                  <Link
                    href="/technology/production-technology"
                    className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-blue-600 hover:shadow-2xl transition-all duration-300 group/btn"
                  >
                    Explore Production
                    <svg className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Quality */}
            <motion.div
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-emerald-50/30 rounded-[3rem] p-12 shadow-2xl hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] transition-all duration-700 border border-emerald-50/50"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-12">
                  <div className="w-24 h-24 bg-emerald-600 rounded-[2rem] flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-black tracking-[0.3em] uppercase text-emerald-600/60 vertical-text">
                    CERTIFIED
                  </div>
                </div>

                <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Quality Standards</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-12 font-light">
                  Rigorous quality policies woven into every process, supported by our accredited in-house testing laboratory.
                </p>

                <div className="mt-auto">
                  <Link
                    href="/technology/quality"
                    className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-emerald-600 hover:shadow-2xl transition-all duration-300 group/btn"
                  >
                    View Our Quality
                    <svg className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Process Overview */}
          <div className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Technical Workflow</h2>
              <p className="text-xl text-gray-500 font-light italic">The alchemy of converting granules into high-tech packaging.</p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Connection Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-teal-100 to-emerald-100 -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Raw Material",
                  text: "Premium PP granulate selection & thermal preparation.",
                  color: "blue",
                  bgClass: "bg-blue-600"
                },
                {
                  step: "02",
                  title: "Tape & Weaving",
                  text: "High-speed extrusion and circular loom circularity.",
                  color: "teal",
                  bgClass: "bg-teal-600"
                },
                {
                  step: "03",
                  title: "Confection",
                  text: "Ultrasonic cutting and technical sewing precision.",
                  color: "slate",
                  bgClass: "bg-slate-600"
                },
                {
                  step: "04",
                  title: "Validation",
                  text: "Accredited lab testing and final ISO validation.",
                  color: "emerald",
                  bgClass: "bg-emerald-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative z-10"
                >
                  <div className={`bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group`}>
                    <div className={`w-14 h-14 ${item.bgClass} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                      <span className="text-xl font-black">{item.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Technology Features Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-32"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: "Advanced Installations", text: "State-of-the-art machinery and equipment for precision manufacturing.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", colorClass: "text-blue-600 bg-blue-50 group-hover:bg-blue-600" },
              { title: "Vertically Integrated", text: "Complete control over the entire production process from granulate to bag.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", colorClass: "text-teal-600 bg-teal-50 group-hover:bg-teal-600" },
              { title: "Clean Environment", text: "Climate-controlled production facilities for optimal quality and safety.", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z", colorClass: "text-slate-600 bg-slate-50 group-hover:bg-slate-600" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group bg-white/40 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/80 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className={`w-16 h-16 ${feature.colorClass} rounded-2xl flex items-center justify-center mb-8 group-hover:text-white transition-all duration-500`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-teal-950 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.2] pointer-events-none"></div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full filter blur-[120px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            className="text-5xl md:text-8xl font-black mb-12 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Engineering <br /> <span className="text-blue-500 italic">Excellence</span>
          </motion.h2>
          <p className="text-2xl text-blue-100/90 mb-16 leading-relaxed font-light">
            Discover how our state-of-the-art technology delivers superior packaging solutions for global leaders.
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
