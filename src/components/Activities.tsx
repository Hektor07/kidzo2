'use client'; // Required for hooks

import React from 'react';
import { useTranslation } from "../lib/i18n";

const Activities = () => {
  const { t, locale } = useTranslation();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const activities = [
    {
      id: 'trampoline',
      title: t('activities.trampoline'),
      description: t('activities.trampolineDesc'),
      image: '/images/trampoline.jpg'
    },
    {
      id: 'zipline',
      title: t('activities.zipline'),
      description: t('activities.ziplineDesc'),
      image: '/images/slide.jpg' // Using slide image as placeholder for zipline
    },
    {
      id: 'slides',
      title: t('activities.slides'),
      description: t('activities.slidesDesc'),
      image: '/images/slide.jpg'
    },
    {
      id: 'games',
      title: t('activities.games'),
      description: t('activities.gamesDesc'),
      image: '/images/trampoline.jpg' // Using trampoline image as placeholder for games
    }
  ];

  return (
    <section id="activities" className="py-16 bg-white" dir={dir}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-2">{t('activities.title')}</h2>
        <p className="text-center text-gray-600 mb-8">{t('activities.subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-orange-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-orange-200 flex items-center justify-center">
                {activity.image ? (
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-orange-600 text-xl font-bold">{activity.title}</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-orange-600 mb-2">{activity.title}</h3>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
