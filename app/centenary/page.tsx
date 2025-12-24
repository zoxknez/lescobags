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
    <main ref={containerRef} className="bg-black">
      {/* Year Navigator - Fixed Right Side */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-3">
          {milestones.map((milestone, index) => (
            <button
              key={milestone.year}
              onClick={() => {
                scrollToMilestone(index)
              }}
              className="group relative"
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-white scale-150' 
                  : 'bg-white/30 hover:bg-white/60'
              }`} />
              
              {/* Year Label on Hover */}
              <div className={`absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                index === activeIndex ? 'opacity-100' : ''
              }`}>
                {milestone.year}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="inline-block mb-8 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <span className="text-white/80 font-semibold tracking-wider text-sm">
                1923 — 2023
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-8 leading-none"
          >
            <span className="block text-white">100</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 text-transparent bg-clip-text">
              YEARS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Scroll through a century of innovation, resilience, and excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="text-white/40 text-sm uppercase tracking-widest">Scroll to explore</div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-6 h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8">
              What's Next?
            </h2>
            <p className="text-2xl text-white/60 mb-12 leading-relaxed">
              Join us as we continue building the future of sustainable packaging
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-12 py-6 bg-white text-black rounded-full font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all group"
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
                  className="inline-flex items-center gap-3 px-12 py-6 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Our Products
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

  const opacity = useTransform(sectionProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(sectionProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(sectionProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  return (
    <section
      id={`milestone-${index}`}
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32"
    >
      {/* Background with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} opacity-5`} />
      
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
          >
            {/* Year Badge */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={`px-8 py-4 bg-gradient-to-r ${milestone.gradient} rounded-2xl shadow-2xl`}>
                <div className="text-6xl font-black text-white">{milestone.year}</div>
              </div>
            </motion.div>

            {/* Subtitle */}
            <div className="text-white/40 text-sm uppercase tracking-widest mb-4 font-semibold">
              {milestone.subtitle}
            </div>

            {/* Title */}
            <h3 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              {milestone.title}
            </h3>

            {/* Description */}
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              {milestone.description}
            </p>

            {/* Achievements */}
            <div className="flex flex-wrap gap-3">
              {milestone.achievements.map((achievement: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="px-5 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white/80 font-medium hover:bg-white/10 transition-all"
                >
                  {achievement}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
          >
            <div className="relative">
              {/* Decorative Glow */}
              <motion.div
                className={`absolute -inset-4 bg-gradient-to-r ${milestone.gradient} rounded-3xl blur-3xl opacity-20`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Image Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative w-full aspect-square">
                  <Image
                    src={milestone.image}
                    alt={milestone.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} opacity-20`} />
                </div>
              </div>

              {/* Floating Number */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-2xl font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
