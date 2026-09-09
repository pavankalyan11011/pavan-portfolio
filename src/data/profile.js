export const profile = {
  id: 'PKV-001',
  name: 'Pavan Kalyan Valisetti',
  shortName: 'Pavan Kalyan',
  nickname: 'Pavan',
  systemName: 'pavan.sys',
  title: 'Java Full Stack Developer',
  location: 'Hyderabad',
  locationFull: 'Hyderabad, Telangana, India',
  timezone: 'IST · UTC+5:30',
  photo: '/profile.png',
  email: 'vallishettipawan@gmail.com',
  phone: '+91 6304672477',
  phoneHref: 'tel:+916304672477',
  linkedin: 'https://linkedin.com/in/pavankalyan11011',
  github: 'https://github.com/pavankalyan11011',
  resume: '/Pavan-Kalyan-Valisetti-Resume.pdf',
  version: '26.8.1-hyd',

  // First-person — sounds like you, not a LinkedIn bot
  intro:
    'I build full-stack products — multi-role SaaS and real-time experiences. I take Figma screens, ship them in React, and wire the Feathers/Node APIs behind them. In production at Amealio, I worked across user, merchant, and admin flows; Java & Spring Boot come in when the backend needs to be serious.',

  oneLiner: 'Figma → React by day. Spring Boot when it counts.',

  highlightTech: ['Java', 'Spring Boot', 'React', 'Node.js', 'SQL', 'Socket.io'],

  // Human-readable status (not RPG filler)
  stats: [
    { label: 'What I do', value: 'Full Stack Dev — Java + MERN' },
    { label: 'Day job', value: 'Intern @ Amealio (hospitality SaaS)' },
    { label: 'Frontend lane', value: 'React, Redux, MUI, Next.js' },
    { label: 'Backend lane', value: 'Spring Boot · Node · Feathers.js' },
    { label: 'Right now', value: 'MCA + shipping production features' },
    { label: 'Open to', value: 'Full-time · freelance · collabs', accent: true },
  ],

  nowBuilding: {
    title: 'This week',
    items: [
      'Merchant dashboard flows — seating & settlements',
      'Redux Toolkit slices for Amealio user app',
      'Portfolio v26 (you\'re looking at it)',
    ],
  },

  stickyNotes: [
    {
      id: 'note-1',
      rotate: '-2deg',
      color: 'warm',
      text: 'Yes I use both Java AND MERN. No I won\'t pick a side.',
    },
    {
      id: 'note-2',
      rotate: '1.5deg',
      color: 'cyan',
      text: 'Resume is always available in the top bar. No hunting required.',
    },
    {
      id: 'note-3',
      rotate: '-1deg',
      color: 'violet',
      text: 'Built this UI because normal portfolios put me to sleep too.',
    },
  ],

  terminal: {
    cwd: '~/amealio/user-app',
    lines: [
      { type: 'prompt', text: 'whoami' },
      { type: 'out', text: 'pavan-kalyan · full-stack · hyd' },
      { type: 'prompt', text: 'git branch --show-current' },
      { type: 'out', text: 'feat/seating-flow-ui' },
      { type: 'prompt', text: 'stack --today' },
      { type: 'out', text: 'react · redux-toolkit · feathers · socket.io' },
      { type: 'prompt', text: 'cursor --status' },
      { type: 'out', text: 'assisting (don\'t tell anyone i still write CSS by hand)' },
    ],
  },

  footerQuips: [
    'last deploy: probably yesterday',
    'coffee: required',
    'hyderabad node: stable',
    'figma tabs open: 4',
  ],
}
