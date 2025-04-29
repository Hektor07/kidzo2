
"use client"; // Required for hooks
import React from "react";
import { useTranslation } from "../lib/i18n";

const Cafe = () => {
  const { t, locale } = useTranslation();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section id="cafe" className="py-16 bg-orange-50" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Cafe Image Placeholder */}
          <div className="bg-orange-200 rounded-lg h-64 md:h-80 flex items-center justify-center">
            <p className="text-orange-600 text-xl font-bold">Cafe Image Placeholder</p>
            {/* Replace with <Image src="/images/cafe.jpg" alt="Kidzo Family Cafe" width={500} height={400} className="rounded-lg object-cover" /> */}
          </div>
          {/* Cafe Description */}
          <div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">{t("cafe.title")}</h2>
            <p className="text-lg text-gray-700 mb-4">{t("cafe.subtitle")}</p>
            <p className="text-gray-600">{t("cafe.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cafe;

