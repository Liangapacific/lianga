import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Lianga Pacific, Inc.',
  description: 'View our gallery of moulding projects and installations for commercial and multifamily properties.',
};

const galleryItems = [
  { caption: 'Prefinished Base Moulding — Multifamily Complex, Tacoma WA', category: 'Prefinished' },
  { caption: 'Painted Crown Moulding — Commercial Lobby, Seattle WA', category: 'Painted' },
  { caption: 'Primed Casing Detail — Apartment Renovation, Portland OR', category: 'Primed' },
  { caption: 'Door Casing Installation — Luxury Condos, Bellevue WA', category: 'Prefinished' },
  { caption: 'Base & Shoe Moulding — Senior Living Facility, Tacoma WA', category: 'Painted' },
  { caption: 'Panel Moulding — Corporate Office Interior, Seattle WA', category: 'Primed' },
  { caption: 'Chair Rail Detail — Hotel Guest Rooms, Olympia WA', category: 'Painted' },
  { caption: 'Crown Moulding — High-End Residential, Mercer Island WA', category: 'Prefinished' },
  { caption: 'Baseboard Install — Student Housing, Pullman WA', category: 'Primed' },
  { caption: 'Window Casing — Mixed-Use Development, Spokane WA', category: 'Painted' },
  { caption: 'Door Stop Moulding — Apartment Complex, Kennewick WA', category: 'Prefinished' },
  { caption: 'Interior Trim Package — Multifamily Project, Renton WA', category: 'Painted' },
];

const categoryColors: Record<string, string> = {
  Prefinished: 'bg-[#1B5E78]/10 text-[#1B5E78]',
  Painted: 'bg-[#C9A84C]/10 text-[#a8872e]',
  Primed: 'bg-gray-100 text-gray-600',
};

export default function GalleryPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1B5E78] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2">Gallery</h1>
          <p className="text-blue-200">Showcasing our work across the Pacific Northwest</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            Browse our project gallery to see examples of Lianga Pacific moulding installed across a wide
            range of commercial and multifamily properties. From luxury condominiums to affordable housing
            developments, our products deliver consistent quality in every environment.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 pb-4">
        <div className="max-w-7xl mx-auto flex gap-3 flex-wrap">
          {['All', 'Prefinished', 'Painted', 'Primed'].map((cat) => (
            <span
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer ${
                cat === 'All'
                  ? 'bg-[#1B5E78] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#1B5E78] hover:text-white transition-colors'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-6 px-4 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-gray-200 h-52 flex items-center justify-center group-hover:bg-gray-300 transition-colors relative">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className={`absolute top-2 right-2 text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[item.category]}`}>
                  {item.category}
                </span>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 leading-snug">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B5E78] mb-3">Want to See More?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to request additional project photos or to discuss how our products can be used in your upcoming project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#1B5E78] text-white font-semibold px-8 py-3 rounded hover:bg-[#134558] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
