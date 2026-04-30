import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { DraftingCompass, HardHat, Wrench, UserCheck } from 'lucide-react';

export default function BookingSection() {
  const { t } = useLanguage();

  const cards = [
    {
      id: 'design',
      icon: DraftingCompass,
      title: { en: 'Design & Planning', bn: 'ডিজাইন ও পরিকল্পনা' },
      desc: { en: 'Architectural, Structural Design, BOQ, 3D Visualization & Feasibility.', bn: 'আর্কিটেকচার, স্ট্রাকচারাল ডিজাইন, বিওকিউ, থ্রিডি ডিজাইন এবং ফিজিবিলিটি স্টাডি।' },
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfx2YKczpFmkJlimAMTRutglGA7JnTnXEEX8ZP-3NBdql5x0A/viewform?usp=publish-editor',
      color: 'blue'
    },
    {
      id: 'soil',
      icon: HardHat,
      title: { en: 'Soil & Foundation', bn: 'সয়েল টেস্ট ও ফাউন্ডেশন' },
      desc: { en: 'Soil test, Digal Survey, Deep/Shore Piling & Load Testing.', bn: 'মাটি পরীক্ষা, ডিজিটাল সার্ভে, গভীর পাইলিং ও লোড টেস্ট।' },
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfCcqHPdSi4uHNWtMOZs7YnyEv0E8q-8bvPqwkglUGTeNH4Jw/viewform?usp=publish-editor',
      color: 'orange'
    },
    {
      id: 'construction',
      icon: Wrench,
      title: { en: 'Construction & Finishing', bn: 'নির্মাণ ও ফিনিশিং' },
      desc: { en: 'Civil, Electrical, Plumbing, HVAC, Mechanical & Interior.', bn: 'সিভিল কাজ, ইলেকট্রিক্যাল, প্লাম্বিং, এইচভ্যাক/এসি এবং ইন্টারিয়র।' },
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSegsAbaDKFf3lsorvX2vJjDr3mZ60TXNFmL8eTx81rtjJWUfg/viewform?usp=header',
      color: 'green'
    }
  ];

  return (
    <section className="py-24 bg-navy relative border-y border-white/5">
      <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold text-white mb-4">
            {t({ en: 'Service Request & Inspection', bn: 'সার্ভিস রিকোয়েষ্ট ও সাইট ইনস্পেকশন' })}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t({ 
              en: 'Fill out the form that best matches your project needs, and our team will get back to you quickly.', 
              bn: 'আপনার প্রজেক্টের সাথে মিল রেখে সঠিক ফর্মটি পূরণ করুন, আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করবে।' 
            })}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -5 }}
              className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-white/30 transition-all flex flex-col h-full"
            >
              <div className="text-white/40 mb-6">
                <card.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t(card.title)}</h3>
              <p className="text-sm text-slate-400 mb-8 flex-grow leading-relaxed">{t(card.desc)}</p>
              <a 
                href={card.link} 
                target="_blank" 
                rel="noreferrer"
                className="block text-center bg-white text-navy font-bold text-xs uppercase tracking-widest py-3 rounded-sm hover:bg-slate-200 transition-colors"
              >
                {t({ en: 'Fill Form', bn: 'ফর্ম পূরণ করুন' })}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white/5 p-10 rounded-sm border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="text-white/40">
              <UserCheck className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {t({ en: 'Book Free Site Inspection', bn: 'ফ্রি সাইট ইন্সপেকশন বুক করুন' })}
              </h3>
              <p className="text-slate-400">
                {t({ en: 'Request an in-person engineer visit for your plot.', bn: 'আপনার জমিতে সরাসরি ইঞ্জিনিয়ার ভিজিটের জন্য রিকোয়েস্ট করুন।' })}
              </p>
            </div>
          </div>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNFcO3mR1k0wZHMF05CFRvp5rzGf81L4DLC-aTs26rIk1c6A/viewform?usp=publish-editor" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 bg-white text-navy font-bold text-sm uppercase tracking-widest py-4 rounded-sm hover:bg-slate-200 transition-colors shrink-0"
          >
            {t({ en: 'Book Now', bn: 'বুকিং দিন' })}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
