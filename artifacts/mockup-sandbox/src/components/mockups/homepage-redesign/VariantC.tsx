import { useState } from "react";

export function VariantC() {
  const [dark, setDark] = useState(false);

  const c = dark ? {
    bg: "#0D0D18", text: "#F4F0E8", muted: "#8A8070", border: "rgba(255,255,255,0.1)",
    navText: "#9A8E7E", secondary: "#1A1A28", cardBg: "#141422", statBorder: "rgba(255,255,255,0.08)",
    bodyText: "#B0A898", serviceBorder: "rgba(255,255,255,0.08)", serviceBody: "#8A8070",
    ctaOutlineBorder: "rgba(244,240,232,0.2)", ctaOutlineText: "#F4F0E8",
    ctaBg: "#F4F0E8", ctaText: "#0D0D18",
  } : {
    bg: "#F4F0E8", text: "#1A1A2E", muted: "#7A6E5F", border: "rgba(26,26,46,0.12)",
    navText: "#7A6E5F", secondary: "#EAE5D8", cardBg: "#fff", statBorder: "rgba(26,26,46,0.1)",
    bodyText: "#4A4035", serviceBorder: "rgba(26,26,46,0.1)", serviceBody: "#6A5E50",
    ctaOutlineBorder: "rgba(26,26,46,0.25)", ctaOutlineText: "#1A1A2E",
    ctaBg: "#1A1A2E", ctaText: "#F4F0E8",
  };

  return (
    <div style={{ background: c.bg, fontFamily: "'Inter', sans-serif", color: c.text, transition: "all 0.35s ease", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ padding: "0 64px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 21, fontWeight: 700, letterSpacing: "-0.03em", color: c.text }}>
          Mark Reid<span style={{ color: "#C9A84C" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: 40, fontSize: 12, color: c.navText, letterSpacing: "0.06em", textTransform: "uppercase", alignItems: "center" }}>
          {["About", "Advisory", "Tech & AI", "Content"].map(l => (
            <span key={l} style={{ cursor: "pointer" }}>{l}</span>
          ))}
          {/* Theme toggle */}
          <button
            onClick={() => setDark(d => !d)}
            style={{
              width: 44, height: 24, borderRadius: 12, border: "none", cursor: "pointer", padding: 0, position: "relative",
              background: dark ? "#C9A84C" : "rgba(0,0,0,0.15)", transition: "background 0.3s",
            }}
            title={dark ? "Switch to light" : "Switch to dark"}
          >
            <span style={{
              position: "absolute", top: 3, left: dark ? 23 : 3, width: 18, height: 18, borderRadius: "50%",
              background: dark ? "#0D0D18" : "#fff", transition: "left 0.3s", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10,
            }}>
              {dark ? "☀" : "🌙"}
            </span>
          </button>
        </div>
        <a style={{ fontSize: 12, color: c.text, letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid #C9A84C", paddingBottom: 2, cursor: "pointer" }}>
          Begin the Conversation →
        </a>
      </nav>

      {/* Rule */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", margin: "0 64px" }} />

      {/* Hero */}
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

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginTop: 60, paddingTop: 60, borderTop: `1px solid ${c.border}` }}>
          <p style={{ fontSize: 19, lineHeight: 1.75, color: c.bodyText, margin: 0 }}>
            I work with founders and C-suite leaders in B2B technology to build and lead the revenue organisations that drive sustained, predictable growth — from first principles.
          </p>
          <div>
            <div style={{ display: "flex", gap: 20, marginBottom: 32 }}>
              <button style={{ background: c.ctaBg, color: c.ctaText, border: "none", padding: "15px 32px", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontWeight: 600, transition: "all 0.3s" }}>
                Advisory Services
              </button>
              <button style={{ background: "transparent", color: c.ctaOutlineText, border: `1px solid ${c.ctaOutlineBorder}`, padding: "15px 24px", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s" }}>
                Read the Blog
              </button>
            </div>
            <p style={{ fontSize: 12, color: c.muted, letterSpacing: "0.04em", lineHeight: 1.6, margin: 0 }}>
              Currently available for select advisory mandates. Serving clients across London, Thames Valley, and internationally.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ margin: "80px 64px 0", borderTop: `1px solid ${c.statBorder}`, borderBottom: `1px solid ${c.statBorder}`, display: "grid", gridTemplateColumns: "repeat(3,1fr)", transition: "all 0.3s" }}>
        {[
          { num: "15+", label: "Years of enterprise sales leadership" },
          { num: "£2B+", label: "Revenue pipeline generated" },
          { num: "40+", label: "Complex deals negotiated and closed" },
        ].map((s, i) => (
          <div key={i} style={{ padding: "48px 0", paddingLeft: i > 0 ? 48 : 0, paddingRight: 48, borderRight: i < 2 ? `1px solid ${c.statBorder}` : "none" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 700, lineHeight: 1, color: c.text }}>{s.num}</div>
            <div style={{ fontSize: 13, color: c.muted, marginTop: 10, lineHeight: 1.5 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Services */}
      <div style={{ padding: "80px 64px", maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 11, color: "#C9A84C", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 48, fontWeight: 600 }}>Advisory Services</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, borderLeft: `1px solid ${c.serviceBorder}` }}>
          {[
            { title: "Fractional CRO", body: "Part-time, full-impact revenue leadership for companies scaling 5→50M ARR." },
            { title: "GTM Strategy", body: "ICP to close — a complete go-to-market motion built on evidence and execution." },
            { title: "Team Coaching", body: "MEDDIC and Challenger frameworks embedded into your team's daily rhythm." },
            { title: "RevOps Design", body: "The systems, data, and forecasting cadence serious revenue orgs depend on." },
          ].map((c2, i) => (
            <div key={i} style={{ padding: "40px 36px", borderRight: `1px solid ${c.serviceBorder}`, background: "transparent" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 16, color: c.text, lineHeight: 1.2 }}>{c2.title}</div>
              <div style={{ fontSize: 13, lineHeight: 1.7, color: c.serviceBody }}>{c2.body}</div>
              <div style={{ marginTop: 24, fontSize: 12, color: "#C9A84C", letterSpacing: "0.06em" }}>Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
