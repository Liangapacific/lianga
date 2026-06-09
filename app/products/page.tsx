import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products | Lianga Pacific, Inc.',
  description: 'Explore our full range of prefinished, painted, and primed moulding products for commercial multifamily projects.',
};

const products = [
  {
    id: 'prefinished',
    title: 'Prefinished Moulding',
    color: 'from-[#1B5E78] to-[#134558]',
    description:
      'Our prefinished moulding products arrive at your job site ready to install. Factory-applied finishes ensure consistent color and quality across every unit — eliminating the need for on-site painting and reducing labor costs significantly.',
    benefits: [
      'Ready-to-install — no field painting required',
      'Consistent color across all units and batches',
      'Reduces job site labor and installation time',
      'Factory-controlled finish quality',
      'Available in a wide range of colors and profiles',
    ],
    specs: [
      { label: 'Finish Type', value: 'Factory-applied prefinished coating' },
      { label: 'Profile Options', value: 'Base, casing, crown, chair rail, and more' },
      { label: 'Available Species', value: 'Finger-joint pine, MDF, hardwood' },
      { label: 'Length', value: 'Standard 8 ft, 12 ft; custom lengths available' },
      { label: 'Colors', value: 'Wide range; custom color matching available' },
      { label: 'Packaging', value: 'Bundled and wrapped for protection during shipping' },
    ],
  },
  {
    id: 'painted',
    title: 'Painted Moulding',
    color: 'from-[#C9A84C] to-[#a8872e]',
    description:
      'Our painted moulding delivers a smooth, clean, and professional finish that transforms any interior space. Ideal for multifamily developments and commercial interiors where a uniform painted appearance is required throughout.',
    benefits: [
      'Smooth, paint-grade surface for a clean look',
      'Uniform painted finish for consistent interiors',
      'Excellent adhesion for touch-up paints',
      'Suitable for high-traffic commercial environments',
      'Wide profile selection available',
    ],
    specs: [
      { label: 'Finish Type', value: 'Factory-applied painted coating' },
      { label: 'Profile Options', value: 'Base, casing, door stop, panel moulding' },
      { label: 'Available Species', value: 'Finger-joint pine, MDF' },
      { label: 'Length', value: 'Standard 8 ft, 12 ft; custom lengths available' },
      { label: 'Colors', value: 'White, off-white, and custom colors' },
      { label: 'Surface', value: 'Sanded and filled for a flawless painted finish' },
    ],
  },
  {
    id: 'primed',
    title: 'Primed Moulding',
    color: 'from-[#2a7a9e] to-[#1B5E78]',
    description:
      'Our primed moulding provides the ideal base coat for any custom finish. The primed surface ensures superior paint adhesion and a long-lasting, professional result — perfect for projects that require a specific or custom paint color.',
    benefits: [
      'Ready for custom paint colors',
      'Superior adhesion for any topcoat',
      'Reduces the number of finish coats required',
      'Smooth, sealed surface for an even finish',
      'Cost-effective base for custom finishes',
    ],
    specs: [
      { label: 'Finish Type', value: 'Factory-applied oil or water-based primer' },
      { label: 'Profile Options', value: 'Full range of profiles available' },
      { label: 'Available Species', value: 'Finger-joint pine, MDF, hardwood' },
      { label: 'Length', value: 'Standard 8 ft, 12 ft; custom lengths available' },
      { label: 'Colors', value: 'White primer base; paint-ready' },
      { label: 'Surface', value: 'Primed and sealed; ready for topcoat application' },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1B5E78] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2">Our Products</h1>
          <p className="text-blue-200">Premium moulding solutions for commercial and multifamily projects</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Lianga Pacific manufactures a comprehensive range of moulding products to meet the diverse
            needs of architects, contractors, developers, and distributors. Whether you need a
            ready-to-install prefinished product, a clean painted moulding, or a primed base for custom
            colors — we have the right solution for your project.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-16 px-4 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image placeholder */}
              <div className={`bg-gradient-to-br ${product.color} rounded-lg h-72 flex items-center justify-center order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="text-white/30 text-4xl font-extrabold uppercase tracking-widest">{product.id}</span>
              </div>

              {/* Content */}
              <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="text-3xl font-bold text-[#1B5E78] mb-4">{product.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                <h3 className="font-bold text-gray-800 mb-3">Key Benefits</h3>
                <ul className="space-y-2 mb-8">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-gray-600 text-sm">
                      <svg className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-gray-800 mb-3">Product Specifications</h3>
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {product.specs.map((spec) => (
                      <tr key={spec.label} className="border-b border-gray-100">
                        <td className="py-2 pr-4 font-semibold text-gray-700 w-1/3">{spec.label}</td>
                        <td className="py-2 text-gray-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#1B5E78] py-12 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Need Help Choosing the Right Product?</h2>
          <p className="text-blue-100 mb-6">Our team is ready to help you find the perfect moulding solution for your project requirements and budget.</p>
          <Link href="/contact" className="inline-block bg-[#C9A84C] text-white font-semibold px-8 py-3 rounded hover:bg-[#a8872e] transition-colors">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
