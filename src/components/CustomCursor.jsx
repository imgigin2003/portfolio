import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

// Subtle "ink-trail" cursor — desktop / fine-pointer only, never on touch or
// when the user prefers reduced motion. The native cursor stays visible.
export default function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 600, damping: 35, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 600, damping: 35, mass: 0.2 });
  const trailX = useSpring(x, { stiffness: 140, damping: 22, mass: 0.4 });
  const trailY = useSpring(y, { stiffness: 140, damping: 22, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      setActive(!!e.target.closest("a, button, [data-cursor='link']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden="true">
      <motion.div
        style={{ x: trailX, y: trailY }}
        className="absolute -ml-[2px] -mt-[2px] h-1 w-1 rounded-full bg-sage/40"
      />
      <motion.div
        style={{ x: dotX, y: dotY }}
        animate={{ scale: active ? 2.6 : 1, opacity: active ? 0.9 : 0.7 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-ink"
      />
    </div>
  );
}