import './LumenPreview.css'

export default function LumenPreview() {
  return (
    <div className="lumen-preview" aria-label="Preview of the Lumen Retreat dashboard">
      <div className="lm-side">
        <div className="lm-brand">
          <span className="lm-logo">⌂</span>
          <div>
            <div className="t">Lumen</div>
            <div className="s">RETREAT</div>
          </div>
        </div>
        <div className="lm-label">MANAGE</div>
        <div className="lm-nav active"><span className="i">▦</span> Dashboard</div>
        <div className="lm-nav"><span className="i">▤</span> Bookings</div>
        <div className="lm-nav"><span className="i">⌂</span> Cabins</div>
        <div className="lm-nav"><span className="i">☺</span> Guests</div>
        <div className="lm-nav"><span className="i">⚙</span> Settings</div>
      </div>

      <div className="lm-main">
        <div className="lm-top">
          <span className="lm-orb"></span>
          <div className="lm-greet">
            <div className="g">Good afternoon, Negin</div>
            <div className="sub">Here's how the retreat is glowing.</div>
          </div>
          <div className="lm-range">
            <span>7d</span><span className="on">30d</span><span>90d</span>
          </div>
        </div>

        <div className="lm-kpis">
          <div className="kpi">
            <div className="k">BOOKINGS</div>
            <div className="v">15</div>
          </div>
          <div className="kpi">
            <div className="k">REVENUE</div>
            <div className="v sm">$58.8K</div>
          </div>
          <div className="kpi">
            <div className="k">CHECK-INS</div>
            <div className="v">13</div>
          </div>
          <div className="kpi">
            <div className="k">OCCUPANCY</div>
            <div className="v">27%</div>
          </div>
        </div>

        <div className="lm-panels">
          <div className="panel">
            <div className="pt">Revenue</div>
            <div className="ps">Jun 26 — Jul 25</div>
            <svg
              className="rev-svg"
              viewBox="0 0 200 46"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lumenGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="#d9a94e"
                    stopOpacity="0.42"
                  />
                  <stop
                    offset="100%"
                    stopColor="#d9a94e"
                    stopOpacity="0.02"
                  />
                </linearGradient>
              </defs>
              <path
                className="rev-area"
                d="M0,44 L14,40 L26,14 L38,41 L54,42 L68,6 L82,40 L96,43 L110,20 L124,42 L140,38 L152,26 L166,43 L180,10 L200,38 L200,46 L0,46 Z"
              />
              <path
                className="rev-line"
                d="M0,44 L14,40 L26,14 L38,41 L54,42 L68,6 L82,40 L96,43 L110,20 L124,42 L140,38 L152,26 L166,43 L180,10 L200,38"
              />
            </svg>
          </div>

          <div className="panel">
            <div className="pt">Stay duration</div>
            <div className="ps">How long guests linger</div>
            <div className="donut-wrap">
              <svg
                className="donut"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle className="trk" cx="32" cy="32" r="28" />
                <circle className="s1" cx="32" cy="32" r="28" />
                <circle className="s2" cx="32" cy="32" r="28" />
                <text className="donut-mid" x="32" y="32">13</text>
              </svg>
              <div className="legend">
                <div><i className="a"></i>4–5 nights</div>
                <div><i className="b"></i>8–14 nights</div>
                <div><i className="c"></i>6–7 nights</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
