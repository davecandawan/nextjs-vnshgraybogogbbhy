import type { Metadata } from 'next';
import { inter, primaryFont } from './fonts';
import '@/styles/globals.css';
import '@/styles/fonts.css';

export const metadata: Metadata = {
  title: 'Top Concealed Carry Holster - VNSH',
  description: 'Top Concealed Carry Holster - VNSH',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Top Concealed Carry Holster - VNSH',
    description: 'Top Concealed Carry Holster - VNSH',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'Top Concealed Carry Holster - VNSH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Concealed Carry Holster - VNSH',
    description: 'Top Concealed Carry Holster - VNSH',
    images: ['/favicon.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${primaryFont.variable} ${inter.variable}`}>
      <head>
        <link
          rel="preload"
          href="/fonts/stratumno1-black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
