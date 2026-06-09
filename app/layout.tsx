import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Lianga Pacific, Inc. | Prefinished & Painted Moulding',
  description:
    'Lianga Pacific is a leading manufacturer of prefinished and painted moulding, offering finishing solutions for commercial multifamily projects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-gray-800">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
