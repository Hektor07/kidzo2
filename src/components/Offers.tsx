"use client"; // Required for hooks
import React from "react";
import { useTranslation } from "../lib/i18n";

const Offers = () => {
  const { t, locale } = useTranslation();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const offers = [
    {
      id: 'weekday',
      title: t('offers.weekday'),
      description: t('offers.weekdayDesc'),
      color: 'bg-orange-100'
    },
    {
      id: 'birthday',
      title: t('offers.birthday'),
      description: t('offers.birthdayDesc'),
      color: 'bg-orange-200'
    },
    {
      id: 'group',
      title: t('offers.group'),
      description: t('offers.groupDesc'),
      color: 'bg-orange-100'
    }
  ];

  return (
    <section id="offers" className="py-16 bg-white" dir={dir}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-2">{t("offers.title")}</h2>
        <p className="text-center text-gray-600 mb-8">{t("offers.subtitle")}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className={`${offer.color} rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300`}>
              <h3 className="text-xl font-bold text-orange-600 mb-3">{offer.title}</h3>
              <p className="text-gray-700">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
