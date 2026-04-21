import { useState, useEffect } from "react";
import { AdminLayout, AdminPageHeader } from "@/admin/layout";
import { api } from "@/admin/api";

const SECTION = "home";
const FIELDS = [
  { key: "hero_badge", label: "Availability Badge", placeholder: "Available for Advisory Engagements" },
  { key: "hero_headline", label: "Hero Headline", placeholder: "Building revenue engines that actually scale.", multiline: true },
  { key: "hero_subtext", label: "Hero Subtitle", placeholder: "I build and lead growth teams...", multiline: true },
  { key: "hero_cta_primary", label: "Primary Button Text", placeholder: "Work With Me" },
  { key: "hero_cta_secondary", label: "Secondary Button Text", placeholder: "Explore My Work" },
  { key: "stat_1_number", label: "Stat 1 — Number", placeholder: "15+" },
  { key: "stat_1_label", label: "Stat 1 — Label", placeholder: "Years Experience" },
  { key: "stat_2_number", label: "Stat 2 — Number", placeholder: "£2B+" },
  { key: "stat_2_label", label: "Stat 2 — Label", placeholder: "Pipeline Generated" },
  { key: "stat_3_number", label: "Stat 3 — Number", placeholder: "40+" },
  { key: "stat_3_label", label: "Stat 3 — Label", placeholder: "Enterprise Deals Closed" },
  { key: "section2_headline", label: "Section 2 Headline", placeholder: "Not just strategy. Execution.", multiline: false },
  { key: "section2_body", label: "Section 2 Body", placeholder: "Most advisors talk strategy...", multiline: true },
];

export default function AdminPageHome() {
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
      <AdminPageHeader title="Home Page" subtitle="Edit hero text, stats, and section copy" />
      {loading ? (
        <div className="flex items-center justify-center h-40 text-muted-foreground">Loading…</div>
      ) : (
        <form onSubmit={save} className="max-w-2xl space-y-6">
          {FIELDS.map(f => (
            <div key={f.key}>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{f.label}</label>
              {f.multiline ? (
                <textarea
                  rows={3}
                  value={data[f.key] ?? ""}
                  onChange={e => set(f.key, e.target.value)}
                  placeholder={f.placeholder}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-y"
                />
              ) : (
                <input
                  type="text"
                  value={data[f.key] ?? ""}
                  onChange={e => set(f.key, e.target.value)}
                  placeholder={f.placeholder}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                />
              )}
            </div>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save Changes"}
            </button>
            {saved && <span className="text-sm text-green-500">✓ Saved</span>}
          </div>
        </form>
      )}
    </AdminLayout>
  );
}
