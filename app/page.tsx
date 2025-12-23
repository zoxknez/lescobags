'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">LESCOBAGS</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#products" className="hover:text-gray-900">Products</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#quality" className="hover:text-gray-900">Quality</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
                Excellence Since 1919
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Experts in<br/>
                <span className="text-blue-600">Woven Packaging</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Custom-made FIBC solutions for storing, transporting and protecting your products. 
                Combining over 100 years of tradition with modern innovation.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  View Products
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-blue-600 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative h-[500px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-9xl font-black text-blue-600/20">FIBC</div>
                <div className="text-2xl font-bold text-gray-700 mt-4">Made in Serbia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">Custom-made solutions for your industry</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Standard Big Bags', desc: 'For dry non-hazardous materials in powder, flake and granular form', icon: '📦' },
              { name: 'Baffle Bags', desc: 'Optimal space usage for storage and transport', icon: '🔲' },
              { name: 'Block Bottom Bags', desc: 'Maximum stability and efficient stacking', icon: '📐' },
              { name: 'Container Liners', desc: 'Protection during bulk transport', icon: '🚢' },
            ].map((product, i) => (
              <div key={i} className="group p-8 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all cursor-pointer">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600">{product.desc}</p>
                <div className="mt-6 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  Learn more →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Over 100 Years of Excellence</h2>
            <p className="text-xl text-gray-600">From Leskovac to Europe</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-6xl font-black text-blue-600 mb-4">1919</div>
              <h3 className="text-xl font-bold mb-3">Foundation</h3>
              <p className="text-gray-600">Louis Blockx heritage meets Serbian craftsmanship in Leskovac</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-6xl font-black text-blue-600 mb-4">2000</div>
              <h3 className="text-xl font-bold mb-3">Modern Facility</h3>
              <p className="text-gray-600">2000m² state-of-the-art production facility established</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-6xl font-black text-blue-600 mb-4">Today</div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">Combining tradition with cutting-edge technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="quality" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Quality & Certifications</h2>
            <p className="text-xl text-gray-600">International standards, local expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-10 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl">
              <div className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-4xl font-black text-green-700">ISO</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">ISO 9001</h3>
              <p className="text-gray-600">Quality Management System ensuring sustained customer satisfaction</p>
            </div>
            <div className="text-center p-10 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl">
              <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-4xl font-black text-blue-700">ISO</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">ISO 14001</h3>
              <p className="text-gray-600">Environmental Management System for sustainable operations</p>
            </div>
            <div className="text-center p-10 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl">
              <div className="w-24 h-24 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-3xl font-black text-orange-700">HACCP</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">HACCP</h3>
              <p className="text-gray-600">Food safety control system for food-grade products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Create Your Perfect Packaging</h2>
          <p className="text-xl text-blue-100 mb-12">
            Custom FIBC solutions tailored to your exact requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              Request Quote
            </button>
            <button className="px-10 py-5 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold text-white mb-4">LESCOBAGS</div>
            <p className="text-sm">Premium FIBC manufacturer since 1919</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Standard Big Bags</a></li>
              <li><a href="#" className="hover:text-white">Baffle Bags</a></li>
              <li><a href="#" className="hover:text-white">Block Bottom Bags</a></li>
              <li><a href="#" className="hover:text-white">Container Liners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Facility</a></li>
              <li><a href="#" className="hover:text-white">Quality</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-sm mb-2">Leskovac, Serbia</p>
            <p className="text-sm mb-2">info@lescobags.com</p>
            <p className="text-sm">+381 16 XXX XXX</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© 2025 Lescobags. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
