import { profile } from '../../data/profile'

const colorMap = {
  warm: 'bg-[#ffe566] border-[#f5c400] text-[#4a3800] shadow-[0_4px_16px_rgba(255,204,0,0.35)]',
  cyan: 'bg-[#7ae8ff] border-[#00c8e8] text-[#004d5c] shadow-[0_4px_16px_rgba(0,234,255,0.3)]',
  violet: 'bg-[#e0b3ff] border-[#b44dff] text-[#4a1070] shadow-[0_4px_16px_rgba(180,77,255,0.3)]',
}

export default function StickyNote({ note }) {
  return (
    <div
      className={`sticky-note font-hand max-w-[220px] border-2 px-3 py-2.5 text-base font-medium leading-snug ${colorMap[note.color] || colorMap.warm}`}
      style={{ transform: `rotate(${note.rotate})` }}
    >
      {note.text}
    </div>
  )
}

export function StickyNotesRow() {
  return (
    <div className="flex flex-wrap items-start gap-3 md:gap-4">
      {profile.stickyNotes.map((note) => (
        <StickyNote key={note.id} note={note} />
      ))}
    </div>
  )
}
