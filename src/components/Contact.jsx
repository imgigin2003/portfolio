import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="py-[14vh] scroll-mt-24 md:py-[18vh]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <SectionLabel index="06" label="Contact" />
        </Reveal>

        <div className="mt-12 md:mt-16">
          <Reveal>
            <h2 className="max-w-3xl font-display text-[9vw] font-medium leading-[0.98] tracking-tight text-foreground md:text-[5vw]">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--sage))] to-[hsl(var(--violet))] bg-clip-text text-transparent">
                intelligent.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-body text-sm font-medium text-foreground transition-colors hover:border-sage hover:text-sage"
            >
              Get in touch
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}