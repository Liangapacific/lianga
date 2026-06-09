import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1B5E78] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-3xl font-extrabold tracking-tight">Lianga</span>
              <br />
              <span className="text-xs font-bold text-[#C9A84C] tracking-widest uppercase">
                Pacific, Inc.
              </span>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              A leading manufacturer of prefinished and painted moulding for commercial multifamily projects.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C9A84C] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-blue-100">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'Products' },
                { href: '/resources', label: 'Resources' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/downloads', label: 'Downloads' },
                { href: '/faqs', label: "FAQ's" },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C9A84C] mb-4">
              Products
            </h3>
            <ul className="space-y-2 text-sm text-blue-100">
              {[
                { href: '/products#prefinished', label: 'Prefinished Moulding' },
                { href: '/products#painted', label: 'Painted Moulding' },
                { href: '/products#primed', label: 'Primed Moulding' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C9A84C] mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-blue-100">
              <div>
                <p className="font-semibold text-white">Millsite</p>
                <p>2120 Port of Tacoma Road</p>
                <p>Tacoma, Washington 98421</p>
              </div>
              <div>
                <p className="font-semibold text-white">Mailing</p>
                <p>P.O. Box 1355</p>
                <p>Tacoma, Washington 98401</p>
              </div>
              <div>
                <a href="tel:253-383-4761" className="hover:text-white transition-colors block">
                  📞 253-383-4761
                </a>
                <a href="mailto:sales@lianga.com" className="hover:text-white transition-colors block">
                  ✉ sales@lianga.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#134558] bg-[#134558]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-blue-200">
          © Copyright 2015 – 2026, Lianga Pacific, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
