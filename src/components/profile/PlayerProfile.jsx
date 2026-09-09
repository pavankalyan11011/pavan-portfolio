import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import Button from '../common/Button'
import Badge from '../common/Badge'
import { useSystem } from '../../context/SystemContext'

export default function PlayerProfile() {
  const { handleProfileClick, playSound } = useSystem()

  return (
    <section className="relative">
      {/* watermark signature */}
      <div className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[80px] font-bold leading-none text-white/[0.02] md:text-[120px]" aria-hidden="true">
        PKV
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:gap-10">
        <div className="min-w-0">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="font-pixel text-[10px] text-muted">{profile.id}</span>
            <span className="text-border">·</span>
            <span className="text-xs text-muted">{profile.locationFull}</span>
            <span className="text-border">·</span>
            <span className="text-xs text-muted">{profile.timezone}</span>
          </div>

          <motion.h1
            className="font-display text-[clamp(2rem,6vw,3.25rem)] font-bold leading-[1.05] tracking-tight text-white"
            onClick={handleProfileClick}
          >
            {profile.shortName}
            <span className="text-gradient">.</span>
          </motion.h1>

          <p className="mt-2 text-lg text-cyan md:text-xl">{profile.title}</p>
          <p className="font-hand mt-1 text-xl text-amber">{profile.oneLiner}</p>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted md:text-base">
            {profile.intro}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {profile.highlightTech.map((tech) => (
              <Badge key={tech} variant="cyan" className="normal-case tracking-normal">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/missions" onClick={() => playSound('click')}>
              <Button variant="solid">See what I&apos;ve built</Button>
            </Link>
            <a href={profile.resume} download onClick={() => playSound('click')}>
              <Button variant="primary">Grab my resume</Button>
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href={profile.github} target="_blank" rel="noreferrer" className="link-personal">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-personal">LinkedIn</a>
            <Link to="/contact" className="link-personal" onClick={() => playSound('click')}>Say hello</Link>
          </div>
        </div>

        {/* Photo — polaroid-ish, not generic "avatar frame" */}
        <div className="relative mx-auto w-full max-w-[260px] lg:mx-0 lg:translate-y-2">
          <div className="photo-frame rotate-[1.5deg]">
            <img
              src={profile.photo}
              alt={profile.name}
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
              loading="eager"
              width={260}
              height={325}
            />
            <p className="font-hand mt-3 text-center text-lg text-amber/90">
              {profile.location} &apos;26
            </p>
          </div>
          <div className="absolute -left-3 top-8 hidden h-16 w-1 bg-amber/40 lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
