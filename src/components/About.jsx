import { education, profile } from '../data/site'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__label">01 — About</div>
      <h2 className="section__title">What I do</h2>
      <div className="about">
        <p className="about__copy">{profile.summary}</p>
        <dl className="about__meta">
          <div>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Currently</dt>
            <dd>Intern Developer, Amealio</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Java Full Stack + MERN</dd>
          </div>
          <div>
            <dt>Education</dt>
            <dd>
              {education.map((e) => (
                <span key={e.program} className="about__edu">
                  {e.program}
                  {e.meta ? ` (${e.meta})` : ''} · {e.period}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
