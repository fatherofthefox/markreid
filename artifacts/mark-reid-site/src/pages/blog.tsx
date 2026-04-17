import { Layout } from "@/components/layout/layout";
import { Link } from "wouter";

const posts = [
  {
    slug: "fallacy-of-mvp-enterprise",
    title: "The Fallacy of the MVP in Enterprise Contexts",
    date: "October 12, 2023",
    excerpt: "Why minimum viable products fail when integrated into legacy systems, and how to define a minimum viable architecture instead.",
    readTime: "8 min read"
  },
  {
    slug: "deconstructing-the-monolith",
    title: "Deconstructing the Monolith: A Practical Guide",
    date: "September 28, 2023",
    excerpt: "Strangler fig patterns, bounded contexts, and the political reality of breaking apart systems that generate revenue.",
    readTime: "12 min read"
  },
  {
    slug: "pragmatic-ai-adoption",
    title: "Pragmatic AI: Moving Beyond the Chatbot",
    date: "August 15, 2023",
    excerpt: "LLMs are fundamentally non-deterministic. Here is how you wrap them in deterministic workflows for enterprise safety.",
    readTime: "10 min read"
  },
  {
    slug: "engineering-is-finance",
    title: "Engineering is a Finance Discipline",
    date: "July 02, 2023",
    excerpt: "Why senior technical leaders must understand capital allocation, cloud cost unit economics, and risk modeling.",
    readTime: "7 min read"
  },
  {
    slug: "the-end-of-microservices",
    title: "The Pendulum Swings: Returning to the Modular Monolith",
    date: "May 18, 2023",
    excerpt: "We spent a decade building distributed systems to solve organizational problems. It's time to reconsider the monolith.",
    readTime: "9 min read"
  }
];

export default function Blog() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mb-20">
          <h1 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">Writing</h1>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-foreground leading-tight">
            Essays on architecture, scale, and leadership.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            I write occasionally. Usually when I notice the industry repeating a mistake I've already made.
          </p>
        </div>

        <div className="max-w-4xl">
          <div className="space-y-16">
            {posts.map((post) => (
              <article key={post.slug} className="group border-b border-border pb-16 last:border-0">
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
