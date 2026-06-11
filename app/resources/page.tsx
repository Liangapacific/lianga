import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources | Lianga Pacific, Inc.',
  description: 'Technical resources, architect specifications, and information for architects, contractors, and distributors.',
};

const prefinishedColors = [
  { code: 'LP-0084', name: 'Mendocino' },
  { code: 'LP-0085', name: 'Natural' },
  { code: 'LP-0163', name: 'Ash' },
  { code: 'LP-0238', name: 'Chesapeake' },
  { code: 'LP-0360', name: 'Coastal Hemlock' },
  { code: 'LP-0409', name: 'Imperial' },
  { code: 'LP-0464', name: 'Golden' },
  { code: 'LP-1691', name: 'Maple' },
  { code: 'LP-7096', name: 'Walnut' },
  { code: '', name: 'Medium Walnut' },
  { code: '', name: 'Western Hemlock' },
  { code: '', name: 'Slate' },
];

const paintedColors = [
  { code: 'LP-046', name: 'Minneapolis' },
  { code: 'LP-065', name: 'Polar White' },
  { code: 'LP-100', name: 'Brite White' },
  { code: 'LP-101', name: 'Crystal Snow White' },
  { code: 'LP-200', name: 'Cream' },
  { code: 'LP-300', name: 'Beige' },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1B5E78] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2">Resources</h1>
          <p className="text-blue-200">Technical specifications, color guides, and information to help your project succeed</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1B5E78] mb-4">Architect & Contractor Resources</h2>
          <p className="text-gray-600 leading-relaxed">
            We provide comprehensive technical resources to support architects, designers, contractors, and
            developers at every stage of a project. Download our specifier sheets and profile drawings and
            contact us to learn about our{' '}
            <span className="font-semibold text-[#1B5E78]">ExpressBid™ System</span> and{' '}
            <span className="font-semibold text-[#1B5E78]">ColorMatch™ process</span>.
          </p>
        </div>
      </section>

      {/* Architect Specification */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B5E78] mb-2">Architect Specification — Section 06220</h2>
          <p className="text-gray-500 text-sm mb-8">Millwork Subsection · Factory Finished Components</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Part 1 */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-[#1B5E78] mb-4 text-lg">Part 1 — General</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-1">1.1 Section Includes</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Door jambs</li>
                    <li>Mouldings</li>
                    <li>Millwork</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">1.2 Related Sections</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Section 06200 – Finish Carpentry</li>
                    <li>Section 06400 – Architectural Woodwork</li>
                    <li>Section 06410 – Custom Cabinets</li>
                    <li>Section 08250 – Preassembled Wood Door Units</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">1.3 Reference Standards</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>ASTM D5572 – Adhesives for Finger Joints</li>
                    <li>CARB ACTM 93120 – Formaldehyde Emissions</li>
                    <li>MPI–47: Alkyd Interior Semi-Gloss Level 5</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">1.4 Submittals</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Product Data sheets</li>
                    <li>Shop Drawings (profiles, dimensions, finish)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Part 1 Quality */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-[#1B5E78] mb-4 text-lg">1.5 Quality Assurance</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-1">Manufacturer Qualifications</p>
                  <p className="text-gray-600">Minimum 20 years' experience in prefinished and painted moulding and millwork with sufficient production capacity and Quality Control Procedures in place.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Quality Control Tests</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Profile consistency throughout production run</li>
                    <li>Surface quality (texture, free of defects, grain issues)</li>
                    <li>Topcoat coverage — uniform and complete</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">Material Packaging</p>
                  <p className="text-gray-600">No material shipped without QA approval. Packaged in cardboard hand packs with nylon banding.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Delivery & Storage</p>
                  <p className="text-gray-600">Store in manufacturer's unopened packaging until installation. Maintain temperature, humidity, and ventilation within manufacturer's limits.</p>
                </div>
              </div>
            </div>

            {/* Part 2 */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-[#1B5E78] mb-4 text-lg">Part 2 — Products</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-1">2.1 Manufacturer</p>
                  <p className="text-gray-600 font-medium">Lianga Pacific, Inc.<br />2120 Port of Tacoma Road<br />Tacoma, WA 98421</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">2.2 Substrates Available</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Finger-jointed Pine</li>
                    <li>Finger-jointed Meranti</li>
                    <li>Medium Density Fiberboard (MDF)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">Profiles</p>
                  <p className="text-gray-600">Selected from manufacturer's LP pattern series or as indicated on drawings.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Application Method</p>
                  <p className="text-gray-600">Fan or Curtain Coater</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Part 3 — Installation</p>
                  <p className="text-gray-600">Install plumb, level, and straight. Tolerance: 1/8&quot; in 6 ft. Shim as required with concealed shims.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finishing Systems */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B5E78] mb-8">Finishing Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Prefinished */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#1B5E78] mb-1 text-lg">Embossed Prefinish System</h3>
              <p className="text-sm text-gray-500 mb-4">Triple coat factory finish</p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 mb-6">
                <li>Base Primer</li>
                <li>Opaque Color Coat (Modified Nitrocellulose lacquer)</li>
                <li>Clear Top Coat (Nitrocellulose Alkyd)</li>
              </ol>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Standard Prefinished Colors</p>
              <div className="space-y-1">
                {prefinishedColors.map((c) => (
                  <div key={c.code + c.name} className="flex items-center gap-2 text-sm text-gray-700">
                    {c.code && <span className="font-mono text-xs text-[#1B5E78] w-16 flex-shrink-0">{c.code}</span>}
                    {!c.code && <span className="w-16 flex-shrink-0" />}
                    <span>{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Painted */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#1B5E78] mb-1 text-lg">Triple Coat Paint System</h3>
              <p className="text-sm text-gray-500 mb-4">Low V.O.C. factory applied paint</p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 mb-6">
                <li>Acrylic Primer</li>
                <li>Opaque Color Coat — Alkyd Interior Semi-Gloss Level 5 (MPI–47)</li>
                <li>Top Coat — Non-yellowing, Non-metal marring CAB Clear Acrylic</li>
              </ol>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Standard Painted Colors</p>
              <div className="space-y-1">
                {paintedColors.map((c) => (
                  <div key={c.code} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="font-mono text-xs text-[#1B5E78] w-16 flex-shrink-0">{c.code}</span>
                    <span>{c.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                Custom colors available via <span className="text-[#1B5E78] font-semibold not-italic">ColorMatch™</span> process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Banner */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { title: 'Need a Sample?', desc: 'Request physical color chips and profile samples sent to your office.', link: '/contact', label: 'Request Samples' },
            { title: 'Custom Specifications?', desc: 'Our team can help create custom architectural specs for your project documents.', link: '/contact', label: 'Contact Us' },
            { title: 'Downloadable Files?', desc: 'Access our full library of PDFs, profile drawings, and data sheets.', link: '/downloads', label: 'Go to Downloads' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
              <h4 className="font-bold text-[#1B5E78] mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <Link href={item.link} className="text-[#C9A84C] font-semibold text-sm hover:underline">{item.label} &rarr;</Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B5E78] py-12 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Questions About Specifications?</h2>
          <p className="text-blue-100 mb-6">Call our experienced team or email us — we&apos;re ready to help with project specifications, color selection, and technical requirements.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2533834761" className="inline-block bg-[#C9A84C] text-white font-semibold px-8 py-3 rounded hover:bg-[#a8872e] transition-colors">
              Call 253-383-4761
            </a>
            <a href="mailto:sales@lianga.com" className="inline-block bg-white text-[#1B5E78] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
              Email sales@lianga.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
