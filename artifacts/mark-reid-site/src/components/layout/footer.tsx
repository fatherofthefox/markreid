import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-foreground inline-block mb-4">
              Mark Reid<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Senior technology leader, strategist, and advisor. Operating at the intersection of technology strategy, enterprise transformation, and thought leadership.
            </p>
          </div>
          
          <div>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">Navigation</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/tech-ai" className="text-muted-foreground hover:text-primary transition-colors">Tech & AI</Link></li>
              <li><Link href="/frameworks" className="text-muted-foreground hover:text-primary transition-colors">Frameworks</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Writing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">Engage</h3>
            <ul className="space-y-4">
              <li><Link href="/advisory" className="text-muted-foreground hover:text-primary transition-colors">Advisory Services</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter / X</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
              <li><Link href="/admin/login" className="text-muted-foreground/50 hover:text-primary transition-colors text-sm">Admin</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mark Reid. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
