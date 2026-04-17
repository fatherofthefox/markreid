import { Layout } from "@/components/layout/layout";
import { ArrowRight, Mail, MapPin, Calendar, Clock } from "lucide-react";

export default function Advisory() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column */}
          <div>
            <h1 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">Advisory</h1>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-foreground leading-tight">
              Strategic counsel for revenue and growth leaders.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light mb-12">
              I work with founders, CEOs, and commercial leaders who need to build or accelerate their enterprise sales motion — with a focus on pipeline quality, team structure, and the methodology that holds it together.
            </p>

            <div className="space-y-12">
              <div className="border-l border-border pl-8 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[1.5px] top-2"></div>
                <h3 className="text-2xl font-serif font-bold mb-3">Sales Process Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building a repeatable, documented sales process from the ground up — or pressure-testing an existing one. Covers ICP definition, qualification frameworks, discovery methodology, deal stages, and the exit criteria that make pipeline reviews meaningful rather than theatrical.
                </p>
              </div>

              <div className="border-l border-border pl-8 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[1.5px] top-2"></div>
                <h3 className="text-2xl font-serif font-bold mb-3">Growth Team Build-Out</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Helping leadership teams define the roles they need, hire into them effectively, structure comp and incentives to drive the right behaviour, and put in place the coaching cadence that turns methodology into habit. Most growth teams hire too fast and coach too little.
                </p>
              </div>

              <div className="border-l border-border pl-8 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[1.5px] top-2"></div>
                <h3 className="text-2xl font-serif font-bold mb-3">Pipeline &amp; Forecast Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Turning pipeline from a vanity metric into a usable forecasting tool. This means embedding MEDDIC or FAINT at the deal level, restructuring pipeline reviews around qualification rather than status updates, and creating the data discipline that makes forecasts you can actually rely on.
                </p>
              </div>

              <div className="border-l border-border pl-8 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[1.5px] top-2"></div>
                <h3 className="text-2xl font-serif font-bold mb-3">Enterprise Sales Motion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specifically for companies moving upmarket into enterprise — where the sales cycle is longer, the buying committee is larger, and the qualification bar is completely different. Covers champion development, multi-threading, procurement navigation, and how to run a proof of concept that actually advances the deal.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column — Engagement Info */}
          <div className="lg:pl-12">
            <div className="bg-[#0a0a0e] border border-border p-8 md:p-10 sticky top-32">
              <h3 className="text-xl font-serif font-bold mb-6">Current Availability</h3>

              <div className="space-y-4 mb-8 text-sm font-mono">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-3 text-primary" />
                  <span>Accepting new engagements now</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-3 text-primary" />
                  <span>Minimum engagement: 3 months</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-3 text-primary" />
                  <span>Global — Remote / Onsite by arrangement</span>
                </div>
              </div>

              <div className="h-px bg-border my-8"></div>

              <h4 className="font-semibold mb-4">Start a conversation</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Tell me briefly about your situation — the team, the stage, and what you're trying to solve.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    data-testid="input-name"
                    className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Organisation</label>
                  <input
                    type="text"
                    data-testid="input-org"
                    className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    data-testid="input-email"
                    className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">What are you working on?</label>
                  <textarea
                    data-testid="input-context"
                    className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground min-h-[120px] resize-none"
                    placeholder="Brief overview of your team, stage, and the challenge you're facing..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  data-testid="btn-submit-inquiry"
                  className="w-full bg-primary text-primary-foreground font-semibold py-4 hover:bg-primary/90 transition-colors flex items-center justify-center group"
                >
                  Send Message <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <a href="mailto:mark@markreid.online" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <Mail className="w-3 h-3 mr-2" /> Or email directly: mark@markreid.online
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
