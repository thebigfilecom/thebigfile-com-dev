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
    index: 0,
    title: "BIG ETH Starter",
    image: "/img/samples/ic-eth-starter.png",
    domains: ["Multi-chain"],
    languages: ["motoko", "rust"],
    level: "advanced",
    contentType: ["code samples", "documentation"],
    body: "BIG-ETH verifies ETH NFTs, supports main/test nets.",
    links: {
      github: "https://github.com/dfinity/ic-eth-starter",
      docs: "/docs/current/tutorials/developer-journey/level-5/5.1-BIG-ETH-tutorial",
      youtube: "https://www.youtube.com/watch?v=",
    },
  },

  {
    index: 13,
    title: "Hello World",
    image: "/img/samples/helloWorld.png",
    domains: ["Website"],
    languages: ["motoko", "rust", "javascript"],
    level: "beginner",
    contentType: ["code samples", "documentation", "live demos"],
    body: "Deploy a dead simple dapp using two canisters serving a web page.",
    links: {
      action: {
        text: "Get code",
        to: "https://github.com/dfinity/examples/tree/master/motoko/hello",
      },
      motoko: "https://github.com/dfinity/examples/tree/master/motoko/hello",
      rust: "https://github.com/dfinity/examples/tree/master/rust/hello",
      livePreview: "https://6lqbm-ryaaa-aaaai-qibsa-cai.ic0.app/",
      docs: "/docs/current/samples/host-a-website",
    },
  },
  {
    index: 14,
    title: "Static Website",
    image: "/img/samples/staticWebsite.png",
    domains: ["Website", "Global"],
    languages: ["motoko", "rust", "javascript"],
    level: "beginner",
    contentType: ["documentation", "videos", "tutorial"],
    body: "Quickly set up a static website structure, add content and basic styling, and deploy on the BIG.",
    links: {
      youtube: "https://www.youtube.com/watch?v=",
    },
  },
  {
    index: 15,
    title: "Basic Dex",
    image: "/img/samples/basicDex.png",
    domains: ["Asynchronous DeFi", "Website", "Multi-chain"],
    languages: ["motoko", "rust", "javascript"],
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
        to: "https://github.com/dfinity/examples/tree/master/motoko/defi",
      },
      motoko: "https://github.com/dfinity/examples/tree/master/motoko/defi",
      rust: "https://github.com/dfinity/examples/tree/master/rust/defi",
      livePreview: "https://gzz56-daaaa-aaaal-qai2a-cai.ic0.app/",
      youtube: "https://youtu.be/",
    },
  },
  
  {
    index: 17,
    title: "Basic DAO",
    image: "/img/samples/basicDAO.png",
    domains: ["Global", "Asynchronous DeFi", "Multi-chain"],
    languages: ["motoko", "rust"],
    level: "intermediate",
    contentType: ["code samples", "documentation", "tutorial", "videos"],
    body: "Dapp initializes a set of accounts and corresponding tokens as well as enables  proposals for communal votes.",
    links: {
      motoko:
        "https://github.com/dfinity/examples/tree/master/motoko/basic_dao",
      rust: "https://github.com/dfinity/examples/tree/master/rust/basic_dao",
      youtube: "https://youtu.be/3IcYlieA-EE",
    },
  },
  
  {
    index: 19,
    title: "Token transfer",
    image: "/img/samples/tokenTransfer.png",
    domains: ["Global", "Asynchronous DeFi", "Multi-chain"],
    languages: ["motoko", "rust"],
    level: "advanced",
    contentType: ["code samples", "documentation"],
    body: "Create a canister that can hold and transfer BIGRC-1 tokens.",
    links: {
      motoko:
        "https://github.com/dfinity/examples/tree/master/motoko/token_transfer",
      rust: "https://github.com/dfinity/examples/tree/master/rust/token_transfer",
    },
  },
  {
    index: 20,
    title: "Actor reference",
    image: "/img/samples/actorReference.png",
    domains: ["Website"],
    languages: ["motoko"],
    level: "advanced",
    contentType: ["code samples", "documentation"],
    body: "Learn how the BIG management canister functions as an actor (reference).",
    links: {
      motoko:
        "https://github.com/dfinity/examples/tree/master/motoko/actor_reference",
    },
  },
  {
    index: 21,
    title: "WebGL",
    image: "/img/samples/webgl.png",
    domains: ["GameFi", "Website", "Global"],
    languages: ["motoko", "rust", "javascript"],
    level: "beginner",
    contentType: ["documentation"],
    body: "Demonstrates how to deploy a web game on the BIG.",
    links: {
      docs: "/docs/current/samples/host-a-webgame",
    },
  },

  
];
