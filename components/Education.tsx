import { Award, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications, education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading n="04" label="Background" title="Learning, " accent="always." />
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="card h-full p-8">
            <span className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-accent/15 text-accent">
              <GraduationCap size={20} />
            </span>
            <h3 className="font-display text-2xl">{education.school}</h3>
            <p className="mt-1 text-sm text-muted">
              {education.degree} · {education.period}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              {education.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card h-full p-8">
            <span className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-accent/15 text-accent">
              <Award size={20} />
            </span>
            <h3 className="font-display text-2xl">Certifications</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c.name}
                  className="rounded-full border border-line/20 bg-raised/30 px-4 py-2 text-sm"
                >
                  {c.name} <span className="ml-1 font-mono text-xs text-muted">{c.date}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
