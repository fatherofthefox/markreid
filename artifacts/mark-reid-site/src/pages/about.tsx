import { Layout } from "@/components/layout/layout";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">About Mark Reid</h1>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12 text-foreground leading-tight">
            I bridge the gap between engineering reality and board-level strategy.
          </h2>
          
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="aspect-[3/4] bg-secondary border border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
              {/* Fallback image style since actual portrait isn't provided */}
              <div className="w-full h-full bg-[#1a1a24] flex items-center justify-center p-8">
                <div className="text-primary/40 font-mono text-sm transform -rotate-90 origin-center tracking-widest whitespace-nowrap">
                  MARK REID / EST. 2005
                </div>
              </div>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
              <p className="lead text-xl text-foreground font-light mb-8">
                For the past two decades, I've led engineering teams through massive technical transformations. I don't deal in hype; I deal in scale, security, and sustainable architecture.
              </p>
              
              <p className="mb-6">
                My background spans from early-stage startups scaling past their first million users to Fortune 500 enterprises untangling decades of legacy code. What I've learned is that technology problems are rarely just technology problems—they are organizational structure problems masquerading as code.
              </p>
              
              <h3 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">My Philosophy</h3>
              
              <p className="mb-6">
                <strong>Simplicity is earned.</strong> You don't start with a simple system; you arrive at one after deeply understanding the complexity of the domain.
              </p>
              
              <p className="mb-6">
                <strong>Architecture is a communication structure.</strong> Conway's Law is absolute. If your organizational chart doesn't match your intended architecture, your architecture will eventually match your organizational chart.
              </p>
              
              <p className="mb-6">
                <strong>Boring is better.</strong> I prefer established, boring technology for the core of the business and reserve innovation tokens for areas that actually drive competitive advantage. A PostgreSQL database that works is infinitely better than a distributed, polyglot persistence layer that no one understands.
              </p>
              
              <h3 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">Current Focus</h3>
              
              <p>
                Presently, I spend my time advising executive teams on how to pragmatically adopt AI and LLMs within enterprise constraints—focusing on deterministic workflows, data privacy (Zero-Trust), and measurable ROI rather than chatbots and novelties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
