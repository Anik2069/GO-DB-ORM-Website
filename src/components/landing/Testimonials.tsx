import { motion } from "framer-motion";

const tweets = [
  { name: "Marta Kowalski", handle: "@martak_dev", role: "Backend Engineer",
    body: "Migrated three services from GORM to Go DB ORM. p99 latency dropped 31% and the code reads better. No magic, just Go." },
  { name: "Daniel Reyes", handle: "@dreyes", role: "Staff @ Fintech",
    body: "The fluent API finally feels right in Go. We deleted hundreds of lines of hand-written query builders." },
  { name: "Aisha Bello", handle: "@aishab", role: "OSS maintainer",
    body: "Auto-migration that doesn't make me cry. PR review experience for schema changes is night and day." },
  { name: "Tomás Lima", handle: "@tomas_codes", role: "Platform engineer",
    body: "Drop-in for our Postgres + MySQL split. Pooling defaults are sane, transactions are dead simple." },
  { name: "Yuki Tanaka", handle: "@yukit", role: "SRE",
    body: "Memory profile in production: chef's kiss. Zero-alloc paths for hot reads, exactly what we wanted." },
  { name: "Priya Shah", handle: "@priyash", role: "Founder",
    body: "Shipped our v1 in a weekend. The docs are short and the API is obvious. Highly recommend for early teams." },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Loved by <span className="text-gradient">developers</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tweets.map((t, i) => (
            <motion.div
              key={t.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-semibold text-sm">
                  {t.name.split(" ").map((s) => s[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.handle} · {t.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
