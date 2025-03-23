import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Heraldo Domingues | Solutions Engineer',
  description: 'Professional portfolio of Heraldo Domingues, a solutions engineer specializing in SaaS presales, IT operations, and software analytics.',
  keywords: 'Heraldo Domingues, Solutions Engineer, SaaS Presales, IT Operations, Software Analytics, Portfolio',
  authors: [{ name: 'Heraldo Domingues' }],
  creator: 'Heraldo Domingues',
  publisher: 'Heraldo Domingues',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heraldo.domingues.pro',
    siteName: 'Heraldo Domingues Portfolio',
    title: 'Heraldo Domingues | Solutions Engineer',
    description: 'Professional portfolio of Heraldo Domingues, a solutions engineer specializing in SaaS presales, IT operations, and software analytics.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heraldo Domingues Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heraldo Domingues | Solutions Engineer',
    description: 'Professional portfolio of Heraldo Domingues, a solutions engineer specializing in SaaS presales, IT operations, and software analytics.',
    images: ['/images/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
