
"use client"; // Required for hooks

import React from "react";
import Link from "next/link";
import { useTranslation } from "../lib/i18n"; // Import the hook

const Header = () => {
  const { t, setLocale, locale } = useTranslation(); // Use the hook

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  // Define navLinks inside the component so it uses the current 't' function
  const navLinks = [
    { href: "/", label: t("common.home") },
    { href: "/#activities", label: t("common.activities") },
    { href: "/#cafe", label: t("common.cafe") },
    { href: "/#parties", label: t("common.parties") },
    { href: "/#gallery", label: t("common.gallery") },
    { href: "/#offers", label: t("common.offers") },
    { href: "/#booking", label: t("common.booking") },
    { href: "/#contact", label: t("common.contact") },
    { href: "/#complaints", label: t("common.complaints") },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-600">
          Kidzo
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href} // Use href as key since labels change
              href={link.href}
              className="text-gray-600 hover:text-orange-500 transition duration-300"
            >
              {link.label} 
            </Link>
          ))}
        </nav>
        <button
          onClick={toggleLanguage}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 text-sm"
        >
          {t("common.language")} 
        </button>
        {/* Add mobile menu button here if needed later */}
      </div>
    </header>
  );
};

export default Header;

