import { profile, about, experience, skillGroups, projects } from "@/data/portfolio";

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
    <div className="min-h-screen bg-background text-foreground">
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
              <span className="ml-3 rounded border border-sage/30 bg-sage/10 px-1.5 py-0.5 text-[10px] uppercase text-sage">Open to relocate</span>
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="no-print shrink-0 rounded-full border border-border px-4 py-2 font-body text-sm transition-colors hover:border-sage hover:text-sage"
          >
            Print / Save as PDF
          </button>
        </div>

        <p className="mt-8 max-w-2xl font-body text-base leading-relaxed text-foreground/85">
          {about.body}
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
              {e.description && (
                <p className="mt-1 font-body text-sm leading-relaxed text-foreground/80">
                  {e.description}
                </p>
              )}
            </div>
          ))}
        </Section>

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