import { experience } from '../data/site'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__label">02 — Experience</div>
      <h2 className="section__title">Where I’ve shipped</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline__item">
            <div className="timeline__meta">
              <p className="timeline__period">{job.period}</p>
              <p className="timeline__place">{job.location}</p>
            </div>
            <div className="timeline__body">
              <h3>{job.role}</h3>
              <p className="timeline__company">{job.company}</p>
              <p className="timeline__tags">{job.tags.join(' · ')}</p>
              <ul className="bullet-list">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
