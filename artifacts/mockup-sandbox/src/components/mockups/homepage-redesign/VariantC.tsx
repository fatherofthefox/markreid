export function VariantC() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#F4F0E8", fontFamily: "'Inter', sans-serif", color: "#1A1A2E" }}
    >
      {/* Nav */}
      <nav style={{ padding: "0 64px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 21, fontWeight: 700, letterSpacing: "-0.03em", color: "#1A1A2E" }}>
          Mark Reid
        </span>
        <div style={{ display: "flex", gap: 40, fontSize: 12, color: "#7A6E5F", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {["About", "Advisory", "Tech & AI", "Content"].map(l => (
            <span key={l} style={{ cursor: "pointer" }}>{l}</span>
          ))}
        </div>
        <a style={{ fontSize: 12, color: "#1A1A2E", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid #C9A84C", paddingBottom: 2, cursor: "pointer" }}>
          Begin the Conversation →
        </a>
      </nav>

      {/* Rule */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", margin: "0 64px" }} />

      {/* Hero full-width editorial */}
      <div style={{ padding: "96px 64px 0", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600 }}>
            Fractional Sales Leadership · Hampshire, UK
          </span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 80, fontWeight: 700, lineHeight: 0.98, letterSpacing: "-0.04em", maxWidth: 900, margin: "0 0 0" }}>
          The revenue<br />
          growth partner<br />
          <span style={{ color: "#C9A84C", fontStyle: "italic" }}>your board expects.</span>
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginTop: 60, paddingTop: 60, borderTop: "1px solid rgba(26,26,46,0.12)" }}>
          <p style={{ fontSize: 19, lineHeight: 1.75, color: "#4A4035", margin: 0 }}>
            I work with founders and C-suite leaders in B2B technology to build and lead the revenue organisations that drive sustained, predictable growth — from first principles.
          </p>
          <div>
            <div style={{ display: "flex", gap: 20, marginBottom: 32 }}>
              <button style={{ background: "#1A1A2E", color: "#F4F0E8", border: "none", padding: "15px 32px", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontWeight: 600 }}>
                Advisory Services
              </button>
              <button style={{ background: "transparent", color: "#1A1A2E", border: "1px solid rgba(26,26,46,0.25)", padding: "15px 24px", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
                Read the Blog
              </button>
            </div>
            <p style={{ fontSize: 12, color: "#9A8E7E", letterSpacing: "0.04em", lineHeight: 1.6, margin: 0 }}>
              Currently available for select advisory mandates. Serving clients across London, Thames Valley, and internationally.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ margin: "80px 64px 0", borderTop: "1px solid rgba(26,26,46,0.1)", borderBottom: "1px solid rgba(26,26,46,0.1)", display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {[
          { num: "15+", label: "Years of enterprise sales leadership" },
          { num: "£2B+", label: "Revenue pipeline generated" },
          { num: "40+", label: "Complex deals negotiated and closed" },
        ].map((s, i) => (
          <div key={i} style={{ padding: "48px 0", paddingLeft: i > 0 ? 48 : 0, paddingRight: 48, borderRight: i < 2 ? "1px solid rgba(26,26,46,0.1)" : "none" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 700, lineHeight: 1, color: "#1A1A2E" }}>{s.num}</div>
            <div style={{ fontSize: 13, color: "#7A6E5F", marginTop: 10, lineHeight: 1.5 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Services strip */}
      <div style={{ padding: "80px 64px", maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, color: "#C9A84C", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 48, fontWeight: 600 }}>Advisory Services</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, borderLeft: "1px solid rgba(26,26,46,0.1)" }}>
          {[
            { title: "Fractional CRO", body: "Part-time, full-impact revenue leadership for companies scaling 5→50M ARR." },
            { title: "GTM Strategy", body: "ICP to close — a complete go-to-market motion built on evidence and execution." },
            { title: "Team Coaching", body: "MEDDIC and Challenger frameworks embedded into your team's daily rhythm." },
            { title: "RevOps Design", body: "The systems, data, and forecasting cadence serious revenue orgs depend on." },
          ].map((c, i) => (
            <div key={i} style={{ padding: "40px 36px", borderRight: "1px solid rgba(26,26,46,0.1)" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 16, color: "#1A1A2E", lineHeight: 1.2 }}>{c.title}</div>
              <div style={{ fontSize: 13, lineHeight: 1.7, color: "#6A5E50" }}>{c.body}</div>
              <div style={{ marginTop: 24, fontSize: 12, color: "#C9A84C", letterSpacing: "0.06em" }}>Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
