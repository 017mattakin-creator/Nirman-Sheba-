import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { services, Service } from '../data/services';
import { ChevronRight, X } from 'lucide-react';

export default function ServiceGrid() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-[#001F3F]/95 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="text-left mb-16 border-l-2 border-slate-700 pl-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t({ en: 'Interactive 18-Service Hub', bn: '১৮-টি ইন্টারঅ্যাক্টিভ সার্ভিস হাব' })}
          </h2>
          <p className="text-slate-400 max-w-2xl">
            {t({ 
              en: 'Click on any service to explore detailed sub-categories and expert insights from our senior engineers.', 
              bn: 'আমাদের বিশেষজ্ঞ ইঞ্জিনিয়ারদের মাধ্যমে প্রতিটি সার্ভিসের বিস্তারিত সাব-ক্যাটাগরি দেখুন।' 
            })}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
  key?: React.Key;
}

function ServiceCard({ service, onClick }: ServiceCardProps) {
  const { t } = useLanguage();
  const Icon = service.icon;

  return (
    <motion.div
      layoutId={`card-${service.id}`}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="service-card flex flex-col justify-center items-center text-center cursor-pointer group py-6 px-4"
    >
      <div className="mb-3 text-slate-400 group-hover:text-white transition-colors">
        <Icon className="w-8 h-8" />
      </div>
      
      <h3 className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest">
        {t(service.title)}
      </h3>
      
      <div className="text-[8px] text-slate-500 mt-2 uppercase tracking-tight group-hover:text-slate-300 transition-colors">
        {service.subCategories.length} {t({ en: 'Categories', bn: 'ক্যাটাগরি' })}
      </div>
    </motion.div>
  );
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const { t } = useLanguage();
  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-navy/90 backdrop-blur-md"
      />
      
      <motion.div
        layoutId={`card-${service.id}`}
        className="relative bg-[#001D39] border border-white/10 w-full max-w-3xl rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row"
      >
        <div className="md:w-2/5 bg-black/20 p-10 text-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
          <div>
            <div className="w-16 h-16 bg-white/5 rounded-sm flex items-center justify-center mb-8 border border-white/10">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6 tracking-tight uppercase">{t(service.title)}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">{t(service.description)}</p>
          </div>
          
          <button 
            onClick={onClose}
            className="mt-12 hidden md:flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            <X className="w-4 h-4" />
            {t({ en: 'Esc to Close', bn: 'বন্ধ করতে ক্লিক করুন' })}
          </button>
        </div>

        <div className="md:w-3/5 p-10 bg-transparent blueprint-bg">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">
              {t({ en: 'Technical Sub-Categories', bn: 'টেকনিক্যাল সাব-ক্যাটাগরি' })}
            </h4>
            <button onClick={onClose} className="md:hidden p-2 hover:bg-white/10 rounded-full">
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {service.subCategories.map((sub, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                key={i} 
                className="flex items-center gap-4 p-4 rounded-sm border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group cursor-default"
              >
                <div className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-white transition-colors" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">{t(sub)}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-black/40 rounded-sm border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-slate-600"></div>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                {t({ en: 'Project Request', bn: 'প্রজেক্ট রিকোয়েস্ট' })}
              </p>
            </div>
            <button className="btn-primary w-full tracking-[0.3em]">
              {t({ en: 'Book Site Inspection', bn: 'সাইট ইনস্পেকশন বুক করুন' })}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
