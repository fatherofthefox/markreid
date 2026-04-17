import { Layout } from "@/components/layout/layout";
import portraitImg from "@assets/_MG_6351_(2)_1776443505868.jpg";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">About Mark Reid</h1>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12 text-foreground leading-tight">
            I build growth teams and the systems that make them work.
          </h2>

          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="aspect-[3/4] bg-secondary border border-border relative overflow-hidden">
              <img
                src={portraitImg}
                alt="Mark Reid"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
              <p className="lead text-xl text-foreground font-light mb-8">
                My career has been spent at the intersection of sales, growth, and people leadership — building the teams and processes that take businesses from fragile, personality-driven revenue to something repeatable and scalable.
              </p>

              <p className="mb-6">
                I've led growth functions across a range of organisations — from early-stage startups finding their first enterprise customers, to established businesses trying to break through a growth ceiling. In each case, the challenge is rarely the product. It's almost always the go-to-market motion, the quality of the pipeline, or the structure of the team executing against it.
              </p>

              <p className="mb-6">
                I work closely with sales methodologies — MEDDIC and FAINT in particular — not as academic frameworks, but as operational tools that get embedded into how teams think, qualify, and run their deals week to week.
              </p>

              <h3 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">How I Think About Sales</h3>

              <p className="mb-6">
                <strong>Pipeline is a lagging indicator.</strong> By the time a deal shows up in your CRM, most of the important decisions have already been made — in your favour or against you. I spend disproportionate time on the front of the funnel: targeting, qualification, and the quality of first conversations.
              </p>

              <p className="mb-6">
                <strong>Methodology without coaching is shelf-ware.</strong> I've seen organisations roll out MEDDIC, run the training, and then watch nothing change. Frameworks only compound when managers are actively reinforcing them in deal reviews, one-to-ones, and live calls.
              </p>

              <p className="mb-6">
                <strong>Incentive design is underrated.</strong> The way you structure comp plans, territories, and quotas shapes behaviour more than any training programme. Getting this wrong is expensive. Getting it right is a quiet competitive advantage.
              </p>

              <h3 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">Current Focus</h3>

              <p>
                I'm currently advising growth-stage companies on building or maturing their enterprise sales motion — helping leadership teams define their ideal customer profile, tighten their qualification process, hire and structure their first serious sales leadership layer, and design the operational cadence that keeps everything honest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
