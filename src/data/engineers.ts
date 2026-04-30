export interface Engineer {
  id: string;
  name: {
    en: string;
    bn: string;
  };
  title: {
    en: string;
    bn: string;
  };
  degree: {
    en: string;
    bn: string;
  };
  experience: {
    en: string;
    bn: string;
  };
  image: string;
}

export const engineers: Engineer[] = [
  {
    id: '1',
    name: { en: 'Engr. Mahbubur Rahman', bn: 'ইঞ্জি. রেজাই মোস্তফা' },
    title: { en: 'Senior Structural Engineer', bn: 'সিনিয়র স্ট্রাকচারাল ইঞ্জিনিয়ার' },
    degree: { en: 'MSc in Civil Engineering (BUET)', bn: 'এমএসসি ইন সিভিল ইঞ্জিনিয়ারিং (বুয়েট)' },
    experience: { en: '15+ Years', bn: '১৫+ বছর' },
    image: 'https://media-ccu2-1.cdn.whatsapp.net/v/t61.24694-24/546524244_2039560906974369_4397797893696654393_n.jpg?ccb=11-4&oh=01_Q5Aa4QFZMABlJB4Vp5FwgQtbLqaYCK0xFp9b1wgb87kEZRkWzw&oe=69FFF87D&_nc_sid=5e03e0&_nc_cat=105'
  },
  {
    id: '2',
    name: { en: 'Engr. Ghulam kabria', bn: 'ইঞ্জি. গোলামকিবরিয়া' },
    title: { en: 'Lead Engr ', bn: 'লিড ইঞ্জিনিয়ার' },
    degree: { en: 'MSc in Civil Engineering (SHA)', bn: 'বি.আর্ক (শাহজালাল ইউনিভারসিটি)' },
    experience: { en: '10+ Years', bn: '১০+ বছর' },
    image: 'https://media-ccu2-1.cdn.whatsapp.net/v/t61.24694-24/342297229_1302161107061758_2985436272522170298_n.jpg?ccb=11-4&oh=01_Q5Aa4QF6sRpFATRqQc83uLSVSrq0wwmFK93EyHvbFR5z-5rr8A&oe=69FFD925&_nc_sid=5e03e0&_nc_cat=109'
  },
  {
    id: '3',
    name: { en: 'Md. Mottakin islam', bn: 'মো মোত্তাকিন ইসলাম' },
    title: { en: 'MIS Specialist', bn: 'এম আই.এস স্পেশালিস্ট' },
    degree: { en: 'BSc in EEE (CUET)', bn: 'বিএ (টংঙ্গী)' },
    experience: { en: '12+ Years', bn: '১২+ বছর' },
    image: 'https://media-ccu2-1.cdn.whatsapp.net/v/t61.24694-24/534419230_4290037694583568_4727074153006507869_n.jpg?ccb=11-4&oh=01_Q5Aa4QHGYaaPNW5MOY6zdcRsTaKWQ__JgVRxcyl9LMfJfIGgvg&oe=69FFE7DE&_nc_sid=5e03e0&_nc_cat=111'
  }
];
