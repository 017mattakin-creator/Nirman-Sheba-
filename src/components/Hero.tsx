import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, HardHat, TrendingUp } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const content = {
    headline: {
      en: 'From Soil Test to Interior Design—One-Stop Solution.',
      bn: 'মাটি পরীক্ষা থেকে ঘরের ইন্টেরিয়র—সব সমাধান এখন এক ছাদের নিচে।'
    },
    subheadline: {
      en: 'Trusted engineering expertise for modern Bangladesh. Precision-led construction with cutting-edge technology.',
      bn: 'আধুনিক বাংলাদেশের জন্য বিশ্বস্ত প্রকৌশলী সমাধান। নিখুঁত নির্মাণ এবং উন্নত প্রযুক্তির সমন্বয়।'
    },
    cta1: { en: 'Explore Services', bn: 'আমাদের সেবা দেখুন' },
    cta2: { en: 'View Projects', bn: 'প্রকল্প সমূহ' }
  };

  return (
    <section className="relative pt-32 pb-20 min-h-[90vh] flex items-center blueprint-bg">
      <div className="absolute inset-0 z-0 bg-navy/50"></div>

      <div className="max-w-7xl mx-auto px-10 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-[0.4em] flex items-center gap-3">
              <div className="w-8 h-[1px] bg-slate-500"></div>
              {t({ en: 'Premier Engineering Solution', bn: 'সেরা ইঞ্জিনিয়ারিং সমাধান' })}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {t({ en: 'From Soil Test to Interior Design—', bn: 'মাটি পরীক্ষা থেকে ঘরের ইন্টেরিয়র—' })}<br/>
              <span className="text-slate-400 font-light">{t({ en: 'Everything Under One Roof.', bn: 'সব সমাধান এখন এক ছাদের নিচে।' })}</span>
            </h1>
            
            <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-6 max-w-lg">
              {t(content.subheadline)}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#services"
              className="btn-primary"
            >
              {t(content.cta1)}
            </a>
            <a
              href="tel:+8801831052009"
              className="btn-outline flex items-center gap-2"
            >
              <span>{t({ en: 'Free Expert Consultation', bn: 'ফ্রি বিশেষজ্ঞ পরামর্শ নিন' })}</span>
              <span className="font-mono">+8801831052009</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white/5 p-5 rounded-sm border border-white/10 text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">
                {t({ en: 'Years Experience', bn: 'অভিজ্ঞতা' })}
              </div>
            </div>
            <div className="bg-white/5 p-5 rounded-sm border border-white/10 text-center">
              <div className="text-2xl font-bold">250+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">
                {t({ en: 'Projects Done', bn: 'সম্পন্ন প্রজেক্ট' })}
              </div>
            </div>
            <div className="bg-white/5 p-5 rounded-sm border border-white/10 text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">
                {t({ en: 'Satisfaction', bn: 'সন্তুষ্টি' })}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative p-1 border border-white/10 bg-white/5 rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200&h=800" 
              alt="Construction Excellence"
              className="w-full h-full object-cover rounded shadow-2xl transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy/20 mix-blend-multiply"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20"></div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 bg-navy p-6 border border-white/10 rounded shadow-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t({ en: 'Verified Firm', bn: 'নিবন্ধিত প্রতিষ্ঠান' })}</div>
              <div className="text-sm font-bold text-white uppercase tracking-tighter">Registered & Licensed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
