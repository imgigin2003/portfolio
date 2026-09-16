import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

function Role({ item }) {
  const [open, setOpen] = useState(false);
  const interactive = !!item.description;

  const row = (
    <div className="flex w-full items-baseline justify-between gap-6 py-7 md:py-9">
      <div>
        <h3 className="font-display text-xl font-medium leading-tight text-foreground md:text-2xl">
          {item.role}
        </h3>
        <p className="mt-1 font-body text-muted-foreground">{item.company}</p>
      </div>
      <div className="flex shrink-0 items-center gap-5">
        <span className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground">
          {item.period}
        </span>
        {item.type && (
          <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-sage">
            {item.type}
          </span>
        )}
        {interactive ? (
          <span
            className={`font-mono text-sage transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          >
            +
          </span>
        ) : (
          <span className="font-mono text-border">—</span>
        )}
      </div>
    </div>
  );

  const details =
    interactive && open ? (
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="max-w-2xl pb-7 font-body text-base leading-relaxed text-foreground/80 md:text-lg">
            {item.description}
          </p>
        </motion.div>
      </AnimatePresence>
    ) : null;

  if (!interactive) {
    return (
      <div className="border-t border-border">
        {row}
        {details}
      </div>
    );
  }

  return (
    <div className="border-t border-border">
      <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className="block w-full text-left">
        {row}
      </button>
      {details}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-[14vh] scroll-mt-24 md:py-[18vh]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <SectionLabel index="03" label="Experience" />
        </Reveal>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <Reveal>
                <h2 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                  Experience
                </h2>
                <p className="mt-4 max-w-xs font-body text-muted-foreground">
                  Roles across full-stack, backend, and AI engineering.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="md:col-span-8">
            {experience.map((e) => (
              <Role key={e.role + e.company} item={e} />
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
}