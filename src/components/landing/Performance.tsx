import { motion } from "framer-motion";
import { Zap, MemoryStick, Layers, Network } from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell,
} from "recharts";

const stats = [
  { icon: Zap,         label: "Faster query execution",   value: "2.4×", note: "vs reflection ORMs" },
  { icon: MemoryStick, label: "Lower memory usage",       value: "−38%", note: "per-request alloc" },
  { icon: Layers,      label: "Minimal abstraction",      value: "<5%",  note: "overhead vs raw SQL" },
  { icon: Network,     label: "Connection pooling",       value: "10k",  note: "concurrent ops" },
];

const data = [
  { name: "Go DB ORM", ops: 124000, color: "#00C2FF" },
  { name: "GORM",      ops: 52000,  color: "#64748b" },
  { name: "SQLX",      ops: 110000, color: "#94a3b8" },
  { name: "Raw SQL",   ops: 132000, color: "#7C3AED" },
];

export function Performance() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Built for <span className="text-gradient">performance</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">Numbers from internal benchmarks on Postgres 15, M2 Pro.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition"
            >
              <s.icon className="h-5 w-5 text-primary" />
              <div className="mt-4 text-3xl font-bold text-gradient">{s.value}</div>
              <div className="mt-2 font-medium text-sm">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.note}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-semibold">Throughput — SELECT ops/sec</div>
              <div className="text-xs text-muted-foreground">Higher is better</div>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(15,18,30,0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8,
                  }}
                />
                <Bar dataKey="ops" radius={[8, 8, 0, 0]}>
                  {data.map((d) => <Cell key={d.name} fill={d.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
