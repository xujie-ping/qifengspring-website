type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, copy, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-signal">
        <span className="h-px w-9 bg-signal" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{copy}</p> : null}
    </div>
  );
}
