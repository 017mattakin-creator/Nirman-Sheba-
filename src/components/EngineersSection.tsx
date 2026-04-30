import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { engineers } from '../data/engineers';
import { Award, GraduationCap, Clock } from 'lucide-react';

export default function EngineersSection() {
  const { t } = useLanguage();

  return (
    <section id="engineers" className="py-24 bg-[#001D39] relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl border-l-2 border-slate-700 pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t({ en: 'Meet Our Expert Engineers', bn: 'আমাদের বিশেষজ্ঞ ইঞ্জিনিয়ারদের সাথে পরিচিত হোন' })}
            </h2>
            <p className="text-slate-400">
              {t({ 
                en: 'A team of veteran structural, electrical, and mechanical engineers dedicated to your project’s success.', 
                bn: 'আপনার প্রজেক্টের সফলতায় নিবেদিতপ্রাণ একদল অভিজ্ঞ স্ট্রাকচারাল, ইলেকট্রিক্যাল এবং মেকানিক্যাল ইঞ্জিনিয়ার।' 
              })}
            </p>
          </div>
          <button className="btn-outline shrink-0">
            {t({ en: 'View All Experts', bn: 'সকল ইঞ্জিনিয়ার দেখুন' })}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineers.map((eng, i) => (
            <motion.div
              key={eng.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-sm overflow-hidden group hover:border-white/30 transition-colors"
            >
              <div className="h-80 relative overflow-hidden">
                <img 
                  src={eng.image} 
                  alt={t(eng.name)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{t(eng.name)}</h3>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                    <Award className="w-3.5 h-3.5" />
                    {t(eng.title)}
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">{t({ en: 'Academic', bn: 'শিক্ষা' })}</div>
                    <div className="text-sm font-bold text-white leading-relaxed">{t(eng.degree)}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">{t({ en: 'Experience', bn: 'অভিজ্ঞতা' })}</div>
                    <div className="text-sm font-bold text-white leading-relaxed">{t(eng.experience)}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
