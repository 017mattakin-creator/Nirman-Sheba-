import { 
  FlaskConical, 
  Truck, 
  Construction, 
  Hammer, 
  Droplets, 
  Zap, 
  Settings, 
  PencilRuler, 
  Paintbrush, 
  Calculator, 
  Activity, 
  Wrench, 
  ClipboardCheck, 
  Receipt, 
  HardHat, 
  Trash2, 
  MonitorDot, 
  Gift 
} from 'lucide-react';

export interface SubCategory {
  en: string;
  bn: string;
}

export interface Service {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  icon: any;
  subCategories: SubCategory[];
}

export const services: Service[] = [
  {
    id: 'soil-test',
    title: { en: 'Soil Test', bn: 'মাটি পরীক্ষা' },
    description: { en: 'Comprehensive soil analysis and foundation reporting.', bn: 'মাটির গুণনাগুন পরীক্ষা এবং ফাউন্ডেশন রিপোর্ট।' },
    icon: FlaskConical,
    subCategories: [
      { en: 'Boring', bn: 'বোরিং' },
      { en: 'Lab Test', bn: 'ল্যাব টেস্ট' },
      { en: 'Digital Survey', bn: 'ডিজিটাল সার্ভে' },
      { en: 'Foundation Report', bn: 'ফাউন্ডেশন রিপোর্ট' }
    ]
  },
  {
    id: 'material-sourcing',
    title: { en: 'Material Sourcing', bn: 'নির্মাণ সামগ্রী' },
    description: { en: 'Direct factory supply of high-quality construction materials.', bn: 'উন্নতমানের নির্মাণ সামগ্রীর সরাসরি ফ্যাক্টরি সাপ্লাই।' },
    icon: Truck,
    subCategories: [
      { en: 'Rod/Cement/Aggregates', bn: 'রড/সিমেন্ট/খোয়া' },
      { en: 'Quality Control', bn: 'কোয়ালিটি কন্ট্রোল' },
      { en: 'Factory Direct Supply', bn: 'ফ্যাক্টরি ডিরেক্ট সাপ্লাই' }
    ]
  },
  {
    id: 'piling',
    title: { en: 'Piling', bn: 'পাইলিং' },
    description: { en: 'Foundational piling solutions for modern structures.', bn: 'আধুনিক কাঠামোর জন্য গভীর পাইলিং সমাধান।' },
    icon: Construction,
    subCategories: [
      { en: 'Cast-in-Situ', bn: 'কাস্ট-ইন-সিটু' },
      { en: 'Pre-cast', bn: 'প্রি-কাস্টিং' },
      { en: 'Shore Piling', bn: 'শোর পাইলিং' },
      { en: 'Load Test', bn: 'লোড টেস্ট' }
    ]
  },
  {
    id: 'civil',
    title: { en: 'Civil Works', bn: 'সিভিল কাজ' },
    description: { en: 'Expert structural and masonry services.', bn: 'দক্ষ স্ট্রাকচারাল এবং রাজমিস্ত্রির কাজ।' },
    icon: Hammer,
    subCategories: [
      { en: 'Sub-structure', bn: 'সাব-স্ট্রাকচার' },
      { en: 'Slab Casting', bn: 'ছাদ ঢালাই' },
      { en: 'Masonry', bn: 'গাঁথুনি/প্লাস্টার' },
      { en: 'Waterproofing', bn: 'ওয়াটারপ্রুফিং' }
    ]
  },
  {
    id: 'plumbing',
    title: { en: 'Plumbing', bn: 'প্লাম্বিং' },
    description: { en: 'Modern sanitary and water supply layouts.', bn: 'আধুনিক সেনিটারি এবং পানি সরবরাহ ব্যবস্থা।' },
    icon: Droplets,
    subCategories: [
      { en: 'Pipe Layout', bn: 'পাইপ লে-আউট' },
      { en: 'Sewerage', bn: 'সুয়ারেজ লাইন' },
      { en: 'Sanitary Fittings', bn: 'স্যানিটারি ফিটিংস' },
      { en: 'Filtration', bn: 'ফিল্ট্রেশন সিস্টেম' }
    ]
  },
  {
    id: 'electrical',
    title: { en: 'Electrical', bn: 'ইলেকট্রিক্যাল' },
    description: { en: 'Safe and concealed electrical installations.', bn: 'নিরাপদ এবং আধুনিক বৈদ্যুতিক ওয়্যারিং।' },
    icon: Zap,
    subCategories: [
      { en: 'Concealed Wiring', bn: 'কনসিলড ওয়্যারিং' },
      { en: 'SDB/MDB Setup', bn: 'এসডিবি প্যাকেজ' },
      { en: 'LPS & Grounding', bn: 'লাইটিং প্রটেকশন সিস্টেম' }
    ]
  },
  {
    id: 'mechanical',
    title: { en: 'Mechanical', bn: 'মেকানিক্যাল' },
    description: { en: 'HVAC, elevators, and industrial machinery solutions.', bn: 'এসি, লিফট এবং সাবস্টেশন সমাধান।' },
    icon: Settings,
    subCategories: [
      { en: 'HVAC/AC', bn: 'এইচভ্যাক/এসি' },
      { en: 'Lift & Escalator', bn: 'লিফট ও এসকেলেটর' },
      { en: 'Generator & Substation', bn: 'জেনারেটর ও সাবস্টেশন' }
    ]
  },
  {
    id: 'architect',
    title: { en: 'Architect', bn: 'আর্কিটেকচার' },
    description: { en: 'Stunning floor plans and visualization.', bn: 'চমৎকার ফ্লোর প্ল্যান এবং ভিজ্যুয়ালাইজেশন।' },
    icon: PencilRuler,
    subCategories: [
      { en: 'Floor Plans', bn: 'ফ্লোর প্ল্যান' },
      { en: '3D Visualization', bn: 'থ্রিডি ডিজাইন' },
      { en: 'RAJUK/CDA Approval', bn: 'রাজউক/সিডিএ অনুমোদন' }
    ]
  },
  {
    id: 'interior',
    title: { en: 'Interior', bn: 'ইন্টারিয়র' },
    description: { en: 'Premium modular décor and renovation.', bn: 'আধুনিক মডুলার ডেকর এবং রেনোভেশন।' },
    icon: Paintbrush,
    subCategories: [
      { en: 'Modular Kitchen', bn: 'মডুলার কিচেন' },
      { en: 'False Ceiling', bn: 'ফলস সিলিং' },
      { en: 'Office/Home Decor', bn: 'অফিস ও হোম ডেকর' }
    ]
  },
  {
    id: 'boq',
    title: { en: 'BOQ', bn: 'বিওকিউ' },
    description: { en: 'Precise cost estimation and material schedules.', bn: 'সঠিক বাজেট এবং নির্মাণ সামগ্রীর হিসাব।' },
    icon: Calculator,
    subCategories: [
      { en: 'Cost Estimation', bn: 'বাজেট প্রণয়ন' },
      { en: 'Item Rate Analysis', bn: 'রেট অ্যানালাইসিস' },
      { en: 'Material Schedule', bn: 'ম্যাটেরিয়াল শিডিউল' }
    ]
  },
  {
    id: 'structural',
    title: { en: 'Structural', bn: 'স্ট্রাকচারাল' },
    description: { en: 'Engineering for safety and seismic resilience.', bn: 'নিরাপদ এবং ভূমিকম্প সহনশীল স্ট্রাকচার ডিজাইন।' },
    icon: Activity,
    subCategories: [
      { en: 'Seismic Load Analysis', bn: 'ভূমিকম্প সহনশীল ডিজাইন' },
      { en: 'BBS', bn: 'বি বি এস' },
      { en: 'Retrofitting Design', bn: 'রেট্রোফিটিং ডিজাইন' }
    ]
  },
  {
    id: 'repairing',
    title: { en: 'Repairing', bn: 'মেরামত কাজ' },
    description: { en: 'Damp, cracks, and structural restoration.', bn: 'ড্যাম্প, ফাটল মেরামত এবং পেইন্টিং সার্ভিস।' },
    icon: Wrench,
    subCategories: [
      { en: 'Damp/Crack Solution', bn: 'ড্যাম্প/ফাটল সমাধান' },
      { en: 'Painting', bn: 'রং করা' },
      { en: 'Facade Cleaning', bn: 'বিল্ডিং পরিষ্কার' }
    ]
  },
  {
    id: 'consultancy',
    title: { en: 'Consultancy', bn: 'কনসালটেন্সি' },
    description: { en: 'Expert site supervision and technical audits.', bn: 'নির্মাণ তত্ত্বাবধান এবং টেকনিক্যাল অডিট।' },
    icon: ClipboardCheck,
    subCategories: [
      { en: 'Site Supervision', bn: 'সাইট সুপারভিশন' },
      { en: 'Technical Audit', bn: 'টেকনিক্যাল অডিট' },
      { en: 'Feasibility', bn: 'ফিজিবিলিটি স্টাডি' }
    ]
  },
  {
    id: 'bill-check',
    title: { en: 'Bill Check', bn: 'বিল চেকিং' },
    description: { en: 'Vendor bill audit and cost control reconciliation.', bn: 'বিল অডিট এবং খরচ নিয়ন্ত্রণ।' },
    icon: Receipt,
    subCategories: [
      { en: 'Vendor Bill Audit', bn: 'ভেন্ডর বিল অডিট' },
      { en: 'Reconciliation', bn: 'সমন্বয় পরীক্ষা' },
      { en: 'Cost Control', bn: 'ব্যয় নিয়ন্ত্রণ' }
    ]
  },
  {
    id: 'heavy-metal',
    title: { en: 'Heavy Metal', bn: 'হেভি লজিস্টিক' },
    description: { en: 'Crane, forklift, and industrial moving services.', bn: 'ক্রেন, ফর্কলিফট এবং ভারী লজিস্টিক সার্ভিস।' },
    icon: HardHat,
    subCategories: [
      { en: 'Crane/Forklift Logistics', bn: 'ক্রেন/ফর্কলিফট লজিস্টিক' },
      { en: 'Industrial Moving', bn: 'ইন্ডাস্ট্রিয়াল মুভিং' },
      { en: 'Safety Rigging', bn: 'সেফটি রিগিং' }
    ]
  },
  {
    id: 'demolition',
    title: { en: 'Demolition', bn: 'বিল্ডিং ভাঙা' },
    description: { en: 'Safe demolition and efficient debris removal.', bn: 'নিরাপদ উপায়ে বিল্ডিং ভাঙা এবং বর্জ্য অপসারণ।' },
    icon: Trash2,
    subCategories: [
      { en: 'Structural Demolition', bn: 'স্থাপনা ভাঙা' },
      { en: 'Debris Removal', bn: 'বর্জ্য অপসারণ' },
      { en: 'Site Clearing', bn: 'সাইট ক্লিয়ারিং' }
    ]
  },
  {
    id: 'software',
    title: { en: 'Software', bn: 'সফটওয়্যার' },
    description: { en: 'Digital progress reports and inventory tracking.', bn: 'ডিজিটাল প্রগ্রেস রিপোর্ট এবং ইনভেন্টরি সফটওয়্যার।' },
    icon: MonitorDot,
    subCategories: [
      { en: 'Digital Progress Reports', bn: 'ডিজিটাল প্রগ্রেস রিপোর্ট' },
      { en: 'Inventory Optimization', bn: 'ইনভেন্টরি অপটিমাইজেশন' }
    ]
  },
  {
    id: 'free-service',
    title: { en: 'Free Service', bn: 'ফ্রি সার্ভিস' },
    description: { en: 'Complimentary consultation and budget roadmap.', bn: 'বিনা মূল্যে বিশেষজ্ঞ পরামর্শ এবং বাজেট গাইড।' },
    icon: Gift,
    subCategories: [
      { en: '15-min Expert Consultation', bn: '১৫ মিনিট ফ্রি কনসালটেন্সি' },
      { en: 'Budget Roadmap', bn: 'বাজেট রোডম্যাপ' }
    ]
  }
];
