'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

function Counter({ target, duration = 2000 }: { target: number, duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      const steps = 60
      const interval = duration / steps
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        setCount(Math.floor(target * progress))
        if (currentStep >= steps) {
          setCount(target)
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isInView, target, duration])

  return <span ref={ref}>{count}</span>
}

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <main className="min-h-screen bg-white pt-24 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-[500px] h-[500px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -50, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/90 to-emerald-600/90 text-white rounded-full text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>104 Years of Excellence</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-950 to-emerald-900 bg-clip-text text-transparent">
              About Us
            </span>
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Excellence in packaging solutions since <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 font-bold">1919</span>
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                Lescobags d.o.o.
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-emerald-600 mb-10 rounded-full"></div>
              <h3 className="text-2xl text-blue-950 font-semibold mb-8 leading-relaxed">
                We accompany your business as we help it grow with technical precision and dedication.
              </h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Lescobags d.o.o. began its journey in the FIBC segment with a small, dedicated team
                  of engineers offering reliable services with unmatched technical precision.
                </p>
                <p>
                  We have integrated our services to become a one-stop solutions shop for our clients
                  for their packaging needs. We evaluate each request systematically, present customized
                  solutions, and manufacture FIBCs tailored to the needs of our client.
                </p>
                <p>
                  Our scalable infrastructure is a testament to our excellence, and operates on the
                  latest technologies the world of packaging has to offer.
                </p>
                <p>
                  Being a small to medium sized company allows us to minimise and control overheads as
                  well as provide our products at very competitive prices.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="aspect-square bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative border border-white"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
                <div className="h-full flex flex-col items-center justify-center p-6 md:p-12 relative z-10">
                  <div className="text-center w-full max-w-[280px] md:max-w-none mx-auto">
                    <motion.div
                      className="text-6xl md:text-9xl font-black mb-4 tracking-tighter"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                        <Counter target={104} />+
                      </span>
                    </motion.div>
                    <div className="text-xl md:text-4xl text-slate-900 font-black mb-1 tracking-tight">Years of Excellence</div>
                    <div className="text-xs md:text-xl text-slate-400 font-medium opacity-60">Since 1919</div>

                    <div className="mt-8 md:mt-16 pt-8 md:pt-12 border-t border-slate-200/60 w-full">
                      <div className="flex justify-center md:justify-between items-start gap-8 md:gap-0">
                        <div className="text-center md:text-left flex-1">
                          <div className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent leading-none mb-3">
                            <Counter target={2000} />m²
                          </div>
                          <div className="text-[11px] md:text-sm font-black text-slate-400 uppercase tracking-[0.2em] leading-tight">Production</div>
                        </div>
                        <div className="w-px h-12 bg-slate-100 md:hidden"></div>
                        <div className="text-center md:text-left flex-1">
                          <div className="text-4xl md:text-6xl font-black bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent leading-none mb-3">
                            <Counter target={3} />
                          </div>
                          <div className="text-[11px] md:text-sm font-black text-slate-400 uppercase tracking-[0.2em] leading-tight">ISO Certs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline */}
          <section className="mb-32 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20 text-center tracking-tight">Our Journey</h2>

            <div className="relative">
              {/* Vertical Line - Hidden on small mobile, visible from sm up */}
              <div className="absolute left-[30px] md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-100 via-emerald-100 to-blue-100"></div>

              <div className="space-y-16 relative">
                {[
                  { year: "1919", title: "Foundation", text: "Company established in Leskovac, Serbia", color: "blue", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
                  { year: "2000s", title: "Modernization", text: "Invested in state-of-the-art FIBC technology", color: "teal", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                  { year: "Present", title: "Global Excellence", text: "ISO certified with international partnerships", color: "emerald", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Content Section */}
                    <div className={`flex-1 w-full pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-50 hover:-translate-y-1">
                        <div className={`text-4xl font-bold bg-gradient-to-r from-${item.color}-700 to-${item.color}-500 bg-clip-text text-transparent mb-2`}>{item.year}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 font-light text-lg">{item.text}</p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-0 md:relative md:left-auto w-16 h-16 bg-white border-4 border-gray-50 flex items-center justify-center z-20 rounded-full shadow-lg">
                      <div className={`w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center shadow-inner`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                    </div>

                    {/* Empty Space for alignment */}
                    <div className="flex-1 hidden md:block"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Values */}
          <motion.div
            className="mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20 text-center tracking-tight">Our Values</h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: "Quality First", text: "We never compromise on quality. Every product meets the highest international standards.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "blue" },
                { title: "Customer Focus", text: "Your success is our success. We provide personalized solutions for every client.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", color: "teal" },
                { title: "Innovation", text: "Constantly evolving with the latest technologies and packaging solutions.", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "emerald" }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 flex flex-col h-full"
                >
                  <div className={`w-16 h-16 bg-${value.color}-50 text-${value.color}-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    {value.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Production Area", value: 2000, unit: "m²", color: "from-blue-600 to-blue-400" },
              { label: "ISO Certifications", value: 3, unit: "", color: "from-teal-600 to-teal-400" },
              { label: "Production Capacity", value: "24/7", unit: "", color: "from-emerald-600 to-emerald-400" },
              { label: "Quality Assured", value: 100, unit: "%", color: "from-slate-700 to-slate-500" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 text-center hover:shadow-xl transition-all"
              >
                <div className={`text-3xl md:text-5xl font-bold mb-3 tracking-tighter bg-gradient-to-r ${stat.color} bg-clip-text text-transparent text-balance`}>
                  {typeof stat.value === 'number' ? <Counter target={stat.value} /> : stat.value}{stat.unit}
                </div>
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-emerald-950 text-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Partner with Excellence
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join hundreds of satisfied global clients who trust Lescobags for their specialized packaging needs.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-950 rounded-2xl font-bold hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all duration-300 text-lg"
              >
                Get in Touch
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/products"
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white/20 text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm"
              >
                View Products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
