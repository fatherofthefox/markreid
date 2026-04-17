import { Layout } from "@/components/layout/layout";
import { Link, useParams } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();

  // In a real app, we'd fetch the post based on the slug.
  // Using placeholder content formatted nicely.
  
  return (
    <Layout>
      <article className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all writing
          </Link>
          
          <header className="mb-16">
            <div className="flex items-center gap-4 text-sm font-mono text-primary mb-6">
              <time>October 12, 2023</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-8">
              The Fallacy of the MVP in Enterprise Contexts
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Why minimum viable products fail when integrated into legacy systems, and how to define a minimum viable architecture instead.
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground
            prose-headings:font-serif prose-headings:text-foreground prose-headings:font-bold
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:text-foreground prose-blockquote:not-italic
            prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-sm prose-code:before:content-none prose-code:after:content-none
          ">
            <p>
              The startup ecosystem gave us the MVP—the Minimum Viable Product. It is a brilliant concept for finding product-market fit when you have zero customers, zero revenue, and zero legacy code. It tells you to build the absolute minimum necessary to test a hypothesis.
            </p>
            
            <p>
              But when you bring the MVP mindset into an enterprise generating $500M in annual revenue on a 15-year-old monolith, it becomes a liability.
            </p>

            <h2>The Integration Chasm</h2>
            
            <p>
              In a startup, an MVP is standalone. In an enterprise, an MVP must integrate. This is the fundamental difference that most "digital transformation" initiatives miss. 
            </p>
            
            <p>
              You can build a beautiful, modern frontend in React in three weeks. You can stand up a microservice in Go in an afternoon. But if that service needs to write data back to a legacy DB2 instance that expects batch updates at midnight, your "agile" project just hit a brick wall.
            </p>

            <blockquote>
              The complexity in enterprise software is rarely in the new feature. The complexity is entirely in the integration with the existing reality.
            </blockquote>

            <h2>Minimum Viable Architecture</h2>
            
            <p>
              Instead of an MVP, enterprises need an MVA: Minimum Viable Architecture. Before you build a single user-facing feature, you must establish the structural patterns that allow the new system to safely co-exist with the old.
            </p>
            
            <ul>
              <li><strong>The Strangler Facade:</strong> An API gateway that routes traffic between old and new without the client knowing.</li>
              <li><strong>The Anti-Corruption Layer:</strong> A translation mechanism so your new domain model isn't polluted by legacy database schemas.</li>
              <li><strong>Data Synchronization:</strong> The event-driven pipes that keep the legacy system and the new system eventually consistent during the migration phase.</li>
            </ul>

            <h2>The Cost of Ignorance</h2>

            <p>
              When teams ignore MVA in favor of MVP, they inevitably build a shadow system. They extract the data they need, build their feature, and ignore the write-back problem. The business celebrates a rapid launch.
            </p>
            
            <p>
              Six months later, data is out of sync. Customer support is looking at two different systems. The "agile" team is spending 80% of their time manually reconciling state. The MVP didn't solve a business problem; it just created a new operational nightmare.
            </p>

            <p>
              Do not build MVPs in the enterprise. Build MVAs. Solve the integration problem first, because if you don't, it will be the only problem you ever solve.
            </p>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Share this essay</span>
              <div className="flex gap-4">
                <button className="text-muted-foreground hover:text-primary transition-colors">Twitter</button>
                <button className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</button>
                <button className="text-muted-foreground hover:text-primary transition-colors">Copy Link</button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
