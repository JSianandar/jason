"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";

// The capsule stack echoes the shared palette image.
const capsules = [
  {
    label: "Next.js",
    bg: "bg-navy-900",
    fg: "text-white",
    hex: "#161E2F",
    ml: "0%",
  },
  {
    label: "TypeScript",
    bg: "bg-navy-800",
    fg: "text-white",
    hex: "#242F49",
    ml: "8%",
  },
  {
    label: "IoT & Realtime",
    bg: "bg-navy-700",
    fg: "text-white",
    hex: "#384358",
    ml: "2%",
  },
  {
    label: "Fintech",
    bg: "bg-peach",
    fg: "text-navy-900",
    hex: "#FFA586",
    ml: "12%",
  },
  {
    label: "Moncode",
    bg: "bg-crimson",
    fg: "text-white",
    hex: "#B51A2B",
    ml: "4%",
  },
  {
    label: "Node.js",
    bg: "bg-wine",
    fg: "text-white",
    hex: "#541A2E",
    ml: "10%",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-hot/25 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-drift [animation-delay:-7s]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pill inline-flex items-center gap-2 px-4 py-1.5 text-xs text-muted"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
            Open for projects · {profile.location}
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="label mt-8"
          >
            Hi, I&apos;m {profile.name}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-3 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            I build <em className="text-accent">reliable</em> web products, end
            to end.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {profile.intro[0]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-on transition hover:-translate-y-0.5"
            >
              Let&apos;s talk
              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={profile.cv}
              download
              className="flex items-center gap-2 rounded-full border border-line/25 px-7 py-3.5 font-semibold transition hover:bg-raised/50"
            >
              <Download size={18} /> Download CV
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line/15 pt-6"
          >
            {[
              [`${profile.years}+`, "Years building"],
              ["2", "Industries"],
              ["1", "Studio founded"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-accent">{n}</dt>
                <dd className="text-xs text-muted">{l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="mx-auto w-full max-w-sm lg:ml-auto" aria-hidden>
          {capsules.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3 + i * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              style={{ marginLeft: c.ml, zIndex: i }}
              className="relative -mt-3 first:mt-0"
            >
              <div
                className={`flex h-[72px] items-center justify-between rounded-full px-8 shadow-2xl shadow-black/30 ring-1 ring-white/10 animate-float ${c.bg} ${c.fg}`}
                style={{ animationDelay: `${i * 0.45}s` }}
              >
                <span className="font-display text-xl italic">{c.label}</span>
                {/* <span className="font-mono text-[10px] opacity-60">{c.hex}</span> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
