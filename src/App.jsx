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
        <section className="intro">
          <h1>
            Explore this resume
            <br />
            <em>like Ubuntu terminal</em>
          </h1>
          <p>
            Same content as my CV — About, Experience, Skills, Key Work, Projects,
            Education, Contact. Type <code>help</code> or tap a chip to explore.
          </p>
        </section>

        <Terminal />
      </main>

      <footer className="foot">
        <p>Interactive resume for software developer roles · not a real shell</p>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  )
}
