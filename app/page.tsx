import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B5E78] via-[#134558] to-[#0f3647] text-white py-28 px-4">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-[#C9A84C] font-semibold uppercase tracking-widest text-sm mb-4">
            Lianga Pacific, Inc.
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Experienced, Knowledgeable,<br className="hidden sm:block" /> Professional
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-4">
            Leading Manufacturer of Prefinished and Painted Moulding offering valuable finishing
            solutions for all your commercial multifamily projects.
          </p>
          <p className="text-base text-[#C9A84C] font-medium mb-10">
            Lianga Pacific is a business partner you can count on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-[#C9A84C] text-white font-semibold px-8 py-3 rounded hover:bg-[#a8872e] transition-colors duration-200 text-center"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#1B5E78] font-semibold px-8 py-3 rounded border-2 border-white hover:bg-gray-100 transition-colors duration-200 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Audience Strip */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'Architect / Designer',
                desc: 'We work closely with architects and designers to deliver moulding solutions that match your specifications and elevate every project aesthetic.',
                href: '/contact',
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: 'Contractor / Developer',
                desc: 'From small renovations to large-scale multifamily developments, our pre-finished moulding helps you meet deadlines without sacrificing quality.',
                href: '/contact',
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-[#1B5E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                title: 'Distribution',
                desc: 'We partner with distributors to ensure our premium moulding products reach every corner of the market quickly and reliably.',
                href: '/contact',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1B5E78] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <Link href={item.href} className="text-[#C9A84C] font-semibold text-sm hover:underline">
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B5E78] mb-4">About Lianga Pacific</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            For decades, Lianga Pacific, Inc. has been a trusted name in the moulding industry.
            We are a leading manufacturer of prefinished and painted moulding, delivering
            superior-quality products and unmatched customer service to commercial and multifamily
            developers across the Pacific Northwest and beyond.
          </p>
          <Link
            href="/about"
            className="inline-block bg-[#1B5E78] text-white font-semibold px-8 py-3 rounded hover:bg-[#134558] transition-colors duration-200"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B5E78] mb-3">Our Products</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Premium moulding solutions engineered for lasting beauty and performance in every application.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 'prefinished',
                title: 'Prefinished Moulding',
                desc: 'Factory-applied finishes that save time on job sites. Our prefinished moulding arrives ready to install, reducing labor costs and ensuring consistent color throughout your project.',
              },
              {
                id: 'painted',
                title: 'Painted Moulding',
                desc: 'Smooth, paint-ready surfaces for a flawless finish. Our painted moulding delivers a clean, professional appearance that transforms any interior space.',
              },
              {
                id: 'primed',
                title: 'Primed Moulding',
                desc: 'Ready for your custom finish. Our primed moulding provides the ideal base coat for any paint color, ensuring superior adhesion and a long-lasting result.',
              },
            ].map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#1B5E78] h-48 flex items-center justify-center">
                  <span className="text-white/40 text-5xl font-extrabold uppercase tracking-widest">{product.title.split(' ')[0]}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1B5E78] mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                  <Link href={`/products#${product.id}`} className="text-[#C9A84C] font-semibold text-sm hover:underline">
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B5E78] mb-3">Why Choose Lianga Pacific?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We bring together experience, quality, and dedication to deliver results that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: 'Quality Products',
                desc: 'Every moulding is crafted to the highest standards using premium materials and tested for durability.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Decades of Experience',
                desc: 'With years of industry expertise, we understand what contractors and developers need on the job site.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'True Partnership',
                desc: 'We build long-term relationships, working as an extension of your team on every project.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Responsive Service',
                desc: 'Our dedicated team is always available to answer questions and ensure your project stays on track.',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B5E78]/10 text-[#1B5E78] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1B5E78] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-bold text-gray-700 text-lg">Google Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-500 text-sm">Rated 5 stars by our customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Collin Holcomb',
                stars: 5,
                text: 'Very professional and quick to unload and help fold tarps.',
                time: '7 months ago',
              },
              {
                name: 'Rob Bramsche',
                stars: 4,
                text: 'Very friendly and knowledgeable.',
                time: '3 years ago',
              },
              {
                name: 'Emily Willson-Welp',
                stars: 5,
                text: 'Five star experience — highly recommend Lianga Pacific for any moulding project.',
                time: '3 years ago',
              },
            ].map((review) => (
              <div key={review.name} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < review.stars ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#1B5E78] text-white flex items-center justify-center text-xs font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{review.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{review.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1B5E78] py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact our team today to discuss your moulding needs and get a quote for your next commercial or multifamily project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] text-white font-semibold px-10 py-3 rounded hover:bg-[#a8872e] transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
