'use client'

import { useLanguage } from '@/i18n'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
  const { t } = useLanguage()
  
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background pattern or image could be added here */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-light sm:text-5xl lg:text-6xl">
                Heraldo Domingues
              </h1>
              <p className="text-2xl font-medium text-accent">
                {t('hero.title')}
              </p>
              <p className="text-xl">
                {t('hero.subtitle')}
              </p>
            </div>
            
            <div className="border-l-4 border-accent pl-4 italic">
              <p className="text-lg font-medium">{t('hero.motto')}</p>
              <p className="text-sm">{t('hero.mottoTranslation')}</p>
            </div>
            
            <div>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/resume">
                  {t('hero.cta')}
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Headshot placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-80 w-80 rounded-full overflow-hidden border-4 border-accent shadow-xl">
              {/* Placeholder for headshot - would be replaced with actual image */}
              <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                <span className="text-6xl font-bold text-accent-foreground">HD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
