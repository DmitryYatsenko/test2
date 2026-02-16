export type ArchetypeKey = "king" | "warrior" | "magician" | "lover";
export type LandingTrack = "core" | "discipline" | "energy";
export type ConfidenceLevel = "high" | "medium" | "low";
export type ResponseQualityLevel = "stable" | "mixed" | "random_like";

export type QuizOption = {
  label: string;
  value: number;
};

export type QuizQuestion = {
  id: number;
  archetype: ArchetypeKey;
  text: string;
};

export type QuestionVisual = {
  imagePath: string;
  alt: string;
  promptHint: string;
};

export type ShadowResult = {
  key: ArchetypeKey;
  title: string;
  recognition: string;
  painPoints: string[];
  price: string;
  hope: string;
};

export type ArchetypeProfile = {
  primary: ArchetypeKey;
  secondary: ArchetypeKey;
  scores: Record<ArchetypeKey, number>;
  confidence: ConfidenceLevel;
  confidencePercent: number;
};

export type ResponseQuality = {
  level: ResponseQualityLevel;
  score: number;
  note: string;
};

export type LandingVariant = {
  track: LandingTrack;
  badge: string;
  headline: string;
  subheadline: string;
  bridge: string;
  cta: string;
  heroImagePath?: string;
  heroImageAlt?: string;
  showBackButton?: boolean;
};
