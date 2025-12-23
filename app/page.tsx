import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Lescobags Packaging Solutions
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
              Excellence Delivered
            </p>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Leading manufacturer of FIBC and bulk bags. Quality packaging solutions since 1919.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/products" 
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                View Products
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-blue-600 transition-colors text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">Unmatched Quality. Best-in-the-class Market Value.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Standard Bags */}
            <Link href="/products" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100 h-full">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 transition-colors">
                  <svg className="w-10 h-10 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Standard Big Bags</h3>
                <p className="text-gray-600 text-center">
                  Used for carrying and storage of dry non-hazardous materials in powder, flake and granular form.
                </p>
              </div>
            </Link>

            {/* Baffle Bags */}
            <Link href="/products" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100 h-full">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-green-600 transition-colors">
                  <svg className="w-10 h-10 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Baffle Bags</h3>
                <p className="text-gray-600 text-center">
                  Chosen to use the area for carried and stocked big bags as optimal as possible.
                </p>
              </div>
            </Link>

            {/* Conductive Bags */}
            <Link href="/products" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100 h-full">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-yellow-600 transition-colors">
                  <svg className="w-10 h-10 text-yellow-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Conductive Bags</h3>
                <p className="text-gray-600 text-center">
                  Specialized bags with conductive properties for sensitive materials and environments.
                </p>
              </div>
            </Link>

            {/* Food Grade Bags */}
            <Link href="/products" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100 h-full">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-purple-600 transition-colors">
                  <svg className="w-10 h-10 text-purple-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Food Grade Bags</h3>
                <p className="text-gray-600 text-center">
                  HACCP certified bags suitable for food products with the highest safety standards.
                </p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality is Lescobags's highest priority. Every bag type is certified by major European test institutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* ISO 9001 */}
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-blue-600">ISO</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ISO 9001</h3>
                <p className="text-gray-600">
                  ISO 9001:2008 is an international standard related to quality management system. 
                  Ensures sustained customer satisfaction.
                </p>
              </div>
            </div>

            {/* ISO 14001 */}
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-green-600">ISO</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ISO 14001</h3>
                <p className="text-gray-600">
                  ISO 14001:2004 specifies requirements for environmental management system to develop 
                  policy and objectives.
                </p>
              </div>
            </div>

            {/* HACCP */}
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
                <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-purple-600">HACCP</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">HACCP</h3>
                <p className="text-gray-600">
                  HACCP certification is an international standard defining requirements for effective 
                  control of food safety.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/quality" 
              className="inline-block px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Learn More About Quality
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                Since 1919
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                We accompany your business as we help it grow
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Lescobags d.o.o. began its journey in the FIBC segment with a small, dedicated team of 
                engineers offering reliable services with unmatched technical precision.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We have integrated our services to become a one-stop solutions shop for our clients for 
                their packaging needs. We evaluate each request systematically, present customized solutions, 
                and manufacture FIBCs tailored to the needs of our client.
              </p>
              <Link 
                href="/about" 
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Read More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-black text-blue-600/20 mb-4">100+</div>
                  <div className="text-2xl font-bold text-gray-700">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Customer Satisfaction</h2>
          <p className="text-xl mb-6 leading-relaxed opacity-95">
            We concentrate on using our skills as a manufacturer to be the most reliable, creative, 
            cost-effective and efficient solution provider in the market.
          </p>
          <p className="text-lg mb-8 leading-relaxed opacity-90">
            For years now it's been a motto of ours to exceed expectations and that's exactly what 
            we aim to do every day. Our commitment to innovation and our belief in technological 
            investment are the keys to reinforce our leadership in a continuously demanding market.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Looking for Quality Packaging Solutions?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today to discuss your FIBC and bulk bag requirements
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-10 py-5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  )
}
