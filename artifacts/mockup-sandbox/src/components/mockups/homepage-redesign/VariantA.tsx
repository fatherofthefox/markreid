export function VariantA() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#FAFAF8", fontFamily: "'Inter', sans-serif", color: "#111" }}
    >
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #E8E5DF", padding: "0 60px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>Mark Reid</span>
        <div style={{ display: "flex", gap: 36, fontSize: 13, color: "#666", letterSpacing: "0.04em", textTransform: "uppercase" }}>
          {["About", "Advisory", "Tech & AI", "Content"].map(l => (
            <span key={l} style={{ cursor: "pointer" }}>{l}</span>
          ))}
        </div>
        <button style={{ background: "#111", color: "#fff", padding: "10px 24px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", border: "none", cursor: "pointer" }}>
          Work With Me
        </button>
      </nav>

      {/* Hero */}
      <div style={{ padding: "100px 60px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F0EBE0", padding: "6px 14px", marginBottom: 32, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B6F3A" }}>
              <span style={{ width: 6, height: 6, background: "#C9A84C", borderRadius: "50%", display: "inline-block" }} />
              Available for Advisory
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 28px" }}>
              Building revenue<br />
              <em style={{ fontStyle: "italic", color: "#C9A84C" }}>engines</em><br />
              that scale.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#555", margin: "0 0 40px", maxWidth: 420 }}>
              Senior sales leadership for B2B tech companies ready to move beyond unpredictable pipelines. Fractional CRO, GTM strategy, and execution.
            </p>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <button style={{ background: "#111", color: "#fff", padding: "14px 32px", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", border: "none", cursor: "pointer" }}>
                Explore Advisory
              </button>
              <button style={{ background: "transparent", color: "#111", padding: "14px 24px", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", border: "1px solid #CCC", cursor: "pointer" }}>
                Read the Blog
              </button>
            </div>
          </div>

          {/* Right column: stats */}
          <div style={{ paddingTop: 80 }}>
            <div style={{ borderTop: "1px solid #E8E5DF", paddingTop: 40, marginBottom: 40 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 700, color: "#C9A84C", lineHeight: 1 }}>15+</div>
              <div style={{ fontSize: 13, color: "#888", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 8 }}>Years in Enterprise Sales</div>
            </div>
            <div style={{ borderTop: "1px solid #E8E5DF", paddingTop: 40, marginBottom: 40 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 700, lineHeight: 1 }}>£2B+</div>
              <div style={{ fontSize: 13, color: "#888", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 8 }}>Pipeline Generated</div>
            </div>
            <div style={{ borderTop: "1px solid #E8E5DF", borderBottom: "1px solid #E8E5DF", paddingTop: 40, paddingBottom: 40 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 700, lineHeight: 1 }}>40+</div>
              <div style={{ fontSize: 13, color: "#888", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 8 }}>Enterprise Deals Closed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div style={{ background: "#111", padding: "16px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 60, whiteSpace: "nowrap", color: "#fff", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0 60px" }}>
          {["Fractional CRO", "GTM Strategy", "Sales Process Design", "Revenue Operations", "MEDDIC / FAINT", "Enterprise Deal Coaching", "Team Enablement", "Pipeline Forecasting"].map(t => (
            <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 24 }}>
              {t}
              <span style={{ color: "#C9A84C", fontSize: 10 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Credibility section */}
      <div style={{ padding: "80px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 12, color: "#999", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>Trusted by leaders at</p>
        <div style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
          {["SaaS Co.", "Scale-Up Ltd", "Tech Ventures", "Growth Corp", "B2B Group"].map(c => (
            <span key={c} style={{ fontSize: 16, fontWeight: 600, color: "#CCC", fontFamily: "'Playfair Display', serif" }}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
