import { Layout } from "@/components/layout/layout";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, TrendingUp, Users, Target } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-background/50 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono tracking-wider text-muted-foreground uppercase">Available for Advisory Engagements</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[1.1] mb-8 text-foreground">
              Building revenue engines that<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-blue-500">actually scale.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl font-light">
              I build and lead growth teams, design sales processes, and help organisations move from opportunistic selling to a repeatable, high-performance revenue machine.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/advisory"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all group"
                data-testid="cta-advisory"
              >
                Work with Me
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/frameworks"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all border border-border"
                data-testid="cta-frameworks"
              >
                Sales Frameworks I Believe In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-32 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Core Philosophy</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Revenue is a system, not a target.</h3>
            </div>
            <Link href="/frameworks" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group">
              View all frameworks <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background border border-border group hover:border-primary/50 transition-colors">
              <Target className="w-10 h-10 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-4 font-serif">Qualify Ruthlessly</h4>
              <p className="text-muted-foreground leading-relaxed">
                Frameworks like MEDDIC and FAINT exist because hope is not a sales strategy. Knowing exactly who to pursue — and who to walk away from — is the difference between a productive pipeline and a clogged one.
              </p>
            </div>
            <div className="p-8 bg-background border border-border group hover:border-primary/50 transition-colors">
              <Users className="w-10 h-10 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-4 font-serif">Build the Team First</h4>
              <p className="text-muted-foreground leading-relaxed">
                Growth is a team sport. The best process in the world underperforms with the wrong people. I spend as much time on hiring, coaching, and incentive design as I do on pipeline and process.
              </p>
            </div>
            <div className="p-8 bg-background border border-border group hover:border-primary/50 transition-colors">
              <TrendingUp className="w-10 h-10 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-4 font-serif">Make it Repeatable</h4>
              <p className="text-muted-foreground leading-relaxed">
                Individual heroics don't compound. The goal is always a documented, trainable, improvable process — one that works even when the star performer has an off quarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEDDIC Teaser */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Featured Framework</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">MEDDIC — The Qualification Standard</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every serious enterprise sales team should be running a structured qualification framework. MEDDIC is the one I return to most consistently — not because it's fashionable, but because it exposes the real blockers before you've invested three months in a deal that was never going to close.
              </p>
              <Link href="/frameworks" className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors">
                See All Frameworks
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-2xl opacity-50"></div>
              <div className="relative bg-[#0d0d12] border border-border p-8 shadow-2xl font-mono text-sm">
                <div className="flex gap-2 mb-6 border-b border-border/50 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-4 text-xs text-muted-foreground">MEDDIC Qualification Checklist</span>
                </div>
                <div className="space-y-3 text-foreground leading-relaxed">
                  <div><span className="text-primary font-bold">M</span> — <span className="text-gray-400">Metrics</span> — What is the measurable impact?</div>
                  <div><span className="text-primary font-bold">E</span> — <span className="text-gray-400">Economic Buyer</span> — Have you met the person with budget?</div>
                  <div><span className="text-primary font-bold">D</span> — <span className="text-gray-400">Decision Criteria</span> — How will they evaluate?</div>
                  <div><span className="text-primary font-bold">D</span> — <span className="text-gray-400">Decision Process</span> — What are the steps to yes?</div>
                  <div><span className="text-primary font-bold">I</span> — <span className="text-gray-400">Identify Pain</span> — What's the cost of doing nothing?</div>
                  <div><span className="text-primary font-bold">C</span> — <span className="text-gray-400">Champion</span> — Who is selling for you internally?</div>
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
                title: "Why Most Pipeline Reviews Are a Waste of Time",
                date: "Mar 18, 2024",
                excerpt: "If your pipeline review is just a deal status update meeting, you're solving the wrong problem. Here's what a real pipeline review looks like.",
                slug: "pipeline-reviews"
              },
              {
                title: "The Champion Problem: How Deals Die Quietly",
                date: "Feb 04, 2024",
                excerpt: "A champion who can't mobilise internal support isn't a champion — they're a contact. The difference matters more than most reps realise.",
                slug: "the-champion-problem"
              }
            ].map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={i} className="group block">
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
