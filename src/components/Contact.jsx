import { useState } from 'react'
import { profile } from '../data/site'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('Opening your email app…')
  }

  return (
    <section className="section" id="contact">
      <div className="section__label">05 — Contact</div>
      <h2 className="section__title">Let’s build something</h2>
      <div className="contact">
        <div className="contact__copy">
          <p>
            Looking for someone who can move across Java Full Stack and MERN —
            React / Next.js up front, Node and Feathers on the API, Spring Boot when
            Java is the right tool. Hostinger for hosting, Cursor for speed.
          </p>
          <ul className="contact__links">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="btn btn--fill" type="submit">
            Send message
          </button>
          {status ? <p className="form-status">{status}</p> : null}
        </form>
      </div>
    </section>
  )
}
