"use client";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { ArrowUpRight, Code2, Gauge, Globe, LayoutDashboard } from "lucide-react";
import Reveal from "./Reveal";
import { moncode } from "@/lib/data";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

const icons = [Globe, Code2, LayoutDashboard, Gauge];
const marquee = ["Websites", "Web Apps", "Performance", "Design", "SEO", "Dashboards"];

export default function Moncode() {
  return (
    <section id="moncode" className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8 md:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-wine text-white shadow-2xl shadow-wine/40">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-crimson/50 blur-3xl animate-drift" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-peach/15 blur-3xl animate-drift [animation-delay:-5s]" />

          <div className="relative overflow-hidden border-b border-white/10 py-4">
            <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-3xl italic text-white/20 md:text-5xl">
              {[...marquee, ...marquee].map((m, i) => (
                <span key={i} className="flex items-center gap-10">
                  {m} <span className="text-peach/50">✦</span>
                </span>
              ))}
            </div>
          </div>

          <div className="relative grid gap-12 p-8 md:p-14 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-peach">What I&apos;m building</p>
              <h2 className="mt-4 font-display text-6xl italic text-peach md:text-8xl">{moncode.name}</h2>
              <p className="mt-2 text-lg text-white/80">{moncode.tagline}</p>
              <p className="mt-5 max-w-md leading-relaxed text-white/65">{moncode.description}</p>

              <div className="mt-9 flex flex-wrap gap-8">
                {moncode.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-4xl text-peach">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-xs uppercase tracking-wider text-white/50">{s.label}</div>
                  </div>
                ))}
              </div>

              <a
                href={moncode.url}
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-peach px-7 py-3.5 font-semibold text-navy-900 transition hover:-translate-y-0.5"
              >
                Visit moncode.id
                <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {moncode.services.map((s, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <motion.div
                    key={s.title}
                    whileHover={{ y: -6 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
                  >
                    <span className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-peach/15 text-peach">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display text-xl">{s.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{s.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
