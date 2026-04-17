import { Layout } from "@/components/layout/layout";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Cpu, Layers, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-background/50 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono tracking-wider text-muted-foreground uppercase">Accepting Q3 Advisory Engagements</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[1.1] mb-8 text-foreground">
              Architecture for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-blue-500">intelligent enterprise.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl font-light">
              I advise Fortune 500 boards and engineering organizations on modern system design, AI integration, and technical strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/advisory" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all group"
                data-testid="cta-advisory"
              >
                Advisory Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/tech-ai" 
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all border border-border"
                data-testid="cta-tech"
              >
                Explore My AI Frameworks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-32 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Core Philosophy</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Earned authority through grounded practice.</h3>
            </div>
            <Link href="/frameworks" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group">
              View all frameworks <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background border border-border group hover:border-primary/50 transition-colors">
              <Layers className="w-10 h-10 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-4 font-serif">Domain-Driven Design</h4>
              <p className="text-muted-foreground leading-relaxed">
                Complexity isn't eliminated; it's isolated. Aligning software architecture with business reality is the only sustainable path to scale.
              </p>
            </div>
            <div className="p-8 bg-background border border-border group hover:border-primary/50 transition-colors">
              <Cpu className="w-10 h-10 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-4 font-serif">Pragmatic AI</h4>
              <p className="text-muted-foreground leading-relaxed">
                Beyond the hype lies massive utility. I implement AI where it delivers compounding value, replacing manual cognitive load with deterministic agents.
              </p>
            </div>
            <div className="p-8 bg-background border border-border group hover:border-primary/50 transition-colors">
              <ShieldCheck className="w-10 h-10 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-4 font-serif">Zero-Trust Security</h4>
              <p className="text-muted-foreground leading-relaxed">
                Trust is a vulnerability. Modern enterprise architecture demands identity-centric security at every boundary and data at rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Elite Five Teaser */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Featured Artifact</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">The Enterprise Elite Five</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My definitive system prompt for simulating a council of 5 Senior Engineering Leads from FAANG and Fortune 500 backgrounds. Used by technical teams to stress-test architecture before writing a single line of code.
              </p>
              <Link href="/tech-ai" className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors">
                Read the System Prompt
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-2xl opacity-50"></div>
              <div className="relative bg-[#0d0d12] border border-border p-8 shadow-2xl font-mono text-sm">
                <div className="flex gap-2 mb-6 border-b border-border/50 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-primary/80 mb-2">/* Context: System Prompt */</div>
                <div className="text-foreground leading-relaxed">
                  <span className="text-blue-400">Act</span> as a Council of 5 Senior Engineering Leads, each with 15+ years of experience from FAANG and Fortune 500 backgrounds.<br/><br/>
                  You will operate as a unified '<span className="text-yellow-400">Squad</span>' to solve complex enterprise problems...
                </div>
                <div className="mt-8 pt-4 border-t border-border/50 text-muted-foreground">
                  View full artifact →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Writing */}
      <section className="py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Notes & Essays</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Recent Thinking</h3>
            </div>
            <Link href="/blog" className="hidden md:inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group">
              Read all posts <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "The Fallacy of the MVP in Enterprise Contexts",
                date: "Oct 12, 2023",
                excerpt: "Why minimum viable products fail when integrated into legacy systems, and how to define a minimum viable architecture instead."
              },
              {
                title: "Deconstructing the Monolith: A Practical Guide",
                date: "Sep 28, 2023",
                excerpt: "Strangler fig patterns, bounded contexts, and the political reality of breaking apart systems that generate revenue."
              }
            ].map((post, i) => (
              <Link href={`/blog/post-${i}`} key={i} className="group block">
                <article className="border-b border-border pb-8">
                  <time className="text-sm font-mono text-muted-foreground mb-3 block">{post.date}</time>
                  <h4 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 md:hidden">
            <Link href="/blog" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group">
              Read all posts <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
