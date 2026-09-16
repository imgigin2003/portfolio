import { profile, about, experience, skillGroups, projects, education } from "@/data/portfolio";

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-lg font-medium text-sage">{title}</h2>
      {children}
    </section>
  );
}

export default function CV() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="cv-page mx-auto max-w-[820px] px-6 py-12 md:py-16">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 font-body text-lg text-muted-foreground">{profile.role}</p>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-sage">{profile.email}</a> ·{" "}
              <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-sage">{profile.github.replace("https://", "")}</a> ·{" "}
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-sage">{profile.linkedin.replace("https://www.", "")}</a>
            </p>
            <span className="mt-2 inline-block rounded border border-sage/30 bg-sage/10 px-1.5 py-0.5 font-mono text-[10px] uppercase text-sage">Open to relocate</span>
          </div>
          <button
            onClick={() => window.print()}
            className="no-print shrink-0 rounded-full border border-border px-4 py-2 font-body text-sm transition-colors hover:border-sage hover:text-sage"
          >
            Print / Save as PDF
          </button>
        </div>

        <p className="mt-4 max-w-[700px] font-body text-sm leading-normal text-foreground/90 md:text-base md:leading-relaxed">
          {about.cvSummary}
        </p>

        <Section title="Experience">
          {experience.map((e) => (
            <div
              key={e.role + e.company}
              className="mt-5 border-t border-border pt-4 first:border-0 first:pt-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-medium text-foreground">{e.role}</h3>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {e.period} · {e.type}
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground">{e.company}</p>
              {e.description && Array.isArray(e.description) ? (
                <ul className="mt-2 list-inside list-disc space-y-1 font-body text-sm leading-normal text-foreground/80 md:leading-relaxed">
                  {e.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : e.description ? (
                <p className="mt-1 font-body text-sm leading-normal text-foreground/80 md:leading-relaxed">
                  {e.description}
                </p>
              ) : null}
            </div>
          ))}
        </Section>

        {education && education.length > 0 && (
          <Section title="Education">
            {education.map((edu) => (
              <div key={edu.degree} className="mt-3">
                <h3 className="font-display text-[15px] font-medium text-foreground">
                  {edu.degree}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {edu.school} · {edu.date}
                </p>
              </div>
            ))}
          </Section>
        )}

        <Section title="Skills">
          {skillGroups.map((g) => (
            <div key={g.name} className="mt-4">
              <p className="font-display text-sm font-medium text-foreground">{g.name}</p>
              <p className="font-body text-sm text-muted-foreground">{g.skills.join(" · ")}</p>
            </div>
          ))}
        </Section>

        <Section title="Selected Projects">
          {projects.map((p) => (
            <div key={p.id} className="mt-4 border-t border-border pt-3 first:border-0 first:pt-0">
              <h3 className="font-display text-base font-medium text-foreground">
                {p.name}
                {p.subtitle ? ` — ${p.subtitle}` : ""}
              </h3>
              <p className="font-body text-sm leading-relaxed text-foreground/80">{p.summary}</p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                {p.tech.join(" · ")}
              </p>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}