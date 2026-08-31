import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yibo Yuan — Social Neuroscience × Artificial Companions',
  description:
    'Yibo Yuan studies social need across neural population dynamics, biomimetic agents, BCI, scientific AI, and bounded human–AI relationships.',
  openGraph: {
    title: 'Yibo Yuan — Social Neuroscience × Artificial Companions',
    description:
      'Research across social neuroscience, embodied AI, BCI, scientific AI, and bounded human–AI relationships.',
    type: 'website',
    images: [{ url: '/assets/social-card.png', width: 1200, height: 630, alt: 'Yibo Yuan research portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yibo Yuan — Social Neuroscience × Artificial Companions',
    description: 'Research across social neuroscience, embodied AI, BCI, scientific AI, and bounded human–AI relationships.',
    images: ['/assets/social-card.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
