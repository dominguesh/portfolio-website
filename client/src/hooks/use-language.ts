import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import i18n from '../lib/i18n/config';
import { languages, type Language } from '../lib/i18n/languages';

export function useLanguage() {
  const { t, i18n: i18nInstance } = useTranslation();
  // Use state to track language changes and force re-render
  const [currentLanguage, setCurrentLanguage] = useState<Language>(i18n.language as Language);
  
  // Set up an effect to listen for language changes
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng as Language);
    };

    // Add event listener for language changes
    i18nInstance.on('languageChanged', handleLanguageChanged);
    
    // Initial setting
    setCurrentLanguage(i18nInstance.language as Language);
    
    // Cleanup
    return () => {
      i18nInstance.off('languageChanged', handleLanguageChanged);
    };
  }, [i18nInstance]);
  
  // Function to change language
  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };
  
  return {
    t,
    languages,
    currentLanguage,
    changeLanguage
  };
}
