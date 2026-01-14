'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 selection:bg-emerald-500/30">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-32 px-6">
        {/* Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-emerald-600/10 blur-[150px] rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-10 px-8 py-3 bg-slate-900/5 backdrop-blur-2xl rounded-full border border-slate-900/5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] text-slate-900 font-black uppercase tracking-[0.5em] opacity-60">
                Career Opportunities
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-[1.1] tracking-tighter"
          >
            <span className="block text-slate-900">Join Our</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-700 text-transparent bg-clip-text italic font-serif py-4">
              Legacy in Motion
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
              There are currently no open vacancies, but we are always looking for pioneers to forward our CV for a <span className="text-slate-900 font-medium">spontaneous application</span> or internship.
            </p>

            <div className="inline-flex items-center gap-4 p-8 bg-slate-50 backdrop-blur-3xl rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <p className="text-sm text-slate-500 font-medium tracking-wide">Keep an eye on this page for future openings.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-[12px] font-black text-emerald-600 uppercase tracking-[0.6em] mb-6">Direct Channels</h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">Get in Touch</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Belgium */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white rounded-[3rem] p-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-500/10 transition-colors">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h2.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">Belgium</h3>
                </div>
                <a
                  href="mailto:jobs@lescobags.com"
                  className="inline-flex items-center gap-4 text-xl font-bold text-slate-400 hover:text-slate-900 transition-colors group/link"
                >
                  <span className="w-10 h-px bg-slate-200 group-hover/link:w-16 transition-all" />
                  jobs@lescobags.com
                  <svg className="w-6 h-6 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Serbia */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white rounded-[3rem] p-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-emerald-500/10 transition-colors">
                    <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h2.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">Serbia</h3>
                </div>
                <a
                  href="mailto:jobs.serbia@lescobags.com"
                  className="inline-flex items-center gap-4 text-xl font-bold text-slate-400 hover:text-slate-900 transition-colors group/link"
                >
                  <span className="w-10 h-px bg-slate-200 group-hover/link:w-16 transition-all" />
                  jobs.serbia@lescobags.com
                  <svg className="w-6 h-6 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Job Section */}
      <section className="py-32 px-6 relative bg-white">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-white rounded-[3rem] p-12 md:p-20 border border-slate-100 shadow-sm overflow-hidden group-hover:shadow-2xl transition-all duration-700">
              {/* Decorative Background Icon */}
              <div className="absolute -top-10 -right-10 opacity-[0.03] rotate-12 group-hover:rotate-6 transition-transform duration-700">
                <svg className="w-64 h-64 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>

              <div className="max-w-2xl relative z-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Knowledge <br /> <span className="text-emerald-600 italic font-serif">Gateways</span></h2>
                </div>

                <p className="text-xl text-slate-400 leading-relaxed mb-12 font-light">
                  Seeking a student job at <span className="text-slate-900 font-medium">Lescobags Belgium</span>? Complete our educational info document and connect with our human performance team at{' '}
                  <a
                    href="mailto:hr@lescobags.com"
                    className="text-emerald-600 hover:text-emerald-700 font-bold underline decoration-emerald-500/30 underline-offset-8 transition-colors"
                  >
                    hr@lescobags.com
                  </a>.
                </p>

                <motion.a
                  href="/documents/student-job-info.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-6 px-10 py-5 bg-slate-900 text-white rounded-[2rem] font-black hover:bg-emerald-600 transition-all duration-500 text-lg group/btn shadow-xl shadow-slate-900/10"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-emerald-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  Download Protocol
                  <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Image Section - Final CTA */}
      <section className="relative py-48 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jobs/big-bags-harbor.jpeg"
            alt="Big bags at harbor"
            fill
            className="object-cover scale-110 opacity-40 grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-6xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              Build The <br /> <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-transparent bg-clip-text italic font-serif py-2">Future</span>
            </h2>
            <p className="text-2xl text-slate-400 mb-16 leading-relaxed font-light max-w-2xl mx-auto italic border-r-2 border-emerald-500/30 pr-8">
              Be part of a company with over 100 years of excellence. We&apos;re always looking for talents to join our evolving ecosystem.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-14 py-7 bg-slate-900 text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-slate-900/20 hover:bg-emerald-600 transition-all group"
              >
                Inquire Professionally
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
