import { Layout } from "@/components/layout/layout";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Layers, Zap, Shield, GitBranch, Share2 } from "lucide-react";

const frameworks = [
  {
    id: "ddd",
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: "Domain-Driven Design (DDD)",
    category: "Architecture",
    description: "Aligning software architecture with the business domain. The only sustainable way to manage complexity in large-scale enterprise systems.",
    details: "By identifying bounded contexts and defining ubiquitous language, DDD ensures that the software model matches the mental model of domain experts. This prevents the 'big ball of mud' monolith and enables teams to work autonomously within clear boundaries.",
  },
  {
    id: "cqrs",
    icon: <GitBranch className="w-6 h-6 text-primary" />,
    title: "Command Query Responsibility Segregation",
    category: "Data & State",
    description: "Separating the models for reading and writing data to scale them independently and optimize for their specific access patterns.",
    details: "In enterprise systems, read operations often outnumber writes by orders of magnitude. CQRS allows us to use different databases for reading (e.g., Elasticsearch, Redis) and writing (e.g., PostgreSQL, Event Store), dramatically improving performance and flexibility at the cost of eventual consistency.",
  },
  {
    id: "zero-trust",
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Zero-Trust Architecture",
    category: "Security",
    description: "Never trust, always verify. Security based on identity and context rather than network perimeter.",
    details: "The traditional castle-and-moat security model is broken. Zero-Trust assumes the network is already compromised. Every access request is fully authenticated, authorized, and encrypted before granting access, regardless of where the request originates.",
  },
  {
    id: "strangler-fig",
    icon: <Share2 className="w-6 h-6 text-primary" />,
    title: "Strangler Fig Pattern",
    category: "Migration",
    description: "A methodical approach to rewriting legacy systems by gradually replacing specific pieces of functionality.",
    details: "Big bang rewrites fail. The Strangler Fig pattern allows for incremental modernization by intercepting requests at the edge and routing them either to the legacy system or the new system. Over time, the new system 'strangles' the old one until it can be decommissioned safely.",
  },
  {
    id: "cap-theorem",
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "CAP Theorem",
    category: "Distributed Systems",
    description: "The fundamental trade-off in distributed data stores: Consistency, Availability, and Partition Tolerance.",
    details: "You can only have two of the three. In the presence of a network partition (which is inevitable), you must choose between consistency (returning an error if data cannot be guaranteed) or availability (returning the most recent data, even if it might be stale). Understanding this is critical for cloud-native architectures.",
  }
];

export default function Frameworks() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mb-20">
          <h1 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">Mental Models</h1>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-foreground leading-tight">
            Frameworks for structural thinking.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            I don't believe in silver bullets. I believe in context, trade-offs, and rigorous structural thinking. These are the models I use to untangle complexity.
          </p>
        </div>

        <div className="grid gap-12 max-w-5xl">
          {frameworks.map((fw) => (
            <div key={fw.id} className="group relative bg-[#0a0a0e] border border-border p-8 md:p-12 hover:border-primary/30 transition-colors duration-500">
              {/* Decorative side border that appears on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 bg-background border border-border p-4 rounded-sm group-hover:bg-primary/10 transition-colors">
                  {fw.icon}
                </div>
                
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                    {fw.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                    {fw.title}
                  </h3>
                  <p className="text-lg text-primary/80 font-medium mb-6">
                    {fw.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {fw.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-primary/5 border border-primary/20 text-center max-w-4xl mx-auto">
          <BookOpen className="w-8 h-8 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-serif font-bold mb-4">Want to apply these models?</h3>
          <p className="text-muted-foreground mb-8">
            I help engineering teams implement these architectural patterns correctly in production environments.
          </p>
          <Link href="/advisory" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
            Advisory Services <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
