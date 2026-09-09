import {
  achievements,
  education,
  experience,
  featuredWork,
  profile,
  projects,
  skillGroups,
} from '../data/site'

/** Resume-shaped files — mirrors a software developer CV */
export const FILES = [
  'about.txt',
  'experience.txt',
  'skills.txt',
  'key-work.txt',
  'projects.txt',
  'achievements.txt',
  'education.txt',
  'contact.txt',
  'resume.pdf',
]

const wrap = (text, width = 72) => {
  const words = text.split(/\s+/)
  const lines = []
  let line = ''
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (next.length > width) {
      if (line) lines.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines.join('\n')
}

function formatAbout() {
  return [
    '════════════════════════════════════════',
    '  ABOUT  ·  Software Developer',
    '════════════════════════════════════════',
    '',
    profile.name.toUpperCase(),
    profile.role,
    profile.location,
    '',
    wrap(profile.summary),
    '',
    `Open to: ${profile.openTo}`,
    '',
    'Links:',
    `  GitHub    ${profile.github}`,
    `  LinkedIn  ${profile.linkedin}`,
    '',
    'Next:  cat experience.txt   or   cat skills.txt',
  ].join('\n')
}

function formatExperience() {
  const blocks = experience.map((job, i) => {
    const points = job.points
      .map((p) => `  • ${wrap(p, 68).replace(/\n/g, '\n    ')}`)
      .join('\n')
    return [
      `────────────────────────────────────────`,
      `[${i + 1}] ${job.role}`,
      `    ${job.company}`,
      `    ${job.period}  |  ${job.location}`,
      `    Tech: ${job.tags.join(', ')}`,
      '',
      points,
    ].join('\n')
  })
  return [
    '════════════════════════════════════════',
    '  EXPERIENCE  ·  Software Development',
    '════════════════════════════════════════',
    '',
    ...blocks,
    '',
    'Next:  cat key-work.txt',
  ].join('\n')
}

function formatSkills() {
  const groups = skillGroups
    .map((g) => `${(g.title + ':').padEnd(18)}${g.items.join(', ')}`)
    .join('\n\n')
  return [
    '════════════════════════════════════════',
    '  SKILLS  ·  Software Engineering Stack',
    '════════════════════════════════════════',
    '',
    groups,
    '',
    'Next:  cat projects.txt   or   github',
  ].join('\n')
}

function formatKeyWork() {
  const rows = featuredWork.map((item, i) => {
    const points = item.points.map((p) => `  • ${wrap(p, 68).replace(/\n/g, '\n    ')}`).join('\n')
    return [
      `────────────────────────────────────────`,
      `[${i + 1}] ${item.title}`,
      `    ${item.year}  |  ${item.stack.join(', ')}`,
      '',
      points,
    ].join('\n')
  })
  return [
    '════════════════════════════════════════',
    '  KEY WORK  ·  Amealio Platform',
    '════════════════════════════════════════',
    '',
    ...rows,
    '',
    'Next:  cat projects.txt',
  ].join('\n')
}

function formatProjects() {
  const rows = projects.map((p, i) => {
    const points = (p.points || [])
      .map((pt) => `  • ${wrap(pt, 68).replace(/\n/g, '\n    ')}`)
      .join('\n')
    return [
      `────────────────────────────────────────`,
      `[${i + 1}] ${p.title} (${p.year})`,
      `    Stack: ${p.stack.join(', ')}`,
      p.github ? `    GitHub: ${p.github}` : null,
      `    ${wrap(p.description, 68)}`,
      points || null,
    ]
      .filter(Boolean)
      .join('\n')
  })
  return [
    '════════════════════════════════════════',
    '  PROJECTS  ·  Software Builds',
    '════════════════════════════════════════',
    '',
    ...rows,
    '',
    'Tip: open RecoverAI repo with  recoverai',
    'Next:  cat achievements.txt   or   cat contact.txt',
  ].join('\n')
}

function formatAchievements() {
  const rows = achievements.map((a, i) => `[${i + 1}] ${wrap(a, 70)}`)
  return [
    '════════════════════════════════════════',
    '  ACHIEVEMENTS',
    '════════════════════════════════════════',
    '',
    ...rows,
    '',
    'Repo: https://github.com/pavankalyan11011/RecovaryAI',
  ].join('\n\n')
}

function formatEducation() {
  const rows = education.map(
    (e) =>
      `• ${e.program}${e.meta ? ` — ${e.meta}` : ''}\n  ${e.school}\n  ${e.period}  |  ${e.place}`,
  )
  return [
    '════════════════════════════════════════',
    '  EDUCATION',
    '════════════════════════════════════════',
    '',
    ...rows,
  ].join('\n\n')
}

function formatContact() {
  return [
    '════════════════════════════════════════',
    '  CONTACT  ·  Hire / Collaborate',
    '════════════════════════════════════════',
    '',
    `Name       ${profile.name}`,
    `Title      ${profile.headline}`,
    `Email      ${profile.email}`,
    `Phone      ${profile.phone}`,
    `LinkedIn   ${profile.linkedin}`,
    `GitHub     ${profile.github}`,
    `Resume     resume.pdf (type: resume)`,
    '',
    'Quick actions:',
    '  mail       open email',
    '  linkedin   open LinkedIn profile',
    '  github     open GitHub profile',
    '  resume     download PDF resume',
  ].join('\n')
}

const FILE_CONTENT = {
  'about.txt': formatAbout,
  about: formatAbout,
  'summary.txt': formatAbout,
  summary: formatAbout,
  'experience.txt': formatExperience,
  experience: formatExperience,
  'skills.txt': formatSkills,
  skills: formatSkills,
  'key-work.txt': formatKeyWork,
  'keywork.txt': formatKeyWork,
  'work.txt': formatKeyWork,
  work: formatKeyWork,
  'projects.txt': formatProjects,
  projects: formatProjects,
  'achievements.txt': formatAchievements,
  achievements: formatAchievements,
  'education.txt': formatEducation,
  education: formatEducation,
  'contact.txt': formatContact,
  contact: formatContact,
}

function helpText() {
  return [
    'pavan.dev — software developer resume (interactive terminal)',
    '',
    'This is a fun way to read my CV. Same sections as a normal resume.',
    '',
    '── Start here ──────────────────────────',
    '  help                 this guide',
    '  ls                   list resume sections',
    '  cat about.txt        about me (start here)',
    '  cat experience.txt   work experience',
    '  cat skills.txt       technical skills',
    '  cat key-work.txt     Amealio product work',
    '  cat projects.txt     personal / side projects',
    '  cat achievements.txt Razorpay Buildathon & RecoverAI',
    '  cat education.txt    education',
    '  cat contact.txt      email, LinkedIn, GitHub',
    '',
    '── Developer shortcuts ─────────────────',
    '  whoami               name + title',
    '  stack                same as skills.txt',
    '  recoverai            open RecoverAI GitHub',
    '  neofetch             developer profile card',
    '  resume               download PDF resume',
    '  github / linkedin    open profiles',
    '  mail                 email me',
    '  clear                clear terminal',
    '',
    '── Linux basics (for beginners) ────────',
    '  ls   = list files (resume sections)',
    '  cat  = open / print a file',
    '  pwd  = show current folder',
    '',
    'Tip: click the chips below, or use ↑ ↓ history + Tab autocomplete.',
  ].join('\n')
}

function neofetch() {
  const art = [
    '   __________',
    '  |  ______  |',
    '  | | Soft | |',
    '  | | ware| |',
    '  | |______| |',
    '  |__________|',
    '   |_______|',
  ]
  const info = [
    `${profile.firstName.split(' ')[0].toLowerCase()}@ubuntu`,
    '---------------------------',
    `OS:       Ubuntu 24.04 LTS (resume shell)`,
    `Title:    ${profile.headline}`,
    `Focus:    Java Full Stack + MERN`,
    `Company:  Amealio (Intern Developer)`,
    `Location: ${profile.location}`,
    `Stack:    React, Spring Boot, Razorpay, LLMs`,
    `Data:     PostgreSQL, MySQL, Oracle, MongoDB`,
    `Tools:    Git, Jira, Figma, Cursor, Postman`,
    `Highlight:RecoverAI · Razorpay AI Buildathon`,
    `Shell:    bash`,
    `Status:   ${profile.openTo}`,
    `Resume:   type  resume  to download`,
  ]
  const rows = Math.max(art.length, info.length)
  const out = []
  for (let i = 0; i < rows; i++) {
    out.push(`${(art[i] || '').padEnd(18)}${info[i] || ''}`)
  }
  return out.join('\n')
}

function tree() {
  return [
    '~/resume',
    '├── about.txt          ← start here',
    '├── experience.txt     ← jobs',
    '├── skills.txt         ← tech stack',
    '├── key-work.txt       ← Amealio work',
    '├── projects.txt       ← side projects (RecoverAI…)',
    '├── achievements.txt',
    '├── education.txt',
    '├── contact.txt',
    '└── resume.pdf',
    '',
    'Try: cat projects.txt',
  ].join('\n')
}

/**
 * @returns {{ lines: string[], action?: 'clear' | 'open', url?: string }}
 */
export function runCommand(rawInput) {
  const input = rawInput.trim()
  if (!input) return { lines: [] }

  const parts = input.split(/\s+/)
  const cmd = parts[0].toLowerCase()
  const args = parts.slice(1)
  const arg0 = (args[0] || '').toLowerCase()

  switch (cmd) {
    case 'help':
    case 'man':
    case 'guide':
    case 'start':
      return { lines: [helpText()] }

    case 'ls':
    case 'dir': {
      if (arg0 === '-la' || arg0 === '-al' || arg0 === '-l') {
        return {
          lines: [
            'total 8  (software developer resume sections)',
            ...FILES.map(
              (f) =>
                `-rw-r--r--  1 pavan  resume  ${String(f.length * 41).padStart(4)}  Mar 10  ${f}`,
            ),
            '',
            'Tip: cat about.txt',
          ],
        }
      }
      return {
        lines: [
          'Resume sections:',
          FILES.join('    '),
          '',
          'Tip: cat about.txt',
        ],
      }
    }

    case 'tree':
      return { lines: [tree()] }

    case 'pwd':
      return { lines: ['/home/pavan/resume'] }

    case 'whoami':
      return {
        lines: [
          profile.name,
          profile.role,
          profile.location,
          '',
          `Open to: ${profile.openTo}`,
          '',
          'Next: cat about.txt',
        ],
      }

    case 'about':
      return { lines: [formatAbout()] }

    case 'stack':
      return { lines: [formatSkills()] }

    case 'date':
      return { lines: [new Date().toString()] }

    case 'echo':
      return { lines: [args.join(' ') || ''] }

    case 'clear':
    case 'cls':
      return { lines: [], action: 'clear' }

    case 'history':
      return { lines: ['Use ↑ / ↓ keys to replay previous commands.'] }

    case 'neofetch':
    case 'fetch':
    case 'sysinfo':
    case 'profile':
      return { lines: [neofetch()] }

    case 'cat':
    case 'type':
    case 'open':
    case 'read': {
      if (!arg0) {
        return {
          lines: [
            `${cmd}: missing file name`,
            'Try: cat about.txt',
            `Sections: ${FILES.join(', ')}`,
          ],
        }
      }
      if (arg0 === 'resume.pdf' || arg0 === 'resume') {
        return {
          lines: ['Opening software developer resume (PDF)…'],
          action: 'open',
          url: profile.resume,
        }
      }
      const reader = FILE_CONTENT[arg0]
      if (!reader) {
        return {
          lines: [
            `cat: ${args[0]}: No such file`,
            `Available resume sections: ${FILES.join(', ')}`,
            'Or run: ls',
          ],
        }
      }
      return { lines: [reader()] }
    }

    case 'resume':
    case 'cv':
      return {
        lines: ['Downloading software developer resume (PDF)…'],
        action: 'open',
        url: profile.resume,
      }

    case 'github':
    case 'gh':
      return {
        lines: [`Opening developer GitHub: ${profile.github}`],
        action: 'open',
        url: profile.github,
      }

    case 'recoverai':
    case 'recoveryai':
    case 'recovaryai':
      return {
        lines: [
          'Opening RecoverAI — AI payment recovery (Razorpay AI Buildathon)',
          'https://github.com/pavankalyan11011/RecovaryAI',
        ],
        action: 'open',
        url: 'https://github.com/pavankalyan11011/RecovaryAI',
      }

    case 'linkedin':
    case 'in':
      return {
        lines: [`Opening LinkedIn: ${profile.linkedin}`],
        action: 'open',
        url: profile.linkedin,
      }

    case 'mail':
    case 'email':
      return {
        lines: [`Opening mailto:${profile.email}`],
        action: 'open',
        url: `mailto:${profile.email}`,
      }

    case 'cd':
      return {
        lines: [
          'You are already in ~/resume (software developer CV).',
          'Use cat <section> to open resume files — e.g. cat about.txt',
        ],
      }

    case 'sudo':
      return {
        lines: [
          'Permission denied. Recruiters get read access only 🙂',
          'Try: cat about.txt',
        ],
      }

    case 'rm':
    case 'rmdir':
      return { lines: ['Resume files are read-only. (Good catch though.)'] }

    default:
      return {
        lines: [
          `command not found: ${cmd}`,
          'Type help — or try: cat about.txt',
          'Popular: ls · cat experience.txt · cat skills.txt · resume',
        ],
      }
  }
}

export function getCompletions(partial) {
  const base = [
    'help',
    'ls',
    'cat',
    'whoami',
    'pwd',
    'clear',
    'neofetch',
    'stack',
    'tree',
    'resume',
    'recoverai',
    'github',
    'linkedin',
    'mail',
    'date',
    'echo',
    ...FILES.map((f) => `cat ${f}`),
  ]
  const p = partial.trim().toLowerCase()
  if (!p) return base.slice(0, 8)
  return base.filter((c) => c.startsWith(p)).slice(0, 8)
}

export const SUGGESTIONS = [
  'help',
  'ls',
  'cat about.txt',
  'cat projects.txt',
  'cat achievements.txt',
  'recoverai',
  'resume',
  'github',
]
