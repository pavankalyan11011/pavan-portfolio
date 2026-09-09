export default function BlockAvatar() {
  return (
    <div className="block-avatar" aria-hidden="true">
      <div className="block-avatar__shadow" />
      <div className="block-avatar__body">
        <div className="block-avatar__head">
          <div className="block-avatar__face">
            <span className="block-avatar__eye block-avatar__eye--l" />
            <span className="block-avatar__eye block-avatar__eye--r" />
            <span className="block-avatar__smile" />
          </div>
        </div>
        <div className="block-avatar__torso">
          <span className="block-avatar__logo">&lt;/&gt;</span>
        </div>
        <div className="block-avatar__legs">
          <div className="block-avatar__leg" />
          <div className="block-avatar__leg" />
        </div>
      </div>
      <div className="block-avatar__aura" />
    </div>
  )
}
