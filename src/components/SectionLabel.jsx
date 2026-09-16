export default function SectionLabel({ index, label }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[11px] tracking-[0.25em] text-sage">{index}</span>
      <span className="h-px w-10 bg-border" />
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}