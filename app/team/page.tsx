export default function TeamPage() {
  const team = [
    {
      name: 'Natalija Cvetković',
      role: 'Client relations and HR',
      email: 'natalijac@lescobags.com',
      image: '/images/team/natalija.jpg'
    },
    {
      name: 'Milena Stojanović',
      role: 'Customer relations',
      email: 'mstojanovic@lescobags.com',
      image: '/images/team/milena.jpg'
    },
    {
      name: 'Marijana Jovanović',
      role: 'Production manager',
      email: 'mjovanovic@lescobags.com',
      image: '/images/team/marijana.jpg'
    },
    {
      name: 'Miloš Stanković',
      role: 'Purchasing manager',
      email: 'mstankovic@lescobags.com',
      image: '/images/team/milos.jpg'
    },
    {
      name: 'Boban Savić',
      role: 'Production manager',
      email: 'bsavic@lescobags.com',
      image: '/images/team/boban.jpg'
    }
  ]

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Meet The Team</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals committed to excellence
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-lg text-blue-600 mb-4">{member.role}</p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Want to join our team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for talented individuals who share our passion for excellence
          </p>
          <a 
            href="mailto:info@lescobags.com" 
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  )
}
