import { useState } from "react";
import { motion } from "framer-motion";
import { Book, Box, Search, GitBranch, FileText } from "lucide-react";
import { CodeBlock } from "./CodeBlock";

const sections = {
  Installation: {
    icon: Box,
    body: `# Install the package
go get github.com/Anik2069/go-db-orm

# Initialize a connection
import "github.com/Anik2069/go-db-orm/db"

conn, err := db.Open("postgres", "postgres://localhost/myapp")`,
    lang: "bash",
  },
  "Model creation": {
    icon: FileText,
    body: `type User struct {
    ID        int64  \`db:"id,pk"\`
    Email     string \`db:"email,unique"\`
    Name      string \`db:"name"\`
    CreatedAt time.Time
}

db.Register(&User{})`,
    lang: "go",
  },
  "Query examples": {
    icon: Search,
    body: `// Find one
var u User
db.Model(&User{}).Where("email = ?", e).First(&u)

// Aggregations
count, _ := db.Model(&User{}).Where("status = ?", "active").Count()`,
    lang: "go",
  },
  "Migration setup": {
    icon: GitBranch,
    body: `// Auto-migrate from struct definitions
err := db.AutoMigrate(&User{}, &Order{}, &Product{})

// Or generate SQL files
db.GenerateMigration("add_users_table")`,
    lang: "go",
  },
};

export function DocsPreview() {
  const keys = Object.keys(sections) as (keyof typeof sections)[];
  const [active, setActive] = useState<keyof typeof sections>("Installation");
  const current = sections[active];

  return (
    <section id="docs" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-muted-foreground mb-4">
            <Book className="h-3.5 w-3.5 text-primary" /> Documentation
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
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
