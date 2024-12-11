export type LinkTypes =
  | "action"
  | "motoko"
  | "rust"
  | "docs"
  | "livePreview"
  | "youtube"
  | "github"
  | "external";

export type LinkType = string | { text: string; to: string } | string[];

export type SampleItem = {
  index: number;
  title: string;
  image?: string;
  domains: SampleDomain[];
  level: SampleLevel;
  body: string;
  languages: SampleLanguage[];
  contentType: SampleContentType[];
  links: {
    action?: LinkType;
    motoko?: LinkType;
    rust?: LinkType;
    docs?: LinkType;
    livePreview?: LinkType;
    youtube?: LinkType;
    github?: LinkType;
    external?: LinkType;
  };
};

export type SampleLanguage =
  | "motoko"
  | "rust"
  | "javascript"
  | "typescript"
  | "other";
export type SampleLevel = "beginner" | "intermediate" | "advanced";
export type SampleDomain =
  | "Asynchronous DeFi"
  | "Multi-chain"
  | "Global"
  | "Website"
  | "Metaverse and NFTs"
  | "GameFi"
  | "SocialFi"
  | "Blue Sky"
  | "Public Good / Social Impact";
export type SampleContentType =
  | "code samples"
  | "documentation"
  | "live demos"
  | "tutorial"
  | "videos"
  | "community repo";

export const sampleItems: SampleItem[] = [
  
  {
    index: 13,
    title: "Hello World",
    image: "/img/samples/helloWorld.png",
    domains: ["Website"],
    languages: ["rust", "javascript"],
    level: "beginner",
    contentType: ["code samples", "documentation", "live demos"],
    body: "Deploy a dead simple dapp using two Smart Contracts serving a web page.",
    links: {
      action: {
        text: "Get code",
        to: "https://github.com/",
      },
      rust: "https://github.com/",
      docs: "/docs/current/samples/host-a-website",
    },
  },
  {
    index: 14,
    title: "Static Website",
    image: "/img/samples/staticWebsite.png",
    domains: ["Website", "Global"],
    languages: ["rust", "javascript"],
    level: "beginner",
    contentType: ["documentation", "videos", "tutorial"],
    body: "Quickly set up a static website structure, add content and basic styling, and deploy on the BIG.",
    links: {
      youtube: "https://www.youtube.com/",
    },
  },
  {
    index: 15,
    title: "Basic Dex",
    image: "/img/samples/basicDex.png",
    domains: ["Asynchronous DeFi", "Website", "Multi-chain"],
    languages: ["rust", "javascript"],
    level: "intermediate",
    contentType: [
      "code samples",
      "documentation",
      "videos",
      "live demos",
      "tutorial",
    ],
    body: "Build dapp to enable DeFi applications on the BIG.",
    links: {
      action: {
        text: "Get Code",
        to: "https://github.com/",
      },
      rust: "https://github.com/",
    },
  },
  
  {
    index: 17,
    title: "Basic DAO",
    image: "/img/samples/basicDAO.png",
    domains: ["Global", "Asynchronous DeFi", "Multi-chain"],
    languages: ["rust"],
    level: "intermediate",
    contentType: ["code samples", "documentation", "tutorial", "videos"],
    body: "Dapp initializes a set of accounts and corresponding tokens as well as enables  proposals for communal votes.",
    links: {
      rust: "https://github.com/",
    },
  },
  
  
  
  
];
