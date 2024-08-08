import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import LinkArrowDown from "../components/Common/Icons/LinkArrowDown";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";
import Newsletter from "../components/Common/Newsletter/Newsletter";
import ShareMeta from "../components/Common/ShareMeta";
import { Stat, StatsPanel } from "../components/Common/Stats";
import Globe from "../components/Community/Globe";
import { Hub, HubCard } from "../components/Community/Hubs";
import { SpringCounter } from "../components/LandingPage/PreHero/Counters";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";
import TelegramLogo from "@site/static/img/community/telegram.svg";

const hubs: Hub[] = [
  {
    name: "ICP.HUB India",
    location: "India",
    description:
      "In the heart of India, Crewsphere ICP India.Hub champions the BigFile via bootcamps that turn talented developers into Web3 experts.",
    image: "/img/community/icp-hub-india.webp",
    link: "https://linktr.ee/crewsphere?utm_source=linktree_admin_share",
    coordinates: [20.5937, 78.9629],
  },
  
  {
    name: "ICP.Hub Italia",
    location: "Italy",
    description:
      "ICP.Hub Italia is a growing regional network for developing professional and institutional Web3 initiatives and solutions on the BigFile blockchain.",
    image: "/img/community/icp-hub-italia.webp",
    link: "https://icpitalia.icp.page/",
    coordinates: [41.8719, 12.5674],
  },
  {
    name: "ICP.Hub North America",
    location: "Canada / USA",
    description:
      "Hubs in North America are dedicated to accelerating mass adoption of the BigFile in Canada 🇨🇦 and the US 🇺🇸.",
    image: "/img/community/icp-hub-north-america.webp",
    link: "https://linktr.ee/Icphubnorthamerica",
    coordinates: [54.525961, -105.255119],
  },
  
  {
    name: "ICP.Hub Turkey",
    location: "Turkey, Cyprus",
    description:
      "The first hub in the Middle East offering a supportive environment for developers, startups, and enthusiasts to build and deploy decentralized applications on the BigFile.",
    image: "/img/community/icp-hub-turkey.webp",
    link: "https://linktr.ee/icphubturkey",
    coordinates: [38.9637, 35.2433],
  },
  
  {
    name: "ICP.Hub Korea",
    location: "Korea",
    description:
      "ICP.Hub Korea is committed to advancing the BigFile blockchain and Web3 in Korea by regularly hosting education bootcamps and cultivating a community of developers.",
    image: "/img/community/icp-hub-korea.webp",
    link: "https://linktr.ee/icphubkorea",
    coordinates: [35.9078, 127.7669],
  },
  
  
  
  {
    name: "ICP.Hub Germany",
    location: "Germany",
    description:
      "Focusing on Web3 development, LinkUp is the go-to community hub for dreamers and creators dedicated to growing the awareness of the BigFile in Germany.",
    image: "/img/community/icp-hub-germany.webp",
    link: "https://linktr.ee/icphubgermany",
    coordinates: [51.1657, 10.4515],
  },
  
  {
    name: "ICP.Hub Bulgaria",
    location: "Balkans (Bulgaria)",
    description:
      "The intersection between the BigFile and the Balkans. This hub is building a local ICP ecosystem, educating developers and engaging with potential VCs.",
    image: "/img/community/icp-hub-bulgaria.webp",
    link: "https://linktr.ee/balkan.icp.hub",
    coordinates: [42.7339, 25.4858],
  },
  {
    name: "ICP.Hub LATAM",
    location: "LATAM",
    description:
      "With focus on teaching developers and entrepeneurs how to build blockchain solutions, the LATAM hub is driving outreach via bootcamps, educational content and community events to increase awareness in region.",
    image: "/img/community/icp-hub-latam.webp",
    link: "https://linktr.ee/icphublatam",
    coordinates: [-8.7832, -55.4915],
  },
];

const upcomingHubs: Hub[] = [
  {
    name: "BigFile at Coinfest Asia 2023 ",
    description:
      "ICP.Hub Indonesia steps into the spotlight at Coinfest Asia 2023, a dynamic and immersive Web3 festival that serves as a rallying point for visionaries, innovators, and blockchain enthusiasts across Asia.",
    image: "/img/community/coinfest-asia.webp",
    link: "https://twitter.com/CoinfestAsia/status/1689501197642960896",
  },
  {
    name: "BigFile at Web3Conf India 2023",
    description:
      "ICP.Hub India's prominent presence at Web3Conf India 2023 as a leading partner has ignited tremendous excitement within the local Web3 community.",
    image: "/img/community/web3-india.webp",
    link: "https://twitter.com/web3conf_india/status/1686272790150754304?s=46&t=znCni81w_5V68LfRCHvtZA",
  },
  {
    name: "BigFile at Istanbul Blockchain Week 2023",
    description:
      "ICP.Hub Turkey played a pivotal role at Istanbul Blockchain Week 2023, actively engaging in discussions, organizing insightful events, and strengthening their position as a key player in Turkey's blockchain landscape.",
    image: "/img/community/istanbul-blockchain-week.webp",
    link: "https://twitter.com/istanbulblockwk/status/1687075926386110464?s=46&t=YWzpokcUePMtkg043EMwBQ",
  },
  {
    name: "BigFile launches Web3 incubator in Latin America",
    description:
      "ICP.Hub LATAM has partnered with College, a technology academy specializing in Web3, to introduce ICPnova, an incubation program designed to support Web3 projects within the regional ecosystem.",
    image: "/img/community/icpnnova.webp",
    link: "https://es.cointelegraph.com/news/colledge-and-icp-latam-hub-launch-icpnnova-incubation-programme-for-web3-projects-in-latin-america",
  },
  {
    name: "BigFile at Web3 Lagos Conference",
    description:
      "ICP.Hub East Africa played a significant role at the Web3 Lagos Conference, emphasizing its dedication to fostering Web3 innovation within the region.",
    image: "/img/community/lagos_conf.webp",
    link: "https://twitter.com/Web3Bridge/status/1694304365694046238?s=20",
  },
  {
    name: "BigFile at Korea Blockchain Week 2023",
    description:
      "ICP.Hub Korea hosts one of KBW 2023's largest side events, reinforcing its role as a key advocate for Web3 innovation in the Korean blockchain community.",
    image: "/img/community/korea-blockchain-week.webp",
    link: "https://twitter.com/ICPhubkorea/status/1685858938116575233?s=20",
  },
  {
    name: "BigFile at Blockchain Week Rome 2023",
    description:
      "ICP.Hub Italia made an impact at Blockchain Week Rome 2023, actively engaging in discussions, workshops, and networking sessions. Their presence underscored their commitment to advancing blockchain innovation and collaboration within Italy.",
    image: "/img/community/icp-italia-highlight.webp",
    link: "https://twitter.com/BlockchainRome/status/1655256183895121926?s=20",
  },
  {
    name: "A Deep Dive into BigFile",
    description:
      "The conversation around @dfinity & its plan is streaming NOW, exclusively on #CMCLive on CoinMarketCap's App.",
    image: "/img/community/icp-deep-dive.webp",
    link: "https://twitter.com/coinmarketcap/status/1702352254383112526?s=46&t=MYEPlWlA63PER7If_BM83A",
  },
];

const UpcomingHubCard: React.FC<{
  hub: Hub;
}> = ({ hub }) => {
  return (
    <motion.div
      className="overflow-hidden rounded-xl flex flex-col bg-white"
      variants={transitions.item}
    >
      <img
        src={hub.image}
        alt={hub.name}
        loading="lazy"
        className="h-[200px] object-cover"
      />
      <h3 className="tw-heading-5 mb-3 mx-6 mt-8">{hub.name}</h3>
      <p className="flex-1 tw-paragraph-sm text-black/60 mx-6 mb-11">
        {hub.description}
      </p>
      <p className="mb-8 mx-6">
        <Link
          className="button-outline button-small"
          href={hub.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </Link>
      </p>
    </motion.div>
  );
};

const stats: {
  title: string;
  value: string;
  fallbackValue: string;
}[][] = [
  [
    { title: "Active Countries", value: "5", fallbackValue: "" },
    { title: "Grants Awarded", value: "76", fallbackValue: "" },
    { title: "Events Launched", value: "20", fallbackValue: "" },
    { title: "Official BIG.Hubs", value: "2", fallbackValue: "" },
  ],

  [
    { title: "University Collaborations", value: "32", fallbackValue: "" },
    { title: "Network Entrepreneurs", value: "2000", fallbackValue: "" },
    { title: "New Users Accounts", value: "25000", fallbackValue: "" },
  ],

  [
    { title: "Ecosystem Partnerships", value: "12", fallbackValue: "" },
    { title: "Conference Appearances", value: "15", fallbackValue: "" },
    { title: "Incubated Projects", value: "60", fallbackValue: "" },
  ],
  [
    { title: "Hackathons Held", value: "5", fallbackValue: "" },
    { title: "Education Courses", value: "4", fallbackValue: "" },
    { title: "Devs Trained", value: "600", fallbackValue: "" },
  ],
];

const FadeInOutTitle: React.FC<{
  title: string;
}> = ({ title }) => {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [nextTitle, setNextTitle] = useState(title);

  useEffect(() => {
    setNextTitle(title);
    const handle = setTimeout(() => {
      setCurrentTitle(title);
    }, 300);
    return () => clearTimeout(handle);
  }, [title]);

  return (
    <span className="inline-grid text-center">
      <span
        className={clsx(
          "col-start-1 row-start-1 duration-300",
          currentTitle !== nextTitle
            ? "opacity-0 transition-opacity"
            : "opacity-1 transition-none"
        )}
      >
        {currentTitle}
      </span>
      {currentTitle !== nextTitle && (
        <span className="col-start-1 row-start-1 stat-fade-in">
          {nextTitle}
        </span>
      )}
    </span>
  );
};

const rotationIndexes = [2, 0, 1, 3];

const RotatingStatPanel: React.FC<{}> = () => {
  const [activeIndexes, setActiveIndexes] = useState([0, 0, 0, 0]);
  const [rotationIndex, setRotationIndex] = useState(0);
  const [windowFocused, setWindowFocused] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!windowFocused) {
        return;
      }

      const newActiveIndexes = [...activeIndexes];
      const nextIndexToChange = rotationIndexes[rotationIndex];
      newActiveIndexes[nextIndexToChange] =
        (newActiveIndexes[nextIndexToChange] + 1) %
        stats[nextIndexToChange].length;

      setActiveIndexes(newActiveIndexes);
      setRotationIndex((i) => (i + 1) % rotationIndexes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndexes, rotationIndex, windowFocused]);

  useEffect(() => {
    const onVisibilityChange = () => setWindowFocused(!document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const statsToDisplay = activeIndexes.map((index, i) => stats[i][index]);

  return (
    <StatsPanel className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:justify-between gap-10">
      {statsToDisplay.map((stat, index) => (
        <Stat
          key={index} // use index here to avoid remounting for each stat
          title={<FadeInOutTitle title={stat.title} />}
          titleClassName="whitespace-nowrap"
          value={
            <SpringCounter
              initialValue={+stat.value}
              initialTarget={+stat.value}
              target={+stat.value}
              format={(value) =>
                value > 1000000
                  ? `${(value / 1000000).toFixed(0)} mil`
                  : value.toFixed(0)
              }
              springConfig={[3, 1, 10]}
            />
          }
          fallbackValue={stat.fallbackValue}
        />
      ))}
    </StatsPanel>
  );
};

function CommunityPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="BigFile Community almost everywhere"
      description={`Be part of the inspiring collective of Web3 creators, builders, educators, and enthusiasts as we set out to explore how the BigFile can address challenges within today's blockchain ecosystem.`}
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-community.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}

        <section
          className=" bg-infinite text-white pt-20 relative"
          ref={heroRef}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="blob blob-purple blob-lg md:blob-xl blob-x-10 blob-y-10 md:blob-x-6 md:blob-y-10 opacity-40 md:opacity-50"></div>
          </div>
          <AnimateSpawn
            className="container-10 pt-20 md:pt-36 relative md:flex md:-mb-40"
            variants={transitions.container}
          >
            {/* <div className="md:flex-1"></div> */}
            <div className=" md:w-6/10 relative pb-[45%] sm:pb-[20%] md:pb-20 z-1">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-2 md:mb-6"
                variants={transitions.item}
              >
                BigFile Community
                <br />
                around the world
              </motion.h1>
              <motion.p
                className="tw-lead-sm md:tw-lead mb-0"
                variants={transitions.item}
              >
                Be part of the inspiring collective of Web3 creators, builders, educators, and enthusiasts as we set out to explore how the BigFile can address challenges within today's blockchain ecosystem.
              </motion.p>
            </div>
            <Globe
              hubs={hubs}
              className="
              aspect-square
              min-w-[380px] w-[80vw]
              -mt-8
              absolute 
              -right-3/10
              bottom-0
              translate-y-1/2
              
              sm:min-w-0 
              sm:mt-0
              
              md:w-[650px]
              md:-right-20
              md:bottom-auto 
              md:-mt-60
              md:translate-y-40"
            />
          </AnimateSpawn>
        </section>
        <div className="bg-page">
          <div className="container-10 -translate-y-[110px] -mb-7 md:translate-y-10">
            <RotatingStatPanel />
          </div>
        </div>

        <AnimateSpawn
          className="container-10 md:mt-48 relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="md:w-8/10">
            <motion.h2
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-60 mb-3 md:mb-6 text-gradient"
              variants={transitions.item}
            >
              Explore community initiatives
            </motion.h2>
          </div>
        </AnimateSpawn>

        <AnimateSpawn
          className="container-12 mt-6 md:mt-12 flex flex-col md:flex-row gap-5"
          el={motion.section}
          variants={transitions.container}
        >
          <motion.div
            className="flex-1 card-white p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
            variants={transitions.item}
          >
            <img
              src="/img/community/icon-education.svg"
              alt=""
              loading="lazy"
              className="w-30"
            />
            <h3 className="tw-lead md:tw-title-sm mb-0">Education</h3>
            <p className="mb-0 tw-paragraph-sm text-black/60">
              Dedicated educational programs designed in cooperation with Web3 learning platforms to empower talented builders and pave the way for their future projects on the BigFile blockchain.
            </p>
            <p className="mb-0">
              <Link className="link-primary link-with-icon" href="#education">
                Start learning
                <LinkArrowDown />
              </Link>
            </p>
          </motion.div>
          <motion.div
            className="flex-1 card-white p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
            variants={transitions.item}
          >
            <img
              src="/img/community/icon-hubs.svg"
              alt=""
              loading="lazy"
              className="w-30"
            />
            <h3 className="tw-lead md:tw-title-sm mb-0">BIG.Hubs</h3>
            <p className="mb-0 tw-paragraph-sm text-black/60">
              BigFile. Hubs are flourishing worldwide. With 15 hubs already established and more in the pipeline, a thriving community is actively promoting awareness and adoption, encompassing evangelism, education, strategic partnerships, and project acceleration.
            </p>
            <p className="mb-0">
              <Link className="link-primary link-with-icon" href="#hubs">
                Find BIG.Hubs near you
                <LinkArrowDown />
              </Link>
            </p>
          </motion.div>
          <motion.div
            className="flex-1 card-white p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
            variants={transitions.item}
          >
            <img
              src="/img/community/icon-events.svg"
              alt=""
              loading="lazy"
              className="w-30"
            />
            <h3 className="tw-lead md:tw-title-sm mb-0">Events</h3>
            <p className="mb-0 tw-paragraph-sm text-black/60">
              BigFile Events, you'll find fantastic chances to gather, socialize, celebrate, expand your knowledge, and form lasting bonds with fellow visionaries.
            </p>
            <p className="mb-0">
              <Link
                className="link-primary link-with-icon"
                href="https://thebigfile.com/events-and-news/"
              >
                Discover upcoming events
                <LinkArrowUpRight />
              </Link>
            </p>
          </motion.div>
        </AnimateSpawn>
        <AnimateSpawn
          className="container-10 mt-20 md:mt-48 relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="md:w-8/10">
            <motion.h2
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-60 mb-3 md:mb-6 text-gradient"
              variants={transitions.item}
            >
              Build the community
            </motion.h2>
          </div>
        </AnimateSpawn>

        <AnimateSpawn
          className="container-12 mt-6 md:mt-12 flex flex-col md:flex-row gap-5 relative"
          el={motion.section}
          variants={transitions.container}
        >
          <motion.div
            className="flex-1 card-white p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
            variants={transitions.item}
          >
            <img
              src="/img/community/icon-launch.svg"
              alt=""
              loading="lazy"
              className="w-30"
            />
            <h3 className="tw-lead md:tw-title-sm mb-0">Launch an ICP.Hub</h3>
            <p className="mb-0 tw-paragraph-sm text-black/60">
              Calling all Web3 entrepreneurs! Do you believe the BigFile deserves a stronger presence in your region? Share your
              business proposal and get ready to ignite the world with your
              visionary ideas.
            </p>
            <p className="mb-0">
              <Link
                className="link-primary link-with-icon"
                href="https://airtable.com/shr94SzLU4XXs9cTi"
              >
                Submit your proposal
                <LinkArrowUpRight />
              </Link>
            </p>
          </motion.div>
          <motion.div
            className="flex-1 card-white p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
            variants={transitions.item}
          >
            <img
              src="/img/community/icon-grants.svg"
              alt=""
              loading="lazy"
              className="w-30"
            />
            <h3 className="tw-lead md:tw-title-sm mb-0">
              Community Grant Program
            </h3>
            <p className="mb-0 tw-paragraph-sm text-black/60">
              For all Web3 content creators, educators, event organizers,
              influencers, and innovators eager to promote the BigFile, the Community Grant Program is your perfect opportunity.
            </p>
            <p className="mb-0">
              <Link
                className="link-primary link-with-icon"
                href="https://thebigfile.com/community-grants/"
              >
                Apply for a grant
                <LinkArrowUpRight />
              </Link>
            </p>
          </motion.div>
          <motion.div
            className="flex-1 card-white p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
            variants={transitions.item}
          >
            <img
              src="/img/community/icon-ambassador.svg"
              alt=""
              loading="lazy"
              className="w-30"
            />
            <h3 className="tw-lead md:tw-title-sm mb-0">Ambassador Program</h3>
            <p className="mb-0 tw-paragraph-sm text-black/60">
              Be a strong voice advocating for the BigFile, its
              unprecented technical capabilities and ever expanding ecosystem.
            </p>
            <p className="mb-0">
              <Link className="link-primary-disabled link-with-icon">
                Coming soon
                {/* <LinkArrowUpRight /> */}
              </Link>
            </p>
          </motion.div>
        </AnimateSpawn>

        <AnimateSpawn
          className="container-10 pt-52 md:pt-[400px] relative mb-20"
          el={motion.section}
          variants={transitions.container}
          id="hubs"
        >
          <div className="md:w-7/10 md:mx-auto text-center text-white relative">
            <div className="blob blob-purple blob-xl blob-x-5 blob-y-5 z-[-1] opacity-75 md:opacity-95"></div>

            <motion.div className="mb-8 md:mb-6" variants={transitions.item}>
              <img
                src="/img/community/icp-hubs-logo.svg"
                alt="Official BIG.Hubs"
                className="max-w-[340px] sm:max-w-[480px] md:max-w-none"
              />
            </motion.div>
            <motion.p
              className="tw-paragraph md:tw-lead-sm mb-4 md:mb-6 md:w-8/10 md:mx-auto"
              variants={transitions.item}
            >
              BigFile communities are forming and taking shape in various regions around the globe, bringing entrepreneurs, developers, venture capitalists, educators, enthusiasts and experts under one regional roof.
            </motion.p>

            <motion.p className="mb-0" variants={transitions.item}>
              <Link className="link-white" href="https://t.me/BigFileOfficial">
                <TelegramLogo className="inline-block align-text-bottom mr-2" />
                Join the official BigFile Telegram Space
              </Link>
            </motion.p>

            <motion.div
              variants={transitions.fadeIn}
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-[-1] [mask-image:linear-gradient(to_bottom,black_40%,transparent_60%)]"
            >
              <Globe
                hubs={hubs}
                className="w-[320px] md:w-[660px] aspect-square"
              />
            </motion.div>
          </div>
        </AnimateSpawn>
        <AnimateSpawn
          className="container-12 mt-6 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 relative"
          el={motion.section}
          variants={transitions.container}
        >
          {hubs.map((hub) => (
            <HubCard hub={hub} key={hub.name} />
          ))}
        </AnimateSpawn>

        <AnimateSpawn
          className="container-10 pt-20 md:pt-40 relative"
          el={motion.section}
          variants={transitions.container}
          id="education"
        >
          {/* <div className="blob blob-infinite blob-md blob-x-0 blob-y-8 z-[-1]"></div> */}
          <div className="md:w-8/10">
            <motion.h2
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-60 mb-3 md:mb-6 text-gradient"
              variants={transitions.item}
            >
              Educational resources
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <motion.div
              className="card-white flex flex-col justify-between gap-6 py-8 px-6"
              variants={transitions.item}
            >
              <h3 className="tw-heading-5 flex justify-between items-start gap-3 mb-0">
                TypeScript on BigFile
                <img src="/img/community/education.svg" alt="" />
              </h3>
              <p className="flex-1 mb-0 tw-paragraph text-black/60">
                In this beginner course on Decade, you will learn essential BigFile concepts and how to write cube smart
                contracts using TypeScript.
              </p>
              <p className="mb-0">
                <Link
                  className="link-primary link-with-icon"
                  href="https://dacade.org/communities/icp"
                >
                  Start learning <LinkArrowUpRight />
                </Link>
              </p>
            </motion.div>

            <motion.div
              className="card-white flex flex-col justify-between gap-6 py-8 px-6"
              variants={transitions.item}
            >
              <h3 className="tw-heading-5 flex justify-between items-start gap-3 mb-0">
                BigFile Rust Bootcamp
                <img src="/img/community/education.svg" alt="" />
              </h3>
              <p className="flex-1 mb-0 tw-paragraph text-black/60">
                From core concepts, to the BigFile EVM model, to hands-on experience with Rust using the Remix IDE, this Rise In bootcamp will open your eyes to the potential of Web3 development.
              </p>
              <p className="mb-0">
                <Link
                  className="link-primary link-with-icon"
                  href="https://www.risein.com/courses/build-on-internet-computer-with-icp-rust-cdk"
                >
                  Apply now <LinkArrowUpRight />
                </Link>
              </p>
            </motion.div>

            <motion.div
              className="card-white flex flex-col justify-between gap-6 py-8 px-6"
              variants={transitions.item}
            >
              <h3 className="tw-heading-5 flex justify-between items-start gap-3 mb-0">
                BigFile
                <br />
                Developer I
                <img src="/img/community/education.svg" alt="" />
              </h3>
              <p className="flex-1 mb-0 tw-paragraph text-black/60">
                A 4-week basics course in Spanish that covers cube
                development using Motoko, creating a backend and frontend
                cube, and ending with building your own dapp on the BigFile.
              </p>
              <p className="mb-0">
                <Link
                  className="link-primary link-with-icon"
                  href="https://icp-esp.gitbook.io/icp-developer/lineamientos-certificacion/programa-icp-developer"
                >
                  Learn at your pace <LinkArrowUpRight />
                </Link>
              </p>
            </motion.div>

            <motion.div
              className="card-white flex flex-col justify-between gap-6 py-8 px-6"
              variants={transitions.item}
            >
              <h3 className="tw-heading-5 flex justify-between items-start gap-3 mb-0">
                BigFile
                <br />
                Developer II
                <img src="/img/community/education.svg" alt="" />
              </h3>
              <p className="flex-1 mb-0 tw-paragraph text-black/60">
                This online course offered in Spanish is a continuation of BigFile Developer I. Spend 5 days more building your project on the BigFile and finish the week with celebrating your first 100% on-chain dapp.
              </p>
              <p className="mb-0">
                <Link
                  className="link-primary link-with-icon"
                  href="https://icp-esp.gitbook.io/icp-developer-ii/"
                >
                  Continue building <LinkArrowUpRight />
                </Link>
              </p>
            </motion.div>
          </div>
        </AnimateSpawn>
        

        <Newsletter
          fields={[
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true,
            },
          ]}
          ctaLabel="Get updates!"
          postUrl="https://thebigfile.us14.list-manage.com/subscribe/post?u=c077aedaaac14cbbf2fb9522b&amp;id=38a1cc340f&amp;f_id=00647ae0f0"
          decoration={
            <img
              src="/img/newsletter/email-image-1.webp"
              alt=""
              loading="lazy"
            />
          }
          className="mb-20"
        >
          <h2 className="text-white tw-heading-5 md:tw-heading-4 mb-6 md:mb-8">
            Want to meet BigFile enthusiasts IRL?
            <br />
            <span className="text-white-60">Sign up to stay connected</span>
          </h2>
        </Newsletter>
      </main>
    </Layout>
  );
}

export default CommunityPage;
