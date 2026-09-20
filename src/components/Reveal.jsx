import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0, y = 26, className = "" }) {
  const reduce = useReducedMotion();

  // Mobile: smaller shift + shorter duration keeps many stacked reveals cheap.
  const isMobile =
    typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
  const shift = isMobile ? Math.min(y, 14) : y;
  const duration = isMobile ? 0.5 : 0.8;

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={`transform-gpu ${className}`}
      initial={{ opacity: 0, y: shift }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration, delay: isMobile ? delay * 0.5 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}