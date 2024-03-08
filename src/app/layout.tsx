import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import { ThemeProvider } from './theme-provider';
import ThemeSwitcher from './ThemeSwitcher';

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
      <body className="duration-300 bg-lightBackground dark:bg-darkBackground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
