import React from 'react';
import Hero from '@/components/Hero';
import Activities from '@/components/Activities';
import Cafe from '@/components/Cafe';
import Parties from '@/components/Parties';
import Gallery from '@/components/Gallery';
import Offers from '@/components/Offers';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <Activities />
      <Cafe />
      <Parties />
      <Gallery />
      <Offers />
      <Booking />
      <Contact />
      <Reviews />
    </>
  );
}
