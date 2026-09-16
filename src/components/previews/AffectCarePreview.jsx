import './AffectCarePreview.css'

export default function AffectCarePreview() {
  return (
    <div className="affect-care-preview" aria-label="Preview of the AffectCare detection interface">
      <div className="app-head">
        <div className="app-brand">
          <span className="diamond"></span>
          <div>
            <div className="t">AffectCare</div>
            <div className="s">Vocal distress detection</div>
          </div>
        </div>
        <div className="moon">🌙</div>
      </div>

      <div className="tabs">
        <span className="tab active">Detect</span>
        <span className="tab">Model Insights</span>
      </div>

      <div className="wave-panel">
        <div className="wave-label">
          <span>LISTENING…</span><span>MFCC → CNN + LSTM</span>
        </div>
        <div className="wave">
          {Array.from({ length: 40 }).map((_, i) => (
            <i key={i} />
          ))}
        </div>
      </div>

      <div className="app-row">
        <span className="rec-btn"><span className="r"></span> Record audio</span>
        <span className="or">or</span>
        <span className="upload-btn">Upload .wav / .mp3</span>
        <span className="app-footnote">RECALL 88.8% · THR 0.15</span>
      </div>
    </div>
  )
}
