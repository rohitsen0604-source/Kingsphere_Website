import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Preloader } from '@/components/layout/Preloader';
import { COMPANY_CONFIG } from '@/config/company';

export const metadata: Metadata = {
  metadataBase: new URL('https://kingsphere.in'),
  title: {
    default: `${COMPANY_CONFIG.shortName} | Building Strategic Partnerships • Creating Opportunities`,
    template: `%s | ${COMPANY_CONFIG.shortName}`,
  },
  description: COMPANY_CONFIG.description,
  keywords: [
    'KINGSPHERE',
    'KINGSPHERE INFRA-TECH-TRADE (OPC) PRIVATE LIMITED',
    'Infrastructure Development India',
    'Industrial Manufacturing Partnerships',
    'International Trade Import Export',
    'Mining and Natural Resources',
    'Renewable Energy Maharashtra',
    'Recycling Circular Economy',
    'Business Consultancy Parbhani',
    'Strategic Joint Ventures India',
  ],
  authors: [{ name: COMPANY_CONFIG.legalName }],
  creator: COMPANY_CONFIG.legalName,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kingsphere.in',
    title: `${COMPANY_CONFIG.shortName} — Building Strategic Partnerships`,
    description: COMPANY_CONFIG.description,
    siteName: COMPANY_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY_CONFIG.shortName,
    description: COMPANY_CONFIG.description,
  },
  icons: {
    icon: '/kingsphere-crest-mark.png',
    shortcut: '/kingsphere-crest-mark.png',
    apple: '/kingsphere-crest-mark.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: COMPANY_CONFIG.legalName,
    alternateName: COMPANY_CONFIG.shortName,
    description: COMPANY_CONFIG.description,
    url: 'https://kingsphere.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY_CONFIG.location.city,
      addressRegion: COMPANY_CONFIG.location.state,
      addressCountry: COMPANY_CONFIG.location.country,
    },
    slogan: COMPANY_CONFIG.tagline,
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#070B0E] text-white antialiased selection:bg-[#DDB763]/30 selection:text-white">
        <Preloader />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
