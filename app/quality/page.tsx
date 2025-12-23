import Link from 'next/link'

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Quality & Certifications
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Excellence in every step of our process
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed mb-16">
            <p>
              Quality is Lescobags's highest priority. Technical specifications of raw material, 
              strength properties and UV content of components are all checked with respect to the 
              international standarts. Additionally, every bag type is certified by one of the major 
              European test institutes.
            </p>
            <p>
              Quality standarts are applied to ensure that the system works properly and the final 
              product meets the desired criteria.
            </p>
            <p>
              Satisfying customer requirements is more than just designing a bag. Quality is inherent 
              in every part of process in Lescobags. From the choice of materials, to the use of 
              advanced technology, to the maintenance of safety standarts, and to the timely delivery 
              of the finished goods - all are of equal importance in making a Lescobags product.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Certifications</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* ISO 9001 */}
            <div className="bg-white rounded-xl shadow-lg p-10 text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <div>
                  <div className="text-5xl font-black text-blue-600">ISO</div>
                  <div className="text-2xl font-bold text-blue-600">9001</div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">ISO 9001</h3>
              <p className="text-gray-600 leading-relaxed">
                ISO 9001:2008 is an international standard related to quality management system. 
                Ensures sustained customer satisfaction by producing, delivering services and providing 
                support functions that meet customer's needs and expectations.
              </p>
            </div>

            {/* ISO 14001 */}
            <div className="bg-white rounded-xl shadow-lg p-10 text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <div>
                  <div className="text-5xl font-black text-green-600">ISO</div>
                  <div className="text-2xl font-bold text-green-600">14001</div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">ISO 14001</h3>
              <p className="text-gray-600 leading-relaxed">
                ISO 14001:2004 specifies requirements for an environmental management system to enable 
                an organization to develop and implement a policy and objectives which take into account 
                legal requirements and other requirements to which the organization subscribes, and 
                information about significant environmental aspects.
              </p>
            </div>

            {/* HACCP */}
            <div className="bg-white rounded-xl shadow-lg p-10 text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="text-4xl font-black text-purple-600">HACCP</div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">HACCP</h3>
              <p className="text-gray-600 leading-relaxed">
                HACCP certification is an international standard defining the requirements for effective 
                control of food safety. It is built around seven principles: Conduct Hazard Analysis of 
                biological, chemical or physical food hazards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Quality Process</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Pre Production</h3>
                <p className="text-gray-600">
                  Physical and computerized checks ensuring quality of raw materials used for production.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-8 border-2 border-green-200">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">In-Process</h3>
                <p className="text-gray-600">
                  Continuous monitoring of tape, yarn, fabric, components, and testing for strength and UV stability.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Final Inspection</h3>
                <p className="text-gray-600">
                  Final packing checks and rig tests to ensure safe working load as per ISO standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Customer Satisfaction</h2>
          <div className="space-y-6 text-lg leading-relaxed opacity-95">
            <p>
              We concentrate on using our skills as a manufacturer to be the most reliable, creative, 
              cost-effective and efficient solution provider in the market. For years now it's been a 
              motto of ours to exceed expectations and that's exactly what we aim to do every day.
            </p>
            <p>
              We intend to develop collaboration links with our strategic clients which allow a mutual 
              growth in our commercial relations.
            </p>
            <p>
              Thanks to our exporting experience we can provide any country in the EU. For that purpose 
              we count on a solid commercial team that offers high technical qualification and global 
              solutions to our customer needs.
            </p>
            <p>
              Our commitment to innovation and our belief in technological investment are the keys to 
              reinforce our leadership in a continuously demanding market.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Experience Our Quality
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us provide you with certified, high-quality packaging solutions
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
