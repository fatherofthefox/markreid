import { Layout } from "@/components/layout/layout";
import { Link } from "wouter";
import { PlayCircle, FileText, Mic, ExternalLink } from "lucide-react";

export default function Content() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mb-20">
          <h1 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">Published Work</h1>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-foreground leading-tight">
            Media, talks, and artifacts.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            A curated selection of my conference talks, podcast appearances, and technical documentation.
          </p>
        </div>

        {/* Section: Talks */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-serif font-bold">Keynote Talks</h3>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Architecting for Inevitable Failure",
                event: "QCon San Francisco 2023",
                length: "45 mins",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop"
              },
              {
                title: "The Zero-Trust Enterprise",
                event: "AWS re:Invent 2022",
                length: "60 mins",
                image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop"
              }
            ].map((talk, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video bg-muted mb-6 overflow-hidden border border-border">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={talk.image} alt={talk.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 text-xs font-mono text-white z-20">
                    {talk.length}
                  </div>
                </div>
                <div className="text-sm font-mono text-primary mb-2">{talk.event}</div>
                <h4 className="text-xl font-bold font-serif group-hover:text-primary transition-colors">{talk.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Podcasts */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-serif font-bold">Podcast Appearances</h3>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="grid gap-6">
            {[
              {
                show: "Software Engineering Daily",
                episode: "Enterprise AI Implementation with Mark Reid",
                date: "Nov 2023"
              },
              {
                show: "a16z Podcast",
                episode: "Technical Debt is Organizational Debt",
                date: "Aug 2023"
              },
              {
                show: "Heavybit",
                episode: "Event Sourcing and Financial Systems",
                date: "Feb 2023"
              }
            ].map((podcast, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-border bg-[#0a0a0e] hover:bg-primary/5 transition-colors group">
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{podcast.show}</div>
                    <h4 className="font-bold text-lg">{podcast.episode}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-sm font-mono text-muted-foreground">{podcast.date}</div>
                  <button className="text-primary hover:text-primary/80 flex items-center text-sm font-medium">
                    Listen <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Open Source / Artifacts */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-serif font-bold">Public Artifacts</h3>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "The Elite Five Prompt",
                type: "System Prompt",
                desc: "My framework for AI-assisted architectural review.",
                link: "/tech-ai"
              },
              {
                title: "Terraform Enterprise Baselines",
                type: "GitHub Repository",
                desc: "Opinionated, secure-by-default infrastructure modules.",
                link: "#"
              },
              {
                title: "Engineering Ladder Template",
                type: "Notion Document",
                desc: "A framework for evaluating senior IC impact.",
                link: "#"
              }
            ].map((artifact, i) => (
              <div key={i} className="p-6 border border-border bg-background hover:border-primary/50 transition-colors flex flex-col h-full">
                <FileText className="w-8 h-8 text-primary mb-4" />
                <div className="text-xs font-mono text-muted-foreground mb-2">{artifact.type}</div>
                <h4 className="font-bold text-lg mb-3">{artifact.title}</h4>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{artifact.desc}</p>
                <Link href={artifact.link} className="text-primary font-medium text-sm hover:underline inline-flex items-center">
                  View Artifact <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
}
