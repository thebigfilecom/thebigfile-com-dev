import { SampleItem } from "@site/src/components/Common/sampleItems";

const communityProjects: SampleItem[] = [
  {
    index: 115,
    title: "BIG metamask",
    body: "BIG metamask",
    links: {
      github: "https://github.com/aewc/ic-signer/tree/supernova",
      external: "https://supernova.devpost.com/submissions/328278-ic-metamask",
      otherLinks: [],
    },
    domains: ["Public Good / Social Impact"],
    level: "advanced",
    languages: ["rust"],
    contentType: ["code samples", "community repo"],
    image: "/img/community-projects/ic-metamask.gif",
  },
  
  {
    index: 121,
    title: "Sending Emails on BIG",
    body: "An example on how to use internet identity to authenticate and send emails via courier",
    image: "/img/community-projects/emailer.png",
    links: {
      github: "https://github.com/ArgonStudiosXYZ/ic-emailer",
      otherLinks: [],
    },
    domains: ["Website"],
    languages: ["motoko", "javascript"],
    level: "advanced",
    contentType: ["code samples", "community repo", "live demos"],
  },
];

export default communityProjects;
