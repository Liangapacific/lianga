import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads | Lianga Pacific, Inc.',
  description: 'Download product data sheets, installation guides, and technical documentation from Lianga Pacific.',
};

const downloadCategories = [
  {
    category: 'Product Data Sheets',
    files: [
      { name: 'Prefinished Moulding — Product Data Sheet', type: 'PDF', size: '1.2 MB', date: 'Jan 2026' },
      { name: 'Painted Moulding — Product Data Sheet', type: 'PDF', size: '1.1 MB', date: 'Jan 2026' },
      { name: 'Primed Moulding — Product Data Sheet', type: 'PDF', size: '980 KB', date: 'Jan 2026' },
      { name: 'Full Product Catalog 2026', type: 'PDF', size: '4.5 MB', date: 'Jan 2026' },
    ],
  },
  {
    category: 'Installation Guides',
    files: [
      { name: 'Interior Moulding Installation Guide', type: 'PDF', size: '2.3 MB', date: 'Dec 2025' },
      { name: 'Base Moulding Installation Tips', type: 'PDF', size: '1.4 MB', date: 'Dec 2025' },
      { name: 'Crown Moulding How-To Guide', type: 'PDF', size: '1.8 MB', date: 'Nov 2025' },
      { name: 'Door Casing Installation Reference', type: 'PDF', size: '1.0 MB', date: 'Nov 2025' },
    ],
  },
  {
    category: 'Technical Drawings & Profiles',
    files: [
      { name: 'Profile Line Drawings — Base Moulding', type: 'PDF', size: '3.1 MB', date: 'Oct 2025' },
      { name: 'Profile Line Drawings — Casing Moulding', type: 'PDF', size: '2.8 MB', date: 'Oct 2025' },
      { name: 'Profile Line Drawings — Crown Moulding', type: 'PDF', size: '2.5 MB', date: 'Oct 2025' },
      { name: 'Custom Profile Request Form', type: 'PDF', size: '450 KB', date: 'Sep 2025' },
    ],
  },
  {
    category: 'Ordering & Pricing',
    files: [
      { name: 'Pricing & Ordering Guide 2026', type: 'PDF', size: '600 KB', date: 'Jan 2026' },
      { name: 'Sample Request Form', type: 'PDF', size: '320 KB', date: 'Jan 2026' },
      { name: 'Lead Time & Scheduling Information', type: 'PDF', size: '280 KB', date: 'Jan 2026' },
    ],
  },
];

function DownloadIcon() {
  return (
    <svg className="w-5 h-5 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

export default function DownloadsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1B5E78] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2">Downloads</h1>
          <p className="text-blue-200">Product documentation, guides, and technical resources</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            Access our full library of downloadable resources below. All documents are available in PDF format.
            If you need a document that is not listed here, please{' '}
            <a href="/contact" className="text-[#1B5E78] underline hover:text-[#134558]">contact us</a>.
          </p>
        </div>
      </section>

      {/* Downloads List */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          {downloadCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-xl font-bold text-[#1B5E78] mb-4 pb-2 border-b-2 border-[#C9A84C]">
                {cat.category}
              </h2>
              <div className="space-y-2">
                {cat.files.map((file) => (
                  <div
                    key={file.name}
                    className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-5 py-4 hover:border-[#1B5E78] hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#1B5E78]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{file.type} &bull; {file.size} &bull; Updated {file.date}</p>
                      </div>
                    </div>
                    <a
                      href="mailto:sales@lianga.com?subject=Document Request"
                      className="flex items-center gap-2 text-sm text-[#1B5E78] font-semibold hover:text-[#C9A84C] transition-colors"
                    >
                      <DownloadIcon />
                      <span className="hidden sm:inline">Download</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            Can&apos;t find what you&apos;re looking for? Email us at{' '}
            <a href="mailto:sales@lianga.com" className="text-[#1B5E78] underline">sales@lianga.com</a>{' '}
            or call{' '}
            <a href="tel:253-383-4761" className="text-[#1B5E78] underline">253-383-4761</a>{' '}
            and our team will assist you.
          </p>
        </div>
      </section>
    </div>
  );
}
