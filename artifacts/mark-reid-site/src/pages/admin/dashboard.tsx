import { useState, useEffect } from "react";
import { AdminLayout, AdminPageHeader } from "@/admin/layout";
import { useAdmin } from "@/admin/context";
import { api } from "@/admin/api";
import { Link } from "wouter";
import { FileText, Layers, Image, ArrowRight, ShieldCheck } from "lucide-react";

export default function AdminDashboard() {
  const { user } = useAdmin();
  const [stats, setStats] = useState({ posts: 0, frameworks: 0, media: 0 });

  useEffect(() => {
    Promise.all([api.posts.list(), api.frameworks.list(), api.media.list()]).then(([posts, frameworks, media]) => {
      setStats({ posts: posts.length, frameworks: frameworks.length, media: media.length });
    }).catch(() => {});
  }, []);

  return (
    <AdminLayout>
      <AdminPageHeader
        title={`Welcome back`}
        subtitle={user?.email}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          { label: "Blog Posts", count: stats.posts, href: "/admin/blog", icon: FileText },
          { label: "Frameworks", count: stats.frameworks, href: "/admin/frameworks", icon: Layers },
          { label: "Media Files", count: stats.media, href: "/admin/media", icon: Image },
        ].map(item => (
          <Link key={item.label} href={item.href}>
            <div className="bg-background border border-border p-6 hover:border-primary/40 transition-colors group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <item.icon className="w-5 h-5 text-primary" />
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 transform" />
              </div>
              <div className="text-3xl font-bold font-serif mb-1">{item.count}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-background border border-border p-6 max-w-lg">
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-sm">Security</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">Protect your account with two-factor authentication using any TOTP authenticator app (Google Authenticator, Authy, etc.).</p>
        <Link href="/admin/security" className="text-sm text-primary hover:text-primary/80 transition-colors">
          Manage MFA settings →
        </Link>
      </div>
    </AdminLayout>
  );
}
