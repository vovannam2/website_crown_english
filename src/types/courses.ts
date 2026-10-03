export type SeoData = {
  title: string;
  description: string;
  h1: string;
  primaryTopic: string;
  secondaryTopics: readonly string[];
  localSignals: readonly string[];
};

export type RoadmapItem = {
  name: string;
  range?: string;
  note?: string;
  items?: readonly string[];
  content?: readonly string[];
};

export type CourseRoadmapProps = {
  items: readonly RoadmapItem[];
  courseTitle: string;
};

export type LevelItem = {
  id?: string;
  name?: string;
  level?: string;
  sourceHeading?: string;
  range?: string;
  tuition?: string;
  duration?: string;
  sessions?: string;
  suitableFor?: string;
  entryRequirement?: string;
  description?: string;
  content?: string | readonly string[];
  detail?: string | readonly string[];
  schedule?: readonly string[];
  refund?: readonly string[];
  benefits?: readonly string[];
  priceAfter18?: string;
  priceBefore18?: string;
};

export type TuitionItem = {
  course: string;
  duration?: string;
  sessions?: string;
  price?: string;
  sessionDuration?: string;
};

export type ClassType = {
  title?: string;
  description?: string;
  classSize?: string;
  frequency?: string;
  schedule?: readonly string[];
  standardTime?: string;
  offline?: string;
  evening?: string;
  benefits?: readonly string[];
  tuition?: readonly TuitionItem[];
};

export type BenefitCard = {
  title: string;
  description: string;
};

export type IconName =
  | "book"
  | "briefcase"
  | "coins"
  | "graduation"
  | "layers"
  | "target"
  | "teacher"
  | "trending"
  | "users";

export type VisualTone = "red" | "blue" | "gold" | "green";

export type VisualCard = {
  title: string;
  description: string;
  icon?: IconName;
  tone?: VisualTone;
};

export type HighlightItem = {
  title: string;
  description: string;
  icon?: IconName;
  tone?: VisualTone;
};

export type CourseFeaturePanel = {
  image: string;
  alt: string;
  ctaLabel?: string;
};

export type CoursePageData = {
  id: string;
  href: string;
  seo: SeoData;
  hero: {
    eyebrow?: string;
    title: string;
    titlePrefix?: string;
    titleAccent?: string;
    subtitle?: string;
    highlight?: string;
    description?: string;
    image?: string;
    badge?: {
      title: string;
      description: string;
    };
    proofCard?: {
      eyebrow: string;
      title: string;
      description: string;
      image: string;
      alt: string;
    };
    stats?: readonly VisualCard[];
  };
  suitableFor: readonly string[];
  studentProblems: readonly string[];
  overview: {
    eyebrow?: string;
    title: string;
    titleAccent?: string;
    paragraphs: readonly string[];
    image?: string;
    imageAlt?: string;
    cards?: readonly VisualCard[];
    featurePanel?: CourseFeaturePanel;
  };
  roadmap: readonly RoadmapItem[];
  levels?: readonly LevelItem[];
  personalizedRoadmap?: readonly LevelItem[];
  method?: {
    title?: string;
    description?: string;
    paragraphs?: readonly string[];
  };
  benefits?: readonly string[] | readonly BenefitCard[] | Record<string, readonly string[]>;
  highlights?: readonly HighlightItem[];
  classTypes?: Record<string, ClassType>;
  schedule?: readonly string[];
  cta?: {
    title?: string;
    description?: string;
    buttonLabel?: string;
  };
};

export type CourseSummary = {
  id: string;
  title: string;
  href: string;
  description: string;
  levels: readonly string[];
  image: string;
};

export type LearningFormat = {
  title: string;
  description: string;
  image: string;
  icon?: "monitor" | "laptop";
};

export type AchievementResult = {
  id: string;
  name: string;
  exam: string;
  overall: string;
  highlights: readonly string[];
  fullImage: string;
  thumbnail?: string;
};

export type AchievementVideo = {
  id: string;
  name: string;
  result: string;
  src: string;
};

export type CoursesOverviewPageProps = {
  title: string;
  description: string;
  heroImage?: string;
  learningFormats?: {
    title: string;
    description: string;
    items: readonly LearningFormat[];
  };
  achievements?: {
    title: string;
    description: string;
    results: readonly AchievementResult[];
    video?: AchievementVideo;
  };
  courses: readonly CourseSummary[];
};

export type CourseDataProps = { data: CoursePageData };
export type CoursesLearningFormatsProps = { data?: CoursesOverviewPageProps["learningFormats"] };
export type CoursesAchievementsProps = { data?: CoursesOverviewPageProps["achievements"] };

