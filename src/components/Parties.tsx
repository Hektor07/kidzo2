
"use client"; // Required for hooks
import React from "react";
import { useTranslation } from "../lib/i18n";

const Parties = () => {
  const { t, locale } = useTranslation();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section id="parties" className="py-16 bg-white" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Party Description */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">{t("parties.title")}</h2>
            <p className="text-lg text-gray-700 mb-4">{t("parties.subtitle")}</p>
            <p className="text-gray-600 mb-6">{t("parties.description")}</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              {t("parties.bookCta")}
            </button>
          </div>
          {/* Party Image Placeholder */}
          <div className="order-1 md:order-2 bg-orange-200 rounded-lg h-64 md:h-80 flex items-center justify-center">
            <p className="text-orange-600 text-xl font-bold">Party Hall Image Placeholder</p>
            {/* Replace with <Image src="/images/party.jpg" alt="Kidzo Party Hall" width={500} height={400} className="rounded-lg object-cover" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parties;

