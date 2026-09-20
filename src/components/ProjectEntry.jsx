import { ArrowUpRight } from "lucide-react";
import { Suspense } from "react";
import { previews } from "./previews";

export default function ProjectEntry({ project, flip }) {
  const tech = project.tech || [];
  const Preview = previews[project.id];

  return (
    <article className="grid items-center gap-8 border-t border-border py-12 md:py-16 lg:grid-cols-2 lg:gap-14">
      {/* live preview in a browser window frame */}
      <div className={`group ${flip ? "lg:order-2" : ""}`}>
        <div className="transform-gpu overflow-hidden rounded-2xl border border-border bg-card shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[hsl(0_84%_60%)]" />
            <span className="h-3 w-3 rounded-full bg-[hsl(38_92%_50%)]" />
            <span className="h-3 w-3 rounded-full bg-[hsl(120_60%_50%)]" />
            <span className="ml-3 truncate font-mono text-xs text-muted-foreground">
              {project.id}.app
            </span>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl bg-card/50">
            {Preview && (
              <Suspense fallback={<div className="h-full w-full animate-pulse bg-muted/20" />}>
                <Preview />
              </Suspense>
            )}
          </div>
        </div>
      </div>

      {/* content */}
      <div className={flip ? "lg:order-1" : ""}>
        <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-sage">{project.index}</span>
          <span className="h-px w-8 bg-border" />
          <span>{project.status}</span>
        </div>

        <h3 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
          {project.name}
        </h3>
        {project.subtitle && (
          <p className="mt-2 font-body text-lg italic text-muted-foreground">{project.subtitle}</p>
        )}

        <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-foreground/80 md:text-lg">
          {project.summary}
        </p>

        {project.metrics?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-3xl font-semibold text-sage md:text-4xl">{m.value}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {project.measures?.length > 0 && (
          <div className="mt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Measures</p>
            <p className="mt-2 max-w-xl font-body text-base leading-relaxed text-foreground/80">
              {project.measures.join("  —  ")}
            </p>
          </div>
        )}

        {tech.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-foreground/80"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-7 flex flex-wrap gap-6">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm text-sage transition-opacity hover:opacity-70"
            >
              Live demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm text-foreground/70 transition-opacity hover:opacity-100 hover:text-foreground"
            >
              GitHub repo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.download && (
            <a
              href={project.download}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm text-sage transition-opacity hover:opacity-70"
            >
              Download App <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}