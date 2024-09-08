import Link from "@docusaurus/Link";
import useGlobalData from "@docusaurus/useGlobalData";
import { CardWithDescription } from "@site/src/components/Common/Card";
import TranslatedLayout from "@site/src/components/Common/TranslatedLayout/TranslatedLayout";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnimateSpawn from "../../components/Common/AnimateSpawn";
import DarkHeroStyles from "../../components/Common/DarkHeroStyles";
import LinkArrowRight from "../../components/Common/Icons/LinkArrowRight";
import LinkArrowUpRight from "../../components/Common/Icons/LinkArrowUpRight";
import ShareMeta from "../../components/Common/ShareMeta";
import { useDarkHeaderInHero } from "../../utils/use-dark-header-in-hero";

function ReverseGasModelPage(): JSX.Element {
  const globalData = useGlobalData();
  const icpXdrPrice = globalData["icp-xdr-price"]["default"] as number;

  const ref = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(ref);

  return (
    <Layout
      title="Reverse Gas Model"
      description="All you need to interact with smart contracts on the BigFile is a browser. Developers cover the gas fees, allowing end users to access and use dapps without needing tokens."
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <main className="overflow-hidden">
        <ShareMeta image="/img/shareImages/share-reverse-gas-model.jpg" />
        {isDark && <DarkHeroStyles />}
        <section className="bg-infinite   text-white overflow-hidden" ref={ref}>
          <AnimateSpawn
            className="container-10 pt-20 md:pt-32 pb-48 relative "
            variants={transitions.container}
          >
            <div className="blob blob-white blob-x-5 blob-y-10 blob-md md:blob-lg md:blob-x-7 z-0 opacity-100"></div>
            <div className="md:w-7/10">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-8 md:mb-6 relative"
                variants={transitions.item}
              >
                Reverse Gas Model
              </motion.h1>
              <motion.p
                className="tw-lead-sm md:tw-lead mb-0 relative"
                variants={transitions.item}
              >
                With just a browser, you can interact with smart contracts on the BigFile. Developers handle the gas fees, so end users can access and use dapps without needing tokens.
              </motion.p>
            </div>
          </AnimateSpawn>
        </section>

        <AnimateSpawn
          el={motion.section}
          variants={transitions.container}
          className="container-12 relative -mt-36 md:mt-0 md:h-0 pointer-events-none"
        >
          <div className="text-center md:text-right aspect-[2/1] relative md:-translate-y-1/2">
            <motion.img
              variants={transitions.fadeIn}
              src="/img/features/reverse-gas-model.webp"
              alt=""
              className="w-full max-w-sm md:w-1/2 md:max-w-[660px] aspect-[563/492]"
            />
          </div>
        </AnimateSpawn>
        <AnimateSpawn
          el={motion.section}
          variants={transitions.container}
          className="container-10 relative flex flex-col md:flex-row md:pt-40"
        >
          <div className="md:w-1/2">
            <div className="mb-12">
              <motion.h2
                className="tw-heading-4 md:tw-heading-3 mb-6 text-gradient"
                variants={transitions.item}
              >
                Scaling Web3 to billions of users demands an exceptional user experience.
              </motion.h2>
              <motion.p
                className="tw-lead-sm text-black mb-0"
                variants={transitions.item}
              >
                Traditionally, when end users interact with a blockchain, they need a wallet with tokens to cover gas fees for every on-chain action, even something as simple as liking a post. Most blockchains bypass this by hosting their data and frontends on centralized cloud services. The BigFile, however, eliminates this costly barrier without compromising decentralization, allowing end users to seamlessly interact with dapps on the blockchain without paying gas fees. This "Gas Reverse Model" also provides developers the flexibility to design their own tokenomics models, paving the way for mass adoption.
              </motion.p>
            </div>
          </div>
        </AnimateSpawn>

        <section className="mb-20 md:mb-40 container-12 flex flex-col gap-16 md:gap-40">
          <TranslatedLayout
            reverse={true}
            imageUrl="/img/features/big-cycles.webp"
          >
            <h2 className="tw-heading-4 md:tw-heading-60 md:mb-6">
              Computation paid for by BIG smart contracts
            </h2>
            <p className="tw-lead-sm mb-6 md:mb-10">
            Each cube smart contract on the BigFile has its own cycles wallet, which developers can top up with cycles — the network’s gas. These cycles are then burned to cover the computation and memory costs of the cube.
            </p>
            <p className="mb-0">
              <Link
                href="/docs/current/developer-docs/gas-cost"
                className="link-primary link-with-icon"
              >
                <LinkArrowRight />
                Uncover more about cycles
              </Link>
            </p>
          </TranslatedLayout>
          <TranslatedLayout
            customContent={
              <div className="relative">
                <div className="blob blob-purple blob-xs md:blob-sm blob-x-8 blob-y-5 opacity-100"></div>
                <div className="bg-white/80 rounded-xl py-8 px-6 md:px-10 md:pt-14 md:pb-10 border border-white border-solid text-black relative md:ml-16 md:mr-24">
                  <div className="relative ">
                    <div className="flex gap-6 mb-5 pb-5 md:mb-8 md:pb-8 border-0 border-b border-solid border-black/20 mr-20">
                      <img
                        src="/img/big-tokens/big-token-logo.svg"
                        alt=""
                        loading="lazy"
                        className="w-12 h-12 md:w-16 md:h-16"
                      />
                      <div className="flex-1 flex flex-col items-start">
                        <span className="tw-heading-4 md:tw-heading-3">1</span>
                        <span className="text-black/60 tw-paragraph-sm md:tw-lead-sm">
                          BIG
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <img
                        src="/img/big-tokens/cycles-logo.svg"
                        alt=""
                        loading="lazy"
                        className="w-12 h-12 md:w-16 md:h-16"
                      />
                      <div className="flex-1 flex flex-col items-start">
                        <span className="tw-heading-4 md:tw-heading-3">
                          {icpXdrPrice.toFixed(2)}T
                        </span>
                        <span className="text-black/60 tw-paragraph-sm md:tw-lead-sm">
                          Cycles
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2">
                      <img
                        src="/img/features/swap.svg"
                        alt=""
                        loading="lazy"
                        className="relative top-2 w-20 h-20"
                      ></img>
                    </div>
                  </div>
                  <p className="text-left mt-9 mb-0 tw-paragraph-sm text-black/60 w-9/10">
                  Burning BIG always converts at the rate of 1T cycles = 1 SDR.
                  </p>
                </div>
              </div>
            }
          >
            <h2 className="tw-heading-4 md:tw-heading-60 md:mb-6">
              How to get cycles
            </h2>
            <p className="text-black tw-lead-sm mb-6">
            The BigFile protocol allows developers to burn BIG and receive cycles. Cycles are priced in SDR, an international reserve asset that is pegged to a bucket of fiat currencies. The protocol guarantees a set conversion rate of 1T cycles for 1 SDR’s worth of BIG. As costs are predictable and stable over time, regardless of BIG price fluctuations, developers can easily work computation and storage costs into their budgets.
            </p>
            
            <p className="text-black tw-lead-sm mb-6 md:mb-10">
              Developers just starting out can get 10T free cycles from the{" "}
              <Link
                href="/docs/current/developer-docs/setup/cycles/cycles-faucet"
                className="link-subtle"
              >
                cycles faucet
              </Link>
              . Free cycles can only be used for computation and storage, and
              cannot be converted back to BIG
              .{" "}
            </p>
            <p className="mb-0">
              <Link
                href="https://fms.thebigfile.com/"
                className="link-primary link-with-icon"
              >
                Swap BIG for cycles on the FMS
                <LinkArrowUpRight />
              </Link>
            </p>
          </TranslatedLayout>
        </section>
        <section className="container-12">
          <AnimateSpawn
            variants={transitions.item}
            className="
                bg-white/80 border border-white border-solid rounded-xl px-6 py-8 md:p-16 md:col-span-2
                bg-[url(/img/big-tokens/ecosystem-mobile.webp)] sm:bg-[url(/img/big-tokens/ecosystem.webp)]
                bg-[center_bottom_-20px] bg-[length:120%] bg-no-repeat

                sm:bg-[right_-250px_top_-100px] sm:bg-[length:auto_180%]
                md:bg-[right_-160px_top_-100px] md:bg-[length:auto_160%]
                lg:bg-[right_-160px_center] lg:bg-[length:auto_180%]
              "
          >
            <div className="sm:w-6/10 lg:w-4/10">
              <h3 className="tw-heading-5 md:tw-heading-4 mb-6">
                Gas-free Web3
              </h3>
              <p className="tw-lead-sm mb-6 text-black/60">
              The BigFile hosts a growing ecosystem of dapps, all designed for smooth onboarding without the need for a wallet or tokens to access them. Instead, use your tokens for trading, collecting NFTs, or tipping friends.
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
        </section>

        <section className="container-12 relative py-30 md:py-40">
          <div className="blob blob-purple blob-lg blob-x-5 blob-y-5 z-[-1]"></div>
          <div className="text-white text-center mb-10">
            <h2 className="tw-heading-3 mb-0">Fuel your Web3 project</h2>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-5">
            <CardWithDescription
              title="Get Free Cycles"
              description=""
              href="https://anv4y-qiaaa-aaaal-qaqxq-cai.ic0.app/"
              className="min-h-[180px]"
            ></CardWithDescription>
            <CardWithDescription
              title="Cycles Documentation"
              description=""
              href="https://thebigfile.com/docs/current/developer-docs/gas-cost"
              className="min-h-[180px]"
            ></CardWithDescription>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ReverseGasModelPage;
