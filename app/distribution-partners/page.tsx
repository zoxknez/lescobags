'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function DistributionPartnersPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <main className="min-h-screen bg-white pt-24 selection:bg-emerald-500/30">
      {/* Header */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-32 px-6">
        {/* Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-blue-400/20 blur-[150px] rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 px-8 py-3 bg-slate-900/5 backdrop-blur-2xl rounded-full border border-slate-900/5 shadow-sm mb-12"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] text-slate-900 font-black uppercase tracking-[0.5em] opacity-60">
              Global Distribution Network
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-9xl font-black mb-10 tracking-tighter"
          >
            <span className="block text-slate-900">Distribution</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-700 text-transparent bg-clip-text italic font-serif py-4">
              Partners
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-3xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light italic"
          >
            Connect with one of Lescobags&apos;s <span className="text-slate-900 font-medium not-italic">Authorized Distributors</span> across the globe.
          </motion.p>
        </div>
      </section>

      {/* Main Content / Narrative */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-20 items-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/5 blur-3xl rounded-full" />
              <div className="relative space-y-8">
                <p className="text-2xl text-slate-600 leading-relaxed font-light">
                  In order to provide a <span className="text-slate-900 font-bold">better and faster service</span> to our customers, we work hard to expand our sales network.
                </p>
                <div className="h-px w-20 bg-emerald-500/30" />
                <p className="text-xl text-slate-500 leading-relaxed">
                  The partnership with our distributors is based on trust and the understanding of each other&apos;s high-performance objectives.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
              <p className="text-lg text-slate-600 leading-relaxed relative z-10">
                Our distributors offer their customers one or several Lescobags products. Based on the wide Lescobags portfolio and services, we develop <span className="text-emerald-600 font-bold">innovative solutions</span> together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners List */}
      <section className="py-32 px-6 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-[12px] font-black text-emerald-600 uppercase tracking-[0.6em] mb-6">Our Ecosystem</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Active Distribution Points</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* DRINA-KOMERC */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white rounded-[3rem] p-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-emerald-500 transition-colors duration-500">
                      <svg className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight">DRINA-KOMERC d.o.o.</h3>
                      <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase mt-1">Authorized Partner</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-100">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Regional HQ</h4>
                      <p className="text-slate-600 font-medium">Karakaj bb, 75400 Zvornik, BiH</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-100">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Direct Line</h4>
                      <a href="tel:+38765660099" className="text-slate-900 font-black text-lg hover:text-emerald-600 transition-colors tracking-tight">
                        +387 65 660 099
                      </a>
                    </div>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="tel:+38765660099"
                    className="w-full h-16 bg-slate-900 text-white rounded-2xl font-black flex items-center justify-center gap-4 hover:bg-emerald-600 transition-all group/btn shadow-xl shadow-slate-900/10"
                  >
                    Direct Contact
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Become a Partner Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-emerald-50 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center border border-emerald-100/50 shadow-sm group hover:bg-white transition-all duration-700"
            >
              <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center mb-10 shadow-xl shadow-emerald-900/5 group-hover:bg-emerald-500 transition-colors duration-500">
                <svg className="w-12 h-12 text-emerald-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Expand With Us</h3>
              <p className="text-xl text-slate-400 font-light max-w-sm mb-12">
                Interested in distributing Lescobags products? Join our <span className="text-emerald-600 font-medium">global excellence circle</span>.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 px-12 py-5 bg-emerald-500 text-white rounded-2xl font-black hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20"
                >
                  Apply Professionally
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-[12px] font-black text-emerald-600 uppercase tracking-[0.6em] mb-6">Partnership Upside</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Collaboration Framework</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-emerald-500 transition-colors duration-500">
                <svg className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Competitive Pricing</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Attractive margins and <span className="text-slate-900 font-medium">wholesale structures</span> tailored for high-scale distribution partners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-blue-500 transition-colors duration-500">
                <svg className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Full Ecosystem</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Comprehensive <span className="text-slate-900 font-medium">marketing assets</span> and technical training for elite market positioning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-teal-500 transition-colors duration-500">
                <svg className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">ISO Excellence</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Guaranteed <span className="text-slate-900 font-medium">ISO certified reliability</span> with consistent premium grade benchmarks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
