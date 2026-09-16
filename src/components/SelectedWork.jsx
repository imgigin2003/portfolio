import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ProjectEntry from "./ProjectEntry";

export default function SelectedWork() {
  return (
    <section id="work" className="py-[14vh] scroll-mt-24 md:py-[18vh]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <SectionLabel index="02" label="Selected Work" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-display text-[8vw] font-medium leading-[1.02] tracking-tight text-foreground md:text-[3.6vw]">
            The work, grounded in real systems.
          </h2>
        </Reveal>

        <div className="mt-8 md:mt-12">
          {projects.map((p, i) => (
            <ProjectEntry key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}