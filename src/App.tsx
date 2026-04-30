/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import EngineersSection from './components/EngineersSection';
import Testimonials from './components/Testimonials';
import WhatsAppButton from './components/WhatsAppButton';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import RequestServicesPage from './pages/RequestServicesPage';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <LanguageProvider>
      {currentHash === '#request-services' ? (
        <RequestServicesPage />
      ) : (
        <div className="min-h-screen font-sans selection:bg-white selection:text-navy">
          <Navbar />
          <main>
            <Hero />
            <ServiceGrid />
            <EngineersSection />
            <Testimonials />
            <BookingSection />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </LanguageProvider>
  );
}

