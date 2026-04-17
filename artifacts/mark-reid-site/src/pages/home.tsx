import { Layout } from "@/components/layout/layout";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, TrendingUp, Users, Target } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, Stagger, StaggerItem, AnimatedCard } from "@/components/ui/animate";
import heroImg from "@assets/_MG_6430_1776443485807.jpg";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const heroWord = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.div variants={heroWord} className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-background/50 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-mono tracking-wider text-muted-foreground uppercase">Available for Advisory Engagements</span>
              </motion.div>

              <motion.h1
                variants={heroWord}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1] mb-8 text-foreground"
              >
                Building revenue engines that{" "}
                <span className="text-primary">actually scale.</span>
              </motion.h1>

              <motion.p variants={heroWord} className="text-xl text-muted-foreground leading-relaxed mb-12 font-light">
                I build and lead growth teams, design sales processes, and help organisations move from opportunistic selling to a repeatable, high-performance revenue machine.
              </motion.p>

              <motion.div variants={heroWord} className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/advisory"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all group"
                  data-testid="cta-advisory"
                >
                  Work with Me
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/frameworks"
                  className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all border border-border"
                  data-testid="cta-frameworks"
                >
                  Sales Frameworks
                </Link>
              </motion.div>
            </motion.div>

            {/* Photo */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-blue-900/10 blur-3xl opacity-60 pointer-events-none" />
              <div className="relative border border-border overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={heroImg}
                  alt="Mark Reid"
                  className="w-full h-full object-cover object-top grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-32 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6">
          <FadeUp className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Core Philosophy</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Revenue is a system, not a target.</h3>
            </div>
            <Link href="/frameworks" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group">
              View all frameworks <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10 text-primary mb-6" />,
                title: "Qualify Ruthlessly",
                body: "Frameworks like MEDDIC and FAINT exist because hope is not a sales strategy. Knowing exactly who to pursue — and who to walk away from — is the difference between a productive pipeline and a clogged one.",
              },
              {
                icon: <Users className="w-10 h-10 text-primary mb-6" />,
                title: "Build the Team First",
                body: "Growth is a team sport. The best process in the world underperforms with the wrong people. I spend as much time on hiring, coaching, and incentive design as I do on pipeline and process.",
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-primary mb-6" />,
                title: "Make it Repeatable",
                body: "Individual heroics don't compound. The goal is always a documented, trainable, improvable process — one that works even when the star performer has an off quarter.",
              },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <AnimatedCard className="h-full p-8 bg-background border border-border hover:border-primary/40 transition-colors duration-300 group cursor-default">
                  {card.icon}
                  <h4 className="text-xl font-bold mb-4 font-serif">{card.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{card.body}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* MEDDIC Teaser */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Featured Framework</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">MEDDIC — The Qualification Standard</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every serious enterprise sales team should be running a structured qualification framework. MEDDIC is the one I return to most consistently — not because it's fashionable, but because it exposes the real blockers before you've invested three months in a deal that was never going to close.
              </p>
              <Link href="/frameworks" className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors">
                See All Frameworks
              </Link>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-2xl opacity-50"></div>
                <div className="relative bg-[#0d0d12] border border-border p-8 shadow-2xl font-mono text-sm">
                  <div className="flex gap-2 mb-6 border-b border-border/50 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="ml-4 text-xs text-muted-foreground">MEDDIC Qualification Checklist</span>
                  </div>
                  <Stagger className="space-y-3 text-foreground leading-relaxed">
                    {[
                      { letter: "M", label: "Metrics", desc: "What is the measurable impact?" },
                      { letter: "E", label: "Economic Buyer", desc: "Have you met the person with budget?" },
                      { letter: "D", label: "Decision Criteria", desc: "How will they evaluate?" },
                      { letter: "D", label: "Decision Process", desc: "What are the steps to yes?" },
                      { letter: "I", label: "Identify Pain", desc: "What's the cost of doing nothing?" },
                      { letter: "C", label: "Champion", desc: "Who is selling for you internally?" },
                    ].map((item, i) => (
                      <StaggerItem key={i}>
                        <div>
                          <span className="text-primary font-bold">{item.letter}</span>
                          {" — "}
                          <span className="text-gray-400">{item.label}</span>
                          {" — "}
                          {item.desc}
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Latest Writing */}
      <section className="py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <FadeUp className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Notes & Essays</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Recent Thinking</h3>
            </div>
            <Link href="/blog" className="hidden md:inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group">
              Read all posts <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Why Most Pipeline Reviews Are a Waste of Time",
                date: "Mar 18, 2024",
                excerpt: "If your pipeline review is just a deal status update meeting, you're solving the wrong problem. Here's what a real pipeline review looks like.",
                slug: "pipeline-reviews",
              },
              {
                title: "The Champion Problem: How Deals Die Quietly",
                date: "Feb 04, 2024",
                excerpt: "A champion who can't mobilise internal support isn't a champion — they're a contact. The difference matters more than most reps realise.",
                slug: "the-champion-problem",
              },
            ].map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="border-b border-border pb-8 group-hover:border-primary/30 transition-colors duration-300">
                    <time className="text-sm font-mono text-muted-foreground mb-3 block">{post.date}</time>
                    <h4 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors duration-200">{post.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-8 md:hidden">
            <Link href="/blog" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group">
              Read all posts <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
