import { Link, useLocation } from "wouter";
import { useAdmin } from "./context";
import { LogOut, FileText, Layers, Image, LayoutDashboard, ChevronRight } from "lucide-react";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/blog", label: "Blog", icon: FileText },
  { href: "/admin/frameworks", label: "Frameworks", icon: Layers },
  { href: "/admin/media", label: "Media", icon: Image },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAdmin();
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-foreground flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border flex flex-col shrink-0">
        <div className="p-6 border-b border-border">
          <Link href="/" className="font-serif text-xl font-bold text-foreground hover:text-primary transition-colors">
            Mark Reid<span className="text-primary">.</span>
          </Link>
          <div className="text-xs text-muted-foreground mt-1 font-mono">CMS Admin</div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors rounded-sm ${
                location.startsWith(href)
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="text-xs text-muted-foreground font-mono mb-3 truncate">{user?.email}</div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}

export function AdminPageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-2xl font-serif font-bold text-foreground">{title}</h1>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
