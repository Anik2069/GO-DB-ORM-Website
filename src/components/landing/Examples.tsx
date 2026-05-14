import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeBlock } from "./CodeBlock";

const tabs = {
  Insert: `user := &User{Name: "Ada", Status: "active"}

err := db.Model(user).Create()
// INSERT INTO users (name, status) VALUES ($1, $2)`,

  Find: `var users []User

err := db.Model(&User{}).
    Where("status = ?", "active").
    OrderBy("created_at DESC").
    Limit(10).
    Find(&users)`,

  Update: `err := db.Model(&User{}).
    Where("id = ?", 42).
    Update(map[string]any{
        "status": "archived",
    })`,

  Delete: `err := db.Model(&User{}).
    Where("status = ?", "inactive").
    Delete()
// DELETE FROM users WHERE status = $1`,

  Joins: `var rows []OrderWithUser

err := db.Model(&Order{}).
    Join("LEFT JOIN users ON users.id = orders.user_id").
    Select("orders.*, users.name as user_name").
    Where("orders.total > ?", 100).
    Find(&rows)`,

  Transactions: `err := db.Transaction(func(tx *db.Tx) error {
    if err := tx.Model(&order).Create(); err != nil {
        return err
    }
    return tx.Model(&Inventory{}).
        Where("sku = ?", order.SKU).
        Update(map[string]any{"qty": gorm.Expr("qty - ?", 1)})
})`,
};

export function Examples() {
  const keys = Object.keys(tabs) as (keyof typeof tabs)[];
  const [active, setActive] = useState<keyof typeof tabs>("Find");

  return (
    <section id="examples" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Code that <span className="text-gradient">reads itself</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Common operations in a few fluent lines.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {keys.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === k
                  ? "bg-primary text-primary-foreground glow-cyan"
                  : "glass hover:border-primary/30"
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-secondary/10 blur-2xl -z-10" />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <CodeBlock code={tabs[active]} animate filename={`${active.toLowerCase()}.go`} language="go" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
