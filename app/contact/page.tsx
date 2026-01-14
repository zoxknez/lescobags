'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    captcha: '',
    sendCopy: false
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple captcha check
    if (formData.captcha.toLowerCase() !== '2') {
      alert('Please answer the captcha question correctly')
      return
    }

    // In a real application, you would send this to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        captcha: '',
        sendCopy: false
      })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <main className="min-h-screen bg-white pt-24 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-blue-50/50 via-white to-emerald-50/50 overflow-hidden">
        {/* Animated Background Orbs */}
        <motion.div
          className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-emerald-100/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Communication Excellence</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-emerald-900 bg-clip-text text-transparent">
              Contact <span className="font-serif italic font-light">Lescobags</span>
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Connect with our global packaging specialists for tailored circular solutions and industrial excellence.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form Pod */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-[100px] opacity-50" />

              <div className="relative z-10">
                <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter">Send a Message</h2>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">Direct Inquiry Line</p>

                {submitted ? (
                  <motion.div
                    className="py-12 text-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <motion.svg
                        className="w-10 h-10 text-emerald-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Transmission Successful</h3>
                    <p className="text-slate-500 font-medium">Our specialists will review your inquiry shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all outline-none font-medium text-slate-900 placeholder:text-slate-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all outline-none font-medium text-slate-900 placeholder:text-slate-300"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                        Inquiry Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all outline-none font-medium text-slate-900 placeholder:text-slate-300"
                        placeholder="Project Details"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                        Detailed Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all outline-none font-medium text-slate-900 placeholder:text-slate-300 resize-none"
                        placeholder="Tell us about your packaging needs..."
                      />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
                      <div className="space-y-2 flex-grow max-w-xs">
                        <label htmlFor="captcha" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                          Verification: How many wheels on a bike?
                        </label>
                        <input
                          type="text"
                          id="captcha"
                          name="captcha"
                          required
                          value={formData.captcha}
                          onChange={handleChange}
                          className="w-full px-6 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-900 placeholder:text-slate-300"
                          placeholder="?"
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="sendCopy"
                          name="sendCopy"
                          checked={formData.sendCopy}
                          onChange={handleChange}
                          className="w-5 h-5 rounded-lg border-slate-200 text-blue-600 focus:ring-blue-500/20 transition-all cursor-pointer"
                        />
                        <label htmlFor="sendCopy" className="text-xs font-bold text-slate-500 cursor-pointer">
                          Transmission Copy
                        </label>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full py-5 bg-slate-900 text-white rounded-[20px] font-black uppercase tracking-[0.2em] text-sm hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.01, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Initialize Submission
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information Architecture */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-1 gap-6">
                {[
                  {
                    title: "Address",
                    lines: ["Tekstilna 40", "16000 Leskovac, Serbia"],
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                    color: "blue"
                  },
                  {
                    title: "Direct Line",
                    lines: ["016/640 202"],
                    link: "tel:016640202",
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                    color: "emerald"
                  },
                  {
                    title: "Digital Inquiries",
                    lines: ["info@lescobags.com"],
                    link: "mailto:info@lescobags.com",
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    color: "teal"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 bg-${item.color}-50 text-${item.color}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} className="text-lg font-black text-slate-900 hover:text-blue-600 transition-colors">
                            {item.lines[0]}
                          </a>
                        ) : (
                          <div className="text-lg font-black text-slate-900 leading-tight">
                            {item.lines.map((line, lidx) => <div key={lidx}>{line}</div>)}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours Pod */}
              <motion.div
                className="bg-slate-900 rounded-[30px] p-8 text-white relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px]" />
                <h3 className="text-xl font-black mb-6 tracking-tighter flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Operational Protocol
                </h3>
                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", time: "09:00 - 17:00", active: true },
                    { day: "Saturday", time: "10:00 - 15:00", active: false },
                    { day: "Sunday", time: "Closed", dim: true }
                  ].map((row) => (
                    <div key={row.day} className={`flex justify-between items-center py-3 border-b border-white/10 last:border-0 ${row.dim ? 'opacity-40' : ''}`}>
                      <span className="text-sm font-bold uppercase tracking-widest">{row.day}</span>
                      <span className={`text-sm font-black ${row.active ? 'text-emerald-400' : 'text-white/60'}`}>{row.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Visual Location Card */}
              <motion.div
                className="group relative aspect-video bg-slate-100 rounded-[30px] overflow-hidden border border-slate-200 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8 bg-white/80 backdrop-blur-sm group-hover:bg-white transition-colors duration-500">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-4 shadow-xl shadow-slate-900/20"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-xl font-black text-slate-900 mb-1 tracking-tighter">Manufacturing Center</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Leskovac, Serbia</p>

                  <button className="mt-6 px-6 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300">
                    Open Intelligence Map
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social & Finale */}
      <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Global Connectivity</h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Join our professional network for real-time updates on circular economy innovations and industrial packaging standards.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {[
              { name: "LinkedIn", color: "blue", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              { name: "Facebook", color: "blue", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              { name: "Twitter", color: "slate", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" }
            ].map((social) => (
              <motion.a
                key={social.name}
                href="#"
                className={`flex items-center gap-3 px-8 py-4 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-500 group`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </div>
                <span className="font-black uppercase tracking-widest text-xs text-slate-900">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
