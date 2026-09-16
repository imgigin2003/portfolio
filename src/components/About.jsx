import { about } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="py-[14vh] scroll-mt-24 md:py-[18vh]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <SectionLabel index="01" label="About" />
        </Reveal>

        <div className="mt-12 md:mt-16">
          <Reveal>
            <h2 className="max-w-4xl font-display text-[8vw] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.6vw]">
              {about.statement}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal delay={0.05}>
                <p className="max-w-2xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {about.body}
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={0.1}>
                <ul className="flex flex-wrap gap-2">
                  {about.interests.map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-body text-sm text-foreground/80"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}