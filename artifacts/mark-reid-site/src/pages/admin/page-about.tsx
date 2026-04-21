import { useState, useEffect } from "react";
import { AdminLayout, AdminPageHeader } from "@/admin/layout";
import { api } from "@/admin/api";

const SECTION = "about";
const FIELDS = [
  { key: "headline", label: "Page Headline", placeholder: "About Mark Reid" },
  { key: "subheading", label: "Subheading", placeholder: "I build growth teams and the systems that make them work." },
  { key: "bio_1", label: "Bio Paragraph 1", multiline: true, placeholder: "First paragraph of your bio…" },
  { key: "bio_2", label: "Bio Paragraph 2", multiline: true, placeholder: "Second paragraph…" },
  { key: "bio_3", label: "Bio Paragraph 3", multiline: true, placeholder: "Third paragraph…" },
  { key: "linkedin_url", label: "LinkedIn URL", placeholder: "https://linkedin.com/in/yourhandle" },
  { key: "twitter_url", label: "Twitter / X URL", placeholder: "https://x.com/yourhandle" },
  { key: "github_url", label: "GitHub URL", placeholder: "https://github.com/yourhandle" },
  { key: "expertise_1", label: "Expertise Item 1", placeholder: "Enterprise Sales Leadership" },
  { key: "expertise_2", label: "Expertise Item 2", placeholder: "Revenue Operations" },
  { key: "expertise_3", label: "Expertise Item 3", placeholder: "MEDDIC / FAINT Methodologies" },
  { key: "expertise_4", label: "Expertise Item 4", placeholder: "GTM Strategy" },
  { key: "expertise_5", label: "Expertise Item 5", placeholder: "Team Building & Coaching" },
  { key: "expertise_6", label: "Expertise Item 6", placeholder: "Sales Process Design" },
];

export default function AdminPageAbout() {
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
      <AdminPageHeader title="About Page" subtitle="Edit bio, expertise, and social links" />
      {loading ? (
        <div className="flex items-center justify-center h-40 text-muted-foreground">Loading…</div>
      ) : (
        <form onSubmit={save} className="max-w-2xl space-y-6">
          {FIELDS.map(f => (
            <div key={f.key}>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{f.label}</label>
              {f.multiline ? (
                <textarea
                  rows={4}
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
