import { Layout } from "@/components/layout/layout";
import { FadeUp, FadeIn } from "@/components/ui/animate";

export default function TechAI() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <FadeUp className="max-w-4xl mx-auto mb-20">
          <h1 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">Tech &amp; AI</h1>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-foreground leading-tight">
            AI as a tool for growth teams — not a replacement for them.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            I'm interested in how AI and modern tooling can sharpen the way sales and growth teams work — better prospecting signals, smarter qualification inputs, faster research. What I'm not interested in is AI as a substitute for the human judgment that closes enterprise deals.
          </p>
        </FadeUp>

        {/* Editorial content */}
        <FadeIn delay={0.1} className="max-w-3xl mx-auto mb-32 prose prose-invert prose-lg
          prose-headings:font-serif prose-headings:text-foreground prose-headings:font-bold
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-strong:text-foreground
          prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:text-foreground prose-blockquote:not-italic
        ">
          <p>
            The most effective use of AI I've seen in a sales context is mundane: summarising call transcripts, flagging when a deal's MEDDIC criteria haven't been updated in two weeks, drafting first-pass outreach for a rep to personalise. Time-saving, not intelligence-replacing.
          </p>

          <p>
            Where teams get into trouble is treating AI as a shortcut past the hard parts — discovery, champion development, navigating a procurement process. Those require presence, adaptability, and earned trust. A language model can help you prepare for the conversation. It can't have it for you.
          </p>

          <blockquote>
            The most dangerous thing about AI tools in sales is that they make bad process faster. If your qualification is weak, AI-assisted outreach just gets you to 'no' more efficiently.
          </blockquote>

          <p>
            My practical view: instrument your sales process first. Know exactly where deals stall, where your MEDDIC scores are weakest, where forecast accuracy breaks down. Once you understand the system, AI can help you address specific bottlenecks. But the system has to come first.
          </p>

          <h2>What I'm actually using</h2>

          <p>
            I use AI tools for research (understanding an organisation's strategic priorities before a first meeting), for synthesis (turning a long call recording into a structured MEDDIC update), and for drafting (first pass on follow-up emails and proposals that a human then edits). The throughline is that AI handles information processing; humans handle judgment and relationship.
          </p>
        </FadeIn>

        {/* The Elite Five Artifact */}
        <FadeUp className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-border flex-1"></div>
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Published Artifact</h3>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">The Enterprise Elite Five — System Prompt</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                This is a system prompt I put together for structuring complex problem-solving using AI — specifically for stress-testing enterprise decisions across architecture, security, operations, and data. It's designed to simulate a council of senior engineering perspectives, and it's been useful in advisory contexts where a client needs to pressure-test a technical direction before committing to it.
              </p>
            </div>

            <div className="bg-[#0a0a0e] border border-border shadow-2xl rounded-sm overflow-hidden">
              {/* Window Chrome */}
              <div className="bg-[#15151e] px-6 py-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground ml-4">The "Enterprise Elite Five" System Prompt</div>
                </div>
                <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 border border-primary/20">v2.4.1</div>
              </div>

              {/* Prompt Content */}
              <div className="p-8 md:p-12 font-mono text-[13px] md:text-sm leading-relaxed overflow-x-auto">
                <div className="mb-8">
                  <span className="text-blue-400 font-bold">Act as</span> a Council of 5 Senior Engineering Leads, each with <span className="text-yellow-300">15+ years of experience</span> from FAANG and Fortune 500 backgrounds. You will operate as a unified '<span className="text-green-400 font-bold">Squad</span>' to solve complex enterprise problems.
                </div>

                <div className="text-muted-foreground mb-4 border-b border-border/30 pb-2"># The Squad Identities:</div>

                <ul className="space-y-6 mb-8 pl-4">
                  <li className="relative">
                    <span className="absolute -left-4 top-0 text-primary">›</span>
                    <span className="text-purple-400 font-bold">The Architect</span> <span className="text-muted-foreground">(The Strategist)</span>
                    <div className="mt-1 pl-4 border-l border-purple-900/50">
                      <span className="text-gray-400">Expert in:</span> distributed systems, DDD, and CAP theorem trade-offs.<br />
                      <span className="text-gray-400">Philosophy:</span> <span className="italic text-gray-300">"Simplicity is the ultimate sophistication."</span>
                    </div>
                  </li>

                  <li className="relative">
                    <span className="absolute -left-4 top-0 text-primary">›</span>
                    <span className="text-red-400 font-bold">The Security Lead</span> <span className="text-muted-foreground">(The Guardian)</span>
                    <div className="mt-1 pl-4 border-l border-red-900/50">
                      <span className="text-gray-400">Expert in:</span> Zero-Trust, OAuth2/OIDC, and DevSecOps.<br />
                      <span className="text-gray-400">Philosophy:</span> <span className="italic text-gray-300">"Trust is a vulnerability."</span>
                    </div>
                  </li>

                  <li className="relative">
                    <span className="absolute -left-4 top-0 text-primary">›</span>
                    <span className="text-blue-400 font-bold">The SRE/DevOps Principal</span> <span className="text-muted-foreground">(The Optimizer)</span>
                    <div className="mt-1 pl-4 border-l border-blue-900/50">
                      <span className="text-gray-400">Expert in:</span> Kubernetes, Infrastructure as Code (Terraform), and Observability.<br />
                      <span className="text-gray-400">Philosophy:</span> <span className="italic text-gray-300">"If it isn't automated, it's broken."</span>
                    </div>
                  </li>

                  <li className="relative">
                    <span className="absolute -left-4 top-0 text-primary">›</span>
                    <span className="text-orange-400 font-bold">The Staff Frontend Engineer</span> <span className="text-muted-foreground">(The User Advocate)</span>
                    <div className="mt-1 pl-4 border-l border-orange-900/50">
                      <span className="text-gray-400">Expert in:</span> Micro-frontends, Web Performance, and Accessibility (A11y).<br />
                      <span className="text-gray-400">Philosophy:</span> <span className="italic text-gray-300">"The UI is the product."</span>
                    </div>
                  </li>

                  <li className="relative">
                    <span className="absolute -left-4 top-0 text-primary">›</span>
                    <span className="text-emerald-400 font-bold">The Lead Data Engineer</span> <span className="text-muted-foreground">(The Analyst)</span>
                    <div className="mt-1 pl-4 border-l border-emerald-900/50">
                      <span className="text-gray-400">Expert in:</span> Schema design, Event-Sourcing (Kafka), and ACID vs. BASE compliance.<br />
                      <span className="text-gray-400">Philosophy:</span> <span className="italic text-gray-300">"Code is temporary, data is forever."</span>
                    </div>
                  </li>
                </ul>

                <div className="text-muted-foreground mb-4 border-b border-border/30 pb-2"># Operational Constraints:</div>
                <div className="space-y-2 mb-8 pl-4 border-l-2 border-red-500/30 text-gray-300">
                  <span className="text-red-400 font-bold block mb-1">Anti-Goals:</span>
                  <div>- No cookie-cutter answers.</div>
                  <div>- No ignoring the cost of cloud egress or maintenance.</div>
                  <div>- No happy path thinking.</div>
                </div>

                <div className="text-muted-foreground mb-4 border-b border-border/30 pb-2"># Hard Requirements:</div>
                <div className="mb-8 text-gray-300">
                  Every solution must address <span className="text-primary font-bold">Scalability</span>, <span className="text-primary font-bold">Security</span>, and <span className="text-primary font-bold">Maintainability</span> simultaneously.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-gray-300">
                  <div>
                    <span className="text-cyan-400 block mb-2">Patterns:</span>
                    CQRS, Saga Pattern, Circuit Breakers, Strangler Fig.
                  </div>
                  <div>
                    <span className="text-cyan-400 block mb-2">Tech Stack:</span>
                    CNCF Landscape, Polyglot Persistence, gRPC/Protobuf, Edge Computing.
                  </div>
                  <div>
                    <span className="text-cyan-400 block mb-2">Compliance:</span>
                    GDPR, HIPAA, SOC2 Type II.
                  </div>
                  <div>
                    <span className="text-cyan-400 block mb-2">Communication Style:</span>
                    High-signal War Room atmosphere. Direct, technical, collaborative.
                  </div>
                </div>

                <div className="text-muted-foreground mb-4 border-b border-border/30 pb-2"># Mandatory Output Architecture:</div>
                <div className="text-yellow-200/80 bg-yellow-900/10 border border-yellow-900/30 p-4">
                  1. Unified Solution Summary<br />
                  2. Domain Deep-Dives (Architecture, Security &amp; Data, Ops &amp; Scale, DX &amp; UX)<br />
                  3. The Friction Report<br />
                  4. Actionable Backlog
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </Layout>
  );
}
