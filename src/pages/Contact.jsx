import { useState } from 'react'
import { profile } from '../data/profile'
import SectionHeader from '../components/common/SectionHeader'
import Button from '../components/common/Button'
import { useSystem } from '../context/SystemContext'

export default function Contact() {
  const [status, setStatus] = useState('')
  const { playSound } = useSystem()

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('Opening your email client…')
    playSound('open')
  }

  const links = [
    { label: 'Email', href: `mailto:${profile.email}`, value: profile.email },
    { label: 'GitHub', href: profile.github, value: 'github.com/pavankalyan11011' },
    { label: 'LinkedIn', href: profile.linkedin, value: 'linkedin.com/in/pavankalyan11011' },
    { label: 'Resume', href: profile.resume, value: 'Download PDF', download: true },
  ]

  return (
    <div className="max-w-2xl">
      <SectionHeader
        label="no forms maze"
        title="Say hello"
        description="Email, GitHub, LinkedIn, resume — all right here. I reply to humans."
      />

      <div className="panel-cut p-5 md:p-6">
        <p className="font-hand text-2xl text-amber/90">Let&apos;s build something useful.</p>
        <p className="mt-2 text-sm text-muted">
          Full-time, internship extensions, freelance — if you need Java + React shipped properly, reach out.
        </p>

        <ul className="mt-6 space-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                download={link.download || undefined}
                target={link.download ? undefined : '_blank'}
                rel={link.download ? undefined : 'noreferrer'}
                onClick={() => playSound('click')}
                className="flex min-h-[44px] items-center justify-between rounded-lg border border-border bg-bg-secondary px-4 py-3 transition hover:border-cyan/30"
              >
                <span className="font-pixel text-[10px] text-muted">{link.label}</span>
                <span className="text-sm text-cyan">{link.value}</span>
              </a>
            </li>
          ))}
        </ul>

        <form className="mt-8 space-y-4 border-t border-border pt-6" onSubmit={handleSubmit}>
          <label className="block text-sm text-muted">
            Name
            <input
              name="name"
              required
              autoComplete="name"
              className="mt-1 w-full rounded-lg border border-border bg-bg-primary px-3 py-2.5 text-white outline-none focus:border-cyan/50"
            />
          </label>
          <label className="block text-sm text-muted">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1 w-full rounded-lg border border-border bg-bg-primary px-3 py-2.5 text-white outline-none focus:border-cyan/50"
            />
          </label>
          <label className="block text-sm text-muted">
            Message
            <textarea
              name="message"
              required
              rows={4}
              className="mt-1 w-full rounded-lg border border-border bg-bg-primary px-3 py-2.5 text-white outline-none focus:border-cyan/50"
            />
          </label>
          <Button type="submit" variant="solid">Send it →</Button>
          {status && <p className="text-sm text-success">{status}</p>}
        </form>
      </div>
    </div>
  )
}
