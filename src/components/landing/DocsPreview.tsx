import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book, Box, Search, GitBranch, FileText, Zap, Shield, Terminal } from "lucide-react";
import { CodeBlock } from "./CodeBlock";

const sections = {
  "Quick Start": {
    icon: Zap,
    body: `// 1. Install CLI
go install github.com/Anik2069/go-db-orm/cmd/godborm@latest

// 2. Initialize Project
godborm init // Creates godborm.json & /schema

// 3. Run Migrations
godborm migrate // Syncs DB & generates SQL

// 4. Generate Go Models
godborm generate --package main

// 5. Connect in Code
import "github.com/Anik2069/go-db-orm/godborm/client"

func main() {
    // Reads driver and dsn from godborm.json
    err := client.ConnectWithConfig()
    if err != nil { panic(err) }
    defer client.Close()
}`,
    lang: "go",
  },
  "Schema": {
    icon: FileText,
    body: `// Create a file at schema/user.schema:

model User {
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
}

// Attributes:
// int      -> INT / SERIAL
// string   -> VARCHAR(255)
// datetime -> TIMESTAMP
// type?    -> Nullable pointer
// @id      -> Primary Key
// @foreign -> Foreign Key relation`,
    lang: "prisma",
  },
  "Querying": {
    icon: Search,
    body: `// ✅ Ideal Type-Safe API (Recommended)
// Using client.Model(&User{}) for best inference

// Fetch all matching rows — returns []User
users, err := client.Model(&User{}).
    Where("city = ?", "Dhaka").
    OrderBy("created_at DESC").
    Limit(10).
    Find()

// Fetch single record by ID
user, err := client.Model(&User{}).FindOne(1)

// Count matching records
count, err := client.Model(&User{}).Where("age > ?", 18).Count()

// ✅ Generic API Style
users, err := client.Query[User]().All()`,
    lang: "go",
  },
  "CRUD": {
    icon: Box,
    body: `// ✅ Smart CRUD (Auto Create/Update)
user := &User{Name: "Alice", Email: "alice@example.com"}

// Save handles both Create and Update automatically
err := client.Model(user).Save()   // INSERT (if ID is 0)

user.Name = "Bob"
err = client.Model(user).Save()   // UPDATE (if ID is set)

// ✅ Manual CRUD
client.CreateOne(user)
client.UpdateOne(user)
client.DeleteOne[User](1)

// ✅ Delete from model
err = client.Model(user).Delete()`,
    lang: "go",
  },
  "Relations": {
    icon: GitBranch,
    body: `// ✅ Eager Loading
invoices, err := client.Query[Invoice]().
    Select("invoice_number").
    Include("Items", "User"). // Auto-fetches join keys
    All()

// ✅ Filtered Relations
// Only fetch item_name and quantity for the Items relation
invoices, err := client.Query[Invoice]().
    Include("Items:item_name,quantity", "User").
    All()

// ✅ Clean JSON Output
// Internal join keys are zeroed out after loading
// so json:"...,omitempty" keeps your API responses clean.`,
    lang: "go",
  },
  "Advanced": {
    icon: Terminal,
    body: `// ✅ Transactions (Manual)
tx, err := client.Begin()
defer tx.Rollback()
tx.Create(&order)
tx.Commit()

// ✅ Transactions (Automatic WithTx)
err := client.WithTx(func(tx *client.Tx) error {
    if err := tx.Create(&order); err != nil { return err }
    return nil // Auto-commit on nil, Rollback on error
})

// ✅ Raw SQL
var users []User
client.Raw("SELECT * FROM users WHERE email = ?", email).Scan(&users)

var count int
client.Raw("SELECT COUNT(*) FROM users").Scan(&count)`,
    lang: "go",
  },
};

export function DocsPreview() {
  const keys = Object.keys(sections) as (keyof typeof sections)[];
  const [active, setActive] = useState<keyof typeof sections>("Quick Start");
  const current = sections[active];

  return (
    <section id="docs" className="relative py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-12 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] sm:text-xs text-muted-foreground mb-4">
            <Book className="h-3.5 w-3.5 text-primary" /> Documentation
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Docs you'll actually <span className="text-gradient">read</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Everything from initial setup to advanced type-safe querying and relations.
          </p>
        </motion.div>

        <div className="glass rounded-2xl overflow-hidden grid lg:grid-cols-[260px_1fr]">
          <aside className="border-b lg:border-b-0 lg:border-r border-white/5 p-4 bg-white/[0.02]">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground px-3 mb-4 font-bold">Getting started</div>
            <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {keys.map((k) => {
                const Icon = sections[k].icon;
                return (
                  <button
                    key={k}
                    onClick={() => setActive(k)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm whitespace-nowrap transition-all duration-200 ${
                      active === k
                        ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_20px_rgba(0,194,255,0.1)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`h-4 w-4 transition-transform ${active === k ? "scale-110" : ""}`} /> 
                    <span className="font-medium">{k}</span>
                  </button>
                );
              })}
            </nav>
            
            <div className="hidden lg:block mt-8 px-4 py-4 rounded-xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Shield className="h-4 w-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Type Safe</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Go DB ORM ensures compile-time safety across all database operations.
              </p>
            </div>
          </aside>
          
          <div className="p-4 sm:p-8 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="h-full flex flex-col overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold">{active}</h3>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono bg-white/5 px-2 py-1 rounded">
                    <span className="h-2 w-2 rounded-full bg-primary/50" />
                    {current.lang}
                  </div>
                </div>
                <div className="flex-1">
                  <CodeBlock code={current.body} language={current.lang} filename={active === "Quick Start" ? "setup.go" : active.toLowerCase() + ".go"} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
