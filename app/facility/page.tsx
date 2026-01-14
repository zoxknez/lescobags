'use client'

import { motion } from 'framer-motion'

export default function FacilityPage() {
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

  const facilities = [
    { icon: '🏭', title: 'Main Production Hall', size: '2000 m²', status: 'Active' },
    { icon: '📦', title: 'Expansion Hall', size: '2000 m²', status: 'Ready' },
    { icon: '🏗️', title: 'Future Expansion', size: '5000 m²', status: 'Available Land' },
  ]

  const equipment = [
    { name: 'Circular Looms', count: '24 units', description: 'High-speed production' },
    { name: 'Cutting Machines', count: '8 units', description: 'Precision cutting' },
    { name: 'Sewing Machines', count: '32 units', description: 'Expert finishing' },
    { name: 'Quality Control', count: 'Automated', description: 'ISO certified' },
  ]

  return (
    <main className="min-h-screen bg-white pt-24 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-40 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
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
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cube-grid.png')]"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-xl border border-white/80 text-blue-900 rounded-full text-sm font-bold mb-10 shadow-xl"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
            <span className="tracking-widest uppercase">Infrastructure & Capacity</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black mb-10 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 bg-clip-text text-transparent">
              Facility Excellence
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our core manufacturing hub in <span className="text-blue-700 font-semibold">Serbia</span> combines century-old standards with ultra-modern production technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-4 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/60 shadow-inner">
              <div className="px-8 py-6 text-center border-r border-white/40 last:border-0">
                <div className="text-3xl font-black text-blue-900 mb-1">9000m²</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Total Area</div>
              </div>
              <div className="px-8 py-6 text-center border-r border-white/40 last:border-0">
                <div className="text-3xl font-black text-blue-900 mb-1 italic">ISO</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Certified</div>
              </div>
              <div className="hidden md:block px-8 py-6 text-center">
                <div className="text-3xl font-black text-blue-900 mb-1">24/7</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Operation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* State-of-the-Art Manufacturing */}
      <section className="py-32 px-6 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-full h-full bg-slate-50/50 -skew-y-3 origin-top-right"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-10 tracking-tight leading-[1.1]">
                Advanced Manufacturing <br />
                <span className="text-blue-600 italic">Ecosystem</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Air-Conditioned Precision", text: "Our entire 2000m² complex is climate controlled to preserve raw material quality and worker comfort.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
                  { title: "Scalable Infrastructure", text: "Ready-to-use expansion halls and available land plots allow us to scale production up to 9000m² instantly.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" },
                  { title: "Integrated Production", text: "We combine high-speed circular looms with precision sewing and automated QC for maximum throughput.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gradient-to-tr from-blue-900 to-indigo-800 rounded-[4rem] p-12 overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-[3s]"></div>
                <div className="relative h-full flex flex-col justify-end text-white">
                  <div className="text-7xl font-black mb-4 opacity-20">L-2024</div>
                  <h3 className="text-3xl font-bold mb-4">Innovation First</h3>
                  <p className="text-lg text-blue-100 leading-relaxed font-light">
                    Our commitment to the latest technology ensures that every Lescobags product meets the highest international quality standards.
                  </p>
                </div>
                <div className="absolute top-12 right-12 w-32 h-32 border-2 border-white/20 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-blue-50 max-w-[240px]">
                <div className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Efficiency</div>
                <div className="text-2xl font-black text-gray-900">Highly Optimized Workflow</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Infrastructure */}
      <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
        {/* Subtle Background Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-blue-100 rounded-full opacity-50 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-50 rounded-full opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Facility Cards */}
          <div className="mb-32">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Production Infrastructure</h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Strategic manufacturing halls designed for linear workflow and maximum operational efficiency.
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { icon: '🏭', title: 'Main Production Hall', size: '2000 m²', status: 'Active' },
                { icon: '📦', title: 'Expansion Hall', size: '2000 m²', status: 'Ready' },
                { icon: '🏗️', title: 'Future Expansion', size: '5000 m²', status: 'Available Land' },
              ].map((facility, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/80"
                >
                  <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <span className="text-3xl transition-transform duration-500 group-hover:scale-110">{facility.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{facility.title}</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                      <span className="text-xs font-bold text-gray-400 tracking-wider">AREA</span>
                      <span className="text-xl font-black text-blue-900">{facility.size}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                      <span className="text-xs font-bold text-gray-400 tracking-wider">STATUS</span>
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${facility.status === 'Active' ? 'bg-green-100/80 text-green-700' :
                          facility.status === 'Ready' ? 'bg-blue-100/80 text-blue-700' :
                            'bg-slate-200/80 text-slate-700'
                        }`}>
                        {facility.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Machine Inventory */}
          <div className="mb-32">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Machine Inventory</h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { name: 'Circular Looms', count: '24 units', description: 'High-speed production' },
                { name: 'Cutting Machines', count: '8 units', description: 'Precision cutting' },
                { name: 'Sewing Machines', count: '32 units', description: 'Expert finishing' },
                { name: 'Quality Control', count: 'Automated', description: 'ISO certified' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 flex items-center gap-2">
                    <span className="w-4 h-[2px] bg-blue-600"></span>
                    Inventory
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2 tracking-tight">{item.count}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: "Climate Controlled", text: "24/7 air conditioning ensures optimal humidity for high-grade polymers.", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z", color: "blue" },
              { title: "Safety Standards", text: "ISO certified facilities with strict maintenance protocols.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", color: "teal" },
              { title: "Energy Efficient", text: "Smart energy management reducing our carbon footprint.", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "emerald" },
              { title: "Continuous Operation", text: "Multi-shift production to meet global high-volume demands.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "slate" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-14 h-14 bg-${feature.color}-50 rounded-2xl flex items-center justify-center mb-6 text-${feature.color}-600`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-light">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.2] pointer-events-none"></div>
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-[120px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-8xl font-black mb-10 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Visit Our Facility
          </motion.h2>
          <p className="text-2xl text-blue-100/90 mb-14 leading-relaxed font-light max-w-2xl mx-auto">
            Experience our 9000m² advanced manufacturing hub firsthand. <span className="text-white font-bold underline decoration-blue-500">Innovation in motion.</span>
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="mailto:info@lescobags.com"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-blue-900 rounded-3xl font-black hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)] transition-all duration-300 text-xl tracking-tight"
            >
              Schedule a Site Visit
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
