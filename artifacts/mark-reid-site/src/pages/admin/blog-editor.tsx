import { useState, useEffect } from "react";
import { useLocation, useParams } from "wouter";
import { AdminLayout, AdminPageHeader } from "@/admin/layout";
import { api } from "@/admin/api";
import { Save, ArrowLeft, Image as ImageIcon } from "lucide-react";

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function BlogEditor() {
  const { id } = useParams<{ id: string }>();
  const isNew = !id || id === "new";
  const [, navigate] = useLocation();

  const [form, setForm] = useState({ title: "", slug: "", excerpt: "", body: "", coverImage: "", readTime: "", published: false });
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isNew) {
      api.posts.get(Number(id)).then(post => { setForm({ ...post }); setLoading(false); }).catch(() => setLoading(false));
    }
  }, [id]);

  const set = (k: keyof typeof form, v: any) => setForm(f => ({ ...f, [k]: v }));

  const handleTitleChange = (v: string) => {
    setForm(f => ({ ...f, title: v, slug: isNew ? slugify(v) : f.slug }));
  };

  const save = async () => {
    setError("");
    setSaving(true);
    try {
      if (isNew) {
        await api.posts.create(form);
      } else {
        await api.posts.update(Number(id), form);
      }
      navigate("/admin/blog");
    } catch (e: any) {
      setError(e.message);
      setSaving(false);
    }
  };

  if (loading) return <AdminLayout><div className="text-muted-foreground">Loading…</div></AdminLayout>;

  return (
    <AdminLayout>
      <AdminPageHeader
        title={isNew ? "New Post" : "Edit Post"}
        action={
          <div className="flex gap-2">
            <button onClick={() => navigate("/admin/blog")} className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50">
              <Save className="w-4 h-4" /> {saving ? "Saving…" : "Save"}
            </button>
          </div>
        }
      />

      {error && <div className="mb-4 p-3 bg-red-400/10 border border-red-400/20 text-red-400 text-sm">{error}</div>}

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Title</label>
            <input type="text" value={form.title} onChange={e => handleTitleChange(e.target.value)}
              className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors text-lg"
              placeholder="Post title…" />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Excerpt</label>
            <textarea value={form.excerpt ?? ""} onChange={e => set("excerpt", e.target.value)} rows={3}
              className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Short summary shown on the blog listing…" />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Body (Markdown supported)</label>
            <textarea value={form.body} onChange={e => set("body", e.target.value)} rows={20}
              className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-y font-mono text-sm"
              placeholder="Write your post here…" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-background border border-border p-5 space-y-4">
            <h3 className="text-sm font-semibold">Post Settings</h3>
            <div>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Slug</label>
              <input type="text" value={form.slug} onChange={e => set("slug", e.target.value)}
                className="w-full bg-[#0a0a0e] border border-border px-3 py-2 text-foreground focus:outline-none focus:border-primary transition-colors text-sm font-mono"
                placeholder="post-slug" />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Read Time</label>
              <input type="text" value={form.readTime ?? ""} onChange={e => set("readTime", e.target.value)}
                className="w-full bg-[#0a0a0e] border border-border px-3 py-2 text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                placeholder="6 min read" />
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="published" checked={form.published} onChange={e => set("published", e.target.checked)}
                className="w-4 h-4 accent-primary" />
              <label htmlFor="published" className="text-sm text-foreground">Published</label>
            </div>
          </div>

          <div className="bg-background border border-border p-5 space-y-3">
            <h3 className="text-sm font-semibold flex items-center gap-2"><ImageIcon className="w-4 h-4" /> Cover Image</h3>
            <input type="text" value={form.coverImage ?? ""} onChange={e => set("coverImage", e.target.value)}
              className="w-full bg-[#0a0a0e] border border-border px-3 py-2 text-foreground focus:outline-none focus:border-primary transition-colors text-sm font-mono"
              placeholder="/uploads/filename.jpg" />
            {form.coverImage && (
              <img src={form.coverImage} alt="Cover" className="w-full aspect-video object-cover border border-border" />
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
