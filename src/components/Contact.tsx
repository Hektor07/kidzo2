
"use client"; // Required for hooks
import React from "react";
import { useTranslation } from "../lib/i18n";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 bg-orange-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">{t("contact.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">{t("contact.infoTitle")}</h3>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700">{t("contact.addressLabel")}</h4>
              <p className="text-gray-600">{t("contact.addressLine1")}</p>
              <p className="text-gray-600">{t("contact.addressLine2")}</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700">{t("contact.phoneLabel")}</h4>
              <p className="text-gray-600">{t("contact.phoneNumber")}</p> {/* Placeholder - Add actual phone number later */}
            </div>
            <div>
              <h4 className="font-bold text-gray-700">{t("contact.emailLabel")}</h4>
              <p className="text-gray-600">{t("contact.emailAddress")}</p> {/* Placeholder - Add actual email later */}
            </div>
            {/* Add map integration here if needed later */}
          </div>

          {/* Simple Contact Form (Optional - can be expanded or removed) */}
          {/* Keeping a simple form for quick inquiries, separate from complaints */}
          <div className="bg-white p-8 rounded-lg shadow-md">
             <h3 className="text-2xl font-semibold text-orange-500 mb-4">{t("contact.formTitle")}</h3>
             <form onSubmit={(e) => { e.preventDefault(); alert(t("contact.formSubmitSuccess")); }}>
               <div className="mb-4">
                 <label htmlFor="contactName" className="block text-gray-700 font-bold mb-2">{t("contact.formNameLabel")}</label>
                 <input type="text" id="contactName" name="contactName" placeholder={t("contact.formNamePlaceholder")} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
               </div>
               <div className="mb-4">
                 <label htmlFor="contactEmail" className="block text-gray-700 font-bold mb-2">{t("contact.formEmailLabel")}</label>
                 <input type="email" id="contactEmail" name="contactEmail" placeholder={t("contact.formEmailPlaceholder")} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
               </div>
               <div className="mb-6">
                 <label htmlFor="contactMessage" className="block text-gray-700 font-bold mb-2">{t("contact.formMessageLabel")}</label>
                 <textarea id="contactMessage" name="contactMessage" placeholder={t("contact.formMessagePlaceholder")} rows={4} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required></textarea>
               </div>
               <div className="text-center">
                 <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                   {t("contact.formSubmitButton")}
                 </button>
               </div>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

