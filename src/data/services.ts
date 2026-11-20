import { Service } from '@/types';

export const servicesData: Service[] = [
  {
    id: 'web-development',
    title: 'Custom Website Development',
    description:
      'High-performance, mobile-first websites tailored for Sri Lankan small businesses and global clients. Built with Next.js, React, or lightweight PHP for lightning-fast loading.',
    features: [
      'Responsive, mobile-optimized layouts for all devices',
      'Clean semantic code with 90+ Google Lighthouse score',
      'Modern interactive UI with smooth animations',
      'Contact forms, WhatsApp click-to-chat integration',
    ],
    icon: 'Globe',
    highlight: true,
  },
  {
    id: 'ecommerce-payhere',
    title: 'E-Commerce with PayHere Payment Gateway',
    description:
      'Turn-key online stores configured for Sri Lankan transactions via PayHere (Visa, MasterCard, eZ Cash, mCash, Sampath Vishwa) plus direct bank transfer workflows.',
    features: [
      'Full PayHere IPN (Instant Payment Notification) setup',
      'Product catalog, cart state, and order notifications',
      'Customer invoice generation & stock management',
      'Secure checkout with SSL and fraud prevention',
    ],
    icon: 'ShoppingCart',
    highlight: true,
  },
  {
    id: 'seo-google-business',
    title: 'SEO & Google Business Profile Optimization',
    description:
      'Help local customers in Sri Lanka find your shop or services on Google Search and Google Maps. Target high-intent local queries and rank above competitors.',
    features: [
      'Complete Google Business Profile (Maps) creation & verification',
      'On-page SEO (meta tags, structured schema, fast load speeds)',
      'Keyword research targeting Sri Lankan regional markets',
      'Local citations and customer review acquisition strategy',
    ],
    icon: 'TrendingUp',
    highlight: false,
  },
  {
    id: 'ml-ai-features',
    title: 'Machine Learning & Intelligent Features',
    description:
      'Elevate your web applications with pragmatic AI and machine learning features—from predictive analytics to automated classification and recommendation engines.',
    features: [
      'Smart customer churn and lead scoring models',
      'Automated document/image classification pipelines',
      'Multilingual text analysis (Sinhala, Tamil, English)',
      'FastAPI / Flask microservice integration with React/Next.js',
    ],
    icon: 'Cpu',
    highlight: false,
  },
  {
    id: 'monthly-maintenance',
    title: 'Monthly Maintenance & Cloud Support',
    description:
      'Reliable ongoing technical support to keep your web presence secure, up-to-date, backed up, and running smoothly with zero downtime headaches.',
    features: [
      'Regular security updates, bug fixes, and patch management',
      'Automated database and file backups',
      'Uptime and performance monitoring',
      'Content updates, seasonal banner additions, and small tweaks',
    ],
    icon: 'ShieldCheck',
    highlight: false,
  },
];
