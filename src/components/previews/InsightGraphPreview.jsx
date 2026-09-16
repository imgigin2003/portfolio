import './InsightGraphPreview.css'

export default function InsightGraphPreview() {
  return (
    <div className="insightgraph-preview" aria-label="Preview of the InsightGraph explorer running BFS">
      <div className="ig-sidebar">
        <div className="ig-brand">
          <span className="ig-logo">🕸</span> InsightGraph
        </div>
        <div className="ig-nav active">◉ Explorer</div>
        <div className="ig-nav">▤ Sorting</div>
        <div className="ig-nav">⬡ Hypergraph</div>
        <div className="ig-nav">⇄ Compare</div>
        <div className="ig-nav">🎓 Datasets</div>
        <div className="ig-nav">▥ Analytics</div>
        <div className="ig-nav">✦ Research</div>
      </div>

      <div className="ig-canvas">
        <div className="ig-toolbar">
          <span className="ig-select">Breadth-First Search ▾</span>
          <span className="ig-run">▶ Run</span>
        </div>
        <svg
          className="ig-svg"
          viewBox="0 0 300 210"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* edges */}
          <line className="edge" x1="52" y1="118" x2="118" y2="72" />
          <line className="edge" x1="52" y1="118" x2="118" y2="160" />
          <line className="edge" x1="118" y1="72" x2="122" y2="158" />
          <line className="edge" x1="118" y1="72" x2="192" y2="52" />
          <line className="edge" x1="192" y1="52" x2="196" y2="140" />
          <line className="edge" x1="122" y1="160" x2="196" y2="140" />
          <line className="edge" x1="192" y1="52" x2="258" y2="102" />
          <line className="edge" x1="196" y1="140" x2="258" y2="102" />
          {/* weights */}
          <text className="wlabel" x="78" y="86">4</text>
          <text className="wlabel" x="80" y="150">2</text>
          <text className="wlabel" x="126" y="118">1</text>
          <text className="wlabel" x="152" y="54">5</text>
          <text className="wlabel" x="199" y="98">2</text>
          <text className="wlabel" x="158" y="160">8</text>
          <text className="wlabel" x="230" y="68">6</text>
          <text className="wlabel" x="232" y="132">3</text>
          {/* nodes */}
          <g className="node v">
            <circle cx="52" cy="118" r="13" />
            <text x="52" y="118">A</text>
          </g>
          <g className="node v d1">
            <circle cx="118" cy="72" r="13" />
            <text x="118" y="72">B</text>
          </g>
          <g className="node v d2">
            <circle cx="122" cy="160" r="13" />
            <text x="122" y="160">C</text>
          </g>
          <g className="node v d3">
            <circle cx="192" cy="52" r="13" />
            <text x="192" y="52">D</text>
          </g>
          <g className="node v d4">
            <circle cx="196" cy="140" r="13" />
            <text x="196" y="140">E</text>
          </g>
          <g className="node v d5">
            <circle cx="258" cy="102" r="13" />
            <text x="258" y="102">F</text>
          </g>
        </svg>
      </div>

      <div className="ig-panel">
        <div className="pt">Breadth-First Search</div>
        <div className="ig-badges">
          <span className="ig-badge">⏱ O(V + E)</span>
          <span className="ig-badge">▦ O(V)</span>
        </div>
        <div className="ig-pl">PSEUDOCODE</div>
        <div className="ig-code">
          queue ← [source]<br />
          while queue not empty:<br />
          &nbsp;&nbsp;<span className="hl">u ← dequeue(queue)</span><br />
          &nbsp;&nbsp;for neighbor v of u:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if v not visited:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mark; enqueue v<br />
          done
        </div>
      </div>
    </div>
  )
}
