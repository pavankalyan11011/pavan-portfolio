import Terminal from './components/Terminal'
import { profile } from './data/site'

export default function App() {
  return (
    <div className="page">
      <header className="top">
        <div className="top__brand">
          <span className="top__logo">pk</span>
          <div>
            <p className="top__name">{profile.name}</p>
            <p className="top__role">{profile.role}</p>
          </div>
        </div>
        <p className="top__hint">
          Type <code>help</code> or tap a chip · interactive software developer resume
        </p>
        <div className="top__links">
          <a href={profile.resume} download>
            resume.pdf
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
        </div>
      </header>

      <main className="main">
        <Terminal />
      </main>

      <footer className="foot">
        <p>Not a real shell · Ubuntu-style CV explorer</p>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  )
}
