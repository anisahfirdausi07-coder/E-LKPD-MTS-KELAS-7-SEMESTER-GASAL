export type LevelId = 'low' | 'middle' | 'high';

export interface LearningLevel {
  id: LevelId;
  name: string;
  arabicName: string;
  groupLabel: string;
  tierLabel: string;
  description: string;
  buttonLabel: string;
  url: string;
  image: string;
  imageAlt: string;
  cardBgClass: string;
  cardBorderClass: string;
  titleColorClass: string;
  buttonClass: string;
  accentDotClass: string;
  focusRingClass: string;
}

export interface GuideStep {
  number: string;
  arabicStep: string;
  title: string;
  description: string;
}

export interface ArabicSkill {
  id: 'istima' | 'kalam' | 'qiraah' | 'kitabah';
  arabicTitle: string;
  title: string;
  description: string;
  accentBg: string;
  accentText: string;
}

export const HERO_IMAGE_PATH = '/src/assets/images/hero_arabic_cute_1794880880467.jpg';

export const LEARNING_LEVELS: LearningLevel[] = [
  {
    id: 'low',
    name: 'LOW LEVEL',
    arabicName: 'الْمُسْتَوَى الأَسَاسِيُّ',
    groupLabel: 'Kelompok 1',
    tierLabel: 'Tingkat Dasar',
    description:
      'Pembelajaran dengan materi dan latihan dasar yang disertai panduan langkah demi langkah.',
    buttonLabel: 'MASUK KE LOW',
    url: 'https://e-lkpdbahasaarabkelas7kelompok1.netlify.app',
    image: '/src/assets/images/card_low_cute_1794880881564.jpg',
    imageAlt: 'Ilustrasi dua siswa MTs belajar Bahasa Arab bersama dengan buku bergambar dan pensil',
    cardBgClass: 'bg-[#EAF8F7]',
    cardBorderClass: 'border-[#BCE7E3]',
    titleColorClass: 'text-[#0F5E59]',
    buttonClass:
      'bg-[#0D9488] hover:bg-[#0F766E] text-white shadow-sm shadow-teal-900/10',
    accentDotClass: 'text-[#0F766E]',
    focusRingClass: 'focus-visible:ring-[#0D9488]',
  },
  {
    id: 'middle',
    name: 'MIDDLE LEVEL',
    arabicName: 'الْمُسْتَوَى الْمُتَوَسِّطُ',
    groupLabel: 'Kelompok 2',
    tierLabel: 'Tingkat Menengah',
    description:
      'Pembelajaran dengan latihan tingkat menengah untuk mengembangkan pemahaman dan keterampilan berbahasa Arab.',
    buttonLabel: 'MASUK KE MIDDLE',
    url: 'https://e-lkdpbahasaarabkelas7kelompok2.netlify.app/',
    image: '/src/assets/images/card_middle_cute_1794880881341.jpg',
    imageAlt: 'Ilustrasi dua siswa MTs bercakap-cakap latihan dialog Bahasa Arab dengan kamus',
    cardBgClass: 'bg-[#F3EEFF]',
    cardBorderClass: 'border-[#D9CCFA]',
    titleColorClass: 'text-[#4C2A99]',
    buttonClass:
      'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-sm shadow-violet-900/10',
    accentDotClass: 'text-[#6D28D9]',
    focusRingClass: 'focus-visible:ring-[#7C3AED]',
  },
  {
    id: 'high',
    name: 'HIGH LEVEL',
    arabicName: 'الْمُسْتَوَى الْمُتَقَدِّمُ',
    groupLabel: 'Kelompok 3',
    tierLabel: 'Tingkat Lanjut',
    description:
      'Pembelajaran dengan aktivitas yang lebih menantang untuk mengembangkan kemampuan berbahasa Arab secara mandiri dan kreatif.',
    buttonLabel: 'MASUK KE HIGH',
    url: 'https://e-lkpdbahasaarabkelas7kelompok3.netlify.app/',
    image: '/src/assets/images/card_high_exam_1794880882237.jpg',
    imageAlt: 'Ilustrasi siswa MTs sedang mengerjakan ujian Bahasa Arab dengan fokus dan penuh ide',
    cardBgClass: 'bg-[#FFF1E6]',
    cardBorderClass: 'border-[#FAD2B4]',
    titleColorClass: 'text-[#9A3412]',
    buttonClass:
      'bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-sm shadow-orange-900/10',
    accentDotClass: 'text-[#C2410C]',
    focusRingClass: 'focus-visible:ring-[#EA580C]',
  },
];

export const GUIDE_STEPS: GuideStep[] = [
  {
    number: '01',
    arabicStep: 'الْخُطْوَةُ الأُولَى',
    title: 'Kenali Tingkat Belajar',
    description: 'Kenali tingkat kemampuan belajar yang telah ditentukan oleh guru.',
  },
  {
    number: '02',
    arabicStep: 'الْخُطْوَةُ الثَّانِيَةُ',
    title: 'Pilih Kelompok E-LKPD',
    description: 'Pilih kelompok Low, Middle, atau High sesuai pembagian.',
  },
  {
    number: '03',
    arabicStep: 'الْخُطْوَةُ الثَّالِثَةُ',
    title: 'Masuk & Kerjakan Aktivitas',
    description: 'Klik tombol masuk dan kerjakan seluruh aktivitas pembelajaran pada E-LKPD.',
  },
];

export const ARABIC_SKILLS: ArabicSkill[] = [
  {
    id: 'istima',
    arabicTitle: 'الاستماع',
    title: "Maharah Istima'",
    description: 'Melatih keterampilan menyimak kosakata, ungkapan, dan percakapan Bahasa Arab dengan saksama.',
    accentBg: 'bg-sky-50',
    accentText: 'text-sky-700',
  },
  {
    id: 'kalam',
    arabicTitle: 'الكلام',
    title: 'Maharah Kalam',
    description: 'Mengembangkan keberanian dan ketepatan berbicara dalam dialog Bahasa Arab sehari-hari.',
    accentBg: 'bg-teal-50',
    accentText: 'text-teal-700',
  },
  {
    id: 'qiraah',
    arabicTitle: 'القراءة',
    title: "Maharah Qira'ah",
    description: 'Membiasakan membaca teks Bahasa Arab berharakat dengan pemahaman makna yang tepat.',
    accentBg: 'bg-violet-50',
    accentText: 'text-violet-700',
  },
  {
    id: 'kitabah',
    arabicTitle: 'الكتابة',
    title: 'Maharah Kitabah',
    description: 'Mengasah keterampilan menulis huruf, kata, dan kalimat Bahasa Arab secara rapi dan benar.',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-700',
  },
];
