export interface CaseStudyLink {
  label: string;
  url: string;
  external?: boolean;
  primary?: boolean;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  summary?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ArchitectureLayer {
  name: string;
  responsibility: string;
  technologies: string[];
}

export interface ProjectCaseStudy {
  slug: string;
  route: string;
  name: string;
  subtitle: string;
  repository: string;
  executiveSummary: string;
  ownership: string;
  status: string;
  technologies: string[];
  metrics: CaseStudyMetric[];
  architecture: ArchitectureLayer[];
  sections: CaseStudySection[];
  links: CaseStudyLink[];
}
