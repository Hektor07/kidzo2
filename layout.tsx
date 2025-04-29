'use client';

import React from 'react';
import { I18nProvider } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Kidzo - Children's Play Center</title>
        <meta name="description" content="Kidzo - Fun playground for children aged 3-12 years in Dammam" />
      </head>
      <body>
        <I18nProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
