"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Download } from "lucide-react";
import { profile } from "@/lib/data";

export default function FloatingCV() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <AnimatePresence>
        {show && (
          <>
            <motion.button
              key="top"
              type="button"
              onClick={toTop}
              aria-label="Back to top"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.92 }}
              className="pill grid h-12 w-12 place-items-center text-accent shadow-xl shadow-black/20 hover:border-accent/50"
            >
              <ArrowUp size={20} />
            </motion.button>
            <motion.a
              key="cv"
              href={profile.cv}
              download
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              transition={{ delay: 0.05 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-on shadow-xl shadow-accent/30"
            >
              <Download size={18} /> Download CV
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
