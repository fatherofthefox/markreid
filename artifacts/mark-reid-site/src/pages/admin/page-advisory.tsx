import { useState, useEffect } from "react";
import { AdminLayout, AdminPageHeader } from "@/admin/layout";
import { api } from "@/admin/api";

const SECTION = "advisory";
const FIELDS = [
  { key: "headline", label: "Page Headline", placeholder: "Advisory Services" },
  { key: "subheading", label: "Subheading", placeholder: "Senior-level sales leadership, on demand." },
  { key: "intro", label: "Intro Paragraph", multiline: true, placeholder: "Whether you need a fractional CRO…" },
  { key: "service_1_title", label: "Service 1 — Title", placeholder: "Fractional CRO" },
  { key: "service_1_body", label: "Service 1 — Description", multiline: true, placeholder: "Part-time, full-impact CRO work…" },
  { key: "service_2_title", label: "Service 2 — Title", placeholder: "Sales Process Audit" },
  { key: "service_2_body", label: "Service 2 — Description", multiline: true, placeholder: "Deep-dive into your current pipeline…" },
  { key: "service_3_title", label: "Service 3 — Title", placeholder: "GTM Strategy" },
  { key: "service_3_body", label: "Service 3 — Description", multiline: true, placeholder: "From ICP definition to outbound motion…" },
  { key: "service_4_title", label: "Service 4 — Title", placeholder: "Team Coaching & Enablement" },
  { key: "service_4_body", label: "Service 4 — Description", multiline: true, placeholder: "MEDDIC, Challenger, SPIN implementation…" },
  { key: "engagement_headline", label: "Engagement Model Headline", placeholder: "How We Work Together" },
  { key: "engagement_body", label: "Engagement Model Body", multiline: true, placeholder: "Engagements typically start with a discovery call…" },
  { key: "cta_headline", label: "CTA Headline", placeholder: "Ready to scale your revenue?" },
  { key: "cta_body", label: "CTA Body", placeholder: "Book a 30-minute call to explore how I can help." },
  { key: "contact_email", label: "Contact Email", placeholder: "mark@markreid.online" },
  { key: "calendly_url", label: "Calendly / Booking URL", placeholder: "https://calendly.com/yourlink" },
];

export default function AdminPageAdvisory() {
  const [data, setData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    api.content.get(SECTION).then(d => { setData(d); setLoading(false); }).catch(() => setLoading(false));
  }, []);

  const set = (key: string, value: string) => setData(prev => ({ ...prev, [key]: value }));

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.content.update(SECTION, data);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <AdminPageHeader title="Advisory Page" subtitle="Edit services, engagement model, and CTA" />
      {loading ? (
        <div className="flex items-center justify-center h-40 text-muted-foreground">Loading…</div>
      ) : (
        <form onSubmit={save} className="max-w-2xl space-y-6">
          {FIELDS.map(f => (
            <div key={f.key}>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{f.label}</label>
              {f.multiline ? (
                <textarea rows={3} value={data[f.key] ?? ""} onChange={e => set(f.key, e.target.value)} placeholder={f.placeholder}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-y" />
              ) : (
                <input type="text" value={data[f.key] ?? ""} onChange={e => set(f.key, e.target.value)} placeholder={f.placeholder}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
              )}
            </div>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <button type="submit" disabled={saving} className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50">
              {saving ? "Saving…" : "Save Changes"}
            </button>
            {saved && <span className="text-sm text-green-500">✓ Saved</span>}
          </div>
        </form>
      )}
    </AdminLayout>
  );
}
