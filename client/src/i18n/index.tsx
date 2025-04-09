'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

// Import language files
import en from './locales/en.json'
import es from './locales/es.json'
import pt from './locales/pt.json'

// Define available languages
export const languages = {
  en: { name: 'English', flag: '/images/flags/en.svg' },
  es: { name: 'Español', flag: '/images/flags/es.svg' },
  pt: { name: 'Português', flag: '/images/flags/pt.svg' }
}

// Define language context type
type LanguageContextType = {
  locale: string
  setLocale: (locale: string) => void
  t: (key: string) => string
}

// Create language context
const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: () => ''
})

// Language provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState('en')

  // Translation function
  const t = (key: string) => {
    // Split the key by dots to access nested properties
    const keys = key.split('.')
    
    // Get the translations for the current locale
    const translations = locale === 'en' ? en : locale === 'es' ? es : pt
    
    // Access the nested property
    let result: any = translations
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k]
      } else {
        // Fallback to English if translation not found
        let fallback = en
        for (const k of keys) {
          if (fallback && typeof fallback === 'object' && k in fallback) {
            fallback = fallback[k]
          } else {
            return key // Return the key if not found in fallback
          }
        }
        return typeof fallback === 'string' ? fallback : key
      }
    }
    
    return typeof result === 'string' ? result : key
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook to use language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
