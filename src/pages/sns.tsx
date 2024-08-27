import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import { CardWithDescription } from "../components/Common/Card/index";
import ShareMeta from "../components/Common/ShareMeta/index";
import { Stat, StatsPanel } from "../components/Common/Stats/index";
import TranslatedLayout from "../components/Common/TranslatedLayout/TranslatedLayout";
import VideoCard from "../components/Common/VideoCard";
import { SpringCounter } from "../components/LandingPage/PreHero/Counters";
import {
  MediumDaoCard,
  MediumDaoCardContainer,
  SmallDaoCard,
} from "../components/SnsPage/DaoCard";
import OpenChatCard from "../components/SnsPage/OpenChatCard";
import {
  dashboardUrlFromRootCanisterId,
  extraMetadata,
  goldDao,
  openChatDao,
  snsData,
  sonicDao,
} from "../data/sns";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";

/*

  This page pulls data dynamically from  multiple sources via a plugin at /plugins/sns-data.js:
    * the SNS Aggregator (used by the NNS dapp as well)
    * swap canisters for decentralization swap data (participant count, ICP raised)
    * dashboard API for proposal count

  Not all SNS data is availabe via API's (eg. X URL), so this page allows for extra metadata to be added via the extraMetadata object below.

  Some SNS information is overridden via the extraMetadata object below, eg. the description to better suite the page.

  This page will display new DAO's automatically as they are picked up by the SNS Aggregator, and will use original data until extraMetadata is added.

*/

// these are displayed as large cards above the small card grid
export const excludedFromSmallCards = [
  goldDao.rootCanisterId,
  sonicDao.rootCanisterId,
  openChatDao.rootCanisterId,
];

export const smallSnsCards = snsData.filter(
  (dao) => !excludedFromSmallCards.includes(dao.rootCanisterId)
);

const aggregateSnsData = [
  {
    label: "SNS DAOs",
    value: snsData.length,
  },
  {
    label: "Proposals executed",
    value: snsData.reduce((acc, sns) => acc + sns.proposalCount, 0),
    format: (value) =>
      value > 1000 ? Math.floor(value / 100) + "00+" : value.toFixed(0),
  },
  {
    label: "Swap participants",
    value: snsData.reduce((acc, sns) => acc + sns.participants, 0),
    format: (value) =>
      value > 1000 ? (value / 1000).toFixed(1) + "k+" : value.toFixed(0),
  },
  {
    label: "ICP raised",
    value: snsData.reduce((acc, sns) => acc + sns.icpRaised, 0),

    format: (value) =>
      value > 1000000 ? (value / 1000000).toFixed(1) + "m+" : value.toFixed(0),
  },
];
const benefits = [
  {
    icon: "/img/sns/icon-decentralization.svg",
    title: "Decentralization",
    description: (
      <>
        Services run on a fully decentralized network governed by their users,
        and without having to depend on a single party.
      </>
    ),
  },
  {
    icon: "/img/sns/icon-rewards.svg",
    title: "Rewards & incentives",
    description: (
      <>
        Members can get rewards for participating in governance and incentives
        for tasks.
      </>
    ),
  },
  {
    icon: "/img/sns/icon-autonomous.svg",
    title: "Autonomous updates",
    description: (
      <>
        Community-approved proposals initiate autonomous execution of updates.
        No single entity alone can choose or stop the process.
      </>
    ),
  },
  {
    icon: "/img/sns/icon-user-centric.svg",
    title: "User-centricity",
    description: (
      <>
        BigFile allow communities to align incentives and shape
        services.
      </>
    ),
  },
  {
    icon: "/img/sns/icon-transparency.svg",
    title: "Transparency",
    description: (
      <>
        Governance proposals and service updates are publicly displayed on SNS
        dashboards.
      </>
    ),
  },
  {
    icon: "/img/sns/icon-security.svg",
    title: "Security",
    description: (
      <>
        BigFile always prioritizes security. Being 100% open source, security is at the highest level.
      </>
    ),
  },
];

function SnsPage() {
  const [startCountup, setStartCountup] = React.useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="Community-owned Web3"
      description="The BigFile blockchain empowers communities to take full control and ownership of all internet services, from social media networks and games to open enterprise technology infrastructures, through participation in decentralized autonomous organizations (DAOs)."
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-sns.jpg" />

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}
        <AnimateSpawn variants={transitions.container}>
          <section
            className="overflow-hidden bg-infinite text-white pt-20"
            ref={heroRef}
          >
            <div className="container-10 pt-12 mb-60 md:mb-52 md:pt-36 relative">
              <div className="md:w-7/10">
                <motion.h1
                  className="tw-heading-3 md:tw-heading-2 mb-6"
                  variants={transitions.item}
                >
                  Community-owned Web3
                </motion.h1>
                <motion.p
                  className="tw-lead-sm md:tw-lead mb-8"
                  variants={transitions.item}
                >
                  The BigFile blockchain empowers communities to take full control and ownership of all internet services, from social media networks and games to open enterprise technology infrastructures, through participation in decentralized autonomous organizations (DAOs).
                </motion.p>
              </div>
            </div>
            <div className="container-10 relative">
              <motion.img
                src="/img/whiteBlurredCircle.webp"
                alt=""
                className="absolute pointer-events-none max-w-none w-[800px] aspect-square -right-[200px] bottom-[-300px] md:w-[1500px] md:bottom-[-680px] md:right-[-550px] object-contain object-center"
                variants={transitions.item}
              />
            </div>
          </section>
          <motion.section
            className="container-12 relative h-40 sm:h-0"
            variants={transitions.fadeIn}
          >
            <div className="max-w-[660px] sm:absolute pointer-events-none right-5 -translate-y-[187px] sm:-translate-y-[279px] md:-translate-y-[382px] text-center">
              <img
                src="/img/sns/hero.webp"
                className="w-80 sm:w-[480px] md:w-auto max-w-full"
                alt=""
              />
            </div>
          </motion.section>
        </AnimateSpawn>

        <section className="container-10 sm:pt-56">
          <AnimateSpawn
            className="mb-20 md:mb-30"
            variants={transitions.container}
          >
            <motion.p
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-60 mb-8 md:mb-12 md:w-8/10"
              variants={transitions.item}
            >
              In Web3, you govern, own, and shape the internet services you love.
            </motion.p>
            <motion.p
              className="mb-0 flex flex-col items-start sm:flex-row gap-6 md:gap-8"
              variants={transitions.item}
            >
              <Link className="button-primary" href="#sns-dapps">
                Join an SNS DAO community
              </Link>
              <Link className="button-outline" href="/sns/faq">
                How to participate (FAQ)
              </Link>
            </motion.p>
          </AnimateSpawn>
          
        </section>

        
        <section className="container-10 pt-20 md:pt-30">
          <AnimateSpawn className="text-center" variants={transitions.item}>
            <h2 className="tw-heading-4 md:tw-heading-60 mb-0 max-w-[660px] md:mx-auto">
              Why join an SNS DAO community?
            </h2>
          </AnimateSpawn>

          <AnimateSpawn
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-x-16 md:gap-y-20 mt-20 md:mt-30"
            variants={transitions.container}
          >
            {benefits.map((benefit) => (
              <motion.div className="flex flex-col" key={benefit.title}>
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-30 h-30"
                />
                <h3 className="tw-heading-5 mt-6 mb-2">{benefit.title}</h3>
                <p className="tw-paragraph mb-0">{benefit.description}</p>
              </motion.div>
            ))}
          </AnimateSpawn>
        </section>

        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15 mt-20 md:mt-30">
          <AnimateSpawn
            className=" relative text-white"
            variants={transitions.container}
          >
            <motion.div
              className="blob blob-purple blob-md blob-x-5 blob-y-10 z-[-1] md:blob-lg opacity-80"
              variants={transitions.fadeIn}
            ></motion.div>
            <motion.h2
              className="tw-heading-3 text-center mb-0 w-full mx-auto md:tw-heading-60 lg:w-8/12"
              variants={transitions.item}
            >
              Guides & resources
            </motion.h2>
          </AnimateSpawn>
          <AnimateSpawn
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-16"
            variants={transitions.container}
          >
            <CardWithDescription
              title="SNS DAO dashboard"
              description=""
              href="https://dashboard.thebigfile.com/sns"
            />

            <CardWithDescription
              title="Launch an SNS DAO"
              description=""
              href="/docs/current/developer-docs/daos/sns"
            />
            <CardWithDescription
              title="FAQ: How to join and participate in an SNS DAO"
              description=""
              href="/sns/faq"
            />
            <CardWithDescription
              title="Get SNS governance 
              tokens on BIG DEXs"
              description=""
              href="/ecosystem?tag=DeFi"
            />
          </AnimateSpawn>
        </section>
      </main>
    </Layout>
  );
}

export default SnsPage;
