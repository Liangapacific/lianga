import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads | Lianga Pacific, Inc.',
  description: 'Request specifier sheets, profile drawings, and technical documentation from Lianga Pacific.',
};

const documentTypes = [
  {
    title: 'Architect Specifications',
    desc: 'Section 06220 Millwork specification documents for use in your project specs, covering door jambs, mouldings, and millwork.',
  },
  {
    title: 'Specifier Sheets',
    desc: 'Product data sheets for our Prefinished, Painted, and Premier Prime™ product lines, including substrate and coating details.',
  },
  {
    title: 'Profile Drawings',
    desc: 'Dimensioned line drawings from our LP pattern series for base, casing, jambs, door stop, base shoe, and S4S boards.',
  },
  {
    title: 'Color Charts',
    desc: 'Standard color references for Prefinished (LP-0084 Mendocino through Slate) and Painted (LP-046 through LP-300) product lines.',
  },
];

export default function DownloadsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1B5E78] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2">Downloads</h1>
          <p className="text-blue-200">Specifier sheets, profile drawings, and technical documentation</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            The documents below are available on request. Email{' '}
            <a href="mailto:sales@lianga.com" className="text-[#1B5E78] underline hover:text-[#134558]">sales@lianga.com</a>{' '}
            or call{' '}
            <a href="tel:2533834761" className="text-[#1B5E78] underline hover:text-[#134558]">253-383-4761</a>{' '}
            and our team will send you the current versions for your project.
          </p>
        </div>
      </section>

      {/* Document Types */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {documentTypes.map((doc) => (
            <div
              key={doc.title}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#1B5E78] hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1B5E78]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-[#1B5E78] mb-1">{doc.title}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{doc.desc}</p>
                  <a
                    href={`mailto:sales@lianga.com?subject=Document Request: ${encodeURIComponent(doc.title)}`}
                    className="inline-flex items-center gap-2 text-sm text-[#1B5E78] font-semibold hover:text-[#C9A84C] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Request this document
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            Need something not listed here — custom profile drawings, ColorMatch™ samples, or project-specific
            specifications? Email{' '}
            <a href="mailto:sales@lianga.com" className="text-[#1B5E78] underline">sales@lianga.com</a>{' '}
            and our team will assist you.
          </p>
        </div>
      </section>
    </div>
  );
}
