import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Lightweight Go syntax highlighter (no deps).
const KEYWORDS = [
  "package", "import", "func", "var", "const", "return", "if", "else",
  "for", "range", "type", "struct", "interface", "map", "go", "defer",
  "select", "switch", "case", "break", "continue", "nil", "true", "false",
];

function highlight(line: string) {
  // Order matters: comments → strings → numbers → keywords → idents
  const tokens: { t: string; c?: string }[] = [];
  let rest = line;

  // Comment
  const cIdx = rest.indexOf("//");
  let trail = "";
  if (cIdx >= 0) {
    trail = rest.slice(cIdx);
    rest = rest.slice(0, cIdx);
  }

  const re = /("(?:\\.|[^"\\])*")|(`(?:[^`])*`)|(\b\d+\b)|([A-Za-z_][A-Za-z0-9_]*)|([^A-Za-z0-9_"`]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(rest)) !== null) {
    if (m[1] || m[2]) tokens.push({ t: m[0], c: "text-emerald-300" });
    else if (m[3]) tokens.push({ t: m[0], c: "text-amber-300" });
    else if (m[4]) {
      if (KEYWORDS.includes(m[4])) tokens.push({ t: m[0], c: "text-violet-300" });
      else if (/^[A-Z]/.test(m[4])) tokens.push({ t: m[0], c: "text-cyan-300" });
      else tokens.push({ t: m[0], c: "text-slate-200" });
    } else tokens.push({ t: m[0], c: "text-slate-400" });
  }

  return (
    <>
      {tokens.map((tok, i) => (
        <span key={i} className={tok.c}>{tok.t}</span>
      ))}
      {trail && <span className="text-slate-500 italic">{trail}</span>}
    </>
  );
}

export function CodeBlock({
  code,
  language = "go",
  animate = false,
  filename,
}: {
  code: string;
  language?: string;
  animate?: boolean;
  filename?: string;
}) {
  const lines = code.replace(/\n$/, "").split("\n");
  const [shown, setShown] = useState(animate ? 0 : lines.length);

  useEffect(() => {
    if (!animate) return;
    setShown(0);
    const id = setInterval(() => {
      setShown((s) => {
        if (s >= lines.length) {
          clearInterval(id);
          return s;
        }
        return s + 1;
      });
    }, 120);
    return () => clearInterval(id);
  }, [animate, code]);

  return (
    <div className="rounded-xl overflow-hidden glass">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
        </div>
        <span className="text-xs text-muted-foreground font-mono">
          {filename ?? `${language}.${language}`}
        </span>
        <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
          {language}
        </span>
      </div>
      <pre className="p-5 text-sm leading-relaxed overflow-x-auto font-mono">
        <code>
          {lines.slice(0, shown).map((line, i) => (
            <motion.div
              key={i}
              initial={animate ? { opacity: 0, x: -8 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <span className="select-none text-slate-600 mr-4 w-6 text-right">{i + 1}</span>
              <span className="flex-1">{highlight(line) || "\u00A0"}</span>
            </motion.div>
          ))}
        </code>
      </pre>
    </div>
  );
}
