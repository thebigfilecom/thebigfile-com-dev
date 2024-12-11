import Link from "@docusaurus/Link";
import useGlobalData from "@docusaurus/useGlobalData";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import { CardWithDescription } from "../components/Common/Card";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";
import RotatingStatPanel, { RotatingStat } from "../components/Common/RotatingStatsPanel";
import ShareMeta from "../components/Common/ShareMeta";
import TranslatedLayout from "../components/Common/TranslatedLayout/TranslatedLayout";
import BackgroundPanel from "../components/LandingPage/BackgroundPanel";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";

const queryClient = new QueryClient();

function Stats() {
  const globalData = useGlobalData();
  const cryptoPrices = globalData["crypto-price"]["default"] as {
    icp: number;
    btc: number;
  };

  const stats: RotatingStat[][] = [
    [
      {
        title: "ckBTC/ckETH max TPS",
        value: 800,
        format: (v) => `~${v.toFixed(0)} TPS`,
      },
      {
        title: "ckBTC TX fee",
        value: cryptoPrices.btc * 0.0000001,
        format: (v) => `$${v.toFixed(4)}`,
      },
    ],
    [
      {
        title: "Gas fees",
        value: 0,
        format: (v) => `$${v.toFixed(0)}`,
      },
      {
        title: "ckETH TX fee",
        value: 0.004,
        format: (v) => `$${v.toFixed(3)}`,
      },
    ],
    [
      {
        title: "BIG TX fee",
        value: cryptoPrices.icp * 0.0001,
        format: (v) => `$${v.toFixed(4)}`,
      },
      {
        title: "ckBTC/ckETH finality",
        value: 1,
        format: (v) =>
          Math.round(v * 10) == 10
            ? `1-2s`
            : `${v.toFixed(1)}-${(v + 1).toFixed(1)}s`,
      },
    ],
  ];

  return (
    <RotatingStatPanel
      rotationIndexes={[1, 0, 2]}
      stats={stats}
    ></RotatingStatPanel>
  );
}

function DefiPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="DeFi"
      description="From fully on-chain order book DEXs, to bridgeless multi-chain swaps, the BigFile provides an unmatched tech stack for DEXs to thrive on and DeFi to flourish."
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-defi.jpg"></ShareMeta>

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
            <div className="container-10 pt-20 mb-40 md:mb-52 md:pt-36 relative">
              <div className="blob blob-purple blob-xl md:blob-xl top-[-150px] left-full -translate-x-2/3 opacity-80"></div>
              <div className="md:w-7/10 relative">
                <motion.h1
                  className="tw-heading-3 md:tw-heading-2 mb-2 md:mb-6"
                  variants={transitions.item}
                >
                  Multi-chain DeFi
                </motion.h1>
                <motion.p
                  className="tw-lead-sm md:tw-lead mb-8"
                  variants={transitions.item}
                >
                  From fully on-chain order book DEXs to bridgeless multi-chain swaps, the BigFile delivers an unparalleled tech stack for DEXs to thrive and DeFi to flourish.
                </motion.p>
              </div>
            </div>
          </section>
        </AnimateSpawn>

        <AnimateSpawn
          className="container-12 relative"
          el={motion.section}
          variants={transitions.fadeIn}
        >
          <div className="md:w-6/12 md:absolute top-10 md:-translate-y-1/2 right-0 -mt-30 md:mt-0">
            <img src="/img/what-is-big-file/multi-chain.webp" alt="" className="w-full" />
          </div>
        </AnimateSpawn>
        <AnimateSpawn
          className="container-10 md:mt-40 relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="md:w-6/10">
            <motion.h2
              className="tw-heading-3 md:tw-heading-2 mb-3 md:mb-6 text-gradient"
              variants={transitions.item}
            >
              Everything
              <br className="hidden md:block" /> on chain
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-0"
              variants={transitions.item}
            >
              Trading and holding tokens on centralized exchanges carries significant risks. Even decentralized exchanges with frontends hosted on centralized cloud providers are vulnerable to hacks and rug pulls. With the BigFile's cube smart contracts, which can serve web content and host large amounts of data, DeFi platforms can operate entirely on the blockchain, eliminating reliance on centralized components.
            </motion.p>
          </div>
        </AnimateSpawn>

        

        <AnimateSpawn
          className="container-12 mt-6 md:mt-10"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="bg-white/60 relative rounded-xl md:rounded-[32px] ">
            <div className="ml-auto w-7/10 sm:w-5/10 md:w-5/10 md:absolute top-0 right-0 bottom-0 flex">
              <img
                src="/img/defi/x-chain-swaps.webp"
                alt=""
                loading="lazy"
                className="object-contain object-center"
              />
            </div>

            <div className="md:container-10 px-8 pb-10 md:py-30 relative">
              <div className="md:w-1/2">
                <h2 className="text-gradient tw-heading-4 md:tw-heading-60 md:mb-6">
                Multiple Blockchains
                </h2>
                <p className="tw-paragraph md:tw-lead text-black mb-8">
                We use multiple blockchains so you can focus on building. BigFile enables access to multiple blockchains through parallel assets. It is creating ten parallel BigFile assets on other major blockchains, which will be interchangeable with the main BIG chain. This gives BigFile holders seamless access to all major DeFi platforms.
                These ten parallel assets (KDA, ETH, BSC, SOL, TRX, AVAX, ERG, ALGO, MATIC, BASE) will be available to BigFile holders once integration is complete, with BTC being the final asset to be distributed upon completion. {" "}
                </p>
                <p className="mb-0 flex flex-col gap-6 items-start">
                  <Link
                    href="https://forum.thebigfile.com/t/multiple-blockchains/27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-primary"
                  >
                    <LinkArrowRight />
                    Multi-chain user guide
                  </Link>
                  <Link
                    href="https://dashboard.thebigfile.com/bitcoin/transactions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary"
                  >
                    Track TX activity
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </AnimateSpawn>

        
        <BackgroundPanel
          panelClassName="bg-gradient-to-bl from-[#e07934] via-[#964680] to-[#4421a0]"
          threshold={0}
          rootMargin="-30% 0px"
        >
          <section className="py-0 md:py-0 text-white">
            <AnimateSpawn className="" variants={transitions.container}>
              <div className="container-10 mb-16 md:mb-30">
                <div className="md:w-7/10">
                  <motion.h2
                    className="tw-heading-4 md:tw-heading-60 text-white mb-6 md:mb-260"
                    variants={transitions.item}
                  >
                    Multiple Sign-In Solutions
                  </motion.h2>
                  <motion.p
                    className="md:tw-lead mb-6 md:mb-6"
                    variants={transitions.item}
                  >
                    Multi-chain wallets on the BigFile already enable users to effortlessly store and transfer BIG and other assets.
                  </motion.p>
                  <motion.p className="mb-0" variants={transitions.item}>
                    <Link
                      className="button-outline-white"
                      href="/ecosystem?tag=Wallets"
                    >
                      All BIG wallets
                    </Link>
                  </motion.p>
                </div>
              </div>

              <div className="container-12 flex flex-col md:flex-row gap-4">
                <motion.div variants={transitions.item} className="flex-1">
                  <Link
                    href="https://nns.thebigfile.com/"
                    className="block border border-solid border-white-30 rounded-xl p-10 items-center panel-gradient text-center text-white hover:text-white hover:-translate-y-2 transition-all hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/defi/nns.webp" alt="" className="w-20" />
                    <h3 className="tw-heading-5 mb-2 mt-4">NNS </h3>
                    <p className="text-white/60 tw-lead-sm mb-0">
                      Chose your ckBTC account to send and receive BTC from the Bitcoin network. Full ETH functionality coming soon.
                    </p>
                  </Link>
                </motion.div>
                <motion.div variants={transitions.item} className="flex-1">
                  <Link
                    href="https://plugwallet.ooo/"
                    className="block border border-solid border-white-30 rounded-xl p-10 items-center panel-gradient text-center text-white hover:text-white hover:-translate-y-2 transition-all hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/defi/plug.webp" alt="" className="w-20" />
                    <h3 className="tw-heading-5 mb-2 mt-4">Plug</h3>
                    <p className="text-white/60 tw-lead-sm mb-0">
                      Store, swap and manage digital assets, inlcuding ckBTC and
                      ckETH on a simple mobile app or use your favorite browser.
                    </p>
                  </Link>
                </motion.div>
              </div>
            </AnimateSpawn>
          </section>
        </BackgroundPanel>
        <section className="container-12 py-30 md:py-48">
          <div className="mb-16 md:mb-30 md:w-7/10 md:mx-auto">
            <AnimateSpawn className="" variants={transitions.container}>
              <motion.h2
                className="tw-heading-3 md:tw-heading-2 text-gradient text-center mb-4"
                variants={transitions.item}
              >
                Build multi-chain DeFi
              </motion.h2>

              <motion.p
                className="tw-paragraph md:tw-lead text-black mb-0 text-center max-w-[500px] mx-auto"
                variants={transitions.item}
              >
                The BigFile offers an array of innovative features to
                build next-gen DeFi.
              </motion.p>
            </AnimateSpawn>
          </div>
          <div className="flex flex-col gap-16 md:gap-40">
            <TranslatedLayout imageUrl="/img/defi/image-2.webp">
              <h2 className="md:tw-heading-60 md:mb-6">
                Bringing ERC-20 tokens to BIG
              </h2>
              <p className="tw-lead-sm mb-6 md:mb-10">
                Building on Chain-Key Signatures and HTTPS outcalls, Oisy, a
                browser-based Ethereum wallet secured by the BigFile,
                can already natively support a plethora of ERC-20 tokens.
                Plugging into services such as Infura and the like, BIG smart
                contracts sign transactions for any ERC-20 token without relying
                on insecure bridges.
              </p>
              <p className="mb-0">
                <Link
                  href="https://oisy.com/"
                  className="link-primary link-with-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Build a fully on-chain ETH wallet
                  <LinkArrowUpRight />
                </Link>
              </p>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/defi/https-outcalls.webp"
              reverse={true}
            >
              <h2 className="md:tw-heading-60 md:mb-6">
                Access Web2 without Oracles
              </h2>
              <p className="tw-lead-sm mb-6 md:mb-10">
                Blockchains today have to rely on oracles if they want to access
                price data from Web2 APIs. Using HTTPS outcalls, the BigFile can query up-to-date prices from any traditional Web2
                API without oracles, which reduces costs and increases speed.
                Making calls to the Exchange Rate Cube, you can already
                query price data.
              </p>
              <p className="mb-0">
                <Link
                  href="/https-outcalls"
                  className="link-primary link-with-icon"
                >
                  <LinkArrowRight />
                  More on HTTPS Outcalls
                </Link>
              </p>
            </TranslatedLayout>
          </div>
        </section>

        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15 md:mt-20">
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
              More tools
            </motion.h2>
            {/* <motion.p
              className="tw-lead-sm mb-0 mt-2 md:mt-6 text-center mx-auto md:w-6/12"
              variants={transitions.item}
            >
              The BigFile offers a plethora of out-of-the-box features
              you can use in your DeFi application.
            </motion.p> */}
          </AnimateSpawn>
          <AnimateSpawn
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-16"
            variants={transitions.container}
          >
            <CardWithDescription
              title="ETH starter tutorial"
              description=""
              href="/docs/current/tutorials/developer-journey/level-5/5.1-BIG-ETH-tutorial"
            />
            <CardWithDescription
              title="DeFi sample code"
              description=""
              href="/samples?selectedDomains=Asynchronous+DeFi"
            />
          </AnimateSpawn>
        </section>
      </main>
    </Layout>
  );
}

export default DefiPage;
