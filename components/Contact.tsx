import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  const links = [
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: profile.github, label: "GitHub", Icon: Github },
  ];
  return (
    <section id="contact" className="section pb-12">
      <Reveal>
        <p className="label">05 / Contact</p>
        <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
          Let&apos;s build something <em className="text-accent">together.</em>
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="group mt-10 inline-flex items-center gap-3 break-all border-b-2 border-accent pb-1 font-display text-2xl transition hover:text-accent md:text-4xl"
        >
          {profile.email}
          <ArrowUpRight className="shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="pill flex items-center gap-2 px-6 py-3 text-sm transition hover:-translate-y-1 hover:border-accent/50"
            >
              <Icon size={18} className="text-accent" /> {label}
            </a>
          ))}
        </div>
        <div className="mt-24 flex flex-wrap items-center justify-between gap-3 border-t border-line/15 pt-6 text-xs text-muted">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Designed & built with Next.js and Tailwind CSS</span>
        </div>
      </Reveal>
    </section>
  );
}
