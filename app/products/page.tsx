'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '../components/Navigation'

export default function ProductsPage() {
  const products = [
    {
      id: 'big-bags',
      title: 'Big Bags',
      subtitle: 'Flexible Intermediate Bulk Containers',
      description: 'Perfect packaging solution to store and transport dry bulk goods. Custom-made for every sector.',
      image: '/images/products/big-bags.jpg',
      gradient: 'from-blue-600 to-cyan-500',
      features: ['Capacity: 500-2000 kg', '4-loop, 2-loop, Quadro designs', 'Food-safe certified', 'Custom printing available'],
      link: '/products/big-bags'
    },
    {
      id: 'block-bottom-bags',
      title: 'Block Bottom Bags',
      subtitle: 'Advanced Cassette Bags',
      description: 'The most advanced type of small bags with flat bottom for hassle-free filling and stacking.',
      image: '/images/products/block-bottom-bags.jpg',
      gradient: 'from-green-600 to-emerald-500',
      features: ['Flat bottom design', 'Easy stacking', 'With valve or open mouth', 'Dimensions: 30-60cm width'],
      link: '/products/block-bottom-bags'
    },
    {
      id: 'pillow-bags',
      title: 'Pillow Bags',
      subtitle: 'Versatile Standard Packaging',
      description: 'Most versatile packaging for bulk goods up to 100 kg. Easy to transport, stack and fill.',
      image: '/images/products/pillow-bags.jpg',
      gradient: 'from-purple-600 to-pink-500',
      features: ['Up to 100 kg capacity', 'Woven plastic or natural jute', 'Custom printing', 'Multiple sizes available'],
      link: '/products/pillow-bags'
    },
    {
      id: 'container-liners',
      title: 'Container Liners',
      subtitle: 'Hygienic Bulk Transport',
      description: 'Convert a sea container into a hygienic bulk container with our specialized liner systems.',
      image: '/images/products/container-liners.jpg',
      gradient: 'from-orange-600 to-red-500',
      features: ['20 & 40-foot containers', 'Food-safe materials', 'Custom filling systems', 'Dust & moisture protection'],
      link: '/products/container-liners'
    }
  ]

  const specialCategories = [
    {
      title: 'Recycled Bags',
      description: 'Sustainable packaging made from recycled polypropylene (40-100% rPP)',
      icon: '♻️',
      link: '/products/recycled-bags',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Special Usage',
      description: 'Food contact, UN certified, ATEX antistatic, and ventilated bags',
      icon: '⚡',
      link: '/products/special-usage',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Custom Design',
      description: 'U-panel, 4-panel, Tubular, Quadro, Conical, and Combo-cube designs',
      icon: '🎨',
      link: '/products/custom-design',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Industries',
      description: 'Specialized solutions for 8 different industries and sectors',
      icon: '🏭',
      link: '/products/industries',
      color: 'bg-orange-50 border-orange-200'
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 overflow-hidden">
        {/* Header */}
        <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
          <motion.div 
            className="absolute top-10 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6"
            >
              Experts in Woven Packaging
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Products
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Unmatched Quality. Best-in-the-class Market Value.
            </motion.p>
        </div>
      </section>

      {/* Standard Bags Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <Image 
                  src="/images/bigbag-render-shade.webp" 
                  alt="Standard Big Bags" 
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Big Bags (FIBC)</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Used for the carrying and storage of dry non-hazardous materials in powder, flake and 
                granular form. These large capacity bags are robust, versatile and an economical alternative 
                to more traditional forms of industrial packaging. Custom-made to your requirements on our own production line.
              </p>
              
              <div className="space-y-4 mb-6">
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: "#dbeafe" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Capacity Range</h3>
                    <p className="text-gray-600">500 Kg to 2000 Kg</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: "#dbeafe" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Safety Factor</h3>
                    <p className="text-gray-600">5:1 or 6:1</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: "#dbeafe" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Top Options</h3>
                    <p className="text-gray-600">Open top, duffle top, skirt top</p>
                  </div>
                </motion.div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Available Types
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>4-loop big bag:</strong> Standard model with four-loop lifting system, adaptable in design, dimensions and loop positioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>One- or two-loop big bag:</strong> Simple to handle, enables quick filling and transport of multiple bags at once</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Quadro big bag:</strong> Equipped with internal panels (baffles) that maintain shape and stability, optimizing transport and handling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">Customization Options</h3>
                <p className="text-gray-700 text-sm">Personalized printing, adapted liners, recycled materials, and custom dimensions available</p>
              </div>
            </motion.div>
          </div>

          {/* Baffle Bags */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Block Bottom Bags</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Block bottom bags feature a flat bottom that enables stable standing, making them ideal for 
                storage and product display. These bags maintain their shape better than standard bags and 
                provide optimal space utilization.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Adaptable in size, material, and printing, making them suitable for various industries. 
                The flat bottom design ensures the bag stands upright, making it perfect for retail display 
                and organized storage.
              </p>
              
              <div className="space-y-4 mb-6">
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-green-50 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: "#dcfce7" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Flat Bottom Design</h3>
                    <p className="text-gray-600">Stable standing for better storage and display</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-green-50 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: "#dcfce7" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Customizable</h3>
                    <p className="text-gray-600">Size, material, and printing options available</p>
                  </div>
                </motion.div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">Perfect For</h3>
                <p className="text-gray-700 text-sm">Retail display, organized storage, and industries requiring stable packaging solutions</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <Image 
                  src="/images/blockbottombags-render.webp" 
                  alt="Baffle Bags" 
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>

          {/* Conductive Bags */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <Image 
                  src="/images/pillowbags-render.webp" 
                  alt="Conductive Bags" 
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Pillow Bags</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Versatile bags suitable for a wide range of products, including dry materials and powders. 
                These bags can be adapted in terms of material and dimensions, with options for personalized printing.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Available in plastic fabric, natural jute, or plastic film. Perfect for various industries 
                requiring flexible packaging solutions that can be customized to specific needs.
              </p>
              
              <div className="space-y-4 mb-6">
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: "#fef9c3" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Material Options</h3>
                    <p className="text-gray-600">Plastic fabric, natural jute, or plastic film</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: "#fef9c3" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Customizable</h3>
                    <p className="text-gray-600">Dimensions and personalized printing available</p>
                  </div>
                </motion.div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">Ideal For</h3>
                <p className="text-gray-700 text-sm">Dry materials, powders, and products requiring flexible packaging solutions</p>
              </div>
            </motion.div>
          </div>

          {/* Food Grade Bags */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Container Liners</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Container liners provide additional protection for your products during transport in containers, 
                protecting them from moisture, contamination, and other external factors. These liners can be 
                adapted to specific requirements of your product and process.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Custom liners are available to perfectly fit your container dimensions and product specifications, 
                ensuring maximum protection and efficiency during shipping and storage.
              </p>
              
              <div className="space-y-4 mb-6">
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: "#f3e8ff" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Protection</h3>
                    <p className="text-gray-600">Moisture, contamination, and external factor protection</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl"
                  whileHover={{ x: 10, backgroundColor: "#f3e8ff" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Custom Fit</h3>
                    <p className="text-gray-600">Adapted to container dimensions and product specifications</p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="grid grid-cols-2 gap-4 mb-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp} className="bg-purple-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Protection</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-purple-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Custom</div>
                  <div className="text-sm text-gray-600">Sized</div>
                </motion.div>
              </motion.div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">Perfect For</h3>
                <p className="text-gray-700 text-sm">Long-distance shipping, sensitive products, and international container transport</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <Image 
                  src="/images/linerbagsfull.webp" 
                  alt="Container Liners" 
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>

          {/* Recycled Bags */}
          <section className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Recycled Bags</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Sustainable business starts by dealing responsibly with raw materials. This is why we adopt the 
                <strong className="text-emerald-600"> Closed Loop principle</strong>.
              </p>
            </motion.div>

            {/* Introduction Section */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                  <Image 
                    src="/images/bigbagscustom.webp" 
                    alt="Recycled Bags" 
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We select and collect used big bags from customers and reprocess them ourselves to obtain 
                  recycled polypropylene (rPP) granulate. We use this to make high-quality, recycled packaging.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  In addition, with the <strong>Designed for Recycling programme</strong> we are a pioneer in 
                  the standardisation of easily recyclable big bags.
                </p>
                
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl mb-6">
                  <p className="text-gray-700 italic mb-2">
                    "By using recycled polypropylene, we can make optimal use of valuable materials. 
                    This also lengthens the life cycle of our packaging"
                  </p>
                  <p className="text-emerald-700 font-semibold">— CEO Lescobags</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">We recover</h3>
                    <p className="text-sm text-gray-600">Your used big bags and give them a second life</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">We supply</h3>
                    <p className="text-sm text-gray-600">Big bags with maximum recycled PP content</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Responsible Line Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-3xl p-10 md:p-16 mb-20 shadow-2xl"
            >
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Louis Blockx Responsible Line</h3>
                  <p className="text-xl text-emerald-100 italic">Surprisingly sustainable!</p>
                </div>
                
                <p className="text-lg text-emerald-50 mb-8 leading-relaxed">
                  We produce big bags made of recycled polypropylene (rPP). This alternative rPP packaging forms 
                  the <strong>Responsible Line</strong>. These rPP big bags are just as safe and reliable to use 
                  as the non-recycled big bags.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Full Process Control</h4>
                      <p className="text-emerald-100 text-sm">We control the entire production process</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">rPP Content</h4>
                      <p className="text-emerald-100 text-sm">40% to 100%, depending on application</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">ISO Standards</h4>
                      <p className="text-emerald-100 text-sm">Production and tests in accordance with valid ISO standard</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Accredited Testing</h4>
                      <p className="text-emerald-100 text-sm">Own testing lab, accredited by packaging institute</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Versatile Use</h4>
                      <p className="text-emerald-100 text-sm">Can be used in various sectors (except food-safe and pharmaceutical)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Multiple Applications</h4>
                      <p className="text-emerald-100 text-sm">rPP fabric can be used for small woven bags and container liners</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How does it work Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">How does it work?</h3>
              <p className="text-xl text-gray-600 mb-12 text-center">A fully integrated system</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">1. Collection</h4>
                  <p className="text-gray-600 text-sm text-center">We collect a selection of big bags from customers and take them to our own recycling unit</p>
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">2. Clean</h4>
                  <p className="text-gray-600 text-sm text-center">We shred and clean the post-consumer big bags using controlled washing techniques to produce purified flakes</p>
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">3. Reprocess</h4>
                  <p className="text-gray-600 text-sm text-center">In the recycling line with special filter systems, we reprocess the flakes to make high-quality rPP granulate</p>
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-center">4. Produce</h4>
                  <p className="text-gray-600 text-sm text-center">This recycled polypropylene is extruded again and woven to fabric, then processed to produce new big bags, woven bags or container liners</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Closed Loop Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl p-10 md:p-16 mb-20"
            >
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Closed Loop</h3>
                  <p className="text-xl text-gray-600 italic">We close the loop!</p>
                </div>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We use the <strong>Multi-Market Closed Loop model</strong>. We recycle used big bags from various 
                  sectors and reprocess them to make rPP granulate. We use this recycled material to produce new, 
                  high-quality big bags.
                </p>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  The <strong>Closed Loop principle</strong> refers to "the cycle whereby after having been used in 
                  the market, the product is taken back, recycled and reprocessed to make a new, similar product". 
                  Thanks to the Closed Loop system, we keep valuable materials at the same product level and avoid 
                  the extraction of new raw materials.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-gray-900 mb-3">Food-Safe Bags</h4>
                    <p className="text-gray-600 text-sm">May only be made of virgin PP, but after use can be recycled by us</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-gray-900 mb-3">Hazardous Substances</h4>
                    <p className="text-gray-600 text-sm">Packaging cannot be recycled, but can be made of rPP</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-gray-900 mb-3">Bulk Goods</h4>
                    <p className="text-gray-600 text-sm">Most bulk goods do not affect packaging, so we can recycle and make from recycled material</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Designed for Recycling Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-white border-2 border-emerald-200 rounded-3xl p-10 md:p-16"
            >
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Designed for Recycling</h3>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Big bags are very flexible in terms of design and materials. However, this very flexibility 
                  sometimes makes them difficult to recycle. In order to recycle a big bag, liners have to be 
                  separated from the polypropylene fabric. In addition, big bags often contain other plastics 
                  that hamper the recycling process.
                </p>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  With the <strong>Designed for Recycling programme</strong>, we aim to change this, in cooperation 
                  with the professional association EFIBCA. The goal? To draw up a standard for big bags so that we 
                  can recycle them easily and produce a high-quality result.
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">The Standard</h4>
                  <p className="text-gray-700 mb-4">
                    The polypropylene content of big bags must be as high as possible. This results in the best 
                    quality recycled polypropylene (rPP). Consequently, big bags that meet the standard receive a 
                    quality label.
                  </p>
                  <p className="text-gray-700">
                    With the Designed for Recycling programme, we are a pioneer in the standardisation of easily 
                    recyclable big bags. In conjunction with the customer, we are already working actively on the 
                    redesign of some models.
                  </p>
                </div>

                <div className="text-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300"
                    >
                      <span>Any questions, or are you interested?</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Custom Design & Liners Section */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-2xl"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Design</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                We adapt your packaging to your requirements on our own production line. A wide range of 
                options is available, from personalized printing to adapted dimensions and materials.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Personalized printing and branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Custom dimensions and specifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Material selection and adaptations</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20">
                <Image 
                  src="/images/custom-liners.webp" 
                  alt="Custom Liners" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Custom Liners</h3>
              <p className="text-green-100 mb-4 leading-relaxed">
                Custom liners can be adapted to the specific requirements of your product and process. 
                Perfect fit for your container dimensions ensuring maximum protection.
              </p>
              <ul className="space-y-2 text-green-100">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Adapted to container dimensions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Product-specific protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Process-optimized solutions</span>
                </li>
              </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Management */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Quality Management System</h2>
            <p className="text-xl text-blue-100">ISO 9001:2008 Certified Excellence</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <motion.div 
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Raw Material Inspection</h3>
              <p className="text-blue-100">Quality checks from the source</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <motion.div 
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Production Monitoring</h3>
              <p className="text-blue-100">Continuous quality control</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <motion.div 
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Final Product Testing</h3>
              <p className="text-blue-100">Certified quality assurance</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Contact us to discuss your specific requirements and get a customized quote
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 text-lg"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
