import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black/20 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 grayscale opacity-70">
            <div className="w-8 h-8 bg-white text-navy font-bold flex items-center justify-center text-sm">NS</div>
            <span className="text-xs font-bold uppercase tracking-widest italic text-slate-400">© 2026 Nirman Sheba Bangladesh | Excellence in Engineering</span>
          </div>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>Dhaka Office: Banani DOHS</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>Hotline: +880 1700-000000</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
