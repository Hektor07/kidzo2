
"use client"; // Required for hooks
import React from "react";
import { useTranslation } from "../lib/i18n";

const Footer = () => {
  const { t, locale } = useTranslation();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <footer className="bg-orange-700 text-white py-6" dir={dir}>
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Kidzo. {t("footer.rights")}.</p>
        <div className="mt-2">
          <a href="#" className="hover:underline mx-2">{t("footer.privacy")}</a>
          <span className="mx-1">|</span>
          <a href="#" className="hover:underline mx-2">{t("footer.terms")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

