export const site = {
  name: "Royal Bawa Builders",
  atelier: "The Coastal Atelier",
  tagline: "Residences composed for Mangalore’s light, monsoon, and measured life.",
  city: "Mangalore",
  address: "Nandihills Building, Nandigudda, Mangalore 575001, Karnataka, India",
  instagram: "https://www.instagram.com/royalbawabuilders/",
  instagramHandle: "@royalbawabuilders",
} as const;

export type ResidenceStatus = "ready" | "rising";

export type FloorPlan = {
  name: string;
  type: string;
  area: string;
};

export type Residence = {
  slug: string;
  name: string;
  collection: string;
  locality: string;
  status: ResidenceStatus;
  statusLabel: string;
  possession: string;
  summary: string;
  story: string;
  rera: string;
  acres: string;
  units?: string;
  hero: string;
  gallery: { src: string; caption: string }[];
  plans: FloorPlan[];
  amenities: string[];
  neighbourhood: string[];
};

export const residences: Residence[] = [
  {
    slug: "nandi-hills",
    name: "Nandi Hills",
    collection: "Collection 02",
    locality: "Kankanady, Mangalore",
    status: "rising",
    statusLabel: "Now rising",
    possession: "December 2028",
    summary:
      "Forty residences on half an acre, composed for families who want height, quiet, and the pulse of Kankanady without the noise of a megaproject.",
    story:
      "Nandi Hills is not a campus. It is a measured house in the air: forty 3 BHK homes of 1,350 sq. ft., each with a balcony that catches Mangalore’s cross-breeze and a plan that refuses wasted corridor. We are building it slowly, in public, with a RERA ledger that matches the drawing on site. Possession is set for December 2028 — enough time to get the junctions true, the plaster honest, and the monsoon details right.",
    rera: "PRM/KA/RERA/1257/334/PR/081025/008145",
    acres: "0.51 acres",
    units: "40 residences",
    hero: "/images/nandi-exterior.jpg",
    gallery: [
      {
        src: "/images/nandi-exterior.jpg",
        caption: "The rising elevation — Kankanady",
      },
      {
        src: "/images/nandi-living.jpg",
        caption: "A living room composed for monsoon light",
      },
      {
        src: "/images/nandi-terrace.jpg",
        caption: "Outdoor rooms that survive 140 days of rain",
      },
      {
        src: "/images/nandi-detail.jpg",
        caption: "Facade rhythm and shadow",
      },
    ],
    plans: [{ name: "The Nandi 3", type: "3 BHK", area: "1,350 sq. ft." }],
    amenities: [
      "Cross-ventilated 3 BHK plans",
      "High-quality fittings throughout",
      "Rainwater harvesting",
      "Sewage treatment",
      "24×7 water supply",
      "Storm-water drainage designed for coastal rain",
    ],
    neighbourhood: [
      "Kankanady’s hospitals and schools within a short drive",
      "Nandigudda and Valencia on the same urban grain",
      "KMC Mercara Trunk Road and the bypass in minutes",
    ],
  },
  {
    slug: "royal-arcade",
    name: "Royal Arcade",
    collection: "Collection 01",
    locality: "Attavar, Mangalore",
    status: "ready",
    statusLabel: "Ready to inhabit",
    possession: "February 2024",
    summary:
      "A compact, fully possessed house of 2 and 3 BHK residences in Attavar — useful detailing, honest finishes, and the first public proof of the atelier.",
    story:
      "Royal Arcade was never meant to shout. Attavar asked for a quieter building: 2 BHK homes from 801 to 923 sq. ft., 3 BHK homes from 1,063 to 1,201 sq. ft., and a civil system that treats rain as a neighbour, not an afterthought. Possession began in February 2024. The collection is sold. What remains is the standard we now hold every drawing to — and the occasional resale enquiry we are glad to walk through, in person.",
    rera: "PRM/KA/RERA/1257/334/PR/180924/007036",
    acres: "0.17 acres",
    hero: "/images/arcade-exterior.jpg",
    gallery: [
      {
        src: "/images/arcade-exterior.jpg",
        caption: "Street elevation — Attavar",
      },
      {
        src: "/images/arcade-living.jpg",
        caption: "A room for evening conversation",
      },
      {
        src: "/images/arcade-kitchen.jpg",
        caption: "The working heart of the home",
      },
      {
        src: "/images/arcade-bedroom.jpg",
        caption: "Quiet rooms, considered light",
      },
    ],
    plans: [
      { name: "Arcade 2A", type: "2 BHK + 2T", area: "801 sq. ft." },
      { name: "Arcade 2B", type: "2 BHK + 2T", area: "923 sq. ft." },
      { name: "Arcade 3A", type: "3 BHK + 3T", area: "1,063 sq. ft." },
      { name: "Arcade 3B", type: "3 BHK + 3T", area: "1,201 sq. ft." },
    ],
    amenities: [
      "24×7 water supply",
      "Sewage treatment plant",
      "Storm-water drains",
      "Water conservation and rainwater harvesting",
    ],
    neighbourhood: [
      "Attavar’s older Mangalore grain — walkable, civic, coastal",
      "Hospitals, schools, and the old city within easy reach",
      "A scale that still feels like a neighbourhood, not a township",
    ],
  },
];

export function getResidence(slug: string) {
  return residences.find((residence) => residence.slug === slug);
}

export const materials = [
  {
    name: "Laterite",
    origin: "Coastal Karnataka",
    copy: "The red of this coast. We use it as memory more than cladding — a colour, a grain, a refusal of generic beige.",
    image: "/images/material-laterite.jpg",
  },
  {
    name: "Teak & hardwood",
    origin: "Joinery",
    copy: "Doors, frames, and the places hands actually touch. Timber that will still feel like timber in twenty monsoons.",
    image: "/images/material-teak.jpg",
  },
  {
    name: "Brass",
    origin: "Hardware",
    copy: "Quiet metal. Not gold leaf. The small hardware that tells you a building was specified, not merely finished.",
    image: "/images/material-brass.jpg",
  },
  {
    name: "Lime & plaster",
    origin: "Walls that breathe",
    copy: "Mangalore sweats. Walls here should not be plastic skins. We prefer surfaces that can take humidity and still look composed.",
    image: "/images/material-lime.jpg",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "The brief, in person",
    copy: "We do not begin with a brochure. We begin with how you live: elders, children, prayer, guests, the car, the monsoon clothes line.",
  },
  {
    index: "02",
    title: "A drawing that can be built",
    copy: "Plans are held to the site, the setback, and the wind. Pretty paper that cannot be constructed is not a Royal Bawa drawing.",
  },
  {
    index: "03",
    title: "The monsoon test",
    copy: "Every junction is asked one question: what happens in July? Drains, drips, sills, and parapets are designed before the first pour.",
  },
  {
    index: "04",
    title: "Craft on site",
    copy: "Useful detailing is not a slogan. It is the extra hour on a jamb, a true floor, a balcony that does not pond.",
  },
  {
    index: "05",
    title: "Handover without theatre",
    copy: "Keys, documents, RERA facts, and a walkthrough. We would rather you notice the silence of a well-built room than a ribbon.",
  },
] as const;

export const nav = [
  { href: "/residences", label: "Residences" },
  { href: "/atelier", label: "Atelier" },
  { href: "/visit", label: "Private viewing" },
] as const;
