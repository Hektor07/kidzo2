'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import enTranslations from '../locales/en.json';
import arTranslations from '../locales/ar.json';

type Locale = 'en' | 'ar';
type Translations = typeof enTranslations;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('en');

  const translations = {
    en: enTranslations,
    ar: arTranslations,
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'} lang={locale} className={locale === 'ar' ? 'font-tajawal' : 'font-poppins'}>
        {children}
      </div>
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
