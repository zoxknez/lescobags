'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function OrganisationPage() {
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

  return (
    <main className="min-h-screen bg-white pt-24 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-40 px-6 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl"
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
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-700/90 to-teal-700/90 text-white rounded-full text-sm font-semibold mb-10 shadow-xl backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>104 Years of Excellence</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-teal-800 bg-clip-text text-transparent">
              Organisation
            </span>
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            With the <span className="font-semibold text-blue-900">Lescobags</span> brand, we leverage over a century of expertise in developing technically superior packaging solutions.
          </motion.p>
        </div>
      </section>

      {/* Visual Organisation Flow */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-100 via-teal-100 to-emerald-100 -z-0"></div>

            {[
              { step: "01", title: "Sales & Requirements", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01", color: "blue" },
              { step: "02", title: "Design & Customization", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z", color: "teal" },
              { step: "03", title: "Integrated Production", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", color: "emerald" },
              { step: "04", title: "Global Logistics", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "slate" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center p-6"
              >
                <div className={`w-20 h-20 rounded-2xl bg-${item.color}-600/10 backdrop-blur-md border border-${item.color}-200 flex items-center justify-center mb-6 shadow-xl relative`}>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-xs font-bold text-gray-400 border border-gray-100">
                    {item.step}
                  </div>
                  <svg className={`w-10 h-10 text-${item.color}-700`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Sales</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl">
              Packaging needs to protect your product during storage and transport. Every product requires different specifications. So your personal account manager works with you to find packaging that ticks all the boxes.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Product Requirements</h3>
                <p className="text-gray-600 leading-relaxed">
                  Together with you, we list all the parameters as regards filling, storing, transport, emptying, quality requirements and price level.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-white to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-teal-700 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Design & Production</h3>
                <p className="text-gray-600 leading-relaxed">
                  On the basis of these parameters, the design and production of your optimised packaging product gets under way.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-emerald-700 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  You can still come to us with questions, even after delivery.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Production from start to finish */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Production from start to finish
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We have our own modern production facilities in Serbia for the production of high-quality big bags, container liners and woven bags. So we have the entire production process in our own hands, from granulate extrusion to the finished bags.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Thanks to our own European production site, we have full control over the quality, production schedule and deliveries. So we can respond flexibly to your specific needs.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                Our production facilities are fitted with <strong>state-of-the-art</strong> equipment and work in accordance with the <strong>highest quality standards</strong> in an appropriate hygienic environment.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Experienced staff</h3>
              <p className="text-gray-600 leading-relaxed">
                We are able to rely on the expertise of highly trained and motivated staff. They manage the high-tech operating processes in the production unit.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certified</h3>
              <p className="text-gray-600 leading-relaxed">
                Our site has been BRCGS, ISO22000, ISO9001, ISO14001 and ISO45001 certified for years. So we can produce big bags for a wide range of sectors, from food to medicines and chemicals.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reliable partners */}
      <section className="py-32 px-6 relative overflow-hidden bg-white text-left">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full mix-blend-multiply filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Reliable partners, constant quality</h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                We work with a global network of reliable production partners. Thanks to close cooperation, we guarantee high quality and reliable delivery across Europe and Asia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Quality Standards", text: "Partners meet applicable international certification standards without compromise.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", color: "blue" },
                { title: "Central Quality", text: "Our central department keeps a constant eye on the quality of the packaging.", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", color: "teal" },
                { title: "Monitoring CSR", text: "We actively monitor all aspects of corporate social responsibility at our partners.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", color: "purple" },
                { title: "Know-how Sharing", text: "Sharing innovative production techniques to support our partners' success.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", color: "yellow" }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-gray-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className={`w-14 h-14 bg-${item.color}-600/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
                    <svg className={`w-7 h-7 text-${item.color}-700`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight text-left">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-light text-sm text-left">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flexible delivery */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white/40 backdrop-blur-[2px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Flexible delivery</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-8 italic">
                We use our own services to deliver products, giving us maximum control over security and scheduling flexibility.
              </p>
              <div className="space-y-4">
                {["In-house transport fleet", "Centralized warehouse in Arendonk", "Permanent logistics partners for Europe"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white rounded-[3rem] p-12 shadow-2xl border border-white/60 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6 font-primary">Blockx Logistics</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Transport between our production site in Serbia and the central warehouse is managed entirely by us. Your deliveries leave from here, partly using our own transport, ensuring the highest standards of handling and punctuality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
            <motion.div className="md:w-1/2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight italic">Vision and mission</h2>
              <div className="w-24 h-2 bg-blue-600 rounded-full mb-10"></div>
              <p className="text-2xl text-gray-600 leading-relaxed font-light">
                We combine <span className="text-blue-600 font-bold">104 years of experience</span> with relentless innovation to develop technically superior products that drive our clients' success.
              </p>
            </motion.div>
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
              {[
                { label: "Quality", color: "blue", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { label: "Stability", color: "teal", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { label: "Safety", color: "indigo", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "Sustainability", color: "emerald", icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" }
              ].map(v => (
                <motion.div key={v.label} whileHover={{ y: -5 }} className={`bg-${v.color}-50 p-8 rounded-[2rem] text-center border border-${v.color}-100 shadow-sm transition-all`}>
                  <svg className={`w-8 h-8 text-${v.color}-600 mx-auto mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={v.icon} /></svg>
                  <span className="font-bold text-gray-800">{v.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Safe Workplace", text: "Healthy and safe working conditions are non-negotiable for our staff and partners.", icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3c1.268 0 2.478.235 3.593.663m3.245 4.576l.498.017A10.001 10.001 0 0122 13V15.01c0 2.015-1.63 3.59-3.562 3.59h-2.115a3.109 3.109 0 01-3.045-2.204" },
              { title: "Social Responsibility", text: "Sustainable energy and closed-loop recycling are core parts of our pioneering Responsible Line.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064" }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex gap-6 p-8 bg-slate-50 rounded-3xl"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h4>
                  <p className="text-gray-600 leading-relaxed font-light">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Social Responsibility */}
      <section className="py-32 px-6 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Building a <br />Sustainable Future
            </motion.h2>
            <p className="text-2xl text-gray-600 leading-relaxed font-light">
              CSR takes many forms at <span className="text-blue-900 font-semibold">Lescobags</span>. We are pioneers in the production of closed-loop rPP packaging.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Closed Loop", text: "We recycle big bags and process them into our Responsible Line.", color: "green", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
              { title: "Solar Powered", text: "100% electricity from our extensive solar arrays.", color: "yellow", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" },
              { title: "Waste Reduction", text: "Drastically reducing the scale of global plastic waste.", color: "blue", icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/60 backdrop-blur-xl border border-white p-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-${item.color}-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-900 rounded-[4rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="md:w-3/5 relative z-10">
              <h3 className="text-4xl font-bold mb-8 tracking-tight font-primary">Designed for Recycling</h3>
              <p className="text-xl text-blue-100 leading-relaxed font-light">
                We improve the design of big bags to make them easier to recycle, helping attain both our own sustainability goals and yours. This commitment leads to <span className="text-white font-bold underline decoration-teal-400">Lower CO2 Emissions</span> and a circular economy.
              </p>
            </div>
            <div className="md:w-2/5 flex justify-center relative z-10">
              <div className="w-56 h-56 rounded-full border-2 border-white/20 flex items-center justify-center relative group">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/40 animate-[spin_10s_linear_infinite]"></div>
                <div className="text-center">
                  <span className="text-6xl block mb-2">♻️</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-blue-200">Closed Loop</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.1] pointer-events-none"></div>
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full filter blur-[120px]"
          animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">
            Partner with Excellence
          </h2>
          <p className="text-2xl text-blue-100/90 mb-12 leading-relaxed font-light">
            Experience the difference that <span className="text-white font-semibold underline decoration-blue-500 font-bold">over 104 years</span> of expertise makes in your operations.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-12 py-6 bg-white text-blue-900 rounded-2xl font-bold hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all duration-300 text-xl"
              >
                Get in Touch
                <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-12 py-6 border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 text-xl backdrop-blur-md"
              >
                Learn More
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

