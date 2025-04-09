'use client'

import { ReactNode } from 'react'
import { LanguageProvider } from '@/i18n/index'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import CompaniesCarousel from '@/components/sections/CompaniesCarousel'
import CertificationsBadges from '@/components/sections/CertificationsBadges'
import PortfolioSection from '@/components/sections/PortfolioSection'
import FormSection from '@/components/sections/FormSection'

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <CompaniesCarousel />
          <CertificationsBadges />
          <PortfolioSection />
          <FormSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
