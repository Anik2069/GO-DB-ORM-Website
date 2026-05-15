import { motion } from "framer-motion";

const testimonials = [
  { 
    name: "Rasel Ahmed", 
    handle: "@raselahamed613", 
    role: "Inovace Technologies Ltd",
    body: "Go DB ORM has significantly streamlined our database workflows. The type-safety and auto-migrations are exactly what we needed for our scale." 
  },
  { 
    name: "Hanif Inno", 
    handle: "@hanifinno", 
    role: "Open Source Engineer",
    body: "Finally, a Go ORM that feels like it was built for Gophers. No magic, just clean code and incredible performance." 
  },
  { 
    name: "Parvej PSL", 
    handle: "@ParvejPSL", 
    role: "Backend Developer",
    body: "The generic query API is a game changer. Compile-time safety for database queries makes refactoring a breeze." 
  },
  { 
    name: "ShapnOo", 
    handle: "@ShapnOo", 
    role: "Pakiza Software Ltd",
    body: "We've migrated several microservices to Go DB ORM. The p99 latency improvements were immediate and consistent." 
  },
  { 
    name: "Rjk Jami", 
    handle: "@Rjk-Jami", 
    role: "Software Engineer (BD)",
    body: "The documentation is concise and the API is intuitive. It's rare to find a tool that balances power and simplicity this well." 
  },
  { 
    name: "Ryd Krm", 
    handle: "@RydKrm", 
    role: "Pakiza Software Ltd",
    body: "Eager loading with filtered relations allows us to keep our JSON responses clean and fast without any manual overhead." 
  },
  { 
    name: "Mahir", 
    handle: "@Mahir2110", 
    role: "Fullstack Developer",
    body: "Built our latest project's MVP in record time thanks to the zero-config CLI and smart CRUD operations." 
  },
  { 
    name: "Hriidz Hridoy", 
    handle: "@hriidzhridoy", 
    role: "OSS Contributor",
    body: "The transaction handling and raw SQL escape hatches provide full control when you need it most. Truly production-ready." 
  },
];

export function Testimonials() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Loved by <span className="text-gradient">developers</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Trusted by engineers at innovative companies and the open source community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all group hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-xs text-primary-foreground shadow-lg shadow-primary/10">
                  {t.name.split(" ").map((s) => s[0]).join("")}
                </div>
                <div className="overflow-hidden">
                  <div className="font-bold text-sm truncate">{t.name}</div>
                  <div className="text-[10px] text-muted-foreground truncate font-medium">
                    {t.handle} • {t.role}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed italic">
                "{t.body}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
