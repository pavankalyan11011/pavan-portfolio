import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import PDFDocument from 'pdfkit'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outPath = path.join(__dirname, '..', 'public', 'Pavan-Kalyan-Valisetti-Resume.pdf')

const doc = new PDFDocument({
  size: 'LETTER',
  margins: { top: 36, bottom: 36, left: 42, right: 42 },
  info: {
    Title: 'Pavan Kalyan Valisetti — Software Developer Resume',
    Author: 'Pavan Kalyan Valisetti',
  },
})

const stream = fs.createWriteStream(outPath)
doc.pipe(stream)

const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right
const left = doc.page.margins.left

function ensureSpace(needed = 60) {
  if (doc.y + needed > doc.page.height - doc.page.margins.bottom) {
    doc.addPage()
  }
}

function section(title) {
  ensureSpace(40)
  doc.moveDown(0.45)
  doc
    .font('Helvetica-Bold')
    .fontSize(11)
    .fillColor('#130810')
    .text(title.toUpperCase(), left, doc.y, { width: pageWidth })
  const y = doc.y + 2
  doc
    .moveTo(left, y)
    .lineTo(left + pageWidth, y)
    .strokeColor('#130810')
    .lineWidth(1)
    .stroke()
  doc.moveDown(0.45)
}

function bullet(text) {
  ensureSpace(36)
  const bulletX = left
  const textX = left + 12
  const width = pageWidth - 12
  doc.font('Helvetica').fontSize(9.5).fillColor('#222')
  const height = doc.heightOfString(text, { width })
  doc.circle(bulletX + 2.5, doc.y + 5, 1.4).fill('#130810')
  doc.fillColor('#222').text(text, textX, doc.y, { width, align: 'left' })
  doc.moveDown(0.15)
  return height
}

function roleHeader(role, dates) {
  ensureSpace(48)
  const y = doc.y
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor('#130810')
  doc.text(role, left, y, { width: pageWidth * 0.68, continued: false })
  const afterRole = doc.y
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#130810')
  doc.text(dates, left, y, { width: pageWidth, align: 'right' })
  doc.y = Math.max(afterRole, doc.y)
  doc.moveDown(0.15)
}

// Header
doc
  .font('Helvetica-Bold')
  .fontSize(20)
  .fillColor('#130810')
  .text('PAVAN KALYAN VALISETTI', { align: 'center' })
doc
  .font('Helvetica')
  .fontSize(11)
  .text('Software Developer', { align: 'center' })
doc
  .fontSize(9.5)
  .fillColor('#333')
  .text('Hyderabad, Telangana', { align: 'center' })
doc.moveDown(0.25)
doc
  .fontSize(8.5)
  .fillColor('#222')
  .text(
    '+91 6304672477  ·  vallishettipawan@gmail.com  ·  linkedin.com/in/pavankalyan11011  ·  github.com/pavankalyan11011',
    { align: 'center', link: undefined },
  )

section('Summary')
bullet(
  'Software Developer building production web systems across frontend and backend. Experienced in React, Redux / Redux Toolkit, Node.js / Express / Feathers, Java / Spring Boot, REST APIs, JWT, and PostgreSQL. Designed and shipped RecoverAI — a microservices payment-recovery platform with Razorpay webhooks, Payment Links, and multi-provider LLM analysis. Currently contributing to Amealio (consumer, merchant, admin apps): translating Figma to UI, integrating API contracts, and delivering features in agile delivery with Git/Jira.',
)

section('Experience')
roleHeader('Software Developer Intern — Envisionard (Amealio)', 'Jan 2026 — Present')
;[
  'Own feature delivery across a multi-tenant hospitality SaaS: consumer web, merchant dashboard, and super-admin — React UI, Redux state, and REST/JWT contracts.',
  'Implement design-to-code from Figma: reusable components, responsive layouts, form validation (Formik/Yup), and route-level auth guards.',
  'User app: Shipping discovery, menu/ordering, seating, experiences, and profile flows with React 18, Redux Toolkit, React Router v6, MUI, and redux-persist.',
  'Merchant / Admin: Built operational modules (seating, orders, experiences, settlements, wallet, onboarding, reporting) with thunks, role-based routing, and shared error/loading patterns.',
  'Integrate Node.js, Express, and Feathers.js APIs with axios; wire Socket.io for real-time updates across Dev/QA/UAT.',
  'Collaborate via GitHub PRs, code review, and Jira; use Cursor for faster prototyping/refactors without sacrificing readability.',
].forEach(bullet)

roleHeader('Java Full Stack Developer (Training) — Websoft Technologies', 'Feb 2025 — Dec 2025')
;[
  'Built full-stack foundations in Java, Spring Boot, React, JWT/RBAC, and relational DBs (Oracle, PostgreSQL, MySQL).',
  'Designed and tested REST APIs with Postman/Maven; practiced modular layering, client-server integration, and Git-based workflows.',
].forEach(bullet)

section('Projects')
roleHeader('RecoverAI | React, Spring Boot, Razorpay, Groq/OpenAI/Gemini, PostgreSQL', '2026')
doc
  .font('Helvetica')
  .fontSize(8.5)
  .fillColor('#0E5484')
  .text('github.com/pavankalyan11011/RecovaryAI', left, doc.y, {
    link: 'https://github.com/pavankalyan11011/RecovaryAI',
    underline: true,
  })
doc.moveDown(0.25)
doc.fillColor('#222')
;[
  'Engineered an AI revenue-recovery system that turns failed Razorpay checkouts into recoverable cases via Payment Links and optional SMS/email notify.',
  'Split architecture into customer-service and merchant-service (Java 21 / Spring Boot 3), each with its own Postgres + JWT — no shared DB; Razorpay is the integration bus.',
  'Implemented signed webhooks (payment.failed, payment.captured, order.paid, payment_link.*) with HMAC verification, event-id idempotency, and Cloudflare Tunnel for local delivery.',
  'Built recovery pipeline: eligibility guards, Analyze (Groq → OpenAI → Gemini), Auto Payment Links policy, Approve/Execute, and merchant Recovery UI (bands, mass deploy, metrics).',
].forEach(bullet)

roleHeader('Gemini Chat Application | React.js, Spring Boot, Google Gemini API', '2025')
bullet(
  'Built an AI chat client/server with Gemini API, CORS-safe Spring Boot REST endpoints, and centralized error handling.',
)

roleHeader('Awreate — Contact & Email Automation | Spring Boot, JavaMailSender', '2025')
bullet(
  'Implemented contact submission APIs and automated email notification workflows with a responsive frontend.',
)

section('Achievements')
;[
  'Razorpay AI Buildathon (2026) — Built and submitted RecoverAI: AI failed-payment recovery with Razorpay Checkout, Payment Links, signed webhooks, and multi-provider LLM analysis (Groq / OpenAI / Gemini).',
  'Designed webhook-driven microservices (dual Postgres, JWT) that bridge checkout failures to merchant recovery without cross-service DB coupling.',
  'Open-sourced implementation & docs: github.com/pavankalyan11011/RecovaryAI.',
].forEach(bullet)

section('Skills')
const skills = [
  ['Languages', 'Java, JavaScript, SQL, HTML, CSS'],
  ['Frontend', 'React.js, Next.js, Redux, Redux Toolkit, React Router, Hooks, MUI, Tailwind CSS, Formik, Yup'],
  ['Backend', 'Spring Boot, Node.js, Express.js, Feathers.js, REST APIs, JWT, Socket.io, axios'],
  ['Payments & AI', 'Razorpay (Checkout, Payment Links, Webhooks), Groq, OpenAI, Gemini API'],
  ['Data', 'PostgreSQL, MySQL, Oracle DB, MongoDB, Supabase'],
  [
    'Infra & Tools',
    'Git/GitHub, Maven, Postman, Jira, Figma, Cloudflare Tunnel, AWS basics (EC2, S3, IAM), Cursor, VS Code',
  ],
]
for (const [label, value] of skills) {
  ensureSpace(24)
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor('#130810').text(`${label}: `, left, doc.y, {
    continued: true,
  })
  doc.font('Helvetica').fillColor('#222').text(value, { width: pageWidth })
  doc.moveDown(0.2)
}

section('Education')
const edu = [
  ['Avanthi Institute of Engineering', '2025 — 2027', 'MCA - Master of Computer Applications', 'Hyderabad, India'],
  [
    'University College of Science, Saifabad, Osmania University',
    '2022 — 2025',
    'BCA - Bachelor of Computer Applications - 85%',
    'Hyderabad, India',
  ],
  ['Narayana Junior College', '2020 — 2022', 'Intermediate - MPC - 78%', 'Hyderabad, India'],
  ['Ravindra Bharathi School', '2018 — 2020', 'SSC - Secondary School Certificate - 9.5 CGPA', 'Hyderabad, India'],
]
for (const [school, dates, program, place] of edu) {
  ensureSpace(40)
  const y = doc.y
  doc.font('Helvetica-Bold').fontSize(10).fillColor('#130810').text(school, left, y, {
    width: pageWidth * 0.72,
  })
  const afterSchool = doc.y
  doc.font('Helvetica-Bold').fontSize(9).text(dates, left, y, { width: pageWidth, align: 'right' })
  doc.y = Math.max(afterSchool, doc.y)
  doc.font('Helvetica-Oblique').fontSize(9.5).fillColor('#222').text(program, { continued: false })
  doc.font('Helvetica').fontSize(9).fillColor('#444').text(place)
  doc.moveDown(0.35)
}

doc.end()

await new Promise((resolve, reject) => {
  stream.on('finish', resolve)
  stream.on('error', reject)
})

console.log(`Wrote ${outPath}`)
