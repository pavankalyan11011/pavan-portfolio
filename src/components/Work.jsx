import { featuredWork, projects } from '../data/site'

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="section__label">03 — Work</div>
      <h2 className="section__title">Selected work</h2>

      <div className="work-list">
        {featuredWork.map((item, i) => (
          <article key={item.title} className="work-row">
            <p className="work-row__index">0{i + 1}</p>
            <div>
              <div className="work-row__top">
                <h3>{item.title}</h3>
                <span>{item.year}</span>
              </div>
              <p className="work-row__stack">{item.stack.join(' · ')}</p>
              <ul className="bullet-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <h3 className="subhead">Side projects</h3>
      <div className="project-list">
        {projects.map((project) => (
          <article key={project.title} className="project-row">
            <div className="project-row__top">
              <h3>{project.title}</h3>
              <span>{project.year}</span>
            </div>
            <p>{project.description}</p>
            <p className="project-row__stack">{project.stack.join(' · ')}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
