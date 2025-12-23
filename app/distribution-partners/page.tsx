import Link from 'next/link'

export default function DistributionPartnersPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Distribution Partners
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Connect with One of Lescobags's Authorized Distributors
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-lg text-gray-600 leading-relaxed mb-16">
            <p>
              In order to provide a better and faster service to our customers we work hard to expand 
              our sales network. The partnership with our distributors is based on trust and the 
              understanding of each other's objectives.
            </p>
            <p className="mt-6">
              Our distributors offer their customers one or several Lescobags products. Based on the 
              wide Lescobags portfolio and services, we can develop new innovative solutions together.
            </p>
          </div>
        </div>
      </section>

      {/* Partners List */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Distribution Partners
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* DRINA-KOMERC */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    DRINA - KOMERC d.o.o.
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    Bosnia and Herzegovina
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-700">Karakaj bb</p>
                    <p className="text-gray-700">75400 Zvornik</p>
                    <p className="text-gray-700">Bosnia and Herzegovina</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <a href="tel:+38765660099" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Mobile: +387 65 660 099
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link 
                  href="/products" 
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                >
                  View Our Products
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Placeholder for future partners */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-dashed border-gray-300 p-8 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-700 mb-2">Become a Partner</h3>
                <p className="text-gray-500 mb-6">
                  Interested in distributing Lescobags products?
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Partner Locations
          </h2>
          
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
            <div className="text-center text-blue-600">
              <svg className="w-32 h-32 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl font-semibold">Distribution Network Map</p>
              <p className="text-sm mt-2 opacity-75">Bosnia and Herzegovina, Serbia & Beyond</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Partnership?</h2>
          <p className="text-xl mb-8 opacity-95">
            Join our growing network of authorized distributors and bring quality FIBC solutions 
            to your region
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-10 py-5 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}
