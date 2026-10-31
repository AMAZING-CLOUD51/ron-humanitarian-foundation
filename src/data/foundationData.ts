import { CommunityLocation, FocusArea, FAQItem } from '../types.ts';

export const FOUNDATION_INFO = {
  name: 'RON Humanitarian Foundation',
  shortName: 'RON Foundation',
  rcNumber: 'RC-8594046',
  email: 'ronfoundation@gmail.com',
  phone1: '+234 707 710 4798',
  phone2: '+234 803 914 4776',
  phone1Raw: '+2347077104798',
  phone2Raw: '+2348039144776',
  whatsappRaw: '2347077104798',
  address: 'Suite 4, Ocean Centre, Plot 1018, Off Oladipo Diya Street, Cadastral Zone B18, Gudu District, Abuja, Nigeria.',
  logo: '/assets/aistudio/ChatGPT_Image_Oct_5__2026__04_08_07_AM_5f4f6a5a.png',
  bankName: 'Zenith Bank Plc',
  accountName: 'RON Humanitarian Foundation',
  accountNumber: '1310384938',
  totalPeopleReached: 2242,
  locationsCount: 11,
  yearsOfService: '10+',
  focusAreasCount: 4,
};

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { name: 'TikTok', url: 'https://tiktok.com', icon: 'tiktok' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'X', url: 'https://x.com', icon: 'x' },
];

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Impact Stories', href: '/impact-stories' },
  { name: 'Programs', href: '#programs' },
  { name: 'Get Involved', href: '#volunteer-partner' },
  { name: 'Donate', href: '#donate', isDonate: true },
  { name: 'Contact Us', href: '#footer' },
];

// 6 completely unique photos for Hero Slideshow
export const HERO_PHOTOS = [
  '/assets/aistudio/1000002263_367a3370.jpg',
  '/assets/aistudio/1000002087_6eebf6b8.jpg',
  '/assets/aistudio/1000002068_ed061262.jpg',
  '/assets/aistudio/unnamed_4_a93bb17c.webp',
  '/assets/aistudio/unnamed_5_0ee9b56c.webp',
  '/assets/aistudio/1000002320_ee0217bd.jpg',
];

// 3 small stacked photos for Who We Are Left Column
export const WHO_WE_ARE_PHOTOS = [
  {
    url: '/assets/aistudio/1000002307_e69ace31.jpg',
    alt: 'Elderly community beneficiary receiving health medications and dignity support',
  },
  {
    url: '/assets/aistudio/1000002072_884b99d2.jpg',
    alt: 'Children and youths holding educational learning materials at IDP Camp Wasa',
  },
  {
    url: '/assets/aistudio/1000002256_713ea3cb.jpg',
    alt: 'RON Foundation field volunteer distributing educational books to children',
  },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'humanitarian',
    slug: 'humanitarian-support',
    title: 'Humanitarian & Community Support',
    description: 'Food, clothing, essential support',
    subtext: 'Delivering urgent food parcels, emergency supplies, and dignified support directly to vulnerable families and elderly citizens.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'education',
    slug: 'education-youth',
    title: 'Education & Youth Development',
    description: 'Learning materials and opportunities for young people',
    subtext: 'Equipping children and youth with textbooks, stationery, school support, and guidance to unlock their academic potential.',
    iconName: 'GraduationCap',
  },
  {
    id: 'health',
    slug: 'health-wellbeing',
    title: 'Health & Well-being',
    description: 'Health interventions, medical equipment, awareness',
    subtext: 'Deploying frontline medical check-ups, diagnostic monitoring, essential equipment, and preventive community health education.',
    iconName: 'Activity',
  },
  {
    id: 'skills',
    slug: 'skills-empowerment',
    title: 'Skills & Economic Empowerment',
    description: 'Skills, entrepreneurship, livelihoods',
    subtext: 'Providing vocational tools, transportation assets, and micro-business seed support to build sustainable household independence.',
    iconName: 'TrendingUp',
  },
];

export const COMMUNITIES: CommunityLocation[] = [
  { id: '1', name: 'Imo State (Mbaise)', state: 'Imo', reached: 532 },
  { id: '2', name: 'Wassa, Abuja', state: 'Abuja', reached: 480 },
  { id: '3', name: 'Horop, Bokkos LGA', state: 'Plateau', reached: 224 },
  { id: '4', name: 'Barkin Ladi', state: 'Plateau', reached: 206 },
  { id: '5', name: 'Bassa LGA', state: 'Plateau', reached: 164 },
  { id: '6', name: 'Riyom', state: 'Plateau', reached: 123 },
  { id: '7', name: 'Rukuba, Jos North', state: 'Plateau', reached: 119 },
  { id: '8', name: 'Vom, Jos South', state: 'Plateau', reached: 117 },
  { id: '9', name: 'Trade Centre, Jos South', state: 'Plateau', reached: 107 },
  { id: '10', name: 'Gangare, Jos North', state: 'Plateau', reached: 91 },
  { id: '11', name: 'Bauchi Ring Road, Jos North', state: 'Plateau', reached: 79 },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What does the foundation do?',
    answer:
      'RON Humanitarian Foundation operates across four core focus areas: Humanitarian & Community Support (food, clothing, essential support), Education & Youth Development (learning materials and opportunities for young people), Health & Well-being (health interventions, medical equipment, community awareness), and Skills & Economic Empowerment (skills training, entrepreneurship, and sustainable livelihoods).',
  },
  {
    id: 'faq-2',
    question: 'Where do you work?',
    answer:
      'The foundation is based in Abuja, Nigeria, with registered offices at Suite 4, Ocean Centre, Gudu District. To date, our field operations have reached 11 documented locations across Nigeria, including Imo State (Mbaise), Wassa in Abuja, and multiple local government areas across Plateau State (Horop Bokkos, Barkin Ladi, Bassa, Riyom, Rukuba, Vom, Trade Centre, Gangare, and Bauchi Ring Road).',
  },
  {
    id: 'faq-3',
    question: 'When was the foundation registered?',
    answer:
      'RON Humanitarian Foundation is an officially registered humanitarian non-governmental organisation with the Corporate Affairs Commission of Nigeria under Registration Number RC-8594046, with over 10 years of committed field service and community impact.',
  },
  {
    id: 'faq-4',
    question: 'How can I partner with you?',
    answer:
      'Our work has been self-funded so far, and we warmly welcome strategic partnerships with government agencies, corporate organisations, educational and health institutions, international development partners, community organisations, and philanthropists. You can partner through program sponsorship, resource and equipment donations, or co-hosting humanitarian outreaches.',
  },
];
