import { motion } from "framer-motion";
import { Layers, Code2, Wrench, Plug, Database } from "lucide-react";

const nodes = [
  { icon: Code2,    label: "Application",     sub: "Your Go code" },
  { icon: Layers,   label: "ORM Layer",       sub: "Models & schema" },
  { icon: Wrench,   label: "Query Builder",   sub: "Fluent API" },
  { icon: Plug,     label: "DB Driver",       sub: "Connection pool" },
  { icon: Database, label: "PostgreSQL/MySQL", sub: "Your database" },
];

export function Architecture() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Clean <span className="text-gradient">architecture</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">A predictable path from your code to the database.</p>
        </motion.div>

        <div className="relative glass rounded-3xl p-6 sm:p-10 lg:p-12">
          {/* Grid for mobile (2 columns), Flex for desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row items-start lg:items-stretch justify-between gap-8 lg:gap-6">
            {nodes.map((n, i) => (
              <div key={n.label} className={`flex flex-col items-center text-center flex-1 ${i === nodes.length - 1 && (nodes.length % 2 !== 0) ? "col-span-2 md:col-span-1" : ""}`}>
                <div className="flex lg:flex-col items-center gap-4 lg:gap-0 w-full lg:w-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative flex flex-col items-center text-center flex-1 w-full"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl animate-pulse-glow" />
                      <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-2xl glass border-primary/30 flex items-center justify-center">
                        <n.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                      </div>
                    </div>
                    <div className="mt-4 font-bold text-sm sm:text-base leading-tight">{n.label}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground mt-1.5">{n.sub}</div>
                  </motion.div>

                  {/* Connector line - Desktop only */}
                  {i < nodes.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                      className="hidden lg:block origin-left flex-1 h-px w-24 bg-gradient-to-r from-primary/60 via-secondary/40 to-primary/60"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
