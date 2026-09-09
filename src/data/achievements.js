export const achievements = [
  {
    id: 'real-time-builder',
    title: 'REAL-TIME BUILDER',
    description: 'Built and integrated real-time Socket.io features across Amealio merchant and admin dashboards.',
    evidence: 'Socket.io integration for live operational updates in production SaaS dashboards.',
    relatedProject: 'mission-002',
    relatedExperience: 'cloud-district',
    icon: '⚡',
  },
  {
    id: 'ai-integrator',
    title: 'AI INTEGRATOR',
    description: 'Integrated Google Gemini API into a full-stack chat application with Spring Boot and React.',
    evidence: 'Gemini Chat Application with REST backend and real-time AI responses.',
    relatedProject: 'mission-003',
    relatedExperience: 'backend-city',
    icon: '🤖',
  },
  {
    id: 'saas-shipper',
    title: 'SAAS SHIPPER',
    description: 'Contributing to a multi-role hospitality SaaS platform spanning consumer, merchant, and admin applications.',
    evidence: 'Active development on Amealio user app and operations dashboards.',
    relatedProject: 'mission-001',
    relatedExperience: 'frontend-district',
    icon: '🚀',
  },
  {
    id: 'full-stack-graduate',
    title: 'FULL STACK GRADUATE',
    description: 'Completed intensive Java Full Stack training with Spring Boot, React, SQL, and JWT.',
    evidence: 'Websoft Technologies training program — Feb to Dec 2025.',
    relatedProject: 'mission-005',
    relatedExperience: 'backend-city',
    icon: '🎓',
  },
  {
    id: 'cloud-explorer',
    title: 'CLOUD EXPLORER',
    description: 'Hands-on experience with AWS fundamentals (EC2, S3, IAM) and Hostinger deployment.',
    evidence: 'Cloud and hosting work across personal and professional projects.',
    relatedProject: null,
    relatedExperience: 'cloud-district',
    icon: '☁️',
  },
  {
    id: 'design-to-code',
    title: 'DESIGN-TO-CODE',
    description: 'Translating Figma designs into responsive, production-ready React interfaces.',
    evidence: 'Amealio consumer and dashboard UI development from design specs.',
    relatedProject: 'mission-001',
    relatedExperience: 'frontend-district',
    icon: '🎨',
  },
]

export function getAchievementById(id) {
  return achievements.find((a) => a.id === id)
}
