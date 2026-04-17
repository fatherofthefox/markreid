import { Layout } from "@/components/layout/layout";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Target, Users, TrendingUp, CheckSquare, Zap, BarChart2 } from "lucide-react";

const frameworks = [
  {
    id: "meddic",
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "MEDDIC",
    category: "Qualification Framework",
    description: "The most rigorous enterprise qualification framework I've worked with. If you can't answer every letter, you don't have a deal — you have a conversation.",
    details: "MEDDIC stands for Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, and Champion. It forces sales teams to go beyond surface-level interest and validate that a deal has real legs. The most common failure I see: reps skipping straight to demo without establishing quantifiable pain and confirming access to the actual budget holder. MEDDIC doesn't fix bad product-market fit, but it will stop your team from wasting six months on deals they were never going to win.",
    letters: [
      { letter: "M", label: "Metrics", desc: "What does success look like in numbers for the buyer?" },
      { letter: "E", label: "Economic Buyer", desc: "Have you spoken to the person who controls the budget?" },
      { letter: "D", label: "Decision Criteria", desc: "What does the buyer use to evaluate options?" },
      { letter: "D", label: "Decision Process", desc: "What are the steps between now and a signed contract?" },
      { letter: "I", label: "Identify Pain", desc: "What is the cost — financial or strategic — of doing nothing?" },
      { letter: "C", label: "Champion", desc: "Who inside the account is selling on your behalf?" },
    ]
  },
  {
    id: "faint",
    icon: <CheckSquare className="w-6 h-6 text-primary" />,
    title: "FAINT",
    category: "Qualification Framework",
    description: "A lighter-touch qualification model that works well earlier in the pipeline, before a full MEDDIC assessment is viable.",
    details: "FAINT stands for Funds, Authority, Interest, Need, and Timing. It's particularly useful for SDRs and BDRs qualifying inbound or outbound leads before handing to an account executive. Where MEDDIC goes deep on the deal mechanics, FAINT helps you quickly determine whether a prospect is even worth the investment of a full discovery. The two frameworks complement each other well: FAINT at the top of the funnel, MEDDIC as the deal matures.",
    letters: [
      { letter: "F", label: "Funds", desc: "Does this organisation have the financial capacity to buy?" },
      { letter: "A", label: "Authority", desc: "Are you speaking to someone who can influence the decision?" },
      { letter: "I", label: "Interest", desc: "Is there genuine interest, or just curiosity?" },
      { letter: "N", label: "Need", desc: "Is there a real, articulated problem we can solve?" },
      { letter: "T", label: "Timing", desc: "Is there a reason to act now, or in the near term?" },
    ]
  },
  {
    id: "challenger",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "The Challenger Sale",
    category: "Sales Methodology",
    description: "The insight that top performers don't just respond to buyers — they teach, tailor, and take control of the conversation.",
    details: "The Challenger model, developed by Dixon and Adamson, flipped the conventional wisdom that relationship-building is the key driver of sales success. Their research found that 'Challengers' — reps who lead with insight, reframe how buyers think about their problems, and are willing to push back — outperform every other type. The practical takeaway isn't to be contrarian. It's to arrive at every conversation with a point of view that the buyer hasn't fully considered, one that naturally leads to your solution.",
  },
  {
    id: "spin",
    icon: <BarChart2 className="w-6 h-6 text-primary" />,
    title: "SPIN Selling",
    category: "Discovery Framework",
    description: "A structured approach to discovery that moves from surface symptoms to the real cost of the problem — before proposing anything.",
    details: "Neil Rackham's SPIN Selling (Situation, Problem, Implication, Need-Payoff) remains one of the most evidence-based approaches to consultative selling. The key insight: most reps spend too long on Situation questions and jump to pitching before the buyer has fully internalised the cost of their problem. Implication questions — what happens if this doesn't get fixed, how does this affect other parts of the business — are where real urgency is built. Need-Payoff questions then let the buyer sell themselves on the solution.",
  },
  {
    id: "pipeline-review",
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "The Real Pipeline Review",
    category: "Sales Operations",
    description: "Not a status update. A structured interrogation of deal quality, risk, and the actions required to move each opportunity forward.",
    details: "Most pipeline reviews are theatre. The manager asks 'where are we on this?' and the rep gives an optimistic summary. Nothing changes. A real pipeline review is structured around the qualification framework (MEDDIC), asks hard questions about what's actually been validated vs. assumed, and ends with explicit next actions and dates. It should be uncomfortable to present a poorly-qualified deal. When it isn't, your pipeline becomes a vanity metric rather than a forecasting tool.",
  },
  {
    id: "growth-team",
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Building the Growth Team",
    category: "Team & Org Design",
    description: "The sequence in which you hire, the roles you create, and how you structure incentives determines whether you have a growth team or just a headcount plan.",
    details: "Growth teams fail for predictable reasons: hiring salespeople before the motion is defined, creating too many specialists before you have the volume to justify them, or structuring comp plans that incentivise activity over outcomes. The sequence matters enormously. Before you hire your fourth AE, make sure you have a repeatable qualification process, a clear ICP, and a manager who can coach to the methodology. Headcount without process doesn't scale — it just creates more noise.",
  }
];

export default function Frameworks() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mb-20">
          <h1 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">Sales Frameworks</h1>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-foreground leading-tight">
            The frameworks I actually use.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Not a reading list. These are the methodologies and mental models I've applied across different organisations — and the honest view of when and why they work.
          </p>
        </div>

        <div className="grid gap-12 max-w-5xl">
          {frameworks.map((fw) => (
            <div key={fw.id} className="group relative bg-[#0a0a0e] border border-border p-8 md:p-12 hover:border-primary/30 transition-colors duration-500">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 bg-background border border-border p-4 rounded-sm group-hover:bg-primary/10 transition-colors">
                  {fw.icon}
                </div>

                <div className="w-full">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                    {fw.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                    {fw.title}
                  </h3>
                  <p className="text-lg text-primary/80 font-medium mb-6">
                    {fw.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {fw.details}
                  </p>

                  {fw.letters && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {fw.letters.map((l, idx) => (
                        <div key={`${l.letter}-${idx}`} className="flex items-start gap-3 bg-background/50 border border-border/50 p-4 rounded-sm">
                          <span className="text-primary font-bold font-mono text-lg w-6 flex-shrink-0">{l.letter}</span>
                          <div>
                            <span className="font-semibold text-foreground block text-sm">{l.label}</span>
                            <span className="text-muted-foreground text-xs">{l.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-primary/5 border border-primary/20 text-center max-w-4xl mx-auto">
          <BookOpen className="w-8 h-8 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-serif font-bold mb-4">Want to apply these in your organisation?</h3>
          <p className="text-muted-foreground mb-8">
            I work with leadership teams to embed these frameworks into their hiring, training, and day-to-day sales cadence — not just as theory, but as lived operating practice.
          </p>
          <Link href="/advisory" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
            Advisory Services <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
