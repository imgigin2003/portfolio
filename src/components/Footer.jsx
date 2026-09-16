import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="mt-8 flex items-center gap-6 text-muted-foreground">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-sage">
              <Github className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-sage">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-sage">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-border">
            © {new Date().getFullYear()} Negin Parseh
          </p>
        </div>
      </div>
    </footer>
  );
}