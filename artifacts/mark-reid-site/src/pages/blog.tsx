import { Layout } from "@/components/layout/layout";
import { Link } from "wouter";

const posts = [
  {
    slug: "pipeline-reviews",
    title: "Why Most Pipeline Reviews Are a Waste of Time",
    date: "March 18, 2024",
    excerpt: "If your pipeline review is just a deal status update meeting, you're solving the wrong problem. Here's what a real one looks like — and the questions that actually matter.",
    readTime: "7 min read"
  },
  {
    slug: "the-champion-problem",
    title: "The Champion Problem: How Deals Die Quietly",
    date: "February 4, 2024",
    excerpt: "A champion who can't mobilise internal support isn't a champion — they're a contact. The distinction matters more than most reps realise, and the time to find out is before you've invested three months in the deal.",
    readTime: "6 min read"
  },
  {
    slug: "moving-upmarket",
    title: "Moving Upmarket: What Changes When You Go Enterprise",
    date: "December 11, 2023",
    excerpt: "Enterprise deals are not bigger SMB deals. The buying committee is larger, the timeline is longer, and the qualification bar is completely different. Here's what to change and what to stop assuming.",
    readTime: "10 min read"
  },
  {
    slug: "comp-plan-mistakes",
    title: "The Three Comp Plan Mistakes I Keep Seeing",
    date: "October 28, 2023",
    excerpt: "Incentive design is underrated as a lever for sales performance. Get it wrong and you train exactly the behaviour you don't want. These are the three most common mistakes — and how to fix them.",
    readTime: "8 min read"
  },
  {
    slug: "faint-vs-meddic",
    title: "FAINT or MEDDIC? Using the Right Framework at the Right Stage",
    date: "September 3, 2023",
    excerpt: "They're not competing frameworks — they're complementary. FAINT gets you through early qualification quickly. MEDDIC validates that the deal has legs. Here's how to use both together.",
    readTime: "6 min read"
  }
];

export default function Blog() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mb-20">
          <h1 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">Writing</h1>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-foreground leading-tight">
            Notes on sales, growth, and building teams.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            I write occasionally. Usually when I notice an avoidable pattern repeating itself — in pipeline management, team design, or the way organisations think about sales methodology.
          </p>
        </div>

        <div className="max-w-4xl">
          <div className="space-y-16">
            {posts.map((post) => (
              <article key={post.slug} className="group border-b border-border pb-16 last:border-0" data-testid={`post-${post.slug}`}>
                <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground mb-4">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center"
                  data-testid={`link-read-${post.slug}`}
                >
                  Read essay <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
