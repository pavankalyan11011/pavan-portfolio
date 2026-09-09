import { profile } from '../data/site'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero__status">
        <span className="hero__dot" />
        Open to full-time &amp; freelancing · {profile.location}
      </p>
      <h1 className="hero__name">
        {profile.firstName}
        <br />
        <em>{profile.lastName}</em>
      </h1>
      <p className="hero__role">{profile.role}</p>
      <p className="hero__lead">
        Shipping hospitality SaaS at Amealio — React UIs, Node / Feathers APIs,
        and Java Spring Boot when the backend needs weight.
      </p>
      <div className="hero__actions">
        <a className="btn btn--fill" href="#contact">
          Let’s talk
        </a>
        <a className="btn" href={profile.resume} download>
          Download resume
        </a>
        <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  )
}
