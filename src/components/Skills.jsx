import { skillGroups } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  return (
    <section id="skills" className="py-[14vh] scroll-mt-24 md:py-[18vh]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <SectionLabel index="04" label="Skills" />
        </Reveal>

        <div className="mt-12 grid gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2">
          {skillGroups.map((g) => (
            <Reveal key={g.name}>
              <div className={g.prominence === "low" ? "opacity-75" : ""}>
                <div className="flex items-baseline gap-3">
                  <h3
                    className={`font-display font-medium tracking-tight text-foreground ${
                      g.prominence === "high" ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                    }`}
                  >
                    {g.name}
                  </h3>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {g.skills.length} tools
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li
                      key={s}
                      className={`rounded-full border px-3 py-1.5 font-body text-sm transition-colors ${
                        g.prominence === "high"
                          ? "border-border bg-secondary/60 text-foreground/85 hover:border-sage hover:text-sage"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}