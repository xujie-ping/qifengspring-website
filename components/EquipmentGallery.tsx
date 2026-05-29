import Image from "next/image";

const equipment = [
  ["/images/spring-forming-process.jpg", "CNC spring coiling and forming cells"],
  ["/images/heat-treatment.jpg", "Continuous heat treatment line"],
  ["/images/dimension-inspection.jpg", "Dimensional inspection and sorting station"],
  ["/images/fatigue-testing.jpg", "Spring force and fatigue testing area"],
  ["/images/equipment-tooling.jpg", "Tooling and sample development bench"],
  ["/images/export-packaging.jpg", "Batch-controlled export warehouse"]
];

export function EquipmentGallery() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {equipment.map(([src, title]) => (
        <figure key={src} className="group relative aspect-[4/3] overflow-hidden border border-blue-100 bg-white shadow-industrial">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/42 to-transparent p-5">
            <h2 className="text-lg font-semibold leading-snug text-[#f8fbff] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">{title}</h2>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
