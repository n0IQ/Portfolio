import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohit Varma | Full Stack Software Engineer',
  description: "Mohit Varma's Portfolio Website | Full Stack Software Engineer",
  icons: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black opacity-80 h-bg"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
