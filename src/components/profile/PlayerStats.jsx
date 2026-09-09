import { profile } from '../../data/profile'

export default function PlayerStats() {
  return (
    <section className="panel-cut p-4 md:p-5">
      <div className="mb-4 flex items-baseline justify-between gap-2">
        <p className="font-display text-base font-semibold text-white">Quick facts</p>
        <p className="font-hand text-sm text-muted">no fluff</p>
      </div>
      <dl className="grid gap-2 sm:grid-cols-2">
        {profile.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`rounded-lg border border-border bg-bg-secondary/80 p-3 ${i === 0 ? 'sm:col-span-2 border-l-2 border-l-cyan/40' : ''}`}
          >
            <dt className="text-[11px] font-medium uppercase tracking-wide text-muted">{stat.label}</dt>
            <dd className={`mt-1 text-sm ${stat.accent ? 'font-medium text-success' : 'text-white'}`}>
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
