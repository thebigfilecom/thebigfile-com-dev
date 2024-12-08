// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const dotenv = require("dotenv");
const isDev = process.env.NODE_ENV === "development";
dotenv.config({ path: ".env.local" });

const versions = require("./versions.json");
const lightCodeTheme = require("./codeblock-theme");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const simplePlantUML = require("@akebifiky/remark-simple-plantuml");
const homeShowcaseProjectsPlugin = require("./plugins/home-showcase");
const cryptoPricePlugin = require("./plugins/crypto-price");
const xdrPricePlugin = require("./plugins/xdr-price");
const icpXdrPricePlugin = require("./plugins/icp-xdr-price");
const tailwindPlugin = require("./plugins/tailwind");
const matomoPlugin = require("./plugins/matomo");
const customWebpack = require("./plugins/custom-webpack");
const roadmapDataPlugin = require("./plugins/roadmap-data");
const blogPostsPlugin = require("./plugins/blog-posts");
const externalRedirectsPlugin = require("./plugins/external-redirects");
const whatIsIcpDataPlugin = require("./plugins/what-is-big-file-cards");
const howItWorksCardsPlugin = require("./plugins/howitworks-cards");
const howItWorksArticlesPlugin = require("./plugins/howitworks-articles");
const math = require("remark-math");
const katex = require("rehype-katex");
const votingRewardsPlugin = require("./plugins/voting-rewards");
const {
  getRedirects,
  getSplatRedirects,
  getExternalRedirects,
  getExactUrlRedirects,
} = require("./plugins/utils/redirects");
const fs = require("fs");
const validateShowcasePlugin = require("./plugins/validate-showcase.js");
const contentfulPlugin = require("./plugins/contentful");
const snsDataPlugin = require("./plugins/sns-data");
const airtablePlugin = require("./plugins/airtable");
const youtubePlugin = require("./plugins/youtube");

const isDeployPreview = !!process.env.PREVIEW_CANISTER_ID;

if (process.env.PREVIEW_CANISTER_ID) {
  console.log("PREVIEW_CANISTER_ID:", process.env.PREVIEW_CANISTER_ID);
}

const navbarItems = [
  {
    type: "search",
    position: "right",
  },
];

const subnavItems = [
  {
    type: "doc",
    position: "left",
    docId: "home",
    label: "Home",
  },
  {
    type: "docSidebar",
    position: "left",
    sidebarId: "build",
    label: "Build",
    activeBasePath: "/docs/current/developer-docs/",
  },
  {
    type: "dropdown",
    position: "left",
    label: "Languages",
    items: [
      { label: "Rust", href: "/docs/current/developer-docs/backend/rust/" },
      {
        label: "Motoko",
        href: "/docs/current/motoko/main/getting-started/motoko-introduction",
      },
      {
        label: "TypeScript",
        href: "/docs/current/developer-docs/backend/typescript/",
      },
      { label: "Python", href: "/docs/current/developer-docs/backend/python/" },
      {
        label: "Solidity",
        href: "/docs/current/developer-docs/backend/solidity/",
      },
    ],
  },
  {
    type: "dropdown",
    position: "left",
    label: "Frameworks",
    items: [
      {
        label: "Juno",
        href: "/docs/current/developer-docs/web-apps/frameworks/juno",
      },
    ],
  },
  {
    type: "dropdown",
    position: "left",
    label: "Additional Resources",
    items: [
      {
        label: "Awesome BigFile",
        href: "https://github.com/thebigfilecom/awesome-big-file#readme",
      },
      {
        label: "SDK Release Notes",
        type: "doc",
        docId: "other/updates/release-notes/release-notes",
      },
      { label: "Sample Code", to: "/samples" },
      { label: "Developer Tools", to: "/tooling" },
      { label: "Developer Grants", href: "https://thebigfile.com/grants" },
      {
        label: "Dev Forum",
        href: "https://forum.thebigfile.com/",
      },
      {
        label: "Dev Discord",
        href: "https://discord.gg/nyTAmMntqp",
      },
    ],
  },
  /**
   * Add UI tests in development mode
   */
  process.env.NODE_ENV === "development" && {
    label: "UI Tests",
    href: "/docs/current/tests/all",
  },
].filter(Boolean);

/** @type {import("./src/components/Common/MarketingNav").MarketingNavType} */
const marketingNav = {
  mainItems: [
    {
      name: "Learn",
      auxItems: [
        {
          name: "BigFile Dashboard",
          href: "https://dashboard.thebigfile.com/",
        },
        { name: "BigFile Wiki", href: "https://wiki.thebigfile.com/" },
        {
          name: "Whitepaper",
          href: "https://thebigfile.com/white.pdf",
        },
        {
          name: "History of BigFile",
          href: "https://wiki.thebigfile.com/wiki/History",
        },
      ],

      sections: [
        {
          name: "Start Here",
          items: [
            // {
            //   name: "The Basics",
            //   href: "/basics",
            //   description: "New to BigFile? Read this first",
            // },
            {
              name: "What is BigFile",
              href: "/what-is-big-file",
              description: "Get to know ",
            },
            {
              name: "How it works",
              href: "/how-it-works",
              description: "Look into the nitty gritty",
            },
            {
              name: "Technical Roadmap",
              href: "/roadmap",
              description: "Milestones and what’s next",
            },
            
          ],
          featured: {
            title: "Blockchain for Sustainable Business",
            href: "/capabilities/sustainability",
            image: "/img/nav/featured-start-here.webp",
          },
        },
        {
          name: "Capabilities",
          items: [
            {
              name: "Capabilities",
              href: "/capabilities",
              description: "Transforming the Cloud & Document",
            },
            {
              name: "File Storage",
              href: "/file-storage",
              description: "Scalability and Cost Savings",
            },
            {
              name: "Decentralized AI",
              href: "/decentralized-ai",
              description: "Data for training, analysis, and execution",
            },
            
          ],
          featured: {
            title: "Connect BIG ID",
            href: "/big-id",
            image: "/img/nav/featured-capabilities.webp",
          },
        },
      ],
    },
    {
      name: "Use",
      auxItems: [
        {
          name: "Create an BIG ID",
          href: "https://big-id.thebigfile.com/",
        },
        { name: "FMS and Staking", href: "https://fms.thebigfile.com/" },
      ],

      sections: [
        {
          name: "Step into Web3",
          items: [
            {
              name: "BigFile Ecosystem",
              href: "/ecosystem",
              description: "Try dapps gas free",
            },
            {
              name: "BIG Token",
              href: "/big-tokens",
              description: "Use native utility token",
            },
            {
              name: "Staking and Governance",
              href: "/fms",
              description: "Govern and get rewards",
            },
            {
              name: "BIG ID",
              href: "/big-id",
              description: "Web3 authentication",
            },
          ],
          featured: {
            title: "Hello, Decentralized AI",
            href: "/ai",
            image: "/img/nav/featured-ai.webp",
          },
        },
        {
          name: "Use cases",
          items: [
            {
              name: "DAOs on BigFile",
              href: "/sps",
              description: "Community-owned services",
            },
            {
              name: "Enterprise Cloud 3.0",
              href: "/enterprise",
              description: "Extend Web2 software with blockchain",
            },
            {
              name: "Gaming",
              href: "/gaming",
              description: "Paradigm shift in Web3 gaming",
            },
            {
              name: "SoFi",
              href: "/social-media-dapps",
              description: "Reclaim social media",
            },
            {
              name: "DeFi",
              href: "/defi",
              description: "On-chain swaps",
            },
            {
              name: "NFTs",
              href: "/nft",
              description: "NFT’s live fully on-chain",
            },
          ],
          featured: {
            title: "Multi Chain Technology",
            href: "/multi-chain",
            image: "/img/nav/featured-use-cases.webp",
          },
        },
        // {
        //   name: "Interoperability",
        //   items: [
        //     {
        //       name: "ckBTC",
        //       href: "/ckbtc",
        //       description: "Bitcoin on Web3",
        //     },
        //   ],
        //   featured: {
        //     title: "ckETH coming soon",
        //     image: "/img/nav/featured-interoperability.webp",
        //   },
        // },
      ],
    },
    {
      name: "Develop",
      auxItems: [
        {
          name: "Feedback Board",
          href: "https://dx.thebigfile.com/",
        },
        
        {
          name: "Free Cycles",
          href: "/docs/current/developer-docs/getting-started/cycles/cycles-faucet",
        },
      ],

      sections: [
        {
          name: "Start Coding",
          items: [
            {
              name: "Developer Docs",
              href: "/docs/current/home",
              description: "Start coding",
            },
            {
              name: "Sample code",
              href: "/samples",
              description: "Get inspired by existing projects",
            },
            {
              name: "Programming languages",

              description: "BigFile supports multiple languages",
              href: "/docs/current/developer-docs/smart-contracts/write/overview",
            },
          ],
          featured: {
            title: "Learn to build step by step",
            href: "/docs/current/tutorials/developer-journey/",
            image: "/img/nav/featured-develop.webp",
          },
        },
      ],

      socialIcons: [
        {
          label: "Github",
          href: "https://github.com/thebigfilecom",
          iconUrl: "/img/svgIcons/purple/github.svg",
        },
        {
          label: "Discord",
          href: "https://discord.gg/nyTAmMntqp",
          iconUrl: "/img/svgIcons/purple/discord.svg",
        },
        {
          label: "X",
          href: "https://twitter.com/thebigfile",
          iconUrl: "/img/svgIcons/purple/twitter.svg",
        },
        {
          label: "Forum",
          href: "https://forum.thebigfile.com/",
          iconUrl: "/img/svgIcons/purple/forum.svg",
        },
      ],
    },
    {
      "name": "Participate",
      "auxItems": [
        {
          "name": "Help & Support",
          "href": "https://support.thebigfile.com/"
        }
      ],
      "sections": [
        {
          "name": "Get Involved",
          "items": [
            {
              "name": "BigFile community",
              "href": "/community",
              "description": "Join the global community"
            },
            {
              "name": "Sovereign network",
              "href": "/node-providers",
              "description": "Become a node provider"
            },
            {
              "name": "Community Blog",
              "href": "https://bigfile.medium.com/",
              "description": "Keep up to date"
            }
          ],
          featured: {
            title: "",
            subtitle: "",
            href: "",
            image: ""
          }
        }
      ],
      "socialIcons": [
        {
          "label": "BigFile Forum",
          "href": "https://forum.thebigfile.com/",
          "iconUrl": "/img/svgIcons/purple/forum.svg"
        }
      ]
    },
  ],
  auxItems: [
    {
      name: "BigFile Dashboard",
      href: "https://dashboard.thebigfile.com/",
    },
    {
      name: "Help & Support",
      href: "https://support.thebigfile.com/",
    },
  ],
};

function getImageDataUrl(url) {
  return `data:image/svg+xml;base64,${fs.readFileSync(url).toString("base64")}`;
}

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "BigFile: Blockchain and AI Data Ecosystem",
  tagline:
    "Step into the era of blockchain as a limitless smart contract cloud that hosts everything on-chain: data, content, computations, and user experiences.",
  url: isDeployPreview
    ? `https://${process.env.PREVIEW_CANISTER_ID}.icp0.io`
    : "https://thebigfile.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon-32x32.png",
  organizationName: "BigFile",
  projectName: "thebigfile-com-dev",
  customFields: {
    searchCanisterId: "5qden-jqaaa-aaaam-abfpa-cai",
    marketingNav,
  },
  scripts: [],
  plugins: [
    "docusaurus-plugin-sass",
    customWebpack,
    tailwindPlugin,
    cryptoPricePlugin,
    icpXdrPricePlugin,
    xdrPricePlugin,
    homeShowcaseProjectsPlugin,
    howItWorksArticlesPlugin,
    howItWorksCardsPlugin,
    votingRewardsPlugin,
    roadmapDataPlugin,
    whatIsIcpDataPlugin,
    matomoPlugin,
    blogPostsPlugin,
    contentfulPlugin,
    snsDataPlugin,
    airtablePlugin,
    youtubePlugin,
    validateShowcasePlugin,
    externalRedirectsPlugin({
      redirects: [...getExternalRedirects(), ...getExactUrlRedirects()],
    }),

    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ["html", "md"],
        redirects: getRedirects(),
        createRedirects: (existingPath) => getSplatRedirects(existingPath),
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          lastVersion: versions[0],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
          versions: {
            current: {
              label: "Current 🚧",
              path: "current",
            },
          },

          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math, simplePlantUML, require("remark-code-import")],
          rehypePlugins: [katex],
          editUrl: "https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/",
        },
        blog: {
          path: "blog",
          blogSidebarCount: "ALL",
          postsPerPage: "ALL",
          remarkPlugins: [math, simplePlantUML, require("remark-code-import")],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  // TODO: Remove when ready to integrate internationalization
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: isDeployPreview
  //   ? // Deploy preview: keep it fast!
  //     ['en']
  //   : ['en', 'fr'],
  // },

  themeConfig:
    // NOTE: liveCodeBLock is enabled for possible future feature,
    // but to do that type preset- classic had to be disabled below
    // /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      image: "/img/share.jpg",
      colorMode: {
        disableSwitch: true,
        defaultMode: "light",
        respectPrefersColorScheme: false,
      },
      metadata: [
        {
          // ios safari zooms in when an input field is focused
          // maximum-scale=1 solves the issue
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=5",
        },
      ],
      navbar: {
        hideOnScroll: true,

        logo: {
          alt: "BigFile Logo",
          src: "/img/BIG_logo_horizontal.svg",
        },
        // subnav redeclared to show up in mobile menu
        items: [...navbarItems, ...subnavItems],
      },
      subnav: {
        items: subnavItems,
      },

      // announcementBar:
      //   isDev || isDeployPreview
      //     ? {
      //         id: "local_dev",
      //         content: isDeployPreview
      //           ? `You are currently viewing a preview of this <a href="${
      //               process.env.PR_URL || "https://github.com/thebigfilecom/thebigfile-com-dev"
      //             }">Pull Request</a>.`
      //           : 'You are currently locally editing the Developer Portal. Contributing guidelines are available <a href="https://github.com/thebigfilecom/thebigfile-com-dev#contributing">here</a>.',
      //         textColor: "#091E42",
      //         isCloseable: false,
      //       }
      //     : undefined,

      footer: {
        links: [
          {
            items: [
              {
                label: "Wiki",
                href: "https://wiki.thebigfile.com/",
              },
              {
                label: "Node Providers",
                href: "/node-providers",
              },
              {
                label: "Dashboard",
                href: "https://dashboard.thebigfile.com/",
              },
            ],
          },
          {
            items: [
              {
                label: "BigFile Careers",
                href: "https://careers.thebigfile.com/",
              },
              { label: "Developer Grants", href: "https://thebigfile.com/grants" },
              {
                label: "Support & Feedback",
                href: "https://support.thebigfile.com/",
              },
            ],
          },
          {
            title: "SocialMedia",
            items: [
              {
                label: "X",
                to: "https://twitter.com/thebigfile",
                iconLight: getImageDataUrl(
                  "./static/img/svgIcons/purple/twitter.svg"
                ),
                icon: `data:image/svg+xml;base64,${fs
                  .readFileSync("./static/img/svgIcons/twitter-white.svg")
                  .toString("base64")}`,
              },
              {
                label: "Telegram",
                to: "https://t.me/BigFileOfficial",
                iconLight: getImageDataUrl(
                  "./static/img/svgIcons/purple/telegram.svg"
                ),
                icon: `data:image/svg+xml;base64,${fs
                  .readFileSync("./static/img/svgIcons/telegram-white.svg")
                  .toString("base64")}`,
              },
              {
                label: "Medium",
                to: "https://bigfile.medium.com/",
                icon: "data:image/svg+xml,%3Csvg width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='m24 24h-24v-24h24zm-8.986-15.006v7.326c0 .198 0 .234-.127.362l-1.302 1.264v.27h6.32v-.27l-1.257-1.234c-.091-.07-.148-.178-.148-.3 0-.022.002-.043.005-.064v.002-9.07c-.003-.019-.005-.04-.005-.062 0-.121.058-.229.148-.298l.001-.001 1.286-1.234v-.27h-4.456l-3.176 7.924-3.609-7.924h-4.675v.271l1.502 1.813c.127.115.207.281.207.466 0 .022-.001.043-.003.064v-.003 7.126c.007.041.011.088.011.136 0 .222-.088.423-.231.571l-1.69 2.054v.27h4.8v-.27l-1.691-2.054c-.149-.154-.241-.363-.241-.595 0-.04.003-.079.008-.117v.004-6.16l4.215 9.195h.49z'/%3E%3C/svg%3E",
                iconLight: getImageDataUrl(
                  "./static/img/svgIcons/purple/medium.svg"
                ),
              },
              {
                label: "Youtube",
                to: "https://www.youtube.com/",
                icon: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='24' height='24' viewBox='0 0 310 310' style='enable-background:new 0 0 310 310;' xml:space='preserve'%3E%3Cg id='XMLID_822_'%3E%3Cpath id='XMLID_823_' fill='white' d='M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938 C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527 C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991 c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764 c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861 C204.394,157.263,202.325,160.684,199.021,162.41z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A",
                iconLight: getImageDataUrl(
                  "./static/img/svgIcons/purple/youtube.svg"
                ),
              },
              {
                label: "Reddit",
                to: "https://www.reddit.com/",
                icon: "data:image/svg+xml,%3Csvg width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath fill-rule='nonzero' fill='white' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm6.67-10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23L13 6.65l2.14.45a1 1 0 1 0 .13-.61L12.82 6a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .81-1.33zm-10 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5.81 2.75a3.84 3.84 0 0 1-2.47.77 3.84 3.84 0 0 1-2.47-.77.27.27 0 0 1 .38-.38A3.27 3.27 0 0 0 12 16a3.28 3.28 0 0 0 2.09-.61.28.28 0 1 1 .39.4v-.04zm-.18-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1.01 1.04l.01-.04z'/%3E%3C/g%3E%3C/svg%3E%0A",
                iconLight: getImageDataUrl(
                  "./static/img/svgIcons/purple/reddit.svg"
                ),
              },
              {
                label: "CoinMarketCap",
                to: "https://coinmarketcap.com/",
                icon: "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.1307 14.3432C19.9566 14.4632 19.7533 14.534 19.5423 14.5481C19.3313 14.5623 19.1204 14.5193 18.9318 14.4237C18.489 14.1735 18.2504 13.587 18.2504 12.7878V10.3382C18.2504 9.16231 17.7846 8.32567 17.0055 8.09854C15.6887 7.71328 14.7054 9.32619 14.3259 9.93283L11.9971 13.702V9.10193C11.9712 8.04104 11.6262 7.40565 10.9736 7.21589C10.5423 7.08939 9.89545 7.14114 9.26581 8.10141L4.05907 16.4592C3.36629 15.1338 3.00708 13.6594 3.01255 12.1639C3.01255 7.12676 7.03764 3.0298 11.9971 3.0298C16.9566 3.0298 20.9961 7.12676 20.9961 12.1639V12.1898C20.9961 12.1898 20.9961 12.207 20.9961 12.2156C21.045 13.1903 20.7287 13.9665 20.1336 14.3432H20.1307ZM23.0058 12.1668V12.1179C22.9655 5.97961 18.0434 1 11.9971 1C5.95086 1 1 6.00836 1 12.1639C1 18.3194 5.93361 23.3306 11.9971 23.3306C14.7781 23.3305 17.4533 22.2645 19.4723 20.3521C19.6683 20.1674 19.7836 19.913 19.7933 19.6439C19.803 19.3748 19.7062 19.1128 19.524 18.9145C19.4369 18.8181 19.3315 18.7399 19.2139 18.6843C19.0964 18.6287 18.969 18.597 18.8392 18.5908C18.7093 18.5847 18.5795 18.6043 18.4572 18.6485C18.335 18.6927 18.2227 18.7606 18.1268 18.8484C17.2575 19.673 16.2306 20.3133 15.1077 20.7311C13.9848 21.1489 12.7891 21.3355 11.5923 21.2796C10.3955 21.2238 9.22229 20.9267 8.14317 20.4061C7.06406 19.8856 6.10127 19.1523 5.3126 18.2504L9.99895 10.7177V14.1937C9.99895 15.8641 10.6458 16.4046 11.1892 16.5627C11.7326 16.7209 12.5635 16.6116 13.4347 15.1971L16.0222 11.0081C16.1027 10.873 16.1803 10.758 16.2493 10.6573V12.7878C16.2493 14.3489 16.8761 15.5967 17.9744 16.212C18.4738 16.4816 19.0365 16.6118 19.6036 16.5891C20.1707 16.5663 20.7212 16.3914 21.1973 16.0826C22.4049 15.2977 23.0633 13.8774 22.9943 12.1668H23.0058Z' fill='white'/%3E%3C/svg%3E%0A",
                iconLight: getImageDataUrl(
                  "./static/img/svgIcons/purple/coinmarketcap.svg"
                ),
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} TheBigFile.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust"],
      },
      liveCodeBlock: {
        playgroundPosition: "bottom",
      },
    },
  themes: ["@docusaurus/theme-live-codeblock"],
  clientModules: [require.resolve("./static/load_moc.ts")],
};

module.exports = config;
