import type { Locale } from "@/lib/constants/locales";

export type SkillCategory =
  | "Backend"
  | "Frontend"
  | "Databases"
  | "Cloud & DevOps"
  | "Testing & Quality"
  | "Tools";

export type SkillLevel = "comfortable" | "practicing" | "learning";

export type SocialLink = {
  label: string;
  href: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
};

export type Education = {
  school: string;
  program: string;
  specialization: string;
  level: string;
  location: string;
};

export type Profile = {
  identity: {
    name: string;
    country: string;
  };
  headline: string;
  shortBio: string;
  availability: string;
  location: string;
  education: Education;
  targetRole: string;
  valueProposition: string;
  ctaLabels: {
    viewProjects: string;
    downloadCv: string;
    contact: string;
  };
  socialLinks: SocialLink[];
  contactEmail: string;
  professionalSummary: string;
  engineeringValues: string[];
  timeline: TimelineItem[];
};

export type Skill = {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  description: string;
  proof: string;
};

export type ProjectCaseStudySection = {
  title: string;
  body: string;
};

export type ProjectArchitecture = {
  frontend: string;
  backend: string;
  database: string;
  authentication: string;
  integrations: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  status?: string;
  featured: boolean;
  shortDescription: string;
  role: string;
  problem: string;
  solution: string;
  stack: string[];
  highlights: string[];
  challenges: string[];
  results: string[];
  githubUrl: string | null;
  reportUrl?: string;
  image: string;
  coverImage?: string;
  screenshots?: string[];
  architectureImage?: string;
  demoVideoUrl?: string;
  architecture: ProjectArchitecture;
  caseStudySections: ProjectCaseStudySection[];
};

export type Achievement = {
  label: string;
  value: string;
  description: string;
};

export type GitHubRepository = {
  name: string;
  description: string;
  technologies: string[];
  url: string | null;
  category: string;
};

export type Certification = {
  title: string;
  issuer: string;
  status: "planned" | "in-progress" | "completed";
  description: string;
  credentialUrl: string;
  issuedAt?: string;
};

export type LocaleContent = {
  locale: Locale;
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  achievements: Achievement[];
  certifications: Certification[];
};
