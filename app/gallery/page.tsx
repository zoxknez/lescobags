import Link from 'next/link'

export default function GalleryPage() {
  const images = [
    { id: 1, name: 'FIBC Bags Production', url: 'fibc-bags-1.jpg' },
    { id: 2, name: 'Standard Big Bags', url: 'fibc-bags-2.jpg' },
    { id: 3, name: 'Quality Control', url: 'fibc-bags-3.jpg' },
    { id: 4, name: 'Baffle Bags', url: 'fibc-bags-4.jpg' },
    { id: 5, name: 'Manufacturing Process', url: 'fibc-bags-5.jpg' },
    { id: 7, name: 'Finished Products', url: 'fibc-bags-7.jpg' },
    { id: 8, name: 'Warehouse Storage', url: 'fibc-bags-8.jpg' },
    { id: 9, name: 'Production Line', url: 'fibc-bags-9.jpg' },
    { id: 10, name: 'Bulk Bags', url: 'fibc-bags-10.jpg' },
    { id: 13, name: 'Facility Overview', url: 'fibc-bags-13.jpg' },
    { id: 14, name: 'Quality Inspection', url: 'fibc-bags-14.jpg' },
    { id: 16, name: 'Ready for Shipment', url: 'fibc-bags-16.jpg' },
  ]

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Gallery</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Explore our production facility, products, and quality standards
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div 
                key={image.id} 
                className="group relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 text-gray-400 mx-auto mb-4 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-600 font-semibold group-hover:text-blue-600 transition-colors">
                      {image.name}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">{image.url}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Photo Categories
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Products</h3>
              <p className="text-gray-600 text-sm">FIBC & Bulk Bags</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Facility</h3>
              <p className="text-gray-600 text-sm">Production Area</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Production</h3>
              <p className="text-gray-600 text-sm">Manufacturing</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">Control & Testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Want to See More?</h2>
          <p className="text-xl mb-8 opacity-95">
            Visit our facility or request a virtual tour to see our production process in action
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-10 py-5 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Schedule a Visit
            </Link>
            <Link 
              href="/facility" 
              className="px-10 py-5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
            >
              Learn About Our Facility
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
