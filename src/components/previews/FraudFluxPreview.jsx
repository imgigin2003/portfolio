import './FraudFluxPreview.css'

export default function FraudFluxPreview() {
  return (
    <div className="fraudflux-preview" aria-label="Concept preview of a FraudFlux live transaction monitor">
      <div className="fx-head">
        <div className="fx-brand">💳 FraudFlux</div>
        <div className="fx-live"><span className="d"></span> SCORING STREAM</div>
      </div>

      <div className="fx-feed">
        <div className="fx-cols">
          <span className="c-id">TXN</span><span className="c-amt">AMOUNT</span><span className="c-pr">P(FRAUD)</span><span className="c-v">VERDICT</span>
        </div>
        <div className="fx-row"><span className="c-id">#56 731</span><span className="c-amt">€ 42.80</span><span className="c-pr">0.001</span><span className="c-v v-ok">✓ NOT FRAUD</span></div>
        <div className="fx-row"><span className="c-id">#56 732</span><span className="c-amt">€ 129.99</span><span className="c-pr">0.034</span><span className="c-v v-ok">✓ NOT FRAUD</span></div>
        <div className="fx-row hot"><span className="c-id">#56 733</span><span className="c-amt">€ 1 899.00</span><span className="c-pr">0.967</span><span className="c-v v-fraud">⚠ FRAUD</span></div>
        <div className="fx-row"><span className="c-id">#56 734</span><span className="c-amt">€ 8.40</span><span className="c-pr">0.000</span><span className="c-v v-ok">✓ NOT FRAUD</span></div>
        <div className="fx-row"><span className="c-id">#56 735</span><span className="c-amt">€ 76.12</span><span className="c-pr">0.089</span><span className="c-v v-ok">✓ NOT FRAUD</span></div>
      </div>

      <div className="fx-stats">
        <div className="fx-stat"><div className="k">MODEL</div><div className="v" style={{fontSize: '9.5px', paddingTop: '2px'}}>RANDOM FOREST</div></div>
        <div className="fx-stat"><div className="k">RECALL</div><div className="v g">81.05%</div></div>
        <div className="fx-stat"><div className="k">PRECISION</div><div className="v g">80.21%</div></div>
        <div className="fx-stat"><div className="k">THRESHOLD</div><div className="v a">0.15</div></div>
      </div>
    </div>
  )
}
