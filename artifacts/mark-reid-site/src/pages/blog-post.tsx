import { Layout } from "@/components/layout/layout";
import { Link, useParams } from "wouter";
import { ArrowLeft } from "lucide-react";

const posts: Record<string, { title: string; date: string; readTime: string; excerpt: string; content: React.ReactNode }> = {
  "pipeline-reviews": {
    title: "Why Most Pipeline Reviews Are a Waste of Time",
    date: "March 18, 2024",
    readTime: "7 min read",
    excerpt: "If your pipeline review is just a deal status update meeting, you're solving the wrong problem.",
    content: (
      <>
        <p>
          The typical pipeline review goes like this: the manager works down the CRM list, asks "where are we on this?", the rep gives an optimistic summary, the manager nods, they move to the next deal. At the end of an hour, nothing has changed except everyone feels like they've done something.
        </p>

        <p>
          This is not a pipeline review. It's a status update. And status updates don't improve forecast accuracy, don't surface stuck deals early enough to do anything about them, and don't coach anyone on how to sell better.
        </p>

        <h2>What a Real Pipeline Review Looks Like</h2>

        <p>
          A real pipeline review is structured around qualification — specifically, the MEDDIC criteria for each deal. The questions that matter aren't "what's happening with this?" — they're:
        </p>

        <ul>
          <li><strong>What is the quantified pain?</strong> Not "they have a problem with X" — what does that problem cost them, in numbers the economic buyer has acknowledged?</li>
          <li><strong>Have you met the economic buyer?</strong> Not "I'm talking to the VP of Sales" — does that person control the budget, and have they engaged?</li>
          <li><strong>What's their decision process?</strong> Can the rep describe the steps from now to a signed contract, including procurement, legal, and internal approvals?</li>
          <li><strong>Who is the champion?</strong> Can they name someone inside the account who is actively selling internally on their behalf — and what evidence do they have?</li>
        </ul>

        <blockquote>
          The goal of a pipeline review is not to learn what's happening. It's to expose what hasn't been validated — and to agree on exactly what needs to happen before the next review.
        </blockquote>

        <h2>The Structural Change That Makes the Difference</h2>

        <p>
          Pipeline reviews should end with explicit next actions and dates — not just for the rep, but for the deal itself. "I'll follow up" is not a next action. "I'll have a call with the CFO on Thursday to walk through the business case" is a next action.
        </p>

        <p>
          When reps know that every deal will be reviewed against the full MEDDIC criteria, two things happen. Deals that don't belong in the pipeline start falling out sooner. And reps start doing better qualification in the first place, because they know what they'll be asked.
        </p>

        <p>
          It should be uncomfortable to present a poorly-qualified deal. If it isn't, your pipeline is a vanity metric.
        </p>
      </>
    )
  },
  "the-champion-problem": {
    title: "The Champion Problem: How Deals Die Quietly",
    date: "February 4, 2024",
    readTime: "6 min read",
    excerpt: "A champion who can't mobilise internal support isn't a champion — they're a contact.",
    content: (
      <>
        <p>
          In MEDDIC, the Champion is the person inside the account who sells on your behalf — who has influence, who actively advocates for your solution in meetings you're not in, and who has a personal stake in the outcome.
        </p>

        <p>
          Most reps misidentify their champion. They have a contact — someone who is friendly, who takes their calls, who might even be enthusiastic about the product. That's not the same thing.
        </p>

        <h2>The Test</h2>

        <p>
          A simple test: ask your supposed champion to get you in front of the economic buyer. A real champion can do that, or has a credible plan to make it happen. A contact will say they'll see what they can do — and then nothing happens.
        </p>

        <p>
          Another test: ask them what they've said about your solution in internal meetings. A real champion can give you specific answers — who they spoke to, what the questions were, what concerns came up. A contact will say "I've been talking you up" without specifics.
        </p>

        <blockquote>
          The question isn't whether your champion likes the product. It's whether they're willing to spend their political capital on it.
        </blockquote>

        <h2>What to Do When You Don't Have a Real Champion</h2>

        <p>
          First: don't pretend you do. Deals that enter a forecast without a validated champion almost never close on the expected timeline. The risk should be reflected in how you categorise the opportunity.
        </p>

        <p>
          Second: build one. That means understanding who in the organisation has the most to gain from your solution and the credibility to advocate for it. Meet them. Equip them with business case material, not product slides. Make it easy for them to sell internally.
        </p>

        <p>
          Third: multi-thread. A champion who leaves, gets promoted, or simply goes quiet can kill a deal that was otherwise progressing. You should always have more than one meaningful relationship inside an account.
        </p>
      </>
    )
  }
};

const defaultPost = {
  title: "Notes on Sales Process and Growth",
  date: "2024",
  readTime: "5 min read",
  excerpt: "Thoughts on building repeatable revenue engines.",
  content: (
    <p>This post is coming soon. Check back or <Link href="/blog" className="text-primary hover:underline">browse all writing</Link>.</p>
  )
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug && posts[slug] ? posts[slug] : defaultPost;

  return (
    <Layout>
      <article className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-12" data-testid="link-back-to-blog">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all writing
          </Link>

          <header className="mb-16">
            <div className="flex items-center gap-4 text-sm font-mono text-primary mb-6">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-8">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground
            prose-headings:font-serif prose-headings:text-foreground prose-headings:font-bold
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-li:text-muted-foreground
            prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:text-foreground prose-blockquote:not-italic
          ">
            {post.content}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Share this essay</span>
              <div className="flex gap-4">
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
