export const skillTree = {
  id: 'full-stack',
  label: 'FULL STACK',
  children: [
    {
      id: 'backend',
      label: 'BACKEND',
      children: [
        {
          id: 'java',
          label: 'JAVA',
          description: 'Core backend language for enterprise applications, OOP, and Spring ecosystem development.',
          category: 'Backend',
          relatedProjects: ['mission-003', 'mission-004', 'mission-005'],
          relatedSkills: ['spring-boot', 'jpa', 'rest-api'],
          children: [
            { id: 'spring-boot', label: 'Spring Boot', description: 'REST APIs, dependency injection, JWT auth, and modular service architecture.', category: 'Backend', relatedProjects: ['mission-003', 'mission-004', 'mission-005'], relatedSkills: ['java', 'jpa', 'rest-api'] },
            { id: 'jpa', label: 'JPA', description: 'Object-relational mapping and entity management with Spring Data.', category: 'Backend', relatedProjects: ['mission-005'], relatedSkills: ['java', 'spring-boot', 'sql'] },
            { id: 'rest-api', label: 'REST API', description: 'Designing and consuming RESTful endpoints with clean contracts.', category: 'Backend', relatedProjects: ['mission-003', 'mission-004', 'mission-005'], relatedSkills: ['spring-boot', 'java'] },
            { id: 'websocket', label: 'WebSocket / Socket.io', description: 'Real-time bidirectional communication for live dashboards and updates.', category: 'Backend', relatedProjects: ['mission-002'], relatedSkills: ['nodejs', 'feathers'] },
          ],
        },
        {
          id: 'nodejs',
          label: 'NODE.JS',
          description: 'JavaScript runtime for APIs, real-time services, and MERN stack development.',
          category: 'Backend',
          relatedProjects: ['mission-001', 'mission-002'],
          relatedSkills: ['express', 'feathers', 'socketio'],
          children: [
            { id: 'express', label: 'Express.js', description: 'Lightweight HTTP server framework for REST APIs.', category: 'Backend', relatedProjects: ['mission-002'], relatedSkills: ['nodejs'] },
            { id: 'feathers', label: 'Feathers.js', description: 'Real-time API framework with service-oriented architecture.', category: 'Backend', relatedProjects: ['mission-001', 'mission-002'], relatedSkills: ['nodejs', 'socketio'] },
            { id: 'socketio', label: 'Socket.io', description: 'Real-time event-based communication for live UI updates.', category: 'Backend', relatedProjects: ['mission-002'], relatedSkills: ['feathers', 'nodejs'] },
          ],
        },
        {
          id: 'database',
          label: 'DATABASE',
          children: [
            { id: 'sql', label: 'SQL', description: 'Relational queries, schemas, joins, and data modeling.', category: 'Database', relatedProjects: ['mission-005'], relatedSkills: ['oracle', 'postgresql', 'mysql'] },
            { id: 'oracle', label: 'Oracle DB', description: 'Enterprise relational database experience from full-stack training.', category: 'Database', relatedProjects: [], relatedSkills: ['sql'] },
            { id: 'postgresql', label: 'PostgreSQL', description: 'Open-source relational database for production applications.', category: 'Database', relatedProjects: [], relatedSkills: ['sql'] },
            { id: 'mongodb', label: 'MongoDB', description: 'NoSQL document storage for MERN stack applications.', category: 'Database', relatedProjects: [], relatedSkills: [] },
          ],
        },
      ],
    },
    {
      id: 'frontend',
      label: 'FRONTEND',
      children: [
        { id: 'javascript', label: 'JavaScript', description: 'Core language for modern web development.', category: 'Frontend', relatedProjects: ['mission-001'], relatedSkills: ['react'] },
        {
          id: 'react',
          label: 'React',
          description: 'Component-based UI development with hooks, routing, and state management.',
          category: 'Frontend',
          relatedProjects: ['mission-001', 'mission-002', 'mission-003', 'mission-005'],
          relatedSkills: ['redux', 'nextjs', 'mui'],
          children: [
            { id: 'redux', label: 'Redux / Toolkit', description: 'Predictable state management for complex application flows.', category: 'Frontend', relatedProjects: ['mission-001', 'mission-002'], relatedSkills: ['react'] },
            { id: 'nextjs', label: 'Next.js', description: 'React framework for production-grade web applications.', category: 'Frontend', relatedProjects: [], relatedSkills: ['react'] },
            { id: 'mui', label: 'Material-UI', description: 'Component library for rapid, consistent UI development.', category: 'Frontend', relatedProjects: ['mission-001'], relatedSkills: ['react'] },
            { id: 'tailwind', label: 'Tailwind CSS', description: 'Utility-first CSS for responsive, maintainable interfaces.', category: 'Frontend', relatedProjects: [], relatedSkills: ['react'] },
          ],
        },
      ],
    },
    {
      id: 'cloud',
      label: 'CLOUD',
      children: [
        { id: 'aws', label: 'AWS', description: 'EC2, S3, and IAM fundamentals for cloud deployment.', category: 'Cloud', relatedProjects: [], relatedSkills: ['hostinger'] },
        { id: 'hostinger', label: 'Hostinger', description: 'Web hosting and deployment for full-stack projects.', category: 'Cloud', relatedProjects: [], relatedSkills: ['aws'] },
        { id: 'docker', label: 'Docker', description: 'Containerization fundamentals for portable deployments.', category: 'Cloud', relatedProjects: [], relatedSkills: [] },
      ],
    },
    {
      id: 'tools',
      label: 'TOOLS',
      children: [
        { id: 'git', label: 'Git / GitHub', description: 'Version control, PRs, and collaborative development workflows.', category: 'Tools', relatedProjects: ['mission-001', 'mission-002'], relatedSkills: [] },
        { id: 'figma', label: 'Figma', description: 'Design-to-code translation for production UI.', category: 'Tools', relatedProjects: ['mission-001'], relatedSkills: [] },
        { id: 'postman', label: 'Postman', description: 'API testing and debugging.', category: 'Tools', relatedProjects: ['mission-005'], relatedSkills: [] },
      ],
    },
  ],
}

/** Flatten tree for lookup */
export function flattenSkills(node, map = {}) {
  if (node.id) {
    map[node.id] = {
      id: node.id,
      label: node.label,
      description: node.description || `${node.label} skill node`,
      category: node.category || 'General',
      relatedProjects: node.relatedProjects || [],
      relatedSkills: node.relatedSkills || [],
    }
  }
  if (node.children) {
    for (const child of node.children) flattenSkills(child, map)
  }
  return map
}

export const skillMap = flattenSkills(skillTree)
