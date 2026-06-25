import type { Metadata } from 'next';
import '../css/reset.css';
import '../css/styles.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://notality.co.uk'),
  title: 'Notality | Music Theory Toolkit for Practicing Musicians',
  description: 'Notality is a music theory app for practicing musicians. Chromatic tuner, chord builder, key finder, saved sequences and metronome — all in one pocket tool. Join the waitlist.',
  keywords: 'music theory app, chromatic tuner, chord builder, key finder, metronome, music toolkit, musician app, music theory toolkit, notality',
  openGraph: {
    title: 'Notality | Music Theory Toolkit for Practicing Musicians',
    description: 'Chromatic tuner, chord builder, key finder, saved sequences and metronome. The music theory toolkit built for practicing musicians.',
    type: 'website',
    url: 'https://notality.co.uk',
    siteName: 'Notality',
    images: [{ url: 'https://notality.co.uk/assets/images/og-logo.png', width: 1200, height: 630, alt: 'Notality — music theory toolkit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notality | Music Theory Toolkit for Practicing Musicians',
    description: 'Chromatic tuner, chord builder, key finder and more. The music theory toolkit for practicing musicians.',
    images: ['https://notality.co.uk/assets/images/og-logo.png'],
  },
  icons: {
    icon: [{ url: '/assets/icons/favicon.jpg', type: 'image/jpeg' }],
    apple: '/assets/icons/favicon.jpg',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Notality',
              description: 'Music theory toolkit for practicing musicians featuring a chromatic tuner, chord builder, key finder, saved sequences, and metronome.',
              applicationCategory: 'MusicApplication',
              operatingSystem: 'iOS, Android',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
              creator: { '@type': 'Organization', name: 'Notality', url: 'https://notality.co.uk', email: 'notality.app@gmail.com' },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
