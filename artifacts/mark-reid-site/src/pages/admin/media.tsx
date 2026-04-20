import { useState, useEffect, useRef } from "react";
import { AdminLayout, AdminPageHeader } from "@/admin/layout";
import { api } from "@/admin/api";
import { Upload, Trash2, Copy, Check } from "lucide-react";

export default function AdminMedia() {
  const [files, setFiles] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = () => api.media.list().then(setFiles).catch(() => {});
  useEffect(() => { load(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      await api.media.upload(file);
      load();
    } catch (err: any) {
      alert(err.message);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const remove = async (id: number, name: string) => {
    if (!confirm(`Delete "${name}"?`)) return;
    await api.media.delete(id);
    load();
  };

  const copy = (id: number, url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <AdminLayout>
      <AdminPageHeader
        title="Media Library"
        subtitle="Upload and manage images for use across the site"
        action={
          <label className={`inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors cursor-pointer ${uploading ? "opacity-50 pointer-events-none" : ""}`}>
            <Upload className="w-4 h-4" />
            {uploading ? "Uploading…" : "Upload Image"}
            <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />
          </label>
        }
      />

      {files.length === 0 ? (
        <div
          className="border border-dashed border-border flex flex-col items-center justify-center py-24 text-muted-foreground cursor-pointer hover:border-primary/50 transition-colors"
          onClick={() => inputRef.current?.click()}
        >
          <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
          <p>No images yet. Click to upload.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {files.map(file => (
            <div key={file.id} className="group relative border border-border overflow-hidden bg-background">
              <div className="aspect-square overflow-hidden">
                <img
                  src={file.url}
                  alt={file.originalName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-2">
                <p className="text-xs text-muted-foreground truncate">{file.originalName}</p>
                <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(0)} KB</p>
              </div>
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => copy(file.id, file.url)} className="p-1.5 bg-background/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors">
                  {copied === file.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button onClick={() => remove(file.id, file.originalName)} className="p-1.5 bg-background/90 backdrop-blur-sm border border-border hover:border-red-400/50 hover:text-red-400 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
