export const projects = [
  {
    id: 'mission-001',
    number: '001',
    title: 'Amealio Web App — User Application',
    status: 'active',
    description:
      'Consumer-facing hospitality web application covering restaurant discovery, ordering, seating, experiences, and profile management.',
    objective:
      'Deliver a responsive consumer web experience integrated with REST APIs and real-time updates for a multi-role SaaS platform.',
    technologies: ['React 18', 'Redux Toolkit', 'React Router v6', 'Material-UI', 'Node.js', 'Feathers.js'],
    features: [
      'Restaurant discovery and menu browsing',
      'Food ordering and seating flows',
      'Experience booking and profile management',
      'Protected routes with Redux Toolkit slices',
      'API integration with redux-persist state',
    ],
    architecture:
      'React SPA with Redux Toolkit state management, route-based screens, reusable MUI components, and REST/Feathers API hooks.',
    challenges: [
      'Translating complex Figma designs into responsive production UI',
      'Managing multi-flow consumer state across ordering and seating',
      'Integrating backend contracts across dev, QA, and UAT environments',
    ],
    solutions: [
      'Modular component architecture with Redux Toolkit slices',
      'Protected routing and redux-persist for session continuity',
      'Structured API hooks and shared loader/error handling',
    ],
    result:
      'Shipped consumer-facing flows used in Amealio\'s live hospitality SaaS product with ongoing UI enhancements and API integration.',
    github: '', // TODO: add repository URL
    liveDemo: '', // TODO: add live demo URL
    image: '', // TODO: add screenshot path
    relatedSkills: ['react', 'redux', 'nodejs', 'feathers', 'mui'],
  },
  {
    id: 'mission-002',
    number: '002',
    title: 'Amealio Dashboard — Merchant & Admin',
    status: 'active',
    description:
      'Large-scale operations dashboard for restaurant vendors and super admins managing seating, orders, settlements, and onboarding.',
    objective:
      'Build role-based dashboard experiences for merchants and administrators with real-time operational data.',
    technologies: ['React', 'Redux', 'Redux Thunk', 'Node.js', 'Express', 'Feathers.js', 'Socket.io'],
    features: [
      'Merchant seating, orders, and experience management',
      'Vendor onboarding with Formik/Yup validation',
      'Admin settlements, wallet transactions, and reports',
      'Real-time Socket.io updates',
      'Role-based routing and access control',
    ],
    architecture:
      'Multi-role React dashboard with classic Redux/connect patterns, thunk-based async flows, and Feathers REST + Socket.io services.',
    challenges: [
      'Supporting two distinct user roles in one codebase',
      'Real-time updates across operational dashboards',
      'Complex form validation for vendor onboarding',
    ],
    solutions: [
      'Role-based routing with reusable dashboard components',
      'Socket.io integration for live data refresh',
      'Formik/Yup schemas for onboarding workflows',
    ],
    result:
      'Production dashboard used by restaurant vendors and super admins for day-to-day hospitality operations.',
    github: '',
    liveDemo: '',
    image: '',
    relatedSkills: ['react', 'redux', 'nodejs', 'socketio', 'express'],
  },
  {
    id: 'mission-003',
    number: '003',
    title: 'Gemini AI Chat Application',
    status: 'completed',
    description:
      'Full-stack AI chat application with real-time Gemini API responses, Spring Boot backend, and React frontend.',
    objective: 'Integrate Google Gemini API into a full-stack chat experience with robust error handling.',
    technologies: ['React.js', 'Spring Boot', 'Google Gemini API', 'REST APIs'],
    features: [
      'Real-time AI chat interface',
      'Spring Boot REST backend',
      'CORS configuration',
      'Centralized error handling',
    ],
    architecture: 'React frontend communicating with Spring Boot REST API that proxies Gemini API requests.',
    challenges: ['Handling async AI response latency', 'Structured error handling across the stack'],
    solutions: ['Centralized API error layer', 'Clean separation between UI and AI service calls'],
    result: 'Functional AI chat application demonstrating full-stack integration with a modern AI API.',
    github: '', // TODO
    liveDemo: '',
    image: '',
    relatedSkills: ['java', 'spring-boot', 'react'],
  },
  {
    id: 'mission-004',
    number: '004',
    title: 'Awreate — Contact & Email Automation',
    status: 'completed',
    description:
      'Contact submission workflow with automated email notifications powered by Spring Boot and JavaMailSender.',
    objective: 'Automate contact form submissions with reliable backend email delivery.',
    technologies: ['Spring Boot', 'JavaMailSender', 'REST APIs'],
    features: ['Contact form submission', 'Automated email notifications', 'Responsive frontend integration'],
    architecture: 'Spring Boot service receiving form payloads and triggering JavaMailSender workflows.',
    challenges: ['Reliable email delivery configuration', 'Form-to-backend validation'],
    solutions: ['Structured DTO validation', 'JavaMailSender templated notifications'],
    result: 'Working contact automation pipeline for form submissions.',
    github: '',
    liveDemo: '',
    image: '',
    relatedSkills: ['java', 'spring-boot'],
  },
  {
    id: 'mission-005',
    number: '005',
    title: 'Retro Industries Web Platform',
    status: 'completed',
    description: 'Full-stack web platform with modular REST APIs and responsive UI built on Java and Spring Boot.',
    objective: 'Deliver a modular full-stack platform with clean REST API architecture.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'React.js'],
    features: ['Modular REST endpoints', 'Responsive UI', 'Client-server integration'],
    architecture: 'Spring Boot backend with layered REST services and React frontend.',
    challenges: ['Maintaining modular API design', 'Clean client-server contracts'],
    solutions: ['Layered Spring Boot architecture', 'Postman-tested API integration'],
    result: 'Complete full-stack platform demonstrating Java backend and React frontend skills.',
    github: '',
    liveDemo: '',
    image: '',
    relatedSkills: ['java', 'spring-boot', 'react', 'sql'],
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
