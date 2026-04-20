import { useState, useEffect } from "react";
import { Link } from "wouter";
import { AdminLayout, AdminPageHeader } from "@/admin/layout";
import { api } from "@/admin/api";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";

export default function AdminBlog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => api.posts.list().then(setPosts).finally(() => setLoading(false));
  useEffect(() => { load(); }, []);

  const remove = async (id: number, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await api.posts.delete(id);
    load();
  };

  return (
    <AdminLayout>
      <AdminPageHeader
        title="Blog Posts"
        subtitle="Create and manage your essays and articles"
        action={
          <Link href="/admin/blog/new">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" /> New Post
            </button>
          </Link>
        }
      />

      {loading ? (
        <div className="text-muted-foreground text-sm">Loading…</div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground border border-border border-dashed">
          <p className="mb-4">No posts yet.</p>
          <Link href="/admin/blog/new">
            <button className="text-primary hover:underline text-sm">Create your first post →</button>
          </Link>
        </div>
      ) : (
        <div className="divide-y divide-border border border-border">
          {posts.map(post => (
            <div key={post.id} className="flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors">
              <div className="flex items-center gap-4">
                {post.published
                  ? <Eye className="w-4 h-4 text-green-400 shrink-0" />
                  : <EyeOff className="w-4 h-4 text-muted-foreground shrink-0" />}
                <div>
                  <div className="font-medium text-foreground">{post.title}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-0.5">{post.slug} · {post.readTime ?? "—"}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link href={`/admin/blog/${post.id}`}>
                  <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Pencil className="w-4 h-4" />
                  </button>
                </Link>
                <button onClick={() => remove(post.id, post.title)} className="p-2 text-muted-foreground hover:text-red-400 transition-colors">
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
