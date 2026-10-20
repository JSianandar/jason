"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

// Bento spans: wide / narrow / narrow / wide
const spans = ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2"];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading n="01" label="Skills" title="The tools I reach for," accent="every day." />
      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((g, gi) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: gi * 0.08, duration: 0.55 }}
            className={`card p-7 ${spans[gi % spans.length]}`}
          >
            <div className="mb-6 flex items-start justify-between">
              <h3 className="font-display text-2xl">{g.group}</h3>
              <span className="font-mono text-xs text-muted">0{gi + 1}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <motion.span
                  key={s.name}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className={`rounded-full px-4 py-1.5 text-sm ${
                    s.core
                      ? "bg-accent font-medium text-on"
                      : "border border-line/20 bg-raised/30 text-fg"
                  }`}
                >
                  {s.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
