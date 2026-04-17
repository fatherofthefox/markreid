import { Layout } from "@/components/layout/layout";
import { Link } from "wouter";
import { ArrowRight, Mail, MapPin, Calendar, Clock } from "lucide-react";

export default function Advisory() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Content */}
          <div>
            <h1 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">Advisory Services</h1>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-foreground leading-tight">
              Strategic counsel for technical leadership.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light mb-12">
              I act as a confidential advisor to CTOs, engineering VPs, and boards, providing objective analysis on architecture, AI strategy, and technical debt.
            </p>

            <div className="space-y-12">
              <div className="border-l border-border pl-8 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[1.5px] top-2"></div>
                <h3 className="text-2xl font-serif font-bold mb-3">Architectural Review</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A rigorous, zero-bullshit assessment of your current system architecture. I identify structural bottlenecks, security vulnerabilities, and scaling limits before they become critical failures.
                </p>
              </div>

              <div className="border-l border-border pl-8 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[1.5px] top-2"></div>
                <h3 className="text-2xl font-serif font-bold mb-3">AI Integration Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Moving beyond proof-of-concepts to production-grade AI. I help teams design deterministic workflows, vector data pipelines, and security boundaries for deploying LLMs inside the enterprise firewall.
                </p>
              </div>

              <div className="border-l border-border pl-8 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[1.5px] top-2"></div>
                <h3 className="text-2xl font-serif font-bold mb-3">Due Diligence (M&A)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technical assessment of target acquisitions. I look past the pitch deck to evaluate the real state of the codebase, the scalability of the architecture, and the competence of the engineering team.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Engagement Form/Info */}
          <div className="lg:pl-12">
            <div className="bg-[#0a0a0e] border border-border p-8 md:p-10 sticky top-32">
              <h3 className="text-xl font-serif font-bold mb-6">Current Availability</h3>
              
              <div className="space-y-4 mb-8 text-sm font-mono">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-3 text-primary" />
                  <span>Accepting retainers for Q3 2024</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-3 text-primary" />
                  <span>Minimum engagement: 3 months</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-3 text-primary" />
                  <span>Global (Remote) / Quarterly Onsite</span>
                </div>
              </div>

              <div className="h-px bg-border my-8"></div>

              <h4 className="font-semibold mb-4">Request a consultation</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Please provide context on your technical challenges and organizational scale.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Organization</label>
                  <input 
                    type="text" 
                    className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                    placeholder="jane@acme.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Context</label>
                  <textarea 
                    className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground min-h-[120px] resize-none"
                    placeholder="Brief overview of your technical situation..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground font-semibold py-4 hover:bg-primary/90 transition-colors flex items-center justify-center group"
                  data-testid="btn-submit-inquiry"
                >
                  Submit Inquiry <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <a href="mailto:contact@markreid.online" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <Mail className="w-3 h-3 mr-2" /> Or email directly
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
