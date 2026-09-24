export type Teacher = {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly image: string;
  readonly achievements: readonly string[];
  readonly experience: readonly string[];
  readonly strengths: readonly string[];
  readonly quote: string;
};

export type TeacherStandard = {
  readonly title: string;
  readonly items: readonly string[];
};

export type TeachersPageSeo = {
  readonly title: string;
  readonly description: string;
  readonly h1: string;
  readonly canonical: string;
  readonly searchIntent: string;
  readonly primaryTopic: string;
  readonly secondaryTopics: readonly string[];
  readonly localSignals: readonly string[];
  readonly schemaTypes: readonly string[];
  readonly robots: {
    readonly index: boolean;
    readonly follow: boolean;
  };
  readonly openGraph: {
    readonly title: string;
    readonly description: string;
    readonly image: string;
  };
};

export type TeachersPageData = {
  readonly seo: TeachersPageSeo;
  readonly hero: {
    readonly title: string;
    readonly description: string;
  };
  readonly intro: string;
  readonly standards: readonly TeacherStandard[];
  readonly teachers: readonly Teacher[];
};
