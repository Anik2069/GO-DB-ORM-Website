import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Database } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#compare", label: "Compare" },
  { href: "#examples", label: "Examples" },
  { href: "#docs", label: "Docs" },
  { href: "#community", label: "Community" },
  { href: "#developer", label: "Developer" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-screen overflow-x-hidden ${
        scrolled ? "py-2 sm:py-3" : "py-4 sm:py-5"
      }`}
    >
      <div
        className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8"
      >
        <div
          className={`flex items-center justify-between rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 transition-all ${
            scrolled ? "glass" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <Database className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
              <div className="absolute inset-0 blur-md bg-primary/40 group-hover:bg-primary/60 transition" />
            </div>
            <span className="font-bold tracking-tight text-[15px] sm:text-lg whitespace-nowrap">
              Go DB <span className="text-gradient">ORM</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Anik2069/go-db-orm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg glass hover:border-primary/40 transition"
            >
              <Github className="h-4 w-4" /> Star
            </a>
            <a
              href="#docs"
              className="inline-flex items-center text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:glow-cyan transition"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg glass"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-3"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground py-1"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://github.com/Anik2069/go-db-orm"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-lg glass"
              >
                <Github className="h-4 w-4" /> Star on GitHub
              </a>
              <a
                href="#docs"
                className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium"
              >
                Get Started
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
