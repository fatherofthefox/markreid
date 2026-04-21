import { useState, useEffect } from "react";
import { AdminLayout, AdminPageHeader } from "@/admin/layout";
import { api } from "@/admin/api";

const SECTION = "tech-ai";
const FIELDS = [
  { key: "headline", label: "Page Headline", placeholder: "Tech & AI" },
  { key: "subheading", label: "Subheading", placeholder: "How I use technology to build better revenue organisations." },
  { key: "intro", label: "Intro Paragraph", multiline: true, placeholder: "Technology isn't the strategy — it's the enabler…" },
  { key: "section_1_title", label: "Section 1 — Title", placeholder: "AI-Augmented Sales Processes" },
  { key: "section_1_body", label: "Section 1 — Body", multiline: true, placeholder: "Description of how AI is used in sales…" },
  { key: "section_2_title", label: "Section 2 — Title", placeholder: "RevOps Infrastructure" },
  { key: "section_2_body", label: "Section 2 — Body", multiline: true, placeholder: "CRM architecture, data hygiene, forecasting…" },
  { key: "section_3_title", label: "Section 3 — Title", placeholder: "Tooling Philosophy" },
  { key: "section_3_body", label: "Section 3 — Body", multiline: true, placeholder: "Less tools, better data, more signal…" },
  { key: "cta_headline", label: "CTA Headline", placeholder: "Want to see what's possible?" },
  { key: "cta_body", label: "CTA Body", placeholder: "Get in touch to discuss how technology can unlock your revenue potential." },
];

export default function AdminPageTechAI() {
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
      <AdminPageHeader title="Tech & AI Page" subtitle="Edit technology and AI content sections" />
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
