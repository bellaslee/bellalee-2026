import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

function getMetadataBaseUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return explicit;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}

export const metadata: Metadata = {
  metadataBase: new URL(getMetadataBaseUrl()),
  title: 'Bella Lee',
  description:
    'Personal site for Bella Lee featuring projects, photos, sketchbook, and a digital garden.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
