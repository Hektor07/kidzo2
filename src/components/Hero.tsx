'use client'; // Required for hooks

import React from 'react';
import { useTranslation } from "../lib/i18n";

const Hero = () => {
  const { t, locale } = useTranslation();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="relative bg-background-light py-16 overflow-hidden" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark">
              {t('hero.title')}
            </h1>
            <p className="text-lg mb-6 text-text-color">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                {t('hero.cta')}
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            {/* Placeholder for hero image - will be replaced with actual image later */}
            <div className="w-full h-64 md:h-96 bg-orange-200 rounded-2xl flex items-center justify-center text-orange-600">
              <p className="text-xl font-bold">Kidzo - Fun for Kids!</p>
              {/* Will be replaced with: <Image src="/images/hero.jpg" alt="Kids having fun at Kidzo" width={600} height={400} className="rounded-2xl" /> */}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-300 rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-400 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave shape at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,141.14c67.64,0,133.76-18.59,206.53-84.7Z" 
                fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
