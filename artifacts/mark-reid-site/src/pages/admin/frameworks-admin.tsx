import { useState, useEffect } from "react";
import { useLocation, useParams } from "wouter";
import { AdminLayout, AdminPageHeader } from "@/admin/layout";
import { api } from "@/admin/api";
import { Plus, Pencil, Trash2, Save, ArrowLeft } from "lucide-react";

function FrameworksList() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [, navigate] = useLocation();

  const load = () => api.frameworks.list().then(setRows).finally(() => setLoading(false));
  useEffect(() => { load(); }, []);

  const remove = async (id: number, title: string) => {
    if (!confirm(`Delete "${title}"?`)) return;
    await api.frameworks.delete(id);
    load();
  };

  return (
    <AdminLayout>
      <AdminPageHeader
        title="Frameworks"
        subtitle="Manage the sales frameworks displayed on the site"
        action={
          <button onClick={() => navigate("/admin/frameworks/new")} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" /> New Framework
          </button>
        }
      />
      {loading ? <div className="text-muted-foreground text-sm">Loading…</div> : (
        <div className="divide-y divide-border border border-border">
          {rows.map(fw => (
            <div key={fw.id} className="flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors">
              <div>
                <div className="font-medium text-foreground">{fw.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{fw.category}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => navigate(`/admin/frameworks/${fw.id}`)} className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => remove(fw.id, fw.title)} className="p-2 text-muted-foreground hover:text-red-400 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}

function FrameworkEditor() {
  const { id } = useParams<{ id: string }>();
  const isNew = !id || id === "new";
  const [, navigate] = useLocation();

  const [form, setForm] = useState({ slug: "", title: "", category: "", description: "", details: "", letters: "", sortOrder: 0 });
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isNew) {
      api.frameworks.get(Number(id)).then(fw => {
        setForm({ ...fw, letters: fw.letters ? JSON.stringify(fw.letters, null, 2) : "" });
        setLoading(false);
      });
    }
  }, [id]);

  const set = (k: keyof typeof form, v: any) => setForm(f => ({ ...f, [k]: v }));

  const save = async () => {
    setError("");
    setSaving(true);
    try {
      let letters: any = null;
      if (form.letters.trim()) {
        try { letters = JSON.parse(form.letters); } catch { throw new Error("Letters field is not valid JSON"); }
      }
      const data = { ...form, letters, sortOrder: Number(form.sortOrder) };
      if (isNew) await api.frameworks.create(data);
      else await api.frameworks.update(Number(id), data);
      navigate("/admin/frameworks");
    } catch (e: any) {
      setError(e.message);
      setSaving(false);
    }
  };

  if (loading) return <AdminLayout><div className="text-muted-foreground">Loading…</div></AdminLayout>;

  return (
    <AdminLayout>
      <AdminPageHeader
        title={isNew ? "New Framework" : "Edit Framework"}
        action={
          <div className="flex gap-2">
            <button onClick={() => navigate("/admin/frameworks")} className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50">
              <Save className="w-4 h-4" /> {saving ? "Saving…" : "Save"}
            </button>
          </div>
        }
      />
      {error && <div className="mb-4 p-3 bg-red-400/10 border border-red-400/20 text-red-400 text-sm">{error}</div>}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {[
            { label: "Title", key: "title", placeholder: "MEDDIC" },
            { label: "Slug", key: "slug", placeholder: "meddic" },
            { label: "Category", key: "category", placeholder: "Qualification Framework" },
          ].map(f => (
            <div key={f.key}>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">{f.label}</label>
              <input type="text" value={(form as any)[f.key]} onChange={e => set(f.key as any, e.target.value)}
                className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder={f.placeholder} />
            </div>
          ))}
          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Sort Order</label>
            <input type="number" value={form.sortOrder} onChange={e => set("sortOrder", e.target.value)}
              className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Description (one line)</label>
            <textarea value={form.description} onChange={e => set("description", e.target.value)} rows={3}
              className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Details (full explanation)</label>
            <textarea value={form.details} onChange={e => set("details", e.target.value)} rows={6}
              className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-y" />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Letters (JSON array, optional)</label>
            <textarea value={form.letters} onChange={e => set("letters", e.target.value)} rows={8}
              className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-y font-mono text-xs"
              placeholder={'[\n  {"letter":"M","label":"Metrics","desc":"..."}\n]'} />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default function FrameworksAdmin() {
  const { id } = useParams<{ id?: string }>();
  return id ? <FrameworkEditor /> : <FrameworksList />;
}
