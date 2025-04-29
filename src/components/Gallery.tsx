
"use client"; // Required for hooks
import React from "react";
import { useTranslation } from "../lib/i18n";

const Gallery = () => {
  const { t, locale } = useTranslation();
  const dir = locale === "ar" ? "rtl" : "ltr";

  // Placeholder images - replace with actual image paths
  const images = [
    { id: 1, src: "/images/slide.jpg", alt: "Kids on slide" },
    { id: 2, src: "/images/trampoline.jpg", alt: "Kids on trampoline" },
    { id: 3, src: "/images/slide.jpg", alt: "Play area" }, // Placeholder
    { id: 4, src: "/images/trampoline.jpg", alt: "Party setup" }, // Placeholder
    { id: 5, src: "/images/slide.jpg", alt: "Cafe area" }, // Placeholder
    { id: 6, src: "/images/trampoline.jpg", alt: "Zipline fun" }, // Placeholder
  ];

  return (
    <section id="gallery" className="py-16 bg-orange-50" dir={dir}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-2">{t("gallery.title")}</h2>
        <p className="text-center text-gray-600 mb-8">{t("gallery.subtitle")}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

