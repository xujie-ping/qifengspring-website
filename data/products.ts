export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  keywords: string[];
  description: string;
  applications: string[];
  image: string;
};

export const defaultProducts: Product[] = [
  {
    slug: "automotive-starter-springs",
    name: "Automotive Starter Springs",
    category: "Starter System",
    summary:
      "Precision compression, torsion and formed wire springs engineered for starter motors, brush holders and return mechanisms.",
    keywords: [
      "automotive starter springs",
      "starter motor spring manufacturer",
      "starter brush holder springs",
      "custom starter return springs"
    ],
    description:
      "Custom automotive starter springs for starter motors, brush holders, return mechanisms and drive assemblies. Engineered for stable spring force, fatigue resistance and repeatable assembly.",
    applications: ["Starter motors", "Brush holders", "Drive assemblies"],
    image: "/images/products/starter-spring.jpg"
  },
  {
    slug: "alternator-regulator-springs",
    name: "Alternator Regulator Springs",
    category: "Charging System",
    summary:
      "Stable-force springs for alternator regulators, carbon brush assemblies and compact electrical contact modules.",
    keywords: [
      "alternator regulator springs",
      "automotive alternator spring supplier",
      "carbon brush regulator springs",
      "generator regulator spring manufacturer"
    ],
    description:
      "Alternator regulator springs and generator regulator springs for carbon brush assemblies, voltage regulators and compact electrical modules.",
    applications: ["Alternators", "Voltage regulators", "Carbon brush modules"],
    image: "/images/products/alternator-regulator-spring.jpg"
  },
  {
    slug: "one-way-clutch-flat-springs",
    name: "One-Way Clutch Flat Springs",
    category: "Transmission Components",
    summary:
      "Flat springs formed to tight radius, thickness and working-angle requirements for one-way clutch and overrunning clutch systems.",
    keywords: [
      "one-way clutch flat springs",
      "overrunning clutch flat spring",
      "starter clutch flat spring",
      "custom flat wire springs"
    ],
    description:
      "Custom one-way clutch flat springs and overrunning clutch flat springs formed by flat wire thickness, width, radius and working angle.",
    applications: ["Starter drives", "One-way clutches", "Overrunning mechanisms"],
    image: "/images/products/oneway-flat-spring.jpg"
  },
  {
    slug: "solenoid-switch-springs",
    name: "Solenoid Switch Springs",
    category: "Starter Solenoid",
    summary:
      "Return, contact and compression springs for automotive starter solenoid switches and compact electromagnetic modules.",
    keywords: [
      "solenoid switch springs",
      "starter solenoid spring manufacturer",
      "automotive electromagnetic switch spring",
      "custom solenoid return springs"
    ],
    description:
      "Custom solenoid switch springs for automotive starter solenoids, electromagnetic switch assemblies, contact return systems and compact electrical modules.",
    applications: ["Starter solenoids", "Electromagnetic switches", "Contact return modules"],
    image: "/images/products/solenoid-switch-spring.jpg"
  },
  {
    slug: "automotive-shock-absorber-springs",
    name: "Automotive Shock Absorber Springs",
    category: "Damping System",
    summary:
      "Spring solutions for shock absorber valve assemblies, return functions and damping support structures.",
    keywords: [
      "automotive shock absorber springs",
      "shock absorber valve spring",
      "damper spring manufacturer",
      "custom suspension springs"
    ],
    description:
      "Automotive shock absorber springs for valve assemblies, damping modules, return functions and support structures.",
    applications: ["Shock absorbers", "Valve systems", "Damping modules"],
    image: "/images/products/shock-absorber-spring.jpg"
  },
  {
    slug: "steering-gear-springs",
    name: "Steering Gear Springs",
    category: "Steering System",
    summary:
      "High-consistency springs for steering gear assemblies, adjustment mechanisms and compact mechanical modules.",
    keywords: [
      "steering gear springs",
      "automotive steering spring supplier",
      "steering adjustment springs",
      "custom steering system springs"
    ],
    description:
      "Steering gear springs for automotive steering assemblies, adjustment mechanisms and precision mechanical modules requiring consistent load control.",
    applications: ["Steering gears", "Adjustment mechanisms", "Precision assemblies"],
    image: "/images/products/steering-gear-spring.jpg"
  },
  {
    slug: "home-appliance-springs",
    name: "Home Appliance Springs",
    category: "Appliance Components",
    summary:
      "Custom springs for switches, locking structures, small motors and repeated-use mechanisms in home appliances.",
    keywords: [
      "home appliance springs",
      "appliance switch springs",
      "custom appliance spring manufacturer",
      "small motor springs"
    ],
    description:
      "Home appliance springs for switches, locks, small motors and repeated-use mechanisms, customized for long service life and stable assembly.",
    applications: ["Appliance switches", "Locks", "Small motors"],
    image: "/images/products/home-appliance-spring.jpg"
  },
  {
    slug: "power-tool-springs",
    name: "Power Tool Springs",
    category: "Power Tool Components",
    summary:
      "Durable springs for power tools, trigger systems, brush modules and high-cycle mechanical subassemblies.",
    keywords: [
      "power tool springs",
      "trigger spring manufacturer",
      "power tool brush springs",
      "custom high cycle springs"
    ],
    description:
      "Power tool springs for trigger systems, brush modules and high-cycle mechanical subassemblies used in electric tools.",
    applications: ["Power tools", "Triggers", "Brush assemblies"],
    image: "/images/products/power-tool-spring.jpg"
  }
];

export const products = defaultProducts;

export const advantages = [
  "Custom manufacturing from drawing or sample",
  "Automotive-grade process control and batch traceability",
  "Heat treatment, forming, sorting and visual inspection",
  "Small trial orders and stable mass-production supply",
  "Export-ready packaging and English documentation"
];

export const brandNames = ["OEM Programs", "Tier-1 Buyers", "Aftermarket", "Remanufacturing", "Mexico", "United States", "Europe", "Global RFQ"];

export const siteKeywords = [
  "automotive spring manufacturer",
  "industrial spring supplier",
  "custom spring manufacturer",
  "starter spring factory",
  "alternator regulator springs",
  "one-way clutch flat springs",
  "solenoid switch springs",
  "shock absorber springs",
  "steering gear springs",
  "home appliance springs",
  "power tool springs"
];
