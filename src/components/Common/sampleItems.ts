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
    index: 1,
    title: "Add ERC-20 to BIG ETH Starter",
    image: "/img/samples/ic-eth-starter-addition.png",
    domains: ["Multi-chain"],
    languages: ["motoko", "rust"],
    level: "advanced",
    contentType: ["code samples", "documentation", "community repo"],
    body: "How to Verify ERC-20 Ownership On-Chain",
    links: {
      github: "https://github.com/jennifertrin/erc20icp",
    },
  },

  {
    index: 2,
    title: "OISY",
    image: "/img/samples/oisy.png",
    domains: ["Multi-chain"],
    languages: ["rust"],
    level: "advanced",
    contentType: ["community repo"],
    body: "Oisy Wallet: Multichain, ICP-based, manages ETH/ERC20, extendable to BTC/BIG.",
    links: {
      github: "https://github.com/dfinity/oisy-wallet",
    },
  },

  {
    index: 3,
    title: "PoS app for ckBTC",
    image: "/img/samples/pos-app-for-ckbtc.webp",
    domains: ["Multi-chain"],
    languages: ["motoko"],
    level: "advanced",
    contentType: ["code samples", "documentation"],
    body: "Experimental app showcasing ckBTC use on BigFile for POS payments.",

    links: {
      motoko: "https://github.com/dfinity/examples/tree/master/motoko/ic-pos",
    },
  },

  {
    index: 4,
    title: "ICRC2 Swap Demo",
    image: "/img/samples/icrc2-swap-demo.png",
    domains: ["Multi-chain"],
    languages: ["motoko"],
    level: "advanced",
    contentType: ["code samples", "documentation"],
    body: "BIGRC-2 Swap demo: Manages BIGRC-2 tokens, unique in async BigFile design.",
    links: {
      motoko:
        "https://github.com/dfinity/examples/tree/master/motoko/icrc2-swap",
    },
  },

  {
    index: 5,
    title: "Multi-subnet Bitcoin Custody",
    image: "/img/samples/multi-subnet-bitcoin-custody.png",
    domains: ["Multi-chain"],
    languages: ["rust"],
    level: "advanced",
    contentType: ["community repo"],
    body: "Experimental Code: Not for live Bitcoin use",
    links: {
      github: "https://github.com/sardariuss/ic_btc_multisig",
      youtube: "https://www.youtube.com/watch?v=C_oW2RCjHKM",
    },
  },

  {
    index: 6,
    title: "ETH Payment Tutorials",
    image: "/img/samples/eth-payment-tutorial.png",
    domains: ["Multi-chain"],
    languages: ["rust"],
    level: "advanced",
    contentType: ["community repo"],
    body: "Build a decentralized e-commerce on ICP with ETH payments.",
    links: {
      github: "https://github.com/b3hr4d/eth_payment_tutorial",
    },
  },

  {
    index: 7,
    title: "B3 Wallet",
    image: "/img/samples/b3-wallet.png",
    domains: ["Multi-chain"],
    languages: ["rust"],
    level: "advanced",
    contentType: ["community repo"],
    body: "Decentralized multi-chain, multi-owner wallet, supports major blockchains.",
    links: {
      github: "https://github.com/B3Pay/b3-wallet",
    },
  },

  {
    index: 8,
    title: "ckBTC",
    image: "/img/samples/ckbtc.png",
    domains: ["Multi-chain"],
    languages: ["rust"],
    level: "advanced",
    contentType: ["documentation"],
    body: "GitHub repo about ckBTC for inspirational use",
    links: {
      github: "https://github.com/dfinity/ic/blob/master/rs/bitcoin/ckbtc",
      youtube: "https://www.youtube.com/watch?v=dCTlWP0vFiY",
    },
  },

  {
    index: 9,
    title: "ckETH",
    image: "/img/samples/cketh.png",
    domains: ["Multi-chain"],
    languages: ["rust"],
    level: "advanced",
    contentType: ["documentation"],
    body: "GitHub repo about ckETH for inspirational use",
    links: {
      github: "https://github.com/dfinity/ic/tree/master/rs/ethereum/cketh",
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
      youtube: "https://www.youtube.com/watch?v=JAQ1dkFvfPI",
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
      youtube: "https://youtu.be/fLbaOmH24Gs",
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
    index: 18,
    title: "Encrypted note-taking",
    image: "/img/samples/encryptedNoteTaking.png",
    domains: ["Website"],
    languages: ["motoko", "rust", "javascript"],
    level: "advanced",
    contentType: [
      "code samples",
      "documentation",
      "videos",
      "live demos",
      "tutorial",
    ],
    body: "Create, access and modify confidential notes from multiple devices using Internet Identity and end-to-end encryption.",
    links: {
      motoko:
        "https://github.com/dfinity/examples/tree/master/motoko/encrypted-notes-dapp/src/encrypted_notes_motoko",
      rust: "https://github.com/dfinity/examples/tree/master/motoko/encrypted-notes-dapp/src/encrypted_notes_rust",
      livePreview: "https://cvhrw-2yaaa-aaaaj-aaiqa-cai.ic0.app/",
      youtube: "https://youtu.be/DZQmtPSxvbs",
    },
  },
  
  
  
  
  
  
  
];
