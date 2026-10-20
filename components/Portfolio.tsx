"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <section id="portfolio" className="section">
      <SectionHeading n="03" label="Selected work" title="Things I've" accent="shipped." />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="border-t border-line/15">
          {projects.map((proj, i) => (
            <button
              key={proj.title}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`group flex w-full items-baseline gap-4 border-b border-line/15 py-6 text-left transition-colors ${
                active === i ? "text-accent" : "text-fg/55 hover:text-fg"
              }`}
            >
              <span className="font-mono text-xs">0{i + 1}</span>
              <span className="font-display text-3xl leading-tight md:text-4xl">{proj.title}</span>
              <ArrowUpRight
                size={22}
                className={`ml-auto shrink-0 self-center transition ${
                  active === i ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                }`}
              />
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-line/15 bg-gradient-to-br from-wine via-crimson to-peach shadow-2xl shadow-wine/30">
              <div className="flex items-center gap-1.5 border-b border-white/15 bg-black/20 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              </div>
              <span className="absolute inset-0 grid place-items-center pt-8 font-display text-8xl italic text-white/25">
                {p.title.slice(0, 2)}
              </span>
              {"moncode" in p && p.moncode && (
                <span className="absolute bottom-4 left-4 rounded-full bg-navy-900/80 px-4 py-1.5 text-xs text-peach backdrop-blur">
                  Built with Moncode
                </span>
              )}
            </div>
            <p className="mt-6 text-lg leading-relaxed text-muted">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
