import { useState, useEffect } from "react";
import { AdminLayout, AdminPageHeader } from "@/admin/layout";
import { api } from "@/admin/api";

const SECTION = "content-page";
const FIELDS = [
  { key: "headline", label: "Page Headline", placeholder: "Content & Writing" },
  { key: "subheading", label: "Subheading", placeholder: "Thoughts on sales, leadership, and building high-performance teams." },
  { key: "intro", label: "Intro Paragraph", multiline: true, placeholder: "I write about what I've learned leading sales organisations…" },
  { key: "featured_topic_1", label: "Featured Topic 1", placeholder: "Sales Methodology" },
  { key: "featured_topic_2", label: "Featured Topic 2", placeholder: "Revenue Operations" },
  { key: "featured_topic_3", label: "Featured Topic 3", placeholder: "Leadership" },
  { key: "featured_topic_4", label: "Featured Topic 4", placeholder: "AI in Sales" },
  { key: "newsletter_headline", label: "Newsletter CTA Headline", placeholder: "Get the latest in your inbox" },
  { key: "newsletter_body", label: "Newsletter CTA Body", placeholder: "Occasional essays on sales leadership and revenue strategy." },
  { key: "newsletter_cta", label: "Newsletter Button Text", placeholder: "Subscribe" },
];

export default function AdminPageContent() {
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
      <AdminPageHeader title="Content Page" subtitle="Edit the writing and content section copy" />
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
