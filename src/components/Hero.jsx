import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

function useTypewriter(words, reduce) {
  const [i, setI] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce || !words.length) return;
    const current = words[i % words.length];
    if (!deleting && sub === current.length) {
      const t = setTimeout(() => setDeleting(true), 1500);
      return () => clearTimeout(t);
    }
    if (deleting && sub === 0) {
      setDeleting(false);
      setI((v) => (v + 1) % words.length);
      return;
    }
    const t = setTimeout(() => setSub((v) => v + (deleting ? -1 : 1)), deleting ? 45 : 95);
    return () => clearTimeout(t);
  }, [sub, deleting, i, words, reduce]);

  if (reduce) return words[0] || "";
  return words[i % words.length].substring(0, sub);
}

const Code = () => (
  <pre className="max-w-full whitespace-pre-wrap p-5 font-mono text-[12px] md:text-[13px] leading-relaxed bg-[#FCF8F8] dark:bg-[#272822]">
    <code className="text-[#4B3D3D] dark:text-[#FCF8F8]">
      <span className="text-[#9A7B82] dark:text-[#B8A0A6]">{"// building reliable AI systems"}</span>
      {"\n"}
      <span className="text-[#C76E76] dark:text-[#F5AFAF]">const</span> <span className="text-[#4B3D3D] dark:text-[#FCF8F8]">negin</span> <span className="text-[#C76E76] dark:text-[#F5AFAF]">=</span> <span className="text-[#4B3D3D] dark:text-[#FCF8F8]">{"{"}</span>
      {"\n  "}
      <span className="text-[#8B6268] dark:text-[#FBEFEF]">role</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">:</span> <span className="text-[#8B6268] dark:text-[#FBEFEF]">"AI / Backend Engineer"</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">,</span>
      {"\n  "}
      <span className="text-[#8B6268] dark:text-[#FBEFEF]">focus</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">:</span> <span className="text-[#4B3D3D] dark:text-[#FCF8F8]">[</span>
      <span className="text-[#8B6268] dark:text-[#FBEFEF]">"ML"</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">,</span>{" "}
      <span className="text-[#8B6268] dark:text-[#FBEFEF]">"LLM eng"</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">,</span>{" "}
      <span className="text-[#8B6268] dark:text-[#FBEFEF]">"reliable systems"</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">,</span>{" "}
      <span className="text-[#8B6268] dark:text-[#FBEFEF]">"API Design"</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">],</span>
      {"\n  "}
      <span className="text-[#8B6268] dark:text-[#FBEFEF]">stack</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">:</span> <span className="text-[#4B3D3D] dark:text-[#FCF8F8]">[</span>
      <span className="text-[#8B6268] dark:text-[#FBEFEF]">"Node"</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">,</span>{" "}
      <span className="text-[#8B6268] dark:text-[#FBEFEF]">"Express"</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">,</span>{" "}
      <span className="text-[#8B6268] dark:text-[#FBEFEF]">"FastAPI"</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">,</span>{" "}
      <span className="text-[#8B6268] dark:text-[#FBEFEF]">"ScikitLearn"</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">,</span>{" "}
      <span className="text-[#8B6268] dark:text-[#FBEFEF]">"PyTorch"</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">],</span>
      {"\n  "}
      <span className="text-[#8B6268] dark:text-[#FBEFEF]">shipping</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">:</span> <span className="text-[#8F70A5] dark:text-[#C5B3D3]">true</span><span className="text-[#4B3D3D] dark:text-[#FCF8F8]">,</span>
      {"\n"}
      <span className="text-[#4B3D3D] dark:text-[#FCF8F8]">{"};"}</span>
    </code>
  </pre>
);

export default function Hero() {
  const reduce = useReducedMotion();
  const typed = useTypewriter(profile.roles, reduce);
  const ease = [0.22, 1, 0.36, 1];
  const fade = (delay) =>
    reduce
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease, delay } };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden scroll-mt-24 pt-24 pb-16"
    >
      {/* ambient purple glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[60%] w-[120%] md:h-[480px] md:w-[480px] rounded-full bg-[hsl(var(--violet))] opacity-[0.15] blur-[100px] md:blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[60%] w-[120%] md:h-[380px] md:w-[380px] rounded-full bg-[hsl(var(--sage))] opacity-[0.12] blur-[100px] md:blur-[130px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* left: intro */}
        <div className="min-w-0 w-full max-w-full">
          <motion.p {...fade(0)} className="font-mono text-xs uppercase tracking-[0.3em] text-sage">
            AI × Backend
          </motion.p>

          <motion.h1 {...fade(0.05)} className="mt-5 font-display text-[14vw] font-medium leading-[0.92] tracking-tight text-foreground md:text-[8vw] lg:text-[6.4vw]">
            Negin{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--sage))] to-[hsl(var(--violet))] bg-clip-text text-transparent">
              Parseh
            </span>
          </motion.h1>

          <motion.p {...fade(0.15)} className="mt-4 font-body text-xl text-foreground/90 md:text-2xl">
            <span>{typed}</span>
            <span className="ml-0.5 inline-block animate-pulse text-sage">|</span>
          </motion.p>

          <motion.p {...fade(0.22)} className="mt-6 max-w-xl font-display text-2xl font-medium leading-snug text-foreground/90 md:text-3xl">
            {profile.thesis}
          </motion.p>

          <motion.p {...fade(0.3)} className="mt-5 max-w-lg font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.bio}
          </motion.p>

          <motion.div {...fade(0.38)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-sage px-6 py-3 font-body text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View work
            </a>

            <a
              href="/cv"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 font-body text-sm font-medium text-foreground transition-colors hover:border-sage hover:text-sage"
            >
              CV
            </a>
          </motion.div>

          <motion.div {...fade(0.45)} className="mt-8 flex items-center gap-5 text-muted-foreground">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-sage">
              <Github className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-sage">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-sage">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* right: terminal card + stats */}
        <motion.div {...fade(0.3)} className="flex min-w-0 w-full max-w-full flex-col gap-8">
          <div className="relative w-full max-w-full">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 hidden rounded-3xl bg-[hsl(var(--sage))] opacity-10 blur-2xl md:block"
            />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-[#FCF8F8] dark:bg-[#272822] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[hsl(0_84%_60%)]" />
                <span className="h-3 w-3 rounded-full bg-[hsl(38_92%_50%)]" />
                <span className="h-3 w-3 rounded-full bg-[hsl(120_60%_50%)]" />
                <span className="ml-3 font-mono text-xs text-[#8F7478] dark:text-[#CDBBBC]">negin.ts</span>
              </div>
              <Code />
            </div>
          </div>

        </motion.div>
      </div>

      <motion.a
        {...fade(0.6)}
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground/70 transition-colors hover:text-sage md:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}