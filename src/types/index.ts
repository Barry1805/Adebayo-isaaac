export type Language = 'en' | 'uk';

export type DeploymentType = 'Cloud' | 'Data Center' | 'Hybrid / Migration' | 'Evaluating';

export interface CaseStudy {
  id: string;
  number: string;
  sector: {
    en: string;
    uk: string;
  };
  category: 'security' | 'itsm' | 'multiclient' | 'migration';
  title: {
    en: string;
    uk: string;
  };
  context: {
    en: string;
    uk: string;
  };
  intervention: {
    en: string;
    uk: string;
  };
  outcome: {
    en: string;
    uk: string;
  };
  metric?: {
    value: string;
    label: {
      en: string;
      uk: string;
    };
  };
  technicalHighlights: {
    en: string[];
    uk: string[];
  };
  tools: string[];
}

export interface Certification {
  id: string;
  number: string;
  title: string;
  code?: string;
  verifyUrl?: string;
  issuedBy: string;
  skills: string[];
}

export interface CapabilityPillar {
  number: string;
  title: {
    en: string;
    uk: string;
  };
  description: {
    en: string;
    uk: string;
  };
  items: {
    en: string[];
    uk: string[];
  };
}

export interface EngagementTier {
  number: string;
  title: {
    en: string;
    uk: string;
  };
  description: {
    en: string;
    uk: string;
  };
  idealFor: {
    en: string;
    uk: string;
  };
  deliverables: {
    en: string[];
    uk: string[];
  };
}
