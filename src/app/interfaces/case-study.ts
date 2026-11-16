// Shape of a project case study page (/projects/:slug), used by the thesis projects.
// The DoseSync page has its own, richer layout and data in database/dosesync.ts.

export interface CaseStudyShot {
  /** Path under public/assets/, for example 'waffic/map.webp'. Empty renders a placeholder. */
  image: string;
  alt: string;
  caption: string;
}

export interface CaseStudyBox {
  title: string;
  text: string;
}

export interface CaseStudyFeatureGroup {
  title: string;
  text: string;
  shots: CaseStudyShot[];
  features: CaseStudyBox[];
}

export interface CaseStudy {
  title: string;
  /** Small line above the title, for example "Bachelor's thesis · 2018". */
  eyebrow: string;
  slogan: string;
  tagline: string;
  links: { label: string; url: string }[];
  hero: CaseStudyShot;
  techStack: string[];

  // Product tab
  summary: string[];
  idea: { intro: string; points: string[] };
  roles: { title: string; text: string; can: string[] }[];
  featureGroups: CaseStudyFeatureGroup[];
  gallery: CaseStudyShot[];

  // Architecture & Development tab
  architectureIntro: string;
  diagram: {
    label: string;
    actors: CaseStudyBox[];
    client: { label: string; boxes: CaseStudyBox[] };
    backend: { label: string; boxes: CaseStudyBox[] };
    external: CaseStudyBox[];
  };
  layers: { name: string; text: string; highlight?: boolean }[];
  dataModel: { intro: string; rows: { name: string; holds: string }[]; image?: CaseStudyShot };
  flows: { title: string; steps: string[] }[];
  codeSample?: { title: string; intro: string; code: string };
  lookingBack: { then: string; today: string }[];

  // Thesis tab: shown only when filled in from the thesis documents.
  thesis?: { title: string; sections: { heading: string; paragraphs: string[] }[] };
}
