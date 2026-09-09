import { profile } from '../../data/profile'

export default function NowBuilding() {
  return (
    <section className="panel-cut border-l-4 border-l-amber p-4 md:p-5">
      <p className="font-hand text-2xl text-amber">{profile.nowBuilding.title}</p>
      <ul className="mt-3 space-y-2">
        {profile.nowBuilding.items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
