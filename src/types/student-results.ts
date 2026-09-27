export type StudentResult = {
  readonly id: string;
  readonly name: string;
  readonly exam: string;
  readonly overall: string;
  readonly highlights: readonly string[];
  readonly thumbnail: string;
  readonly fullImage: string;
  readonly feedback: string;
};

export type StudentVideo = {
  readonly id: string;
  readonly name: string;
  readonly result: string;
  readonly src: string;
};

export type ClassMoment = { readonly image: string; readonly alt: string };

export type StudentResultsPageData = {
  readonly seo: {
    readonly title: string;
    readonly description: string;
    readonly h1: string;
    readonly canonical: string;
    readonly searchIntent: string;
    readonly primaryTopic: string;
    readonly secondaryTopics: readonly string[];
    readonly localSignals: readonly string[];
    readonly schemaTypes: readonly string[];
    readonly robots: { readonly index: boolean; readonly follow: boolean };
    readonly openGraph: {
      readonly title: string;
      readonly description: string;
      readonly image: string;
    };
  };
  readonly hero: {
    readonly title: string;
    readonly description: string;
    readonly portraits: readonly { readonly src: string; readonly alt: string }[];
  };
  readonly intro: string;
  readonly results: readonly StudentResult[];
  readonly videos: readonly StudentVideo[];
  readonly classMoments: readonly ClassMoment[];
};
