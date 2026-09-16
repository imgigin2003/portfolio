import './StudySproutPreview.css'

export default function StudySproutPreview() {
  return (
    <div className="studysprout-preview" aria-label="Preview of the StudySprout garden dashboard">
      <div className="mini-sidebar">
        <div className="mini-logo">StudySprout <em>🌱</em></div>
        <div className="mini-nav active">🌱 MY GARDEN</div>
        <div className="mini-nav">⏱ STUDY TIMER</div>
        <div className="mini-nav">📖 MY SHELF</div>
      </div>
      <div className="mini-main">
        <div className="mini-xp-label">TOTAL XP</div>
        <div className="mini-xp-track"><div className="mini-xp-fill"></div></div>
        <div className="mini-title">🌱 GIGIN'S GARDEN</div>
        <div className="mini-sub">YOUR FOCUS, YOUR GARDEN</div>
        <div className="mini-plots">
          <div className="plot growing"><span className="sprout">🌷</span>GROWING</div>
          <div className="plot growing"><span className="sprout">🌵</span>GROWING</div>
          <div className="plot empty"><span className="plus">+</span>TAP TO PLANT</div>
        </div>
      </div>
    </div>
  )
}
