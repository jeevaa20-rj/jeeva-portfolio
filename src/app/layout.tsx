import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { JsonLd } from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://jeevaa-coder.github.io'),
  title: {
    default: 'Roopavaran Jeevaananth (Jeevaa) | Full-Stack Developer & ML Engineer Sri Lanka',
    template: '%s | Roopavaran Jeevaananth',
  },
  description:
    'Portfolio of Roopavaran Jeevaananth (Jeevaa) - BSc (Hons) Computer Science student at Uva Wellassa University, full-stack web developer and ML engineer in Sri Lanka. Freelance websites, PayHere e-commerce, and ML solutions.',
  keywords: [
    'web developer Sri Lanka',
    'ML engineer Sri Lanka',
    'Roopavaran Jeevaananth',
    'Jeevaa',
    'Full-stack developer Sri Lanka',
    'Machine learning Sri Lanka',
    'Uva Wellassa University Computer Science',
    'PayHere e-commerce developer',
    'React Next.js developer Sri Lanka',
    'PHP MySQL developer Sri Lanka',
    'freelance web developer Sri Lanka',
    'Docker CI/CD developer',
  ],
  authors: [{ name: 'Roopavaran Jeevaananth', url: 'https://github.com/jeevaa-coder' }],
  creator: 'Roopavaran Jeevaananth',
  publisher: 'Roopavaran Jeevaananth',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jeevaa-coder.github.io',
    title: 'Roopavaran Jeevaananth (Jeevaa) | Full-Stack Developer & ML Engineer',
    description:
      'Full-Stack Developer and ML Engineer in Sri Lanka. Crafting performant web apps, PayHere e-commerce, and practical AI/ML models.',
    siteName: 'Roopavaran Jeevaananth Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Roopavaran Jeevaananth (Jeevaa) - Full-Stack Developer & ML Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roopavaran Jeevaananth (Jeevaa) | Full-Stack Developer & ML Engineer',
    description:
      'Full-Stack Developer and ML Engineer based in Sri Lanka. Explore projects, services, and technical skills.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jeevaa-coder.github.io',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#f8fafc] text-[#0f172a] dark:bg-[#030712] dark:text-[#f8fafc] transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
