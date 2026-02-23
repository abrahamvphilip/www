export type PageSectionId =
  | "KKTuv"
  | "YHDHg"
  | "D2Lup"
  | "IYsCw"
  | "jAwkA"
  | "X6Q8j"
  | "oqmDi"
  | "gwgPH"
  | "atC3C"
  | "p8x5I"
  | "QEonC"
  | "3rLbN";

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface HeroStat {
  label: string;
}

export interface SectionHeader {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  badge?: string;
}

export interface JobOpening {
  title: string;
  engagement: string;
  location: string;
}

export interface ResourceCard {
  readTime: string;
  category: string;
  excerpt: string;
  cta: string;
}

export interface FaqRow {
  group: string;
  question: string;
}

export interface FooterLinkGroup {
  title: string;
  links: string[];
}

export interface PlaceholderAssetSlot {
  id: string;
  sectionId: PageSectionId;
  description: string;
  aspectRatio: string;
  treatment: "gradient-grid" | "gauge" | "isometric" | "portrait" | "outline";
}

export interface SiteContent {
  sectionOrder: PageSectionId[];
  nav: {
    left: NavItem[];
    cta: string;
    ctaBadge: string;
  };
  hero: {
    stats: HeroStat[];
    heading: string;
    subheading: string;
  };
  introStrip: {
    copy: string;
  };
  problemStrip: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    stat: string;
  };
  forge: {
    header: SectionHeader;
    ctas: [string, string, string];
    deckTitle: string;
    deckLabels: string[];
    dashboardTitle: string;
    dashboardStep: string;
    featureCards: FeatureCard[];
  };
  nexus: {
    stackLabels: string[];
    header: SectionHeader;
    ctas: [string, string, string];
    featureCards: FeatureCard[];
  };
  buildingBlocks: {
    header: SectionHeader;
    cards: FeatureCard[];
    timeline: {
      marker: string;
      title: string;
      description: string;
    }[];
  };
  careers: {
    header: SectionHeader;
    cta: string;
    openings: JobOpening[];
  };
  resources: {
    header: SectionHeader;
    cta: string;
    lead: ResourceCard;
    cards: ResourceCard[];
  };
  faq: {
    header: SectionHeader;
    rows: FaqRow[];
  };
  cta: {
    header: SectionHeader;
    body: string;
    buttons: [string, string];
    footerLabel: string;
  };
  footer: {
    title: string;
    cta: string;
    social: string[];
    groups: FooterLinkGroup[];
    legal: string;
    policyLinks: string[];
  };
}
