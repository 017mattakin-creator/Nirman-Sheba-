import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Phone } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const labels = {
    cta: { en: 'Book Free Expert Call', bn: 'ফ্রি বিশেষজ্ঞ পরামর্শ নিন' },
    services: { en: 'Services', bn: 'সেবা সমূহ' },
    engineers: { en: 'Engineers', bn: 'ইঞ্জিনিয়ার' },
    about: { en: 'About', bn: 'আমাদের সম্পর্কে' }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-white flex items-center justify-center font-bold text-navy text-xl">
            NS
          </div>
          <div>
            <h1 className="text-white font-bold text-xl tracking-tighter uppercase leading-none">NIRMAN <span className="text-slate-400">SHEBA</span></h1>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-300">
          <a href="#services" className="hover:text-white transition-colors">{t(labels.services)}</a>
          <a href="#engineers" className="hover:text-white transition-colors">{t(labels.engineers)}</a>
          <a href="#about" className="hover:text-white transition-colors">{t(labels.about)}</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm hover:bg-white/10 transition-colors text-[10px] font-bold tracking-widest text-slate-300"
          >
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span className="uppercase">{language === 'en' ? 'BN' : 'EN'}</span>
          </button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            {t(labels.cta)}
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
