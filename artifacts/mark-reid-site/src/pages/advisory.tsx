import { Layout } from "@/components/layout/layout";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, Stagger, StaggerItem } from "@/components/ui/animate";
import { ArrowRight, Mail, MapPin, Calendar, Clock, CheckCircle, Loader2 } from "lucide-react";

const services = [
  {
    title: "Sales Process Design",
    body: "Building a repeatable, documented sales process from the ground up — or pressure-testing an existing one. Covers ICP definition, qualification frameworks, discovery methodology, deal stages, and the exit criteria that make pipeline reviews meaningful rather than theatrical.",
  },
  {
    title: "Growth Team Build-Out",
    body: "Helping leadership teams define the roles they need, hire into them effectively, structure comp and incentives to drive the right behaviour, and put in place the coaching cadence that turns methodology into habit. Most growth teams hire too fast and coach too little.",
  },
  {
    title: "Pipeline & Forecast Integrity",
    body: "Turning pipeline from a vanity metric into a usable forecasting tool. This means embedding MEDDIC or FAINT at the deal level, restructuring pipeline reviews around qualification rather than status updates, and creating the data discipline that makes forecasts you can actually rely on.",
  },
  {
    title: "Enterprise Sales Motion",
    body: "Specifically for companies moving upmarket into enterprise — where the sales cycle is longer, the buying committee is larger, and the qualification bar is completely different. Covers champion development, multi-threading, procurement navigation, and how to run a proof of concept that actually advances the deal.",
  },
];

const initialFields = { name: "", organisation: "", email: "", context: "" };

export default function Advisory() {
  const [fields, setFields] = useState(initialFields);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/public/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setFields(initialFields);
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">Advisory</h1>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-foreground leading-tight">
                Strategic counsel for revenue and growth leaders.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light mb-12">
                I work with founders, CEOs, and commercial leaders who need to build or accelerate their enterprise sales motion — with a focus on pipeline quality, team structure, and the methodology that holds it together.
              </p>
            </motion.div>

            <Stagger className="space-y-12" threshold={0.05}>
              {services.map((svc, i) => (
                <StaggerItem key={svc.title}>
                  <motion.div
                    className="border-l border-border pl-8 relative hover:border-primary/50 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute w-3 h-3 bg-primary rounded-full -left-[6px] top-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.3, type: "spring" }}
                    />
                    <h3 className="text-2xl font-serif font-bold mb-3">{svc.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{svc.body}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Right Column — Engagement Info + Form */}
          <div className="lg:pl-12">
            <FadeUp delay={0.2} className="bg-[#0a0a0e] border border-border p-8 md:p-10 sticky top-32">
              <h3 className="text-xl font-serif font-bold mb-6">Current Availability</h3>

              <div className="space-y-4 mb-8 text-sm font-mono">
                {[
                  { icon: <Calendar className="w-4 h-4 mr-3 text-primary" />, text: "Accepting new engagements now" },
                  { icon: <Clock className="w-4 h-4 mr-3 text-primary" />, text: "Minimum engagement: 3 months" },
                  { icon: <MapPin className="w-4 h-4 mr-3 text-primary" />, text: "Global — Remote / Onsite by arrangement" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center text-muted-foreground">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-border my-8" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-8"
                  >
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="w-12 h-12 text-primary" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-foreground mb-3">Message received.</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Thank you for getting in touch. I'll review your message and come back to you within 1–2 business days.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-semibold mb-4">Start a conversation</h4>
                    <p className="text-sm text-muted-foreground mb-6">
                      Tell me briefly about your situation — the team, the stage, and what you're trying to solve.
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                      {([
                        { key: "name", label: "Name", type: "text", testId: "input-name", placeholder: "Your name", required: true },
                        { key: "organisation", label: "Organisation", type: "text", testId: "input-org", placeholder: "Company name", required: false },
                        { key: "email", label: "Email", type: "email", testId: "input-email", placeholder: "you@company.com", required: true },
                      ] as const).map((field) => (
                        <div key={field.key}>
                          <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                            {field.label}{field.required && <span className="text-primary ml-1">*</span>}
                          </label>
                          <input
                            type={field.type}
                            data-testid={field.testId}
                            value={fields[field.key]}
                            onChange={set(field.key)}
                            required={field.required}
                            disabled={status === "loading"}
                            className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-200 text-foreground hover:border-border/80 disabled:opacity-50"
                            placeholder={field.placeholder}
                          />
                        </div>
                      ))}
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                          What are you working on?
                        </label>
                        <textarea
                          data-testid="input-context"
                          value={fields.context}
                          onChange={set("context")}
                          disabled={status === "loading"}
                          className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-200 text-foreground min-h-[120px] resize-none hover:border-border/80 disabled:opacity-50"
                          placeholder="Brief overview of your team, stage, and the challenge you're facing..."
                        />
                      </div>

                      {status === "error" && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-400 bg-red-900/20 border border-red-900/40 px-4 py-3"
                        >
                          {errorMsg}
                        </motion.p>
                      )}

                      <motion.button
                        type="submit"
                        data-testid="btn-submit-inquiry"
                        disabled={status === "loading"}
                        className="w-full bg-primary text-primary-foreground font-semibold py-4 hover:bg-primary/90 transition-colors flex items-center justify-center group disabled:opacity-60 disabled:cursor-not-allowed"
                        whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
                        whileTap={{ scale: status === "loading" ? 1 : 0.99 }}
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Sending…
                          </>
                        ) : (
                          <>
                            Send Message <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-6 text-center">
                <a href="mailto:mark@markreid.online" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <Mail className="w-3 h-3 mr-2" /> Or email directly: mark@markreid.online
                </a>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </Layout>
  );
}
