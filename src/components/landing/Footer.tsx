import { Database, Github } from "lucide-react";

const cols = [
  { title: "Product", links: [
    { label: "Features", href: "#features" },
    { label: "Examples", href: "#examples" },
    { label: "Performance", href: "#compare" },
  ]},
  { title: "Resources", links: [
    { label: "Documentation", href: "#docs" },
    { label: "GitHub", href: "https://github.com/Anik2069/go-db-orm" },
    { label: "License (MIT)", href: "https://github.com/Anik2069/go-db-orm/blob/main/LICENSE" },
  ]},
  { title: "Community", links: [
    { label: "Discord", href: "#" },
    { label: "Discussions", href: "https://github.com/Anik2069/go-db-orm/discussions" },
    { label: "Contribute", href: "https://github.com/Anik2069/go-db-orm" },
    { label: "Developer", href: "https://github.com/Anik2069" },
  ]},
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-12">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#top" className="flex items-center gap-2">
            <Database className="h-6 w-6 text-primary" />
            <span className="font-semibold tracking-tight">
              Go DB <span className="text-gradient">ORM</span>
            </span>
          </a>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            A modern, type-safe ORM for Go. Open source under MIT.
          </p>
          <a
            href="https://github.com/Anik2069/go-db-orm"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm glass px-3 py-1.5 rounded-lg hover:border-primary/40"
          >
            <Github className="h-4 w-4" /> Anik2069/go-db-orm
          </a>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-sm font-semibold mb-4">{c.title}</div>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Go DB ORM. MIT Licensed.
          </div>
          <div className="text-xs text-muted-foreground">
            Built with ❤️ for the Go community
          </div>
        </div>
      </div>
    </footer>
  );
}
