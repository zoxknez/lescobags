import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/facility" className="hover:text-white transition-colors">
                  Our Facility
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Meet The Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2">
              <li>Tekstilna 40</li>
              <li>16000 Leskovac</li>
              <li>Serbia</li>
              <li className="pt-2">
                <a href="tel:016640202" className="hover:text-white transition-colors">
                  Phone: 016/640 202
                </a>
              </li>
              <li>
                <a href="mailto:info@lescobags.com" className="hover:text-white transition-colors">
                  info@lescobags.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="ml-4">9 AM - 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="ml-4">10 AM - 3 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="ml-4">Closed</span>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div>
            <div className="text-3xl font-bold text-white mb-4">LESCOBAGS</div>
            <p className="text-sm mb-4">
              Excellence in packaging solutions since 1919
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>Built with HTML5 and CSS3, Copyright © 2016-{new Date().getFullYear()} LESCOBAGS</p>
        </div>
      </div>
    </footer>
  )
}
