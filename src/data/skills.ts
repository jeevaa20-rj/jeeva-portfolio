import { SkillGroup } from '@/types';

export const skillsData: SkillGroup[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', level: 'Proficient (Swing, OOP, JDBC)' },
      { name: 'PHP', level: 'Advanced (OOP, PDO, MVC)' },
      { name: 'JavaScript', level: 'Proficient (ES6+, Async, DOM)' },
      { name: 'Python', level: 'Advanced (ML, Data Science, APIs)' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 'Hooks, Context, Component Design' },
      { name: 'Next.js', level: 'App Router, Static Export, SSR' },
      { name: 'Tailwind CSS', level: 'Responsive, Custom Themes' },
      { name: 'HTML5 & Modern CSS', level: 'Semantic, Accessible, Mobile-first' },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'PHP PDO', level: 'Prepared Statements, Secure DB Access' },
      { name: 'REST APIs', level: 'RESTful Design, CRUD, Pagination' },
      { name: 'JWT Authentication', level: 'Token Lifecycle, RBAC Security' },
      { name: 'Node.js & Express', level: 'Microservices, Webhooks' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', level: 'Schema Design, Foreign Keys, Indexing' },
      { name: 'Relational Database Design', level: 'Normalization (3NF), ER Diagrams' },
      { name: 'UML Modeling', level: 'Class, Use Case, Sequence Diagrams' },
    ],
  },
  {
    category: 'Machine Learning',
    skills: [
      { name: 'Scikit-Learn', level: 'Regression, Classification, Ensembles' },
      { name: 'PyTorch', level: 'Neural Networks, Transfer Learning' },
      { name: 'TensorFlow / Keras', level: 'CNNs, Image Classification' },
      { name: 'Data Preprocessing', level: 'Pandas, NumPy, Feature Engineering' },
    ],
  },
  {
    category: 'DevOps & Tooling',
    skills: [
      { name: 'Docker', level: 'Multi-stage Builds, Containerization' },
      { name: 'GitHub Actions', level: 'Automated CI/CD Pipelines' },
      { name: 'Git & GitHub', level: 'Branching, PRs, Semantic Versioning' },
      { name: 'Nginx & Linux', level: 'Reverse Proxy, Static Serving, Alpine' },
    ],
  },
];
