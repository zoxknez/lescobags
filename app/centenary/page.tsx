'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useState, useRef } from 'react'
import Image from 'next/image'

type Milestone = {
  year: string
  title: string
  subtitle: string
  description: string
  image: string
  gradient: string
  achievements: string[]
}

export default function CentenaryPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const milestones = [
    {
      year: '1923',
      title: 'The Beginning',
      subtitle: 'First Generation',
      description: 'Lescobags starts as a dealer in used jute bags in Leskovac, laying the foundation for a century of excellence.',
      image: '/images/centenary/timeline-main.png',
      gradient: 'from-blue-600 to-cyan-600',
      achievements: ['Founded in Leskovac', 'Jute bag trading', 'Family business established']
    },
    {
      year: '1925',
      title: 'First Expansion',
      subtitle: 'Workhouse & Workshop',
      description: 'The business expands to include a workhouse and sewing workshop for repairing used jute bags.',
      image: '/images/centenary/1925-trucks.jpg',
      gradient: 'from-emerald-600 to-teal-600',
      achievements: ['New facilities', 'Repair services', 'Sewing workshop']
    },
    {
      year: '1930',
      title: 'Growth Period',
      subtitle: 'Larger Infrastructure',
      description: 'Construction of a new, larger workroom for handling bags, marking significant growth.',
      image: '/images/centenary/1930-workshop.jpg',
      gradient: 'from-violet-600 to-purple-600',
      achievements: ['New construction', 'Increased capacity', 'Modern facilities']
    },
    {
      year: '1935',
      title: 'Service Innovation',
      subtitle: 'Full Service Provider',
      description: 'Lescobags offers comprehensive services: whipping, vacuuming, turning, washing and disinfecting jute bags.',
      image: '/images/centenary/1935-cart.jpg',
      gradient: 'from-amber-600 to-orange-600',
      achievements: ['Multiple services', 'Quality assurance', 'Customer satisfaction']
    },
    {
      year: '1945',
      title: 'Post-War Recovery',
      subtitle: 'Resilience & Rebuilding',
      description: 'Rebuilding the factory after war damage, demonstrating strength and determination.',
      image: '/images/centenary/1945-recovery.jpg',
      gradient: 'from-rose-600 to-pink-600',
      achievements: ['Factory rebuilt', 'Operations resumed', 'Community support']
    },
    {
      year: '1949',
      title: 'Official Foundation',
      subtitle: 'Legal Entity Established',
      description: 'Lescobags founds the company as a formal business entity, setting the stage for future growth.',
      image: '/images/centenary/1949-foundation.png',
      gradient: 'from-blue-600 to-indigo-600',
      achievements: ['Legal establishment', 'Corporate structure', 'Strategic planning']
    },
    {
      year: '1950',
      title: 'Production Expansion',
      subtitle: 'New Production Facility',
      description: 'The firm gets a new workhouse for the production of jute bags, expanding manufacturing capabilities.',
      image: '/images/centenary/1950-seamstresses.jpg',
      gradient: 'from-green-600 to-emerald-600',
      achievements: ['Production facility', 'Manufacturing scale', 'Quality production']
    },
    {
      year: '1965',
      title: 'Second Generation',
      subtitle: 'Leadership Transition',
      description: 'Second generation takes over the helm at the company, bringing fresh perspectives.',
      image: '/images/centenary/1965-jos-blockx.png',
      gradient: 'from-purple-600 to-fuchsia-600',
      achievements: ['New leadership', 'Family continuity', 'Modern management']
    },
    {
      year: '1970',
      title: 'Global Trade',
      subtitle: 'International Imports',
      description: 'Start of the import of new jute bags from China, India and Thailand, expanding global reach.',
      image: '/images/centenary/1970-jute-bags.jpeg',
      gradient: 'from-yellow-600 to-amber-600',
      achievements: ['Global sourcing', 'Quality materials', 'Trade partnerships']
    },
    {
      year: '1980',
      title: 'Rapid Growth',
      subtitle: 'Market Expansion',
      description: 'The company grows rapidly due to the increase in exports of European agricultural products. Polypropylene and cotton emerge as alternative materials.',
      image: '/images/centenary/1980-plastic-bags.jpeg',
      gradient: 'from-cyan-600 to-blue-600',
      achievements: ['Market expansion', 'Material innovation', 'Export growth']
    },
    {
      year: '1985',
      title: 'Sugar Industry',
      subtitle: 'Sector Specialization',
      description: 'Strong growth due to sales of bags to the European sugar industry, establishing a key market.',
      image: '/images/centenary/1985-pillow-bags.jpeg',
      gradient: 'from-teal-600 to-green-600',
      achievements: ['Industry leader', 'Specialized products', 'European market']
    },
    {
      year: '1995',
      title: 'Big Bags Innovation',
      subtitle: 'Product Revolution',
      description: 'Big bags offer the ideal solution for transport, storage and handling of large quantities of bulk goods.',
      image: '/images/centenary/1995-big-bag.JPG',
      gradient: 'from-indigo-600 to-violet-600',
      achievements: ['New product line', 'Bulk solutions', 'Innovation leader']
    },
    {
      year: '1999',
      title: 'Third Generation',
      subtitle: 'New Era Begins',
      description: 'Third generation takes over the helm at the company. A sewing workshop for big bags is set up in Leskovac, Serbia.',
      image: '/images/centenary/1999-lou-blockx.png',
      gradient: 'from-orange-600 to-red-600',
      achievements: ['Leadership transition', 'Serbian operations', 'Future vision']
    },
    {
      year: '2002',
      title: 'Serbian Expansion',
      subtitle: 'International Growth',
      description: 'Start of construction of an integrated production facility for big bags in Serbia. Foundation of the Serbian subsidiary.',
      image: '/images/centenary/2002-petrovic.png',
      gradient: 'from-pink-600 to-rose-600',
      achievements: ['New facility', 'Subsidiary founded', 'Production capacity']
    },
    {
      year: '2003',
      title: 'Headquarters Move',
      subtitle: 'Modern Facilities',
      description: 'Headquarters moves into new offices with expanded facilities and modern infrastructure.',
      image: '/images/centenary/2003-meeting-room.JPG',
      gradient: 'from-blue-600 to-cyan-600',
      achievements: ['New HQ', 'Modern office', 'Better service']
    },
    {
      year: '2006',
      title: 'Logistics Launch',
      subtitle: 'In-house Transport',
      description: 'With the foundation of an in-house transport company, we ensure an even better service.',
      image: '/images/centenary/2006-truck.JPG',
      gradient: 'from-emerald-600 to-teal-600',
      achievements: ['Own logistics', 'Better delivery', 'Service quality']
    },
    {
      year: '2012',
      title: 'BRC Certification',
      subtitle: 'Quality Excellence',
      description: 'The plant in Serbia expands further and obtains BRC certifications, ensuring international quality standards.',
      image: '/images/centenary/2012-brc.jpg',
      gradient: 'from-violet-600 to-purple-600',
      achievements: ['BRC certified', 'Quality standards', 'Facility expansion']
    },
    {
      year: '2018',
      title: 'Sustainability Focus',
      subtitle: 'Closed Loop System',
      description: 'Foundation of a conditioned high-care sewing unit for big bags. Start-up of recycling unit for processing post-consumer big bag waste.',
      image: '/images/centenary/2018-high-care.jpeg',
      gradient: 'from-green-600 to-emerald-600',
      achievements: ['Recycling unit', 'Closed loop', 'Sustainability']
    },
    {
      year: '2022',
      title: 'Responsible Line',
      subtitle: 'Recycled Materials',
      description: 'Production of big bags and other woven plastic packaging based on recycled PP, leading the circular economy.',
      image: '/images/centenary/2022-responsible-line.png',
      gradient: 'from-teal-600 to-cyan-600',
      achievements: ['Recycled products', 'Eco-friendly', 'Circular economy']
    },
    {
      year: '2023',
      title: 'Centenary Celebration',
      subtitle: '100 Years of Excellence',
      description: 'Lescobags celebrates its 100th anniversary, marking a century of innovation, quality, and dedication.',
      image: '/images/centenary/100-years-logo.png',
      gradient: 'from-purple-600 to-fuchsia-600',
      achievements: ['100 years', 'Legacy continues', 'Future ready']
    }
  ]

  // Track which year is active based on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalMilestones = milestones.length
    const newIndex = Math.min(
      Math.floor(latest * totalMilestones),
      totalMilestones - 1
    )
    setActiveIndex(newIndex)
  })

  const scrollToMilestone = (index: number) => {
    if (index < 0 || index >= milestones.length) return
    const element = document.getElementById(`milestone-${index}`)
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <main ref={containerRef} className="bg-[#05070a] selection:bg-emerald-500/30">
      {/* Year Navigator - Fixed Right Side */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
        <div className="relative pl-8">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
          <motion.div
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent h-20"
            animate={{ top: `${(activeIndex / (milestones.length - 1)) * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />

          <div className="flex flex-col gap-6">
            {milestones.map((milestone, index) => (
              <button
                key={milestone.year}
                onClick={() => scrollToMilestone(index)}
                className="group relative flex items-center"
              >
                <div className={`w-2 h-2 rounded-full transition-all duration-500 ${index === activeIndex
                  ? 'bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] scale-150'
                  : 'bg-white/20 group-hover:bg-white/40'
                  }`} />

                <span className={`absolute left-8 text-[10px] font-black tracking-[0.2em] transition-all duration-500 ${index === activeIndex ? 'text-white opacity-100 translate-x-0' : 'text-white/20 opacity-0 -translate-x-4 group-hover:opacity-60 group-hover:translate-x-1'
                  }`}>
                  {milestone.year}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.1] mix-blend-overlay" />

          {/* Floating Light Blobs */}
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"
          />
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-4 mb-12 px-8 py-3 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] text-white font-black uppercase tracking-[0.5em] opacity-80">
                Heritage Since 1923
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative"
          >
            <h1 className="text-[18vw] lg:text-[14rem] font-black leading-none tracking-tighter text-white/5 absolute -top-1/2 left-1/2 -translate-x-1/2 select-none">
              CENTURY
            </h1>
            <h2 className="text-8xl md:text-[10rem] lg:text-[13rem] font-black mb-8 leading-none tracking-tight">
              <span className="block text-white mb-2">A Legacy in</span>
              <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-500 text-transparent bg-clip-text italic font-serif py-4">
                Excellence
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto mb-16 font-light leading-relaxed"
          >
            Journey through <span className="text-white font-medium">100 years</span> of pioneering heritage and the evolution of global packaging intelligence.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-[-15vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
          >
            <span className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold">Discover The History</span>
            <div className="w-px h-24 bg-gradient-to-b from-emerald-500 to-transparent relative">
              <motion.div
                className="absolute top-0 left-[-2px] w-[5px] h-[5px] bg-white rounded-full"
                animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Journey - Each milestone is a full section */}
      {milestones.map((milestone, index) => (
        <MilestoneSection
          key={milestone.year}
          milestone={milestone}
          index={index}
        />
      ))}

      {/* Final CTA Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
          {/* Dust/Stars effect */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[12vw] lg:text-[10rem] font-black text-white mb-2 leading-none tracking-tighter">
              Legacy <br /> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text italic font-serif py-2 block">Continued</span>
            </h2>
            <p className="text-2xl text-white/40 mb-16 leading-relaxed font-light max-w-2xl mx-auto">
              A century of foundations. A future built on <span className="text-white font-medium">sustained intelligence</span> and uncompromising quality.
            </p>

            <div className="flex flex-wrap gap-8 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 px-14 py-7 bg-white text-black rounded-[2rem] font-black text-xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-emerald-500/20 transition-all group"
                >
                  Start The Next Century
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-4 px-12 py-7 border border-white/10 text-white rounded-[2rem] font-bold text-xl hover:bg-white/5 transition-all backdrop-blur-xl group"
                >
                  Explore Solutions
                  <span className="w-2 h-2 rounded-full bg-emerald-500 opacity-40 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

// Milestone Section Component - Each takes full viewport
function MilestoneSection({
  milestone,
  index
}: {
  milestone: Milestone
  index: number
}) {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Entrance/Exit Parallax
  const opacity = useTransform(sectionProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0])
  const scale = useTransform(sectionProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.95])
  const y = useTransform(sectionProgress, [0, 0.4, 0.6, 1], [100, 0, 0, -100])

  // Image Parallax
  const imageY = useTransform(sectionProgress, [0, 1], [-100, 100])

  return (
    <section
      id={`milestone-${index}`}
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center py-40 border-b border-white/[0.03] overflow-hidden`}
    >
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Content Side */}
          <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} relative z-20`}>
            {/* Year with decorative ring */}
            <div className="relative inline-block mb-12">
              <motion.div
                className={`absolute -inset-8 rounded-full border border-emerald-500/20`}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative text-7xl md:text-9xl font-black text-white/10 select-none">
                {milestone.year}
              </div>
              <div className={`absolute top-1/2 left-0 -translate-y-1/2 text-5xl md:text-6xl font-black text-white`}>
                {milestone.year}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-4">{milestone.subtitle}</h4>
                <h3 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-6">
                  {milestone.title}
                </h3>
              </div>

              <p className="text-2xl text-white/50 font-light leading-relaxed italic border-l-2 border-emerald-500/30 pl-8">
                {milestone.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {milestone.achievements.map((achievement: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-[13px] text-white/70 font-bold uppercase tracking-wider"
                  >
                    {achievement}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative`}>
            {/* Parallax Image Card */}
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10 bg-white/5"
            >
              <Image
                src={milestone.image}
                alt={milestone.title}
                fill
                className="object-cover scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`} />

              {/* Content Badge */}
              <div className="absolute bottom-10 left-10 p-8 bg-white/10 backdrop-blur-3xl border border-white/10 rounded-3xl max-w-[280px]">
                <div className="text-[10px] font-black text-emerald-400 mb-2 uppercase tracking-widest">Historical Context</div>
                <div className="text-lg font-bold text-white leading-tight">Preserving the standard of global big bag transport.</div>
              </div>

              {/* Index Number */}
              <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-xl font-black text-white">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>

            {/* Floating Background Element */}
            <motion.div
              className={`absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full`}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
