import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Lianga Pacific, Inc.',
  description: 'Get in touch with Lianga Pacific, Inc. for product inquiries, quotes, and support.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1B5E78] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2">Contact Us</h1>
          <p className="text-blue-200">We&apos;d love to hear from you — let&apos;s talk about your project.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#1B5E78] mb-2">Send Us a Message</h2>
            <p className="text-gray-500 mb-6 text-sm">Fill out the form below and a member of our team will respond within one business day.</p>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#1B5E78] mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1B5E78]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <a href="tel:253-383-4761" className="text-[#1B5E78] hover:underline">253-383-4761</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1B5E78]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a href="mailto:sales@lianga.com" className="text-[#1B5E78] hover:underline">sales@lianga.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-4">Our Locations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-5">
                  <p className="font-semibold text-[#1B5E78] mb-1">Millsite</p>
                  <p className="text-gray-600 text-sm">2120 Port of Tacoma Road</p>
                  <p className="text-gray-600 text-sm">Tacoma, Washington 98421</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <p className="font-semibold text-[#1B5E78] mb-1">Mailing Address</p>
                  <p className="text-gray-600 text-sm">P.O. Box 1355</p>
                  <p className="text-gray-600 text-sm">Tacoma, Washington 98401</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Find Us</h3>
              <div className="bg-gray-200 rounded-lg h-56 flex flex-col items-center justify-center text-gray-500">
                <svg className="w-12 h-12 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm font-medium">2120 Port of Tacoma Road</p>
                <p className="text-sm">Tacoma, WA 98421</p>
                <a
                  href="https://maps.google.com/?q=2120+Port+of+Tacoma+Road+Tacoma+WA+98421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm text-[#1B5E78] underline hover:text-[#134558]"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
