import Link from 'next/link'

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Unmatched Quality. Best-in-the-class Market Value.
          </p>
        </div>
      </section>

      {/* Product Types Tabs */}
      <section className="py-12 px-6 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
              Standard Bags
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600">
              Baffle Bags
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600">
              Conductive Bags
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600">
              Food Grade Bags
            </button>
          </div>
        </div>
      </section>

      {/* Standard Bags Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
                <svg className="w-64 h-64 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Standard Big Bags</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Used for the carrying and storage of dry non-hazardous materials in powder, flake and 
                granular form. Standard big bags can be produced in different sizes and colors based on 
                customer requirements out of coated or uncoated durable UV-treated polypropylene fabrics 
                and with or without dustproof seams and with liner or without liner.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Liners can be tubular or formliner. Their capacity range from 500 Kg to 2000 Kg.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Capacity: 500 - 2000 Kg</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">UV-treated polypropylene fabric</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Customizable sizes and colors</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Optional dustproof seams and liners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Big Bags */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Big Bags</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The name Big (Bulk) Bag refers to an FIBC or flexible intermediate bulk container. Other 
              common names used for this product are ton bags, tonne bags, dumpy bags, tote bags and 
              builders bags to name a few.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Bulk Bags are an ideal way to transport and store dry free flowing materials safely and 
              securely in a very cost effective way. Bulk bags can be certified to carry product weighing 
              anything from 500kg up to 2000kg, the heavier the product being carried the heavier the grade 
              of fabric required to manufacture the bulk bag to conform to the safe working load.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Bulk Bags are predominantly made from PP (polypropylene) a high strength thermoplastic that 
              is very flexible. The PP is extruded in tubular form that is then cut into threads that are 
              woven together (warp and weft) to form a very strong fabric.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Management System */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Quality Management System</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Pre Production */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pre Production Inspection</h3>
              <p className="text-gray-600">
                Physical and computerized checks are made for ensuring the quality of the raw materials 
                used for production.
              </p>
            </div>

            {/* In-Process */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">In-Process Inspection</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Tape and yarn quality checks</li>
                <li>• Woven fabric testing</li>
                <li>• Component dimension verification</li>
                <li>• Print quality inspection</li>
                <li>• Tensile and breaking strength tests</li>
                <li>• UV stability testing</li>
              </ul>
            </div>

            {/* Final Inspection */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Final Inspection</h3>
              <p className="text-gray-600 mb-4">
                Packing: Random bales are checked for wrapping, counting and weight.
              </p>
              <p className="text-gray-600">
                Rig test: Rig tests are performed to ensure the safe working load (SWL) of FIBC as per 
                ISO standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Looking for Quality Packaging Solutions?</h2>
          <p className="text-xl mb-8 opacity-95">
            Contact us today to discuss your specific requirements
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-10 py-5 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
