import React from 'react';
import BookingSection from '../components/BookingSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RequestServicesPage() {
  return (
    <div className="min-h-screen font-sans bg-navy">
      <Navbar />
      <main className="pt-20">
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
