import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products | Lianga Pacific, Inc.',
  description: 'Prefinished, Painted, and Primed mouldings and millwork for commercial multifamily projects. ExpressBid™ and ColorMatch™ systems available.',
};

const woodColors = [
  { name: 'Natural Maple', bg: '#D4B483' },
  { name: 'Golden Oak', bg: '#C4933F' },
  { name: 'Honey Oak', bg: '#C8963E' },
  { name: 'Cherry', bg: '#A0522D' },
  { name: 'Walnut', bg: '#7B4F2E' },
  { name: 'Dark Walnut', bg: '#3B2314' },
  { name: 'Espresso', bg: '#2C1A0E' },
  { name: 'Driftwood Gray', bg: '#8A8C8A' },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1B5E78] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2">Our Products</h1>
          <p className="text-blue-200">Premium moulding and millwork solutions for commercial and multifamily projects</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            For over 50 years, Lianga Pacific, Inc. has been providing high-quality mouldings and millwork
            to contractors, developers, and distributors all over the United States. Download our specifier
            sheets and profile drawings for use in your project specifications and call to learn about our{' '}
            <span className="text-[#1B5E78] font-semibold">ExpressBid™ System</span> and{' '}
            <span className="text-[#1B5E78] font-semibold">ColorMatch™ process</span>.
          </p>
        </div>
      </section>

      {/* PREFINISHED */}
      <section id="prefinished" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1B5E78] mb-4">Prefinished Mouldings from Lianga Pacific, Inc.</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For over 50 years, Lianga Pacific, Inc. has been providing high-quality prefinished mouldings and
                millwork to contractors, developers, and distributors all over the United States. Download our
                specifier sheets and profile drawings for use in your project specifications and call to learn about our{' '}
                <span className="text-[#1B5E78] font-semibold">ExpressBid™ System</span> and{' '}
                <span className="text-[#1B5E78] font-semibold">ColorMatch™ process</span>.
              </p>

              <h3 className="text-xl font-bold text-[#1B5E78] mb-3">Quality Products – Competitive Pricing – Experienced Team Members</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our prefinished mouldings arrive ready to install, and eliminate the mess of finishing. We use high
                quality industrial finishes manufactured by the world&apos;s leading coatings suppliers. We offer a triple
                coat finishing system consisting of two coats of pigmented, fast drying, Modified Nitrocellulose lacquer
                and a final topcoat of clear Nitrocellulose Alkyd.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our products and services have a well-earned reputation in the industry and our customers appreciate
                the trouble-free experience. Flexible product offerings allow mixing profiles and matching colors to
                suit your project&apos;s design.
              </p>

              <h3 className="font-bold text-gray-800 mb-3">Product Line Includes</h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Embossed and Smooth Surface Texture Options',
                  'Classic and Contemporary Profile options',
                  'Updated color and grain options',
                  'Color matching and consistency',
                  'Multiple Jamb Widths and Heights',
                  '20 Minute Rated Frames',
                  'Non-rated openings',
                  'Door stops',
                  'Base shoe',
                  'S4S boards',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#1B5E78] font-semibold italic">
                Allow our project experience to keep your project on time and within budget.
              </p>
            </div>

            {/* Color Swatches */}
            <div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">Standard Colors</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Keep in mind that colors on your screen may not match the actual product. If you don&apos;t see
                  what you need, we can produce your preferred color with our{' '}
                  <span className="text-[#1B5E78] font-semibold">ColorMatch™</span> system!
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {woodColors.map((color) => (
                    <div key={color.name} className="aspect-square rounded border border-gray-300 shadow-sm" style={{ backgroundColor: color.bg }} title={color.name} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAINTED */}
      <section id="painted" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Visual */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col gap-4">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-300 rounded flex items-center justify-center text-gray-400 font-semibold text-lg">
                Painted Moulding Sample
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                {['Prime coat', 'Color coat', 'Clear coat'].map((coat, i) => (
                  <div key={coat} className="bg-[#1B5E78]/10 rounded p-3">
                    <div className="text-[#1B5E78] font-bold text-lg mb-1">{i + 1}</div>
                    <div className="text-gray-700 font-medium text-xs">{coat}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#1B5E78] mb-4">Painted Mouldings from Lianga Pacific</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lianga Pacific utilizes more than 50 years&apos; experience in producing high-quality painted mouldings
                and millwork for contractors, distributors, and developers nationwide. Download our specifier sheets
                and profile drawings for use in your project specifications and call to learn about our{' '}
                <span className="text-[#1B5E78] font-semibold">ExpressBid™ System</span> and{' '}
                <span className="text-[#1B5E78] font-semibold">ColorMatch™ process</span>.
              </p>

              <h3 className="text-xl font-bold text-[#1B5E78] mb-3">Quality – Competitive – Experienced</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Painted mouldings and millwork are a cost-effective solution for many commercial and multifamily
                residential projects. Project timeline and labor savings reflect directly on the bottom line while
                allowing you to shorten your project&apos;s construction season on every project.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Stock substrate options are MDF and finger-joint pine, with additional special order options available.
                You&apos;ll benefit from our three-coat paint system, ensuring quality while reducing V.O.C. emissions
                on your job site.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                All of your painted mouldings and millwork arrive ready-to-install with consistent quality due to our triple coat system:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  { label: 'Prime coat', desc: 'Seals wood and fills for a smooth paintable surface' },
                  { label: 'Color coat', desc: 'Our Complete Cover process ensures total coverage and consistent color' },
                  { label: 'Clear coat', desc: 'A clear acrylic topcoat seals and protects for a durable finish' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-semibold text-[#1B5E78]">{item.label}</span> – {item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                All orders receive a final quality inspection before packaging. Your order is packaged in cardboard
                linerboard for protection from our facility to your job site.
              </p>

              <h3 className="font-bold text-gray-800 mb-3">Full Line Includes</h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Embossed and Smooth Surface Texture Options',
                  'Classic and Contemporary Profile options',
                  'Color matching and consistency',
                  'Multiple Jamb Widths and Heights',
                  '20 Minute Rated Frames',
                  'Non-rated openings',
                  'Door stops',
                  'Base shoe',
                  'S4S boards',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="text-[#1B5E78] font-semibold underline hover:text-[#C9A84C] transition-colors">
                Contact Lianga Pacific, Inc. today
              </Link>
              <span className="text-gray-600"> and experience how we keep your project on time within budget.</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMED */}
      <section id="primed" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1B5E78] mb-4">Primed Mouldings and Millwork from Lianga Pacific</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over 50 years&apos; of painting and prefinishing experience goes into producing high-quality primed
                mouldings and millwork for contractors, distributors, and developers nationwide. Download our
                specifier sheets and profile drawings for use in your project specifications and call to learn
                about our <span className="text-[#1B5E78] font-semibold">ExpressBid™ System</span> and{' '}
                <span className="text-[#1B5E78] font-semibold">ColorMatch™ process</span>.
              </p>

              <h3 className="text-xl font-bold text-[#1B5E78] mb-3">High Quality – Smooth – Paint Ready</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lianga Pacific smooth <span className="font-semibold text-[#1B5E78]">Premier Prime™</span> mouldings
                and millwork are a cost-effective solution for many commercial and multifamily residential projects.
                Less site prep time creates labor savings reflected directly on the bottom line while allowing your
                painter to spend less time on site.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Stock substrate options are MDF and finger-joint pine, with additional special order options available.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                All of your primed mouldings and millwork arrive ready-to-install with consistent quality due to our
                three levels of quality:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  { label: 'Quality Panels', desc: 'Higher quality panels lead to a better machine finish' },
                  { label: 'Quality Primer', desc: 'High solid primer fills as it seals the wood fiber' },
                  { label: 'Quality Sanded', desc: 'Multi point sanding creates a smooth paint ready finish' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-semibold text-[#1B5E78]">{item.label}</span> – {item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-6">
                All our orders receive a final quality inspection before packaging. Your order is packaged in
                cardboard linerboard for protection from our facility to your job site.
              </p>

              <h3 className="font-bold text-gray-800 mb-3">Full Line Includes</h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Classic and Contemporary Profile options',
                  'Multiple Jamb Widths and Heights',
                  '20 Minute Rated Frames',
                  'Door stop',
                  'Base shoe',
                  'S4S boards',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="text-[#1B5E78] font-semibold underline hover:text-[#C9A84C] transition-colors">
                Contact Lianga Pacific, Inc. today
              </Link>
              <span className="text-gray-600"> and experience how we keep your project on time within budget.</span>
            </div>

            {/* Visual */}
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-400 rounded flex items-center justify-center text-gray-500 text-sm font-medium">
                  Primed Door Frame
                </div>
                <div className="h-40 bg-gradient-to-br from-gray-300 to-gray-500 rounded flex items-center justify-center text-gray-100 text-sm font-medium">
                  Paint Ready
                </div>
              </div>
              <div className="bg-white rounded border border-gray-200 p-4">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">Premier Prime™ Quality Levels</p>
                {['Quality Panels', 'Quality Primer', 'Quality Sanded'].map((level, i) => (
                  <div key={level} className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#1B5E78] text-white text-xs flex items-center justify-center font-bold">{i + 1}</div>
                    <span className="text-sm text-gray-700 font-medium">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B5E78] py-12 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Need Help Choosing the Right Product?</h2>
          <p className="text-blue-100 mb-6">
            Our experienced team is ready to help you find the perfect moulding solution for your project
            requirements and budget.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] text-white font-semibold px-8 py-3 rounded hover:bg-[#a8872e] transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
