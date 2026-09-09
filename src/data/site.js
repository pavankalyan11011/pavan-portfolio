export const profile = {
  name: 'Pavan Kalyan Valisetti',
  firstName: 'Pavan Kalyan',
  lastName: 'Valisetti',
  role: 'Software Developer · Java Full Stack & MERN',
  headline: 'Software Developer',
  location: 'Hyderabad, Telangana',
  email: 'vallishettipawan@gmail.com',
  phone: '+91 6304672477',
  phoneHref: 'tel:+916304672477',
  linkedin: 'https://linkedin.com/in/pavankalyan11011',
  github: 'https://github.com/pavankalyan11011',
  resume: '/Pavan-Kalyan-Valisetti-Resume.pdf',
  summary:
    'Software Developer building production web systems across frontend and backend. Experienced in React, Redux / Redux Toolkit, Node.js / Express / Feathers, Java / Spring Boot, REST APIs, JWT, and PostgreSQL. Designed and shipped RecoverAI — a microservices payment-recovery platform with Razorpay webhooks, Payment Links, and multi-provider LLM analysis. Currently contributing to Amealio (consumer, merchant, admin apps): translating Figma to UI, integrating API contracts, and delivering features in agile delivery with Git/Jira.',
  openTo: 'Full-time roles and freelance software development',
}

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'Redux',
      'Redux Toolkit',
      'React Router',
      'Hooks',
      'MUI',
      'Tailwind CSS',
      'Formik',
      'Yup',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Spring Boot',
      'Node.js',
      'Express.js',
      'Feathers.js',
      'REST APIs',
      'JWT',
      'Socket.io',
      'axios',
    ],
  },
  {
    title: 'Payments & AI',
    items: [
      'Razorpay (Checkout, Payment Links, Webhooks)',
      'Groq',
      'OpenAI',
      'Gemini API',
    ],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'MySQL', 'Oracle DB', 'MongoDB', 'Supabase'],
  },
  {
    title: 'Infra & Tools',
    items: [
      'Git/GitHub',
      'Maven',
      'Postman',
      'Jira',
      'Figma',
      'Cloudflare Tunnel',
      'AWS basics (EC2, S3, IAM)',
      'Cursor',
      'VS Code',
    ],
  },
]

export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Envisionard (Amealio)',
    period: 'Jan 2026 — Present',
    location: 'Hyderabad',
    tags: ['React', 'Redux', 'Node.js', 'Feathers.js', 'Socket.io'],
    points: [
      'Own feature delivery across a multi-tenant hospitality SaaS: consumer web, merchant dashboard, and super-admin — React UI, Redux state, and REST/JWT contracts.',
      'Implement design-to-code from Figma: reusable components, responsive layouts, form validation (Formik/Yup), and route-level auth guards.',
      'User app: shipping discovery, menu/ordering, seating, experiences, and profile flows with React 18, Redux Toolkit, React Router v6, MUI, and redux-persist.',
      'Merchant / Admin: built operational modules (seating, orders, experiences, settlements, wallet, onboarding, reporting) with thunks, role-based routing, and shared error/loading patterns.',
      'Integrate Node.js, Express, and Feathers.js APIs with axios; wire Socket.io for real-time updates across dev/QA/UAT.',
      'Collaborate via GitHub PRs, code review, and Jira; use Cursor for faster prototyping/refactors without sacrificing readability.',
    ],
  },
  {
    role: 'Java Full Stack Developer (Training)',
    company: 'Websoft Technologies',
    period: 'Feb 2025 — Dec 2025',
    location: 'Hyderabad',
    tags: ['Java', 'Spring Boot', 'SQL', 'Oracle DB', 'PostgreSQL'],
    points: [
      'Built full-stack foundations in Java, Spring Boot, React, JWT/RBAC, and relational DBs (Oracle, PostgreSQL, MySQL).',
      'Designed and tested REST APIs with Postman/Maven; practiced modular layering, client-server integration, and Git-based workflows.',
    ],
  },
]

export const featuredWork = [
  {
    title: 'Amealio — Consumer, Merchant & Admin Platforms',
    year: '2026',
    stack: ['React 18', 'Redux Toolkit', 'Node.js', 'Feathers.js'],
    points: [
      'Contributed to production SaaS surfaces: ordering/seating/experiences on consumer web; vendor ops and admin settlements/reporting on dashboards.',
      'Connected UI to backend with Redux slices/thunks, protected routes, axios auth, and Socket.io real-time channels.',
    ],
  },
]

export const projects = [
  {
    title: 'RecoverAI',
    year: '2026',
    stack: [
      'React',
      'Spring Boot',
      'Razorpay',
      'Groq/OpenAI/Gemini',
      'PostgreSQL',
    ],
    github: 'https://github.com/pavankalyan11011/RecovaryAI',
    description:
      'AI revenue-recovery system that turns failed Razorpay checkouts into recoverable cases via Payment Links and optional SMS/email notify.',
    points: [
      'Split architecture into customer-service and merchant-service (Java 21 / Spring Boot 3), each with its own Postgres + JWT — no shared DB; Razorpay is the integration bus.',
      'Implemented signed webhooks (payment.failed, payment.captured, order.paid, payment_link.*) with HMAC verification, event-id idempotency, and Cloudflare Tunnel for local delivery.',
      'Built recovery pipeline: eligibility guards, Analyze (Groq → OpenAI → Gemini), Auto Payment Links policy, Approve/Execute, and merchant Recovery UI (bands, mass deploy, metrics).',
    ],
  },
  {
    title: 'Amealio — Consumer, Merchant & Admin Platforms',
    year: '2026',
    stack: ['React 18', 'Redux Toolkit', 'Node.js', 'Feathers.js'],
    description:
      'Production SaaS surfaces for hospitality: ordering/seating/experiences on consumer web; vendor ops and admin settlements/reporting on dashboards.',
    points: [
      'Connected UI to backend with Redux slices/thunks, protected routes, axios auth, and Socket.io real-time channels.',
    ],
  },
  {
    title: 'Gemini Chat Application',
    year: '2025',
    stack: ['React.js', 'Spring Boot', 'Google Gemini API'],
    description:
      'Built an AI chat client/server with Gemini API, CORS-safe Spring Boot REST endpoints, and centralized error handling.',
  },
  {
    title: 'Awreate — Contact & Email Automation',
    year: '2025',
    stack: ['Spring Boot', 'JavaMailSender'],
    description:
      'Implemented contact submission APIs and automated email notification workflows with a responsive frontend.',
  },
  {
    title: 'Retro Industries Web Platform',
    year: '2025',
    stack: ['Java', 'Spring Boot', 'REST APIs'],
    description:
      'Developed modular REST backends and a responsive UI for a full-stack business web platform.',
  },
]

export const achievements = [
  'Razorpay AI Buildathon (2026) — Built and submitted RecoverAI: AI failed-payment recovery with Razorpay Checkout, Payment Links, signed webhooks, and multi-provider LLM analysis (Groq / OpenAI / Gemini).',
  'Designed webhook-driven microservices (dual Postgres, JWT) that bridge checkout failures to merchant recovery without cross-service DB coupling.',
  'Open-sourced implementation & docs: github.com/pavankalyan11011/RecovaryAI',
]

export const education = [
  {
    school: 'Avanthi Institute of Engineering',
    program: 'MCA - Master of Computer Applications',
    period: '2025 — 2027',
    place: 'Hyderabad, India',
  },
  {
    school: 'University College of Science, Saifabad, Osmania University',
    program: 'BCA - Bachelor of Computer Applications',
    period: '2022 — 2025',
    place: 'Hyderabad, India',
    meta: '85%',
  },
  {
    school: 'Narayana Junior College',
    program: 'Intermediate - MPC',
    period: '2020 — 2022',
    place: 'Hyderabad, India',
    meta: '78%',
  },
  {
    school: 'Ravindra Bharathi School',
    program: 'SSC - Secondary School Certificate',
    period: '2018 — 2020',
    place: 'Hyderabad, India',
    meta: '9.5 CGPA',
  },
]
