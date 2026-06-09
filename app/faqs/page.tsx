'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

const faqs = [
  {
    q: 'What types of moulding does Lianga Pacific manufacture?',
    a: 'Lianga Pacific manufactures three main categories of moulding: Prefinished, Painted, and Primed. Each type serves a different finishing need. Prefinished moulding arrives ready to install with a factory-applied finish. Painted moulding has a smooth painted surface. Primed moulding is prepared with a primer base coat and ready for your custom topcoat color.',
  },
  {
    q: 'What profile styles are available?',
    a: 'We offer a wide range of profiles including base moulding, door casing, crown moulding, chair rail, panel moulding, door stop, shoe moulding, and more. Custom profiles can also be produced for projects requiring a specific design. Contact our sales team to discuss your profile requirements.',
  },
  {
    q: 'Do you offer custom colors for prefinished and painted moulding?',
    a: 'Yes. While we stock standard colors for immediate availability, we can also match custom colors for larger orders. Custom color matching is available for both prefinished and painted moulding. Please contact our sales team with your color specifications and project details so we can provide a quote and lead time.',
  },
  {
    q: 'What are the standard lengths available for moulding products?',
    a: 'Our standard moulding lengths are 8 feet and 12 feet. Custom lengths may be available depending on the product and order volume. For large commercial or multifamily projects, we can often accommodate specific length requirements. Please inquire with our sales team.',
  },
  {
    q: 'What is the typical lead time for an order?',
    a: 'Lead times vary depending on the product type, quantity, and customization requirements. Stock items are generally available for prompt shipment. Custom colors or profiles may require 2–4 weeks or longer. For time-sensitive projects, please contact us as early as possible so we can plan accordingly.',
  },
  {
    q: 'Do you ship outside of Washington State?',
    a: 'Yes. While we are based in Tacoma, Washington, we ship products throughout the Pacific Northwest and to customers across the United States. Shipping options and costs will depend on order size and destination. Contact us for a freight quote.',
  },
  {
    q: 'Can I request a sample before placing a large order?',
    a: 'Absolutely. We encourage customers to request color chip samples and physical profile samples before placing a full order. This ensures the product meets your expectations before committing to quantity. Use our Contact page or email sales@lianga.com to request samples.',
  },
  {
    q: 'What species of wood are your mouldings made from?',
    a: 'Our mouldings are available in several species and substrate options including finger-joint pine, MDF (medium-density fiberboard), and hardwood species depending on the product line. The right choice depends on your application — MDF is great for painted applications, while wood species are preferred for stain or prefinished applications.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-800 text-sm sm:text-base pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-[#1B5E78] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white border-t border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1B5E78] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2">Frequently Asked Questions</h1>
          <p className="text-blue-200">Answers to common questions about our products and services</p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-gray-50 py-12 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B5E78] mb-3">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Our knowledgeable team is happy to answer any questions not covered here. Reach out by phone or email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:253-383-4761" className="inline-block bg-[#1B5E78] text-white font-semibold px-8 py-3 rounded hover:bg-[#134558] transition-colors">
              Call 253-383-4761
            </a>
            <a href="mailto:sales@lianga.com" className="inline-block bg-white border-2 border-[#1B5E78] text-[#1B5E78] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
