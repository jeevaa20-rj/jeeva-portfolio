import { Project } from '@/types';

/**
 * PROJECT REPOSITORY
 * Edit this file to add, modify, or reorder your portfolio projects.
 * Categories: 'web' | 'ml'
 */
export const projectsData: Project[] = [
  // ==========================================
  // WEB DEVELOPMENT PROJECTS
  // ==========================================
  {
    id: 'unicore-campus-management',
    title: 'UniCore - Campus Management Platform',
    category: 'web',
    shortDescription:
      'A comprehensive university enterprise platform featuring role-based dashboards, course tracking, and secure academic workflows.',
    fullDescription:
      'Architected a modular PHP MVC backend with JWT authorization and React Vite frontend. Provides 4 specialized role-based portals for System Administrators, Faculty Staff, Students, and Course Representatives.',
    tags: ['PHP MVC', 'React.js', 'JWT Auth', 'MySQL', 'REST API', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/jeevaa-coder/unicore-campus-system',
    liveUrl: 'https://unicore-demo.vercel.app',
    featured: true,
  },
  {
    id: 'lankacart-ecommerce',
    title: 'LankaCart - PayHere Integrated E-Commerce',
    category: 'web',
    shortDescription:
      'Full-stack digital storefront tailored for Sri Lankan retail businesses with PayHere IPN gateway, cart state, and order tracking.',
    fullDescription:
      'Engineered with OOP PHP PDO and MySQL with transactions to ensure data consistency during checkouts. Integrates PayHere Payment Gateway with instant payment notification (IPN) webhooks and customer invoice emails.',
    tags: ['PHP OOP', 'PDO', 'PayHere Gateway', 'MySQL', 'JavaScript', 'Bootstrap', 'REST API'],
    githubUrl: 'https://github.com/jeevaa-coder/lankacart-payhere-ecommerce',
    liveUrl: 'https://lankacart-preview.com',
    featured: true,
  },
  {
    id: 'staff-management-system',
    title: 'Enterprise Staff Management System',
    category: 'web',
    shortDescription:
      'Robust desktop software for organizational HR, employee attendance tracking, role permissions, and monthly salary disbursement calculation.',
    fullDescription:
      'Developed using Java Swing with responsive MVC architecture, complex SQL aggregation queries, PDF report exports with iText, and automated payroll deduction calculations.',
    tags: ['Java', 'Java Swing', 'MySQL', 'JDBC', 'MVC Architecture', 'OOP', 'JasperReports'],
    githubUrl: 'https://github.com/jeevaa-coder/java-staff-management-system',
    liveUrl: '',
    featured: false,
  },
  {
    id: 'campus-lost-and-found',
    title: 'Smart Campus Lost & Found System',
    category: 'web',
    shortDescription:
      'Automated university item recovery portal with instant Twilio SMS notifications, photo verification, and status resolution logs.',
    fullDescription:
      'Built with PHP PDO and MySQL to streamline university asset reclamation. Features image upload compression, claim verification tokens, and Twilio REST API integration for automated SMS alerts on item matches.',
    tags: ['PHP', 'MySQL', 'Twilio API', 'SMS Gateway', 'JavaScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/jeevaa-coder/campus-lost-and-found-portal',
    liveUrl: 'https://lostfound.uwu-demo.lk',
    featured: false,
  },

  // ==========================================
  // MACHINE LEARNING & AI PROJECTS
  // ==========================================
  {
    id: 'agricure-crop-disease-detector',
    title: 'AgriCure - Tea & Paddy Disease Classifier',
    category: 'ml',
    shortDescription:
      'Deep learning computer vision system detecting foliar diseases in Sri Lankan tea and paddy crops with 96.4% test accuracy.',
    fullDescription:
      'Formulated an end-to-end diagnosis pipeline utilizing PyTorch and EfficientNet-B0 with transfer learning. Deployed as a lightweight REST API for rural agricultural extension officers.',
    tags: ['Python', 'PyTorch', 'Computer Vision', 'ResNet50', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/jeevaa-coder/agricure-crop-disease-detector',
    liveUrl: 'https://huggingface.co/spaces/jeevaa-coder/agricure-classifier',
    featured: true,
    mlDetails: {
      problem: 'Automated early detection of foliar blight and tea blister blight in Sri Lankan crop farms.',
      dataset: '8,400 annotated multispectral leaf pathology images collected from local field surveys.',
      model: 'EfficientNet-B0 & ResNet50 transfer learning ensemble with Albumentations data augmentation.',
      metric: '96.4% Test Accuracy | 0.95 Macro F1-Score | 32ms inference latency',
    },
  },
  {
    id: 'finguard-microfinance-credit-risk',
    title: 'FinGuard - SME Credit Risk & Default Predictor',
    category: 'ml',
    shortDescription:
      'Financial risk assessment engine predicting default likelihood for unbanked microfinance borrowers with 0.918 ROC-AUC.',
    fullDescription:
      'Trained an XGBoost and LightGBM ensemble on imbalanced transactional records using SMOTE resampling and SHAP explainability values to give loan officers transparent reasoning for scoring.',
    tags: ['Python', 'Scikit-Learn', 'XGBoost', 'LightGBM', 'SHAP', 'Pandas'],
    githubUrl: 'https://github.com/jeevaa-coder/finguard-credit-risk-scoring',
    liveUrl: 'https://finguard-demo.streamlit.app',
    featured: true,
    mlDetails: {
      problem: 'Predicting default risk for small business borrowers lacking traditional credit histories.',
      dataset: '45,000 anonymized micro-loan transaction logs and repayment schedules.',
      model: 'Cost-sensitive XGBoost with SMOTE-NC balancing and BayOpt hyperparameter tuning.',
      metric: '0.918 ROC-AUC | 22% reduction in false default classifications compared to baseline',
    },
  },
  {
    id: 'lankasentiment-multilingual-nlp',
    title: 'LankaSentiment - Sinhala & Tamil Review Analyzer',
    category: 'ml',
    shortDescription:
      'Multilingual NLP classifier parsing mixed Sinhala, Tamil, and Singlish reviews for local e-commerce and retail brands.',
    fullDescription:
      'Engineered an NLP classification system using fine-tuned multilingual representations (XLM-RoBERTa + TF-IDF fallback) capable of handling code-mixed Romanized Singlish and Sinhala/Tamil Unicode.',
    tags: ['Python', 'NLP', 'Hugging Face', 'XLM-RoBERTa', 'Transformers', 'FastAPI'],
    githubUrl: 'https://github.com/jeevaa-coder/lankasentiment-multilingual-nlp',
    liveUrl: 'https://lankasentiment-api.fly.dev/docs',
    featured: false,
    mlDetails: {
      problem: 'Sentiment extraction on code-mixed and script-mixed customer reviews for Sri Lankan businesses.',
      dataset: '32,000 tri-lingual customer reviews from retail stores and social media pages.',
      model: 'Fine-tuned XLM-RoBERTa with language-specific tokenization and linear classification head.',
      metric: '91.2% Test Accuracy across Sinhala, Tamil, and Romanized Singlish text',
    },
  },
];
