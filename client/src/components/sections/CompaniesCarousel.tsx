'use client'

import { useLanguage } from '@/i18n'
import { useState } from 'react'

// Placeholder for company logos
const companyLogos = [
  { id: 1, name: 'Company 1', logo: '/images/worked-companies/placeholder1.svg' },
  { id: 2, name: 'Company 2', logo: '/images/worked-companies/placeholder2.svg' },
  { id: 3, name: 'Company 3', logo: '/images/worked-companies/placeholder3.svg' },
  { id: 4, name: 'Company 4', logo: '/images/worked-companies/placeholder4.svg' },
  { id: 5, name: 'Company 5', logo: '/images/worked-companies/placeholder5.svg' },
  { id: 6, name: 'Company 6', logo: '/images/worked-companies/placeholder6.svg' },
]

export default function CompaniesCarousel() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === Math.floor(companyLogos.length / 3) - 1 ? 0 : prevIndex + 1
    )
  }
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? Math.floor(companyLogos.length / 3) - 1 : prevIndex - 1
    )
  }
  
  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-medium text-primary sm:text-4xl">
            {t('companies.title')}
          </h2>
        </div>
        
        <div className="relative">
          {/* Carousel navigation */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
            <button 
              onClick={prevSlide}
              className="bg-background text-primary p-2 rounded-full shadow-md hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>
          
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {/* Group logos in sets of 3 for desktop view */}
              {Array.from({ length: Math.ceil(companyLogos.length / 3) }).map((_, groupIndex) => (
                <div key={groupIndex} className="flex-none w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {companyLogos.slice(groupIndex * 3, groupIndex * 3 + 3).map((company) => (
                      <div 
                        key={company.id} 
                        className="flex items-center justify-center p-8 bg-background rounded-lg shadow-sm"
                      >
                        {/* Placeholder for company logo */}
                        <div className="h-16 w-full flex items-center justify-center text-primary/50 font-medium">
                          {company.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel navigation */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
            <button 
              onClick={nextSlide}
              className="bg-background text-primary p-2 rounded-full shadow-md hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Carousel indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(companyLogos.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full ${
                activeIndex === index ? 'bg-accent' : 'bg-primary/20'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
