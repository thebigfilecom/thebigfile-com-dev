import Link from "@docusaurus/Link";
import useGlobalData from "@docusaurus/useGlobalData";
import Layout from "@theme/Layout";
import React, { useRef } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import DarkHeroStyles from "../components/Common/DarkHeroStyles";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";
import ShareMeta from "../components/Common/ShareMeta";
import { getStakingMetrics } from "../utils/network-stats";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";
import transitions from "@site/static/transitions.json";
import { motion } from "framer-motion";

const queryClient = new QueryClient();
const MotionLink = motion(Link);

const NnsTvl: React.FC = () => {
  const globalData = useGlobalData();
  const cryptoPrice = globalData["crypto-price"]["default"] as {
    icp: number;
    btc: number;
  };
  const stakingMetricsQuery = useQuery("staking-metrics", getStakingMetrics);

  let tvl = <>&nbsp;</>;

  if (stakingMetricsQuery.isFetched && stakingMetricsQuery.isSuccess) {
    const maybeMetric: string | undefined =
      stakingMetricsQuery.data.metrics.find(
        (d) => d.name === "governance_total_locked_e8s"
      )?.subsets[0]?.value[1];

    if (maybeMetric) {
      tvl = (
        <>
          ${((+maybeMetric * cryptoPrice.icp) / 100000000000000000).toFixed(1)}B
        </>
      );
    }
  }

  return <>{tvl}</>;
};

const WalletCard: React.FC<{
  title: string;
  description: string;
  link: string;
  icon: string;
}> = ({ title, description, link, icon }) => {
  return (
    <MotionLink
      to={link}
      className="flex gap-6 items-start bg-white/80 rounded-xl p-4 border border-white border-solid text-black hover:text-black hover:no-underline"
      variants={transitions.item}
    >
      <img
        src={icon}
        alt=""
        className="w-14 h-14 object-contain object-center"
        loading="lazy"
      />
      <div className="">
        <h3 className="tw-heading-6 mb-0">{title}</h3>
        <p className="tw-paragraph-sm text-black/60 mb-0">{description}</p>
      </div>
    </MotionLink>
  );
};

function TokenHolders(): JSX.Element {
  const globalData = useGlobalData();
  const cryptoPrice = globalData["crypto-price"]["default"] as {
    icp: number;
    btc: number;
  };

  const ref = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(ref);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout
        title="BIG Tokens"
        description="BIG, the native utility token of the BigFile powers computation, staking, voting, governance and ownership."
        editPath={`https://github.com/thebigfilecim/thebigfile-com-dev/edit/main/${__filename}`}
      >
        <main className="overflow-hidden">
          <ShareMeta image="/img/shareImages/share-big-tokens.jpg" />
          {isDark && <DarkHeroStyles />}
          <section className="bg-black text-white overflow-hidden" ref={ref}>
            <AnimateSpawn
              className="container-10 pt-20 md:pt-32 pb-52 md:pb-32 relative "
              variants={transitions.container}
            >
              <div className="blob blob-purple blob-x-5 blob-y-10 blob-md z-0 opacity-50"></div>
              <div className="md:w-7/10">
                <motion.h1
                  className="tw-heading-3 md:tw-heading-2 mb-8 md:mb-6 relative"
                  variants={transitions.item}
                >
                  Understanding the BIG token{" "}
                </motion.h1>
                <motion.p
                  className="tw-lead-sm md:tw-lead mb-0 relative"
                  variants={transitions.item}
                >
                  Engage with the BigFile and its ecosystem through <br />
                  the use of its native utility token.
                </motion.p>
              </div>
            </AnimateSpawn>
          </section>

          <AnimateSpawn
            el={motion.section}
            variants={transitions.container}
            className="container-10 relative md:pt-52"
          >
            <div className="-mt-40 md:mt-0 md:absolute md:right-0 md:-top-60 text-center">
              <motion.img
                variants={transitions.fadeIn}
                src="/img/big-tokens/hero.webp"
                alt=""
                className="w-full max-w-sm md:max-w-none aspect-[563/492]"
              />
            </div>
            <div className="mb-12 md:w-7/10">
              <motion.h2
                className="tw-heading-4 md:tw-heading-3 mb-6 text-gradient"
                variants={transitions.item}
              >
                BIG Token plays multiple essential roles within the BigFile ecosystem:{" "}
              </motion.h2>
              <motion.p
                className="tw-paragraph md:tw-lead-sm text-black/60 mb-3"
                variants={transitions.item}
              >
                Decentralized Data Storage: Users pay with BIG Token to store their data permanently on the BigFile network. The "pay once, store forever" model ensures that, once the storage fee is paid, the data remains permanently stored on the network.
              </motion.p>
              <motion.p
                className="tw-paragraph md:tw-lead-sm text-black/60 mb-3"
                variants={transitions.item}
              >
                Versioning: When users want to add new versions to the data they have permanently uploaded, they make payments using BIG Token.
              </motion.p>
              <motion.p
                className="tw-paragraph md:tw-lead-sm text-black/60 mb-3"
                variants={transitions.item}
              >
                Network Participation and Incentives: Miners earn BIG Token by contributing storage capacity and ensuring the network operates smoothly. This incentive mechanism helps maintain the security and sustainability of the network.
              </motion.p>
              <motion.p
                className="tw-paragraph md:tw-lead-sm text-black/60 mb-3"
                variants={transitions.item}
              >
                Ecosystem Development: dApps and projects running on BigFile pay transaction fees using BIG Token. Project owners and developers leverage BIG Token to run their applications, raise funds, and support the growth of the ecosystem.
              </motion.p>
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:w-8/10">
              <motion.div
                className="bg-white/80 border border-white border-solid rounded-xl px-6 py-8 md:p-8 md:flex-1"
                variants={transitions.item}
              >
                <h3 className="inline-flex items-center gap-3 mb-6">
                  <img
                    src="/img/big-tokens/big-token-logo.svg"
                    alt="BIG logo"
                    loading="lazy"
                    className="w-16 h-16"
                  />
                  <span className="flex-1 text-gradient tw-heading-5">
                   BIG token utility
                  </span>
                </h3>
                <ul className="checklist space-y-3 mb-0">
                  <li className="checklist-item pl-8">
                    Participate in governance
                  </li>
                  <li className="checklist-item pl-8">Burn for cycles </li>
                  <li className="checklist-item pl-8">
                    Participate in decentralisation swaps
                  </li>
                  <li className="checklist-item pl-8">
                    Reward node machine providers
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/80 border border-white border-solid rounded-xl px-6 py-8 md:p-8 md:flex-1"
                variants={transitions.item}
              >
                <h3 className="inline-flex items-center gap-3 mb-6">
                  <img
                    src="/img/big-tokens/cycles-logo.svg"
                    className="w-16 h-16"
                    loading="lazy"
                    alt="Cycles logo"
                  />
                  <span className="flex-1 text-gradient tw-heading-5">
                    Cycles
                  </span>
                </h3>
                <ul className="checklist space-y-3 mb-0">
                  <li className="checklist-item pl-8">
                    Stable cost of compute & storage
                  </li>
                  <li className="checklist-item pl-8">
                    Fuel storage, compute, & bandwidth
                  </li>
                </ul>
              </motion.div>
            </div>
          </AnimateSpawn>


          <section className="mt-20 md:mt-40">
            <AnimateSpawn
              className="container-10 mb-10"
              variants={transitions.item}
            >
              <h2 className="tw-heading-3 mb-0 md:tw-heading-60">
                Ways to use BIG tokens
              </h2>
            </AnimateSpawn>
            <div className="container-12 grid grid-cols-1 gap-5 md:grid-cols-2">
              <AnimateSpawn
                className="bg-white/80 border border-white border-solid rounded-xl px-6 py-8 md:p-16 "
                variants={transitions.item}
              >
                <h3 className="tw-heading-5 md:tw-heading-4 mb-6">
                 Decentralized Data Storage
                </h3>
                <p className="tw-paragraph md:tw-lead-sm mb-6 text-black/60">
                  Users pay with BIG Token to store their data permanently on the BigFile network. The "pay once, store forever" model ensures that, once the storage fee is paid, the data remains permanently stored on the network. When users want to add new versions to the data they have permanently uploaded, they make payments using BIG Token.
                </p>
                <p className="mb-0">
                  <Link
                    href="/"
                    className="link-primary link-with-icon items-center"
                  >
                    <LinkArrowRight />
                    Participate in governance by staking BIG
                  </Link>
                </p>
              </AnimateSpawn>
              <AnimateSpawn
                className="bg-white/80 border border-white border-solid rounded-xl px-6 py-8 md:p-16 "
                variants={transitions.item}
              >
                <h3 className="tw-heading-5 md:tw-heading-4 mb-6">
                  Network Participation and Incentives
                </h3>
                <p className="tw-paragraph md:tw-lead-sm mb-6 text-black/60">
                  Miners earn BIG Token by contributing storage capacity and ensuring the network operates smoothly. This incentive mechanism helps maintain the security and sustainability of the network.
                </p>
                <p className="mb-0">
                  <Link
                    href="/"
                    className="link-primary link-with-icon items-center"
                  >
                    <LinkArrowRight />
                    More on the Network Participation and Incentives
                  </Link>
                </p>
              </AnimateSpawn>
              <AnimateSpawn
                variants={transitions.item}
                className="
                bg-white/80 border border-white border-solid rounded-xl px-6 py-8 md:p-16 md:col-span-2
                bg-[url(/img/big-tokens/ecosystem-mobile.webp)] sm:bg-[url(/img/big-tokens/ecosystem.webp)] 
                bg-[center_bottom_-20px] bg-[length:120%] bg-no-repeat 

                sm:bg-[right_-200px_top_-100px] sm:bg-[length:auto_180%]
                md:bg-[right_-160px_top_-100px] md:bg-[length:auto_160%]
                lg:bg-[right_-160px_center] lg:bg-[length:auto_180%]
              "
              >
                <div className="sm:w-6/10 lg:w-4/10">
                  <h3 className="tw-heading-5 md:tw-heading-4 mb-6">
                    Ecosystem Development
                  </h3>
                  <p className="tw-paragraph md:tw-lead-sm mb-6 text-black/60">
                  dApps and projects running on BigFile pay transaction fees using BIG Token. Project owners and developers leverage BIG Token to run their applications, raise funds, and support the growth of the ecosystem.
                  </p>
                  <p className="pb-[100%] sm:pb-0 mb-0">
                    <Link
                      href="/ecosystem"
                      className="link-primary link-with-icon items-center"
                    >
                      <LinkArrowRight />
                      Check out dapps
                    </Link>
                  </p>
                </div>
              </AnimateSpawn>
            </div>
            {/* </div> */}
          </section>

          <AnimateSpawn
            className="container-10 my-30 md:my-40 text-center text-white relative"
            variants={transitions.container}
          >
            <motion.div
              className="blob blob-purple blob-md md:blob-lg blob-x-5 blob-y-5 z-[-1]"
              variants={transitions.fadeIn}
            ></motion.div>
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-8"
              variants={transitions.item}
            >
              Where to get BIG{" "}
            </motion.h2>
            <motion.p className="tw-lead mb-8" variants={transitions.item}>
            Once the BIG Token Mainnet is launched, it will be available for purchase through various platforms. Details about different versions of BIG Token issued on multiple blockchain networks will be provided.
            </motion.p>
            <motion.p className="mb-0" variants={transitions.item}>
              <Link
                href="https://coinmarketcap.com/community/profile/thebigfile/"
                className="button-outline-white"
              >
                Complete list on CoinMarketCap
              </Link>
            </motion.p>
          </AnimateSpawn>

          <section className="container-12 pt-20 md:pt-40">
            <AnimateSpawn
              className="text-center md:w-8/10 md:mx-auto"
              variants={transitions.container}
            >
              <motion.h2
                id="anchor-wallets"
                className="tw-heading-3 md:tw-heading-60 mb-6 md:mb-8"
                variants={transitions.item}
              >
                Wallets &amp; custody
              </motion.h2>
              <motion.p
                className="tw-lead-sm md:tw-lead mb-6 md:mb-8"
                variants={transitions.item}
              >
                Understand the benefits and limitations of each custody option so you can choose the wallet that best suits your needs.
              </motion.p>
              <motion.p className="mb-0" variants={transitions.item}>
                <Link
                  className="link-primary link-with-icon"
                  href="https://wiki.thebigfile.com/wiki/BIG_custody_options"
                >
                  Learn more about custody options <LinkArrowUpRight />
                </Link>
              </motion.p>
            </AnimateSpawn>
            <AnimateSpawn
              className="grid grid-cols-1 gap-16 mt-16 md:mt-24 md:grid-cols-3"
              variants={transitions.container}
            >
              {/* Column 1 */}
              <motion.div className="" variants={transitions.item}>
                <h3 className="tw-heading-5 mb-6">Web Wallets</h3>
                <p className="tw-paragraph text-black/60 mb-8">
                  Web-based dapps that are easily accessible with the creation of an BIG ID. Great for daily use and small amount
                  transfers.
                </p>
                <div className="space-y-4">
                  <WalletCard
                    title="BIGID"
                    description="Web3 Identity. Every new account creates an untraceable hardware wallet."
                    link="https://bigid.thebigfile.com/"
                    icon="/img/showcase/nfid_logo.webp"
                  />
                </div>
              </motion.div>
              {/* Column 2 */}
              <motion.div className="" variants={transitions.item}>
                <h3 className="tw-heading-5 mb-6">Mobile app wallets</h3>
                <p className="tw-paragraph text-black/60 mb-8">
                  Mobile apps offer easy access to crypto assets for people who use them frequently.
                </p>
                <div className="space-y-4">
                  
                </div>

                <h3 className="tw-heading-5 mb-6 mt-16">
                  Browser extension wallets
                </h3>
                <p className="tw-paragraph text-black/60 mb-8">
                  Great for users already familiar with crypto wallets from other chains.
                </p>

                <div className="space-y-4">
                  
                  
                </div>
              </motion.div>
              {/* Column 3 */}
              <motion.div className="" variants={transitions.item}>
                <h3 className="tw-heading-5 mb-6">Hardware wallets</h3>
                <p className="tw-paragraph text-black/60 mb-8">
                  Maximum security. Hardware wallets hold private keys in
                  airgapped machines or ledger devices.
                </p>
                <div className="space-y-4">
                  <WalletCard
                    title="Ledger"
                    description="Complete control of crypto assets via a Ledger hardware wallet and Ledger app."
                    link="https://ledger.com/"
                    icon="/img/showcase/ledger_logo.webp"
                  />
                  
                </div>
                <h3 className="tw-heading-5 mb-6 mt-16">
                  Institutional custody
                </h3>
                <p className="tw-paragraph text-black/60 mb-8">
                  For anyone managing large amounts of crypto assets.
                  Institutional custodians offer reliability and customer
                  support.
                </p>
                <div className="space-y-4">
                  <WalletCard
                    title="Sygnum"
                    description="World’s first digital asset bank providing institutional-grade security to BIG holders."
                    link="https://www.sygnum.com/"
                    icon="/img/showcase/sygnum_logo.webp"
                  />
                  <WalletCard
                    title="Coinbase"
                    description="Store assets in segregated cold storage. An institutional-grade custody solution. "
                    link="https://www.coinbase.com/"
                    icon="/img/showcase/coinbase_logo.webp"
                  />
                  <WalletCard
                    title="Taurus"
                    description="Banking-grade custody for digital asset management."
                    link="https://www.taurushq.com/"
                    icon="/img/showcase/taurus_logo.png"
                  />
                </div>
              </motion.div>
            </AnimateSpawn>
          </section>
          <AnimateSpawn
            className="container-12 pt-24 md:pt-40 pb-30 relative"
            el={motion.section}
            variants={transitions.container}
          >
            <div className=" text-white text-center">
              <motion.div
                className="blob blob-purple blob-sm blob-x-5 blob-y-2 z-[-1] md:blob-lg md:blob-y-5"
                variants={transitions.fadeIn}
              ></motion.div>
              <motion.h2
                className="tw-heading-3 md:tw-heading-60 mb-0"
                variants={transitions.item}
              >
                Get more involved
              </motion.h2>
            </div>

            <div className="flex flex-col gap-5 mt-6 md:mt-20 md:flex-row md:items-start">
              <motion.div
                className="flex-1 bg-white/90 border border-white border-solid rounded-xl p-6 text-center md:p-12"
                variants={transitions.item}
              >
                <h3 className="tw-lead-lg md:tw-title-sm mb-3">
                  Exchanges BIG Token
                </h3>
                <p className="tw-paragraph-sm mb-3 text-black/60">
                 The native token of the BigFile network is BIG. BIG will be available for purchase during the Mainnet Period.
                </p>
                <p className="mb-0">
                  <Link href="/" className="link-primary link-with-icon">
                    <LinkArrowRight />
                    Exchanges BIG
                  </Link>
                </p>
              </motion.div>
              <motion.div
                className="flex-1 bg-white/90 border border-white border-solid rounded-xl p-6 text-center md:px-11 md:py-12 md:mt-30"
                variants={transitions.item}
              >
                <h3 className="tw-lead-lg md:tw-title-sm mb-3">
                  DeFi on the BigFile
                </h3>
                <p className="tw-paragraph-sm mb-3 text-black/60">
                  Build and use DeFi apps on the BigFile that are
                  hosted 100% on the blockchain.
                </p>
                <p className="mb-0">
                  <Link href="/defi" className="link-primary link-with-icon">
                    <LinkArrowRight />
                    DeFi on BIG
                  </Link>
                </p>
              </motion.div>
              <motion.div
                className="flex-1 bg-white/90 border border-white border-solid rounded-xl p-6 text-center md:p-12"
                variants={transitions.item}
              >
                <h3 className="tw-lead-lg md:tw-title-sm mb-3">
                  Join BigFile Community
                </h3>
                <p className="tw-paragraph-sm mb-3 text-black/60">
                  Community discussions around extending the BIG token standard for all ledgers to optimize functionality is ongoing.
                </p>
                <p className="mb-0">
                  <Link
                    href="/community"
                    className="link-primary link-with-icon"
                  >
                    BigFile Community
                    <LinkArrowUpRight />
                  </Link>
                </p>
              </motion.div>
            </div>
          </AnimateSpawn>
        </main>
      </Layout>
    </QueryClientProvider>
  );
}

export default TokenHolders;
