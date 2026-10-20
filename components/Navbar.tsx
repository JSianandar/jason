"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <div className="relative w-full max-w-3xl md:w-auto">
        <div className="pill flex items-center justify-between gap-2 p-1.5 shadow-lg shadow-black/10">
          <a
            href="#home"
            className="rounded-full bg-accent px-3.5 py-1.5 font-mono text-sm font-bold text-on"
          >
            JS
          </a>
          <nav className="hidden items-center md:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`relative rounded-full px-4 py-2 text-sm transition ${
                  active === n.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-raised/70"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center rounded-full text-fg hover:bg-raised/60 md:hidden"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              className="pill absolute inset-x-0 top-full mt-2 !rounded-3xl p-2 shadow-xl md:hidden"
            >
              {nav.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm ${
                    active === n.id ? "bg-raised/70 text-fg" : "text-muted"
                  }`}
                >
                  {n.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
