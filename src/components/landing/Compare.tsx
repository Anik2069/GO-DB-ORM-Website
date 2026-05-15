import { motion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";

type Cell = "yes" | "no" | "partial" | string;
const rows: { feature: string; values: [Cell, Cell, Cell, Cell] }[] = [
  { feature: "Performance",       values: ["Excellent", "Good", "Excellent", "Excellent"] },
  { feature: "Learning Curve",    values: ["Easy", "Medium", "Hard", "Medium"] },
  { feature: "Boilerplate",       values: ["Minimal", "Medium", "High", "Medium"] },
  { feature: "Type Safety",       values: ["yes", "partial", "no", "partial"] },
  { feature: "Flexibility",       values: ["yes", "yes", "yes", "yes"] },
  { feature: "Migration Support", values: ["yes", "yes", "no", "no"] },
];

const cols = ["Go DB ORM", "GORM", "Raw SQL", "SQLX"];

function Cell({ v, primary }: { v: Cell; primary?: boolean }) {
  if (v === "yes") return <Check className={`h-5 w-5 mx-auto ${primary ? "text-primary" : "text-emerald-400"}`} />;
  if (v === "no") return <X className="h-5 w-5 mx-auto text-rose-400/70" />;
  if (v === "partial") return <Minus className="h-5 w-5 mx-auto text-amber-400" />;
  return <span className={`text-sm ${primary ? "text-primary font-medium" : "text-muted-foreground"}`}>{v}</span>;
}

export function Compare() {
  return (
    <section id="compare" className="relative py-20">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent blur-3xl -z-10" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Why choose <span className="text-gradient">Go DB ORM</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground px-4">Honest comparison with what you might be using today.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="py-4 px-6 text-sm font-medium text-muted-foreground">Feature</th>
                  {cols.map((c, i) => (
                    <th key={c} className="py-4 px-6 text-sm font-semibold text-center">
                      {i === 0 ? <span className="text-gradient">{c}</span> : c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.feature} className={i % 2 ? "bg-white/[0.015]" : ""}>
                    <td className="py-4 px-6 text-sm font-medium">{r.feature}</td>
                    {r.values.map((v, j) => (
                      <td key={j} className="py-4 px-6 text-center">
                        <Cell v={v} primary={j === 0} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
