import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import { CardWithDescription } from "../components/Common/Card";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";
import ShareMeta from "../components/Common/ShareMeta";
import TranslatedLayout from "../components/Common/TranslatedLayout/TranslatedLayout";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";

function GamingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="Autonomous Worlds on BigFile"
      description="Autonomous Worlds are a paradigm shift in Web3 gaming, allowing developers, and players to build infinitely extendable worlds together — 100% on-chain"
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-gaming.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}

        <section
          className=" text-white pt-20 relative bg-[url(/img/gaming/hero.webp)] bg-cover bg-center bg-no-repeat"
          ref={heroRef}
        >
          <AnimateSpawn
            className="container-10 pt-20 md:pt-36 relative md:flex"
            variants={transitions.container}
          >
            {/* <div className="md:flex-1"></div> */}
            <div className=" md:w-6/10 relative pb-[45%] sm:pb-[20%] md:pb-20 z-1">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-2 md:mb-6"
                variants={transitions.item}
              >
                Web3 Gaming
              </motion.h1>
              <motion.p
                className="tw-lead-sm md:tw-lead mb-0"
                variants={transitions.item}
              >
                Powered by smart contracts, Autonomous Worlds represent a paradigm shift in gaming, allowing developers, modders, and players to create composable and permissionless game worlds that exist on the blockchain indefinitely. Now made possible on BigFile — 100% on-chain.
              </motion.p>
            </div>
          </AnimateSpawn>
        </section>
        <AnimateSpawn
          el={motion.section}
          variants={transitions.container}
          className="container-10 relative md:pt-40 pb-20 md:pb-40"
        >
          <div className="-mt-64 md:mt-0 md:absolute md:-right-40 md:top-[-600px] text-center md:w-[800px]">
            <motion.img
              variants={transitions.fadeIn}
              src="/img/gaming/spaceship.webp"
              alt=""
              className="w-full max-w-sm md:max-w-none aspect-square"
            />
          </div>

          <motion.h2
            className="tw-heading-4 md:tw-heading-60 mb-0 text-gradient md:w-8/10 md:mx-auto"
            variants={transitions.item}
          >
            Web2 gaming often prioritizes profits over player enjoyment. In contrast, Autonomous Worlds on BigFile put the player experience first.
          </motion.h2>
        </AnimateSpawn>

      

        <section
          className="pt-20 md:pt-48 
          bg-[linear-gradient(180deg,#3b00b9_0%,#3b00b9_85%,transparent_85%,transparent_100%)] 
          sm:bg-[linear-gradient(180deg,#3b00b9_0%,#3b00b9_87%,transparent_87%,transparent_100%)] 
          md:bg-[linear-gradient(180deg,#3b00b9_0%,#3b00b9_77%,transparent_77%,transparent_100%)] 
          relative "
        >
          {/* <div className="blob blob-purple blob-sm md:blob-md blob-x-10 blob-y-10"></div> */}

          <AnimateSpawn
            className="container-12"
            variants={transitions.container}
          >
            <motion.h2 className="tw-heading-5 md:tw-heading-3 mb-8 md:mb-12 text-white sm:w-6/12 lg:w-4/12 sm:mx-auto text-center">
              Perks of Autonomous Worlds
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img src="/img/gaming/icon-1.svg" alt="" className="h-24" />
                <h3 className="tw-lead my-3 md:tw-title-sm">
                  Incentives aligned
                </h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Autonomous Worlds align the interests of developers, modders, and players, enabling them to collaboratively create rich, immersive game worlds.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img src="/img/gaming/icon-2.svg" alt="" className="h-24" />
                <h3 className="tw-lead my-3 md:tw-title-sm">
                  Extendable
                </h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Smart contracts are composable, meaning they can function as building blocks within hierarchical structures. This allows Autonomous Worlds to expand endlessly.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img src="/img/gaming/icon-3.svg" alt="" className="h-24" />
                <h3 className="tw-lead my-3 md:tw-title-sm">
                  Community
                </h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Rather than just consuming game content, the community can play a central role in shaping it through governance and content creation.
                </p>
              </motion.div>
            </div>
          </AnimateSpawn>
        </section>

        <section className="container-10 pt-30  md:pt-40 relative">
          <div className="blob blob-purple blob-x-10 blob-y-0 blob-md z-[-1]"></div>
          <AnimateSpawn className="md:w-6/10" variants={transitions.container}>
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-8 md:w-9/10"
              variants={transitions.item}
            >
              Uncover new worlds
            </motion.h2>
            <motion.p className="tw-lead-sm mb-8" variants={transitions.item}>
            Discover and create new worlds on BigFile! With cube smart contracts, developers and players can build expansive, scalable game worlds fully hosted on the blockchain. The reverse gas model introduces innovative revenue opportunities and lowers the barrier to entry for new players, eliminating the need to set up a wallet just to engage with an on-chain game.
            </motion.p>
            <motion.p className="mb-0" variants={transitions.item}>
              <Link
                href="/ecosystem?tag=Games"
                className="link-primary link-with-icon"
              >
                <LinkArrowRight />
                View all games
              </Link>
            </motion.p>
          </AnimateSpawn>
        </section>

       

        <AnimateSpawn
          className="container-12 mt-20 md:mt-30 relative"
          el={motion.section}
          variants={transitions.container}
        >
          <motion.h2
            className="tw-heading-4 md:tw-heading-60 mb-6 md:mb-12 text-center md:w-6/10 md:mx-auto"
            variants={transitions.item}
          >
            Advantages of BIG
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-5">
            <motion.div
              className="flex-1 card-white p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
              variants={transitions.item}
            >
              <img
                src="/img/gaming/icon-4.svg"
                alt=""
                loading="lazy"
                className="w-30"
              />
              <h3 className="tw-lead md:tw-title-sm mb-0">100% on-chain</h3>
              <p className="mb-0 tw-paragraph-sm text-black/60">
              BigFile enables these worlds to be fully hosted on the blockchain. With cube smart contracts serving web content, developers can eliminate the last centralized component and even host the game client on-chain. This paves the way for DAOs to manage every aspect of these worlds.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 card-white p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
              variants={transitions.item}
            >
              <img
                src="/img/gaming/icon-5.svg"
                alt=""
                loading="lazy"
                className="w-30"
              />
              <h3 className="tw-lead md:tw-title-sm mb-0">High TXs per day</h3>
              <p className="mb-0 tw-paragraph-sm text-black/60">
              BigFile is preparing for high daily transaction volumes. Hosted on BIG, the blockchain with the highest throughput, games can accommodate an unprecedented number of players and scale horizontally with the addition of new subnet blockchains as network demand grows.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 card-white p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
              variants={transitions.item}
            >
              <img
                src="/img/gaming/icon-6.svg"
                alt=""
                loading="lazy"
                className="w-30"
              />
              <h3 className="tw-lead md:tw-title-sm mb-0">
                0 gas fees for players
              </h3>
              <p className="mb-0 tw-paragraph-sm text-black/60">
              The BigFile is built for mass adoption. Cube smart contracts use a reverse gas fee model, allowing end-users to interact with canisters without paying gas fees or even needing a wallet. This opens up innovative revenue models and eliminates significant entry barriers.
              </p>
            </motion.div>
          </div>
        </AnimateSpawn>
        <AnimateSpawn
          className="md:container-12 pt-30 md:pt-30"
          variants={transitions.container}
          el={motion.section}
        >
          <div className="md:rounded-[32px] backdrop-blur-2xl bg-white-60 px-1/12 pb-20 md:py-30 relative">
            <div className="-translate-y-24 sm:-translate-y-40 md:translate-y-0 md:absolute z-[-1] md:w-[500px] lg:w-[700px] md:top-[40px] lg:top-[-130px] right-0 overflow-hidden">
              <motion.img
                src="/img/home/dao.svg"
                alt=""
                className="w-full relative md:right-[-50px] lg:right-[-100px]"
                variants={transitions.item}
              />
            </div>
            <div className="md:w-7/12 -mt-16 md:mt-0">
              <motion.h2
                className="text-gradient tw-heading-3 md:tw-heading-60 mb-6"
                variants={transitions.item}
              >
                DAO-driven games
              </motion.h2>
              <motion.p
                className="tw-lead-sm md:tw-lead-sm mb-12"
                variants={transitions.item}
              >
                Since BIG dapps can operate entirely on-chain, DAOs on the BigFile can govern entire game worlds end-to-end, including the web-based game client.
              </motion.p>
            </div>
            <div className="md:w-6/10">
              <motion.p
                className="flex flex-col sm:flex-row items-start md:items-center gap-6 md:gap-8 mb-0"
                variants={transitions.item}
              >
                <Link className="link-primary link-with-icon" href="/sns">
                  <LinkArrowRight />
                  More on BIG DAOs
                </Link>
              </motion.p>
            </div>
          </div>
        </AnimateSpawn>
        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-30 md:px-15 mt-30">
          <AnimateSpawn
            className=" relative text-white"
            variants={transitions.container}
          >
            <motion.div
              className="blob blob-purple blob-sm blob-x-5 blob-y-7 z-[-1] md:blob-md"
              variants={transitions.fadeIn}
            ></motion.div>
            <motion.h2
              className="tw-heading-3 text-center mb-2 w-full mx-auto md:tw-heading-60 md:mb-6 lg:w-6/12"
              variants={transitions.item}
            >
              Start hacking on BigFile
            </motion.h2>
          </AnimateSpawn>

          <AnimateSpawn
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-16"
            variants={transitions.container}
          >
            <CardWithDescription
              title="Dev Docs"
              description=""
              href="/docs/current/home"
            />
            <CardWithDescription
              title="Sample Code"
              description=""
              href="/samples"
            />
          </AnimateSpawn>
        </section>
      </main>
    </Layout>
  );
}

export default GamingPage;
