import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Lianga Pacific, Inc.',
  description: 'Learn about Lianga Pacific, Inc. — our history, mission, and commitment to quality moulding products.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1B5E78] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2">About Us</h1>
          <p className="text-blue-200">Experienced, Knowledgeable, Professional</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1B5E78] mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lianga Pacific, Inc. is a leading manufacturer of prefinished and painted moulding based in
              Tacoma, Washington. For decades, we have been delivering premium finishing solutions for
              commercial multifamily projects throughout the Pacific Northwest and across the nation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our state-of-the-art millsite at the Port of Tacoma allows us to efficiently produce and
              ship high-quality moulding products directly to contractors, developers, architects, and
              distributors — ensuring that your projects are completed on time and within budget.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We pride ourselves on building lasting relationships with our customers. At Lianga Pacific,
              we are not just a supplier — we are a business partner you can count on.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#1B5E78] to-[#134558] rounded-lg h-80 flex items-center justify-center">
            <div className="text-center text-white/60">
              <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <p className="text-sm">Tacoma, Washington</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#1B5E78]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B5E78] mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide the highest quality prefinished, painted, and primed moulding products while
                delivering exceptional service and value to our customers. We strive to be the most
                reliable and trusted moulding manufacturer in the industry.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B5E78] mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the go-to partner for every commercial multifamily project requiring premium
                finishing solutions — recognized for our innovation, consistency, and unwavering
                commitment to customer satisfaction across the entire Pacific Northwest and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B5E78] mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Integrity', desc: 'We do what we say and say what we do. Honest communication is at the core of every relationship we build.' },
              { title: 'Quality', desc: 'We never compromise on the quality of our products. Every piece of moulding meets rigorous standards before leaving our facility.' },
              { title: 'Innovation', desc: 'We continuously invest in better processes, equipment, and materials to stay ahead of industry trends.' },
              { title: 'Partnership', desc: 'We view every customer relationship as a long-term partnership built on trust, communication, and mutual success.' },
            ].map((value) => (
              <div key={value.title} className="border-l-4 border-[#C9A84C] pl-5 py-2">
                <h4 className="text-lg font-bold text-[#1B5E78] mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B5E78] mb-4 text-center">Our Team</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
            Our experienced team of professionals brings decades of combined knowledge in manufacturing,
            sales, and customer service.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: 'Sales & Customer Service', desc: 'Our sales team is dedicated to understanding your project needs and ensuring you get the right products on time.' },
              { role: 'Manufacturing & Production', desc: 'Skilled craftsmen and production specialists who ensure every moulding meets our exacting quality standards.' },
              { role: 'Logistics & Delivery', desc: 'Coordinating efficient shipment and delivery to keep your projects on schedule no matter the size.' },
            ].map((member) => (
              <div key={member.role} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-[#1B5E78]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#1B5E78] mb-2">{member.role}</h4>
                <p className="text-gray-600 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B5E78] py-12 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Ready to Work Together?</h2>
          <p className="text-blue-100 mb-6">Reach out to our team and let us help you find the perfect moulding solution for your project.</p>
          <Link href="/contact" className="inline-block bg-[#C9A84C] text-white font-semibold px-8 py-3 rounded hover:bg-[#a8872e] transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
