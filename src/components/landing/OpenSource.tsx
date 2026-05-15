import { motion } from "framer-motion";
import { Github, Star, Users, Scale, Heart } from "lucide-react";

const stats = [
  { icon: Star, label: "GitHub Stars", value: "2,431" },
  { icon: Users, label: "Contributors", value: "84" },
  { icon: Scale, label: "License", value: "MIT" },
  { icon: Heart, label: "Community", value: "Driven" },
];

export function OpenSource() {
  return (
    <section id="community" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass rounded-3xl p-8 sm:p-10 lg:p-14 overflow-hidden text-center"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-primary/30 blur-[120px]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Open source, <span className="text-gradient">forever</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2">
              Built in the open with the Go community. MIT licensed and free to use anywhere.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-xl p-5">
                  <s.icon className="h-5 w-5 text-primary mx-auto" />
                  <div className="mt-3 text-2xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/Anik2069/go-db-orm"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-cyan transition"
            >
              <Github className="h-4 w-4" />
              Star on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
