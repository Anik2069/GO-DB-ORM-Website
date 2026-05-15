import { useState } from "react";
import { motion } from "framer-motion";
import { Book, Box, Search, GitBranch, FileText } from "lucide-react";
import { CodeBlock } from "./CodeBlock";

const sections = {
  "Quick Start": {
    icon: Box,
    body: `# 1. Install CLI
go install github.com/Anik2069/go-db-orm/cmd/godborm@latest

# 2. Init Project
godborm init

# 3. Migrate & Generate
godborm migrate
godborm generate --package main`,
    lang: "bash",
  },
  "Schema Syntax": {
    icon: FileText,
    body: `model User {
    id         int      @id
    name       string
    email      string
    city       string?  // Nullable field
    
    created_at datetime // CreatedAt in Go
}

model Post {
    id      int      @id
    title   string
    user_id int      @foreign(User.id)
}`,
    lang: "prisma",
  },
  "Querying": {
    icon: Search,
    body: `// Select specific fields
client.Select("name", "email").FindAll(&users)

// Load relations with filters
client.Select("invoice_number").
    Include("Items:item_name,quantity", "User").
    FindAll(&invoices)`,
    lang: "go",
  },
  "Raw SQL": {
    icon: GitBranch,
    body: `// Scan into structs
var users []User
client.Raw("SELECT * FROM users").Scan(&users)

// Scan single value
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
    <section id="docs" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-12 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] sm:text-xs text-muted-foreground mb-4">
            <Book className="h-3.5 w-3.5 text-primary" /> Documentation
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Docs you'll actually <span className="text-gradient">read</span>
          </h2>
        </motion.div>

        <div className="glass rounded-2xl overflow-hidden grid lg:grid-cols-[240px_1fr]">
          <aside className="border-b lg:border-b-0 lg:border-r border-white/5 p-4 bg-white/[0.02]">
            <div className="text-xs uppercase tracking-wider text-muted-foreground px-3 mb-2">Getting started</div>
            <nav className="flex lg:flex-col gap-1 overflow-x-auto">
              {keys.map((k) => {
                const Icon = sections[k].icon;
                return (
                  <button
                    key={k}
                    onClick={() => setActive(k)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition ${
                      active === k
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" /> {k}
                  </button>
                );
              })}
            </nav>
          </aside>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{active}</h3>
            <CodeBlock code={current.body} language={current.lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
