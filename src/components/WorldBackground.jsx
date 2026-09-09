export default function WorldBackground() {
  return (
    <div className="world-bg" aria-hidden="true">
      <div className="world-bg__voxel-floor" />
      <div className="world-bg__stud-grid" />
      <div className="world-bg__gradient" />
      <div className="world-bg__stars">
        {Array.from({ length: 40 }, (_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.2 + Math.random() * 0.6,
            }}
          />
        ))}
      </div>
    </div>
  )
}
