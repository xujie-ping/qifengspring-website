import { Award, ClipboardCheck, FileBadge2, ShieldCheck } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    title: "ISO 9001 Quality Management",
    copy: "Process-driven quality control from raw material review to shipment documentation."
  },
  {
    icon: Award,
    title: "IATF 16949 Mindset",
    copy: "Automotive supply-chain language for APQP, PPAP-ready documentation and batch discipline."
  },
  {
    icon: ClipboardCheck,
    title: "Incoming & Final Inspection",
    copy: "Dimensional checks, visual inspection, spring force review and packaging verification."
  },
  {
    icon: FileBadge2,
    title: "Traceability Records",
    copy: "Lot records, drawing version control and export-ready product documentation support."
  }
];

export function QualitySystem() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {certifications.map((item) => {
        const Icon = item.icon;
        return (
          <article key={item.title} className="technical-surface border border-white/10 p-7">
            <Icon className="h-10 w-10 text-signal" />
            <h2 className="mt-6 text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-4 leading-7 text-steel-300">{item.copy}</p>
          </article>
        );
      })}
    </div>
  );
}
