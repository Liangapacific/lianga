import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources | Lianga Pacific, Inc.',
  description: 'Technical resources, guides, and information for architects, contractors, and distributors.',
};

const categories = [
  {
    title: 'Installation Guides',
    icon: (
      <svg className="w-8 h-8 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    items: [
      'Prefinished Moulding Installation Guide',
      'Painted Moulding Best Practices',
      'Interior Base & Casing Installation Tips',
      'Crown Moulding Measurement & Installation',
    ],
  },
  {
    title: 'Technical Data Sheets',
    icon: (
      <svg className="w-8 h-8 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      'Prefinished Moulding Technical Data Sheet',
      'Painted Moulding Technical Data Sheet',
      'Primed Moulding Technical Data Sheet',
      'Moisture & Humidity Resistance Specs',
    ],
  },
  {
    title: 'Design Resources',
    icon: (
      <svg className="w-8 h-8 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      'Profile Catalog & Line Drawings',
      'Color Chip Sample Request Form',
      'Custom Profile Design Request',
      'Architectural Specification Templates',
    ],
  },
  {
    title: 'Project Planning',
    icon: (
      <svg className="w-8 h-8 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    items: [
      'Moulding Estimating Calculator',
      'Multifamily Project Checklist',
      'Lead Time & Scheduling Guide',
      'Ordering & Pricing Information',
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1B5E78] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2">Resources</h1>
          <p className="text-blue-200">Tools, guides, and information to help your project succeed</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1B5E78] mb-4">Everything You Need in One Place</h2>
          <p className="text-gray-600 leading-relaxed">
            We provide a comprehensive library of resources to support architects, designers, contractors,
            and developers at every stage of their project. From installation guides to technical data
            sheets, our resource center has you covered.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#1B5E78]/10 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1B5E78]">{cat.title}</h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-[#C9A84C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <Link href="/downloads" className="hover:text-[#1B5E78] hover:underline">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Support Banner */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { title: 'Need a Sample?', desc: 'Request physical color chips and profile samples to be sent to your office.', link: '/contact', label: 'Request Samples' },
            { title: 'Custom Specifications?', desc: 'Our team can help create custom architectural specs for your project documents.', link: '/contact', label: 'Contact Us' },
            { title: 'Downloadable Files?', desc: 'Access our full library of PDFs, drawings, and data sheets in the Downloads section.', link: '/downloads', label: 'Go to Downloads' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-[#1B5E78] mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <Link href={item.link} className="text-[#C9A84C] font-semibold text-sm hover:underline">{item.label} &rarr;</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
