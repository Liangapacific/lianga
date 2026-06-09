'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    href: '/products',
    label: 'Products',
    dropdown: [
      { href: '/products#prefinished', label: 'Prefinished' },
      { href: '/products#painted', label: 'Painted' },
      { href: '/products#primed', label: 'Primed' },
    ],
  },
  { href: '/resources', label: 'Resources' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/faqs', label: "FAQ's" },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full z-50 ${isSticky ? 'fixed top-0 shadow-lg' : 'relative'}`}>
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-4xl font-extrabold text-[#1B5E78] tracking-tight">
              Lianga
            </span>
            <span className="text-xs font-bold text-[#C9A84C] tracking-widest uppercase -mt-1">
              Pacific, Inc.
            </span>
          </Link>

          {/* Contact info */}
          <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a
              href="tel:253-383-4761"
              className="flex items-center gap-2 hover:text-[#1B5E78] transition-colors"
            >
              <svg className="w-4 h-4 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              253-383-4761
            </a>
            <a
              href="mailto:sales@lianga.com"
              className="flex items-center gap-2 hover:text-[#1B5E78] transition-colors"
            >
              <svg className="w-4 h-4 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sales@lianga.com
            </a>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="bg-[#1B5E78]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.href} className="relative group">
                    <button
                      className="text-white text-sm font-medium px-4 py-3 flex items-center gap-1 hover:bg-[#134558] transition-colors"
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      {link.label}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`absolute left-0 top-full w-44 bg-white shadow-lg z-50 ${isProductsOpen ? 'block' : 'hidden'} group-hover:block`}
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B5E78] hover:text-white transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white text-sm font-medium px-4 py-3 hover:bg-[#134558] transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#134558] border-t border-[#2a7a9e]">
            <div className="px-4 py-2 flex items-center gap-4 text-sm text-gray-300 border-b border-[#2a7a9e]">
              <a href="tel:253-383-4761" className="hover:text-white">253-383-4761</a>
              <a href="mailto:sales@lianga.com" className="hover:text-white">sales@lianga.com</a>
            </div>
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block text-white text-sm font-medium px-4 py-3 hover:bg-[#1B5E78] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-6 bg-[#0f3647]">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-gray-300 text-sm px-4 py-2 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        — {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
