export default function SectionHeader({ label, title, description }) {
  return (
    <header className="mb-6 md:mb-8">
        {label && (
        <p className="mb-1 font-hand text-xl text-violet">{label}</p>
      )}
      <h1 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h1>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-[15px]">{description}</p>
      )}
    </header>
  )
}
