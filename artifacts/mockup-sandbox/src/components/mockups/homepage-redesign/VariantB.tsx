export function VariantB() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0A0A0E", fontFamily: "'Inter', sans-serif", color: "#fff" }}
    >
      {/* Nav */}
      <nav style={{ padding: "0 60px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>Mark Reid</span>
          <span style={{ width: 4, height: 4, background: "#C9A84C", borderRadius: "50%", marginLeft: 4 }} />
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {["About", "Advisory", "Tech & AI", "Content"].map(l => (
            <span key={l} style={{ cursor: "pointer" }}>{l}</span>
          ))}
        </div>
        <button style={{ background: "transparent", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.4)", padding: "10px 24px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
          Book a Call
        </button>
      </nav>

      {/* Hero */}
      <div style={{ padding: "90px 60px 0", maxWidth: 1200, margin: "0 auto" }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1px solid rgba(201,168,76,0.25)", padding: "8px 16px", marginBottom: 48, background: "rgba(201,168,76,0.05)" }}>
          <span style={{ width: 7, height: 7, background: "#C9A84C", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 8px #C9A84C" }} />
          <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A84C" }}>Available for Advisory Engagements</span>
        </div>

        {/* Headline */}
        <div style={{ display: "grid", gridTemplateColumns: "7fr 3fr", gap: 60, alignItems: "end", marginBottom: 0 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 76, fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.03em", margin: 0 }}>
            I build revenue<br />
            teams that{" "}
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>actually</span><br />
            perform.
          </h1>
          <div style={{ paddingBottom: 12 }}>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", margin: "0 0 32px" }}>
              Fractional CRO and GTM advisor for B2B tech companies scaling from £5M to £50M ARR. Based in Hampshire, operating globally.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <button style={{ background: "#C9A84C", color: "#000", border: "none", padding: "14px 28px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", fontWeight: 700 }}>
                Work With Me →
              </button>
              <button style={{ background: "transparent", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.12)", padding: "14px 28px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                View Case Studies
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 80 }}>
          {[
            { num: "15+", label: "Years Enterprise Sales" },
            { num: "£2B+", label: "Pipeline Generated" },
            { num: "40+", label: "Deals Closed" },
            { num: "3×", label: "Average ARR Growth" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "32px 0", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none", paddingLeft: i > 0 ? 32 : 0, paddingRight: 32 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 700, color: i === 0 ? "#C9A84C" : "#fff", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What I do */}
      <div style={{ padding: "80px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 80 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 20 }}>What I Do</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0, color: "#fff" }}>
              Strategy without execution is just expensive advice.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.06)" }}>
            {[
              { title: "Fractional CRO", body: "Senior revenue leadership without the full-time cost. Monthly retainer, full commitment." },
              { title: "GTM Architecture", body: "ICP definition, outbound motion design, and channel strategy built on data." },
              { title: "Sales Enablement", body: "MEDDIC, Challenger, and FAINT implementation with hands-on coaching." },
              { title: "RevOps Systems", body: "CRM architecture, forecasting cadence, and pipeline hygiene that scales." },
            ].map((c, i) => (
              <div key={i} style={{ padding: "32px 28px", background: "#0A0A0E" }}>
                <div style={{ width: 32, height: 2, background: "#C9A84C", marginBottom: 20 }} />
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 10, color: "#fff" }}>{c.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.4)" }}>{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
