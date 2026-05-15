import { motion } from "framer-motion";
import { ArrowRight, Github, Star, Sparkles } from "lucide-react";
import { CodeBlock } from "./CodeBlock";

const sample = `// 1. Define your Schema (schema/user.schema)
// model User { id int @id, name string, email string }

// 2. Generate type-safe Go models
// godborm generate

// 3. Query with smart relation loading
var users []User
client.Select("name", "email").
    Include("Posts:title,created_at").
    FindAll(&users)
`;

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      {/* background grid + glow */}
      <div className="absolute inset-0 bg-grid radial-fade" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/20 blur-[140px] -z-0" />
      <div className="absolute top-40 right-10 h-[300px] w-[300px] rounded-full bg-secondary/20 blur-[120px] -z-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[10px] sm:text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            v1.0 — Open source & MIT licensed
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Modern ORM for{" "}
            <span className="text-gradient">Golang</span> Developers
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Fast, lightweight, type-safe database toolkit built for scalable Go
            applications. Fluent queries, auto migrations, zero magic.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#docs"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-cyan transition-all"
            >
              Get Started
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://github.com/Anik2069/go-db-orm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:border-primary/40 transition-all font-medium"
            >
              <Github className="h-4 w-4" />
              Star on GitHub
              <span className="ml-1 inline-flex items-center gap-1 text-xs text-primary">
                <Star className="h-3 w-3 fill-primary" /> 2.4k
              </span>
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Production ready
            </div>
            <div>PostgreSQL · MySQL</div>
            <div>Go 1.21+</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-secondary/20 to-transparent blur-2xl" />
          <div className="relative">
            <CodeBlock code={sample} animate filename="main.go" language="go" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
