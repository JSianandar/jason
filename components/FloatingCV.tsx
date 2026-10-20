"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";
import { profile } from "@/lib/data";

export default function FloatingCV() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={profile.cv}
          download
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-on shadow-xl shadow-accent/30 md:bottom-8 md:right-8"
        >
          <Download size={18} /> Download CV
        </motion.a>
      )}
    </AnimatePresence>
  );
}
