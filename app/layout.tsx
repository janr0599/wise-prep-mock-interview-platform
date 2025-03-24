import type { Metadata } from 'next';
import { Mona_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const monaSans = Mona_Sans({
  variable: '--font-mona-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WisePrep Interview Platform',
  description: 'An AI-powered interview preparation platform.',
  keywords: ['interview', 'preparation', 'mock', 'AI'],
  openGraph: {
    title: 'PrepWise Interview Platform',
    description: 'An AI-powered interview preparation platform.',
    type: 'website',
    url: 'https://prepwise.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
