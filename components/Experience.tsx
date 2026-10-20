"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading n="02" label="Experience" title="Where I've been" accent="building." />
      <ol className="border-t border-line/15">
        {experience.map((e, i) => (
          <motion.li
            key={e.role + e.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
            className="group relative grid gap-4 border-b border-line/15 px-2 py-9 transition-colors hover:bg-surface/60 md:grid-cols-[170px_1fr_1.3fr] md:gap-10 md:px-6"
          >
            <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100" />
            <div className="font-mono text-sm text-muted">
              <span className="mr-3 text-accent">0{i + 1}</span>
              {e.period}
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl">{e.role}</h3>
              <p className="mt-1 text-accent">{e.company}</p>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed text-muted">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
