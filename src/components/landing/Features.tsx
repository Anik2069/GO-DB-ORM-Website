import { motion } from "framer-motion";
import {
  Feather, Wand2, GitBranch, Database, Zap, Shield,
  Link2, Gauge, Sparkles, Rocket,
} from "lucide-react";

const features = [
  { icon: Feather, title: "Lightweight Architecture", desc: "Minimal abstractions, tiny footprint, no reflection-heavy magic." },
  { icon: Wand2, title: "Fluent Query Builder", desc: "Chainable, expressive API that reads like SQL but with type safety." },
  { icon: GitBranch, title: "Auto Migration", desc: "Diff your structs against the live schema and migrate with one call." },
  { icon: Database, title: "PostgreSQL Support", desc: "First-class Postgres driver with JSONB, arrays, and CTE support." },
  { icon: Database, title: "MySQL Support", desc: "Full MySQL 5.7+ compatibility with prepared statement caching." },
  { icon: Shield, title: "Type-Safe Models", desc: "Compile-time checks for fields, relations, and query parameters." },
  { icon: Link2, title: "Relationship Handling", desc: "HasOne, HasMany, BelongsTo, ManyToMany — eager and lazy loading." },
  { icon: Zap, title: "High Performance", desc: "Benchmarks 2-3x faster than reflection-based ORMs." },
  { icon: Sparkles, title: "Clean API Design", desc: "Idiomatic Go. No interface{} soup, no struct tag overload." },
  { icon: Rocket, title: "Production Ready", desc: "Battle-tested in high-traffic services. Connection pooling included." },
];

export function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-muted-foreground mb-4">
            <Gauge className="h-3.5 w-3.5 text-primary" /> Built for speed
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Everything you need to ship <span className="text-gradient">faster</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete database toolkit that gets out of your way.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative glass rounded-2xl p-6 hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:glow-cyan transition-all">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
