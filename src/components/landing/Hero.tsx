import { useState } from "react";
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
  // Lazy initializer runs synchronously on first render — no useEffect delay
  const [isMobile] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768
  );

  // On mobile: skip animation entirely (no initial offset, no duration)
  // On desktop: smooth fade-in from below
  const motionProps = isMobile
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      };

  const motionPropsDelayed = isMobile
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.2 },
      };

  return (
    <section id="top" className="relative pt-20 pb-10 overflow-hidden w-full">
      {/* background decorations — strictly clipped */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute inset-0 bg-grid radial-fade opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] sm:h-[500px] w-full max-w-[900px] rounded-full bg-primary/20 blur-[80px] sm:blur-[140px]" />
        <div className="absolute top-40 right-10 h-[300px] w-[300px] rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — text content */}
        <motion.div
          {...motionProps}
          className="text-center lg:text-left w-full max-w-full overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[10px] sm:text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            v1.0 — Open source &amp; MIT licensed
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] sm:leading-[1.05] break-words">
            Modern ORM for{" "}
            <span className="text-gradient">Golang</span> Developers
          </h1>

          <p className="mt-6 text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
            Fast, lightweight, type-safe database toolkit built for scalable Go
            applications. Fluent queries, auto migrations, zero magic.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#docs"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:glow-cyan transition-all shadow-lg shadow-primary/20"
            >
              Get Started
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://github.com/Anik2069/go-db-orm"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass hover:border-primary/40 transition-all font-bold"
            >
              <Github className="h-4 w-4" />
              Star on GitHub
              <span className="ml-1 inline-flex items-center gap-1 text-xs text-primary">
                <Star className="h-3 w-3 fill-primary" /> 2.4k
              </span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4 text-[10px] sm:text-xs text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Production ready
            </div>
            <div className="flex items-center gap-2">PostgreSQL · MySQL</div>
            <div className="flex items-center gap-2 text-primary/80">Go 1.21+</div>
          </div>
        </motion.div>

        {/* Right — code block, hidden on mobile to save space */}
        <motion.div
          {...motionPropsDelayed}
          className="relative hidden lg:block"
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
