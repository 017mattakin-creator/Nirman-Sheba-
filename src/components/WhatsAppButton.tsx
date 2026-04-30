import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <motion.a
      href="https://wa.me/8801234567890" // Placeholder number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[90] flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl transition-shadow hover:shadow-green-500/20"
    >
      <div className="flex flex-col items-end hidden sm:flex">
        <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">
          {t({ en: 'Have a query?', bn: 'প্রশ্ন আছে?' })}
        </span>
        <span className="text-sm font-bold antialiased">
          {t({ en: 'WhatsApp Us', bn: 'হোয়াটসঅ্যাপ করুন' })}
        </span>
      </div>
      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
        <MessageCircle className="w-6 h-6 fill-current" />
      </div>
    </motion.a>
  );
}
