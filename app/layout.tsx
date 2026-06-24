import type { Metadata } from 'next';
import '../css/reset.css';
import '../css/styles.css';

export const metadata: Metadata = {
  title: 'Notality',
  description: 'Notality — Tonality through Notality. Music theory toolkit for practicing musicians.',
  icons: { icon: '/assets/icons/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
