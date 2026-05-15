import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeBlock } from "./CodeBlock";

const tabs = {
  Schema: `model User {
    id         int      @id
    name       string
    email      string
    city       string?  // Nullable field (*string in Go)
    
    created_at datetime // CreatedAt in Go
}

model Post {
    id      int      @id
    title   string
    user_id int      @foreign(User.id)
}`,

  Queries: `var users []User
// Only fetches name and email
client.Select("name", "email").FindAll(&users)`,

  Relations: `var invoices []Invoices
// Automatically fetches 'id' and 'user_id' internally 
// to link Items and User
client.Select("invoice_number").
    Include("Items", "User").
    FindAll(&invoices)`,

  "Filtered Relations": `// Only fetch item_name and quantity for the Items relation
client.Select("invoice_number").
    Include("Items:item_name,quantity", "User").
    FindAll(&invoices)`,

  "Raw SQL": `// Fetch into a slice of structs
var users []User
client.Raw("SELECT * FROM users WHERE email LIKE $1", "%@gmail.com").
    Scan(&users)

// Execute a command (Update/Delete)
client.Raw("DELETE FROM users WHERE id = $1", 123).Exec()`,

  Config: `{
    "schema": "./schema",
    "migrations": "./migrations",
    "driver": "postgres",
    "dsn": "postgresql://user:pass@localhost:5432/db"
}`,
};

export function Examples() {
  const keys = Object.keys(tabs) as (keyof typeof tabs)[];
  const [active, setActive] = useState<keyof typeof tabs>("Schema");

  return (
    <section id="examples" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Code that <span className="text-gradient">reads itself</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">Common operations in a few fluent lines.</p>
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
