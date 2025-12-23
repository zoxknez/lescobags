import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Excellence in packaging solutions since 1919
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Lescobags d.o.o.
              </h2>
              <h3 className="text-2xl text-blue-600 font-semibold mb-8">
                We accompany your business as we help it grow
              </h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
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
                  well as provide our products at very competitive prices. The quality of our products 
                  supplied, combined with our personal service is the key element in our success and has 
                  ensured that Lescobags d.o.o. has enjoyed continued growth.
                </p>
              </div>
            </div>
            <div>
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl font-black text-blue-600/20 mb-4">1919</div>
                    <div className="text-3xl font-bold text-gray-700 mb-2">Established</div>
                    <div className="text-xl text-gray-600">Over 100 years of excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Values</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Unmatched Quality. Best-in-the-class Market Value.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                ISO certified processes ensuring the highest standards
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Latest technology and pioneering packaging concepts
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Customized solutions tailored to your needs
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Exporting experience across the EU
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-4">100+</div>
              <div className="text-xl opacity-90">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">2000m²</div>
              <div className="text-xl opacity-90">Production Area</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">500-2000kg</div>
              <div className="text-xl opacity-90">Capacity Range</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to work with us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help your business grow
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Contact Us
            </Link>
            <Link 
              href="/products" 
              className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-blue-600 transition-colors text-lg"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
