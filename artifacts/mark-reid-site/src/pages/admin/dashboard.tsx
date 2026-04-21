import { useState, useEffect } from "react";
import { AdminLayout, AdminPageHeader } from "@/admin/layout";
import { useAdmin } from "@/admin/context";
import { api } from "@/admin/api";
import { Link } from "wouter";
import {
  FileText, Layers, Image, ArrowRight, ShieldCheck,
  Home, User, Cpu, Briefcase, BookOpen, PenSquare
} from "lucide-react";

export default function AdminDashboard() {
  const { user } = useAdmin();
  const [stats, setStats] = useState({ posts: 0, frameworks: 0, media: 0 });

  useEffect(() => {
    Promise.all([api.posts.list(), api.frameworks.list(), api.media.list()])
      .then(([posts, frameworks, media]) => {
        setStats({ posts: posts.length, frameworks: frameworks.length, media: media.length });
      })
      .catch(() => {});
  }, []);

  const pageEditors = [
    { label: "Home", href: "/admin/pages/home", icon: Home, description: "Hero text, stats, and section copy" },
    { label: "About", href: "/admin/pages/about", icon: User, description: "Bio, expertise items, social links" },
    { label: "Tech & AI", href: "/admin/pages/tech-ai", icon: Cpu, description: "Technology and AI content sections" },
    { label: "Advisory", href: "/admin/pages/advisory", icon: Briefcase, description: "Services, engagement model, CTA" },
    { label: "Content", href: "/admin/pages/content", icon: BookOpen, description: "Writing section and topics" },
    { label: "Frameworks", href: "/admin/frameworks", icon: Layers, description: "MEDDIC, FAINT, SPIN, Challenger…" },
  ];

  return (
    <AdminLayout>
      <AdminPageHeader title="Dashboard" subtitle={`Logged in as ${user?.email}`} />

      {/* Page Editors */}
      <div className="mb-10">
        <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Edit Pages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pageEditors.map(item => (
            <Link key={item.label} href={item.href}>
              <div className="bg-background border border-border p-5 hover:border-primary/50 transition-colors group cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 transform" />
                </div>
                <div className="font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Content & Media */}
      <div className="mb-10">
        <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Manage Content</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
          {[
            { label: "Blog Posts", count: stats.posts, href: "/admin/blog", icon: PenSquare },
            { label: "Media Library", count: stats.media, href: "/admin/media", icon: Image },
          ].map(item => (
            <Link key={item.label} href={item.href}>
              <div className="bg-background border border-border p-5 hover:border-primary/50 transition-colors group cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 transform" />
                </div>
                <div className="text-2xl font-bold font-serif mb-1">{item.count}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-background border border-border p-5 max-w-md">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-sm">Security</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Protect your account with two-factor authentication via Google Authenticator, Authy, or any TOTP app.
        </p>
        <Link href="/admin/security" className="text-sm text-primary hover:text-primary/80 transition-colors">
          Manage MFA settings →
        </Link>
      </div>
    </AdminLayout>
  );
}
