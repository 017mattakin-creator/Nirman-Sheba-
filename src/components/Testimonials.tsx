import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const { t } = useLanguage();
  
  const reviews = [
    {
      name: { en: 'Mr. Rahim Uddin', bn: 'জনাব রহিম উদ্দিন' },
      role: { en: 'Homeowner, Uttara', bn: 'বাড়ি মালিক, উত্তরা' },
      content: { 
        en: 'Their structural engineering report was very thorough. Professional and on-time delivery.',
        bn: 'তাদের স্ট্রাকচারাল রিপোর্ট অনেক বিস্তারিত ছিল। পেশাদার এবং সময়মতো ডেলিভারি পেয়েছি।'
      }
    },
    {
      name: { en: 'Sarah Karim', bn: 'সারাহ করিম' },
      role: { en: 'CEO, Karim Group', bn: 'সিইও, করিম গ্রুপ' },
      content: { 
        en: 'Nirman Sheba handled our factory soil testing and piling with amazing precision.',
        bn: 'নির্মাণ শেবা আমাদের ফ্যাক্টরির সয়েল টেস্টিং এবং পাইলিং এর কাজ খুব সতর্কভাবে সম্পন্ন করেছে।'
      }
    }
  ];

  return (
    <section className="py-24 bg-navy relative border-y border-white/5">
      <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[1px] bg-slate-600"></div>
          <h2 className="text-xs font-bold text-slate-400 mb-0 uppercase tracking-[0.4em]">
            {t({ en: 'Client Testimonials', bn: 'গ্রাহকদের মতামত' })}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((rv, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 p-10 rounded-sm border border-white/10 relative"
            >
              <Quote className="w-12 h-12 text-white/5 absolute top-10 right-10" />
              <p className="text-xl text-white font-light italic mb-10 leading-relaxed tracking-tight underline transition-all decoration-white/10 hover:decoration-white/30 decoration-offset-[8px]">"{t(rv.content)}"</p>
              <div>
                <div className="font-bold text-white text-lg tracking-tight">{t(rv.name)}</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                  {t(rv.role)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Slider Placeholder */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-12">
            {t({ en: 'Trusted Industry Partners', bn: 'যারা আমাদের ওপর আস্থা রাখেন' })}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-20 hover:opacity-50 transition-opacity">
            {['ENGINEER_ASSOC', 'BUET_CONSULT', 'CDA_LICENSED', 'STEEL_TECH', 'CEMENT_CORP'].map((logo, i) => (
              <div key={i} className="text-sm font-black text-white tracking-widest uppercase italic">{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
