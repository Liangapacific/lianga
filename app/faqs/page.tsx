'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'What is FIBERTEX?',
    a: 'FIBERTEX is a proprietary textured surface MDF used in the manufacturing of our Prefinished door jambs.',
  },
  {
    q: 'Is your MDF Formaldehyde free?',
    a: 'Our MDF meets the CARB 2 standard and we can quote NAUF (No Added Urea Formaldehyde) if your project requires it.',
  },
  {
    q: 'What kind of coatings do you use?',
    a: null,
    detail: [
      {
        label: 'Primed Mouldings and Millwork',
        text: 'Our primers are acrylic latex based coatings.',
      },
      {
        label: 'Prefinished and Painted Mouldings and Millwork',
        text: 'We offer a triple coat finishing system consisting of two coats of pigmented, fast drying, Modified Nitrocellulose lacquer and a final topcoat of clear Nitrocellulose Alkyd.',
      },
    ],
  },
  {
    q: 'What about custom colors?',
    a: 'Our systematic ColorMatch™ process assures the color you select is delivered ready to install. Provide us a color sample to match, and we will match your color and send samples for your approval.',
  },
  {
    q: 'What are the substrate options?',
    a: 'Our mouldings are made of finger joint wood and MDF (medium density fiberboard).',
  },
  {
    q: 'How durable are they?',
    a: 'Our prefinished and painted mouldings and millwork have been installed in commercial Multi-family projects for close to 60 years. Our triple coat finishing system has stood the test of time and is continually specified for the tough conditions of the Multi-family rental market.',
  },
  {
    q: 'Do you offer the ExpressBid™ System?',
    a: 'Yes. Our ExpressBid™ System is designed to help contractors and developers get accurate pricing quickly so you can keep your project timeline on track. Contact our sales team to learn more.',
  },
  {
    q: 'What profile styles are available?',
    a: 'We offer a wide range of profiles selected from our LP pattern series, including base moulding, door casing, door jambs, door stop, base shoe, and S4S boards — in both Classic and Contemporary styles. Custom profiles can also be indicated on project drawings.',
  },
  {
    q: 'Where are you located and do you ship nationwide?',
    a: 'Our mill is located at 2120 Port of Tacoma Road, Tacoma, Washington 98421. We provide high-quality prefinished mouldings and millwork to contractors, developers, and distributors all over the United States.',
  },
];

function FaqItem({ q, a, detail }: { q: string; a: string | null; detail?: { label: string; text: string }[] }) {
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
        <div className="px-6 pb-5 bg-white border-t border-gray-100 pt-4">
          {a && <p className="text-gray-600 text-sm leading-relaxed">{a}</p>}
          {detail && (
            <div className="space-y-3">
              {detail.map((d) => (
                <div key={d.label}>
                  <p className="font-semibold text-[#1B5E78] text-sm mb-1">{d.label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.text}</p>
                </div>
              ))}
            </div>
          )}
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
          <p className="text-blue-200">Lianga Pacific — answers to our most common questions</p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-8 leading-relaxed">
            Here are some of the most common questions we receive. If you can&apos;t find the answer to your
            question, please give us a call to discuss your project.
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a ?? null} detail={faq.detail} />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-gray-50 py-12 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B5E78] mb-3">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Our knowledgeable team is happy to answer any questions not covered here. Reach out by phone or email and we&apos;ll get back to you promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2533834761" className="inline-block bg-[#1B5E78] text-white font-semibold px-8 py-3 rounded hover:bg-[#134558] transition-colors">
              Call 253-383-4761
            </a>
            <a href="mailto:sales@lianga.com" className="inline-block bg-white border-2 border-[#1B5E78] text-[#1B5E78] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
              Email sales@lianga.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
