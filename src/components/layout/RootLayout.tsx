'use client'

import { ReactNode } from 'react'
import { LanguageProvider } from '@/i18n/index'
import Header from './Header'
import Footer from './Footer'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
