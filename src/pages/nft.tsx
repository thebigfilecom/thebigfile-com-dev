import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import TranslatedLayout from "../components/Common/TranslatedLayout/TranslatedLayout";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";

const largeNfts: { url: string; title: string; imageUrl: string }[] = [
  { imageUrl: "/img/nft/btcflower.webp", title: "", url: "" },
  { imageUrl: "/img/nft/cosmic-birth.webp", title: "", url: "" },
  { imageUrl: "/img/nft/boxydude.webp", title: "", url: "" },
  { imageUrl: "/img/nft/icbucks.webp", title: "", url: "" },
  { imageUrl: "/img/nft/cubetopia-2.webp", title: "", url: "" },
  { imageUrl: "/img/nft/colorful-abstracts.webp", title: "", url: "" },
  { imageUrl: "/img/nft/icflowers.webp", title: "", url: "" },
  { imageUrl: "/img/nft/creator-gloves.webp", title: "", url: "" },
  { imageUrl: "/img/nft/ickitties.webp", title: "", url: "" },
];

const smallNfts: { url: string; title: string; imageUrl: string }[] = [
  { imageUrl: "/img/nft/ickitties.webp", title: "", url: "" },
  { imageUrl: "/img/nft/icpuppies.webp", title: "", url: "" },
  { imageUrl: "/img/nft/moonwalker.webp", title: "", url: "" },
  { imageUrl: "/img/nft/eimolad.webp", title: "", url: "" },
  { imageUrl: "/img/nft/motoko.webp", title: "", url: "" },
  { imageUrl: "/img/nft/motomoji.webp", title: "", url: "" },
  { imageUrl: "/img/nft/nautscc.webp", title: "", url: "" },
  { imageUrl: "/img/nft/pineapplepunks.webp", title: "", url: "" },
  { imageUrl: "/img/nft/pockedbot.webp", title: "", url: "" },
  { imageUrl: "/img/nft/pod.webp", title: "", url: "" },
  { imageUrl: "/img/nft/spaceapes.webp", title: "", url: "" },
  { imageUrl: "/img/nft/boxydude.webp", title: "", url: "" },
  { imageUrl: "/img/nft/btcflower.webp", title: "", url: "" },
];

const NftShowcase = React.memo(() => {
  return (
    <section className="-mt-24 overflow-hidden relative h-[280px] md:h-[560px]">
      <div className="flex gap-1 md:gap-3 absolute left-1/2 min-w-max nft-marquee-right">
        {largeNfts.map((nft) => (
          // <a href={nft.url} title={nft.title} className="flex">
          <img
            key={nft.imageUrl}
            src={nft.imageUrl}
            alt=""
            className="w-40 md:w-80 rounded-xl"
          />
          // </a>
        ))}
        {largeNfts.map((nft) => (
          // <a href={nft.url} title={nft.title} className="flex">
          <img
            key={nft.imageUrl}
            src={nft.imageUrl}
            alt=""
            className="w-40 md:w-80 rounded-xl"
          />
          // </a>
        ))}
      </div>

      <div className="flex gap-1 md:gap-3 absolute top-40 md:top-80 mt-6 md:mt-8 left-1/2 min-w-max nft-marquee-left">
        {smallNfts.map((nft) => (
          // <a href={nft.url} title={nft.title} className="flex">
          <img
            key={nft.imageUrl}
            src={nft.imageUrl}
            alt=""
            className="w-24 md:w-52 rounded-xl"
          />
          // </a>
        ))}
        {smallNfts.map((nft) => (
          // <a href={nft.url} title={nft.title} className="flex">
          <img
            key={nft.imageUrl}
            src={nft.imageUrl}
            alt=""
            className="w-24 md:w-52 rounded-xl"
          />
          // </a>
        ))}
      </div>
    </section>
  );
});

function NftPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="NFTs"
      description={`The Internet Computer is the only blockchain storing all components of an NFT on the blockchain, including assets. This opens up capabilities for ICP NFTs that go way beyond "overpriced links to JPGs".`}
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <Head>
        <meta
          property="og:image"
          content={
            "https://thebigfile.com/img/shareImages/share-nfts.jpg"
          }
        />
        <meta
          name="twitter:image"
          content={
            "https://thebigfile.com/img/shareImages/share-nfts.jpg"
          }
        />
      </Head>
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
              <div className="blob blob-purple blob-md md:blob-xl top-[-150px] left-full -translate-x-1/2 opacity-50"></div>
              <div className="md:w-7/10 relative">
                <motion.h1
                  className="tw-heading-3 md:tw-heading-2 mb-2 md:mb-6"
                  variants={transitions.item}
                >
                  Own your <abbr title="non-fungible tokens">NFT</abbr>
                </motion.h1>
                <motion.p
                  className="tw-lead-sm md:tw-lead mb-8"
                  variants={transitions.item}
                >
                  The BigFile is the only blockchain that stores 100% 
                  of the <abbr title="non-fungible tokens">NFT</abbr> on the blockchain, 
                  including all assets. This opens up capabilities for <abbr title="BigFile">BIG</abbr> <abbr title="non-fungible tokens">NFT</abbr>s that go way beyond than just 
                  “overpriced links to <abbr title="Joint Photographic Experts Group">JPG</abbr>s”. 
                </motion.p>
              </div>
            </div>
          </section>
          <NftShowcase></NftShowcase>
        </AnimateSpawn>

        <AnimateSpawn
          className="container-8 mt-10 md:mt-40 relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="">
            <motion.h2
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-3 mb-3 md:mb-6 text-gradient"
              variants={transitions.item}
            >
              Buying an <abbr title="non-fungible token">NFT</abbr> on other chains is often a link that points to an untraceable source. The BigFile ensures true ownership — no intermediaries or central entities.
            </motion.h2>
          </div>
        </AnimateSpawn>

        <section className="container-12 mt-16 mb-20 md:mt-40 md:mb-48">
          <div className="border border-solid border-white bg-white-80 px-8 py-12 rounded-xl flex flex-col md:flex-row gap-12 md:gap-8 text-center">
            <div className="flex flex-col flex-1 gap-2">
              <span className="tw-heading-3 md:tw-heading-60 text-gradient">
                $33,000,000
              </span>
              <span className="tw-paragraph md:tw-lead-sm">
                Total trading volume in 2022
              </span>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <span className="tw-heading-3 md:tw-heading-60 text-gradient">
                2.6M+
              </span>
              <span className="tw-paragraph md:tw-lead-sm">Total <abbr title="non-fungible tokens">NFT</abbr>s</span>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <span className="tw-heading-3 md:tw-heading-60 text-gradient">
                415
              </span>
              <span className="tw-paragraph md:tw-lead-sm">
                Total <abbr title="non-fungible tokens">NFT</abbr> projects
              </span>
            </div>
          </div>
        </section>

        <section className="mb-30 md:mb-60">
          <div className="container-10 mb-12 md:mb-20">
            <div className="md:w-8/10">
              <h2 className="tw-heading-3 md:tw-heading-2 mb-3">
                <abbr title="non-fungible tokens">NFT</abbr> marketplaces
                <br />
                <span className="text-gradient">Trade with zero gas fees</span>
              </h2>
              <p className="mb-0 text-black-60 tw-lead-sm md:tw-lead">
                Embark on a journey of authentic digital asset ownership. <abbr title="non-fungible tokens">NFT</abbr> marketplaces on the BigFile guarantee full decentralization, where collectors hold 100% of their digital art. Explore and trade with zero gas fees. Collect, own and invest in the future with confidence. 
              </p>
            </div>
          </div>
          <div className="container-12 relative">
            <div className="hidden md:block blob blob-purple blob-center blob-lg z-[-1]"></div>
            <div className="flex flex-col md:flex-row gap-3">
              <Link
                href="https://entrepot.app"
                className="flex-1 hover:-translate-y-3 hover:no-underline text-black hover:text-black transition-transform border border-solid border-white bg-white-80 p-6 md:p-8 rounded-xl flex flex-row items-start gap-6 md:flex-col md:gap-9"
              >
                <img
                  src="/img/nft/entrepot.webp"
                  alt=""
                  className="w-16 md:w-20"
                />
                <div className="flex-1">
                  <h4 className="tw-heading-6 md:tw-heading-5 mb-1 md:mb-2">
                    Entrepot
                  </h4>
                  <p className="tw-paragraph-sm md:tw-lead-sm mb-3 md:mb-8 text-black-60">
                    The first <abbr title="non-fungible tokens">NFT</abbr> marketplace on the BigFile. This marketplace has  launched 100s of collections with their no-code minting tool, and have over 1TB of assets stored fully on-chain.
                  </p>
                  <span className="tw-paragraph-sm md:tw-lead-sm px-4 py-2 md:px-5 md:py-[10px] bg-[#F1EEF5] rounded-full">
                    $36M+ in trading
                  </span>
                </div>
              </Link>
              <Link
                href="https://tppkg-ziaaa-aaaal-qatrq-cai.raw.ic0.app/"
                className="flex-1 hover:-translate-y-3 hover:no-underline text-black hover:text-black transition-transform border border-solid border-white bg-white-80 p-6 md:p-8 rounded-xl flex flex-row items-start gap-6 md:flex-col md:gap-9"
              >
                <img src="/img/nft/yumi.webp" alt="" className="w-16 md:w-20" />
                <div className="flex-1">
                  <h4 className="tw-heading-6 md:tw-heading-5 mb-1 md:mb-2">
                    Yumi
                  </h4>
                  <p className="tw-paragraph-sm md:tw-lead-sm mb-3 md:mb-8 text-black-60">
                    Yumi is the first fully-decentralized <abbr title="non-fungible tokens">NFT</abbr> and digital goods marketplace where users can create and trade <abbr title="non-fungible tokens">NFT</abbr>s. Users are rewarded Yumi credits, which can be seamlessly integrated with Shiku Metaverse. 
                  </p>
                  <span className="tw-paragraph-sm md:tw-lead-sm px-4 py-2 md:px-5 md:py-[10px] bg-[#F1EEF5] rounded-full">
                    110,000+ users
                  </span>
                </div>
              </Link>
            </div>

            <div className="pt-20 text-center flex flex-col items-center gap-8 relative">
              <div className="md:hidden blob blob-purple blob-center blob-md z-[-1]"></div>

              <Link
                className="button-primary"
                href="/big-tokens#anchor-wallets"
              >
                Set up your wallet
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-20 md:mb-40 container-12 flex flex-col gap-16 md:gap-40">
          <TranslatedLayout
            reverse={true}
            imageUrl="/img/nft/creator.webp"
            imageWithBlob="blob blob-infinite blob-center blob-md md:blob-lg"
            imageClassName="relative"
          >
            <h2 className="tw-heading-3 md:tw-heading-60 md:mb-6">
              Make the most out of <abbr title="non-fungible tokens">NFT</abbr>s
            </h2>
            <p className="tw-lead-sm md:mb-6">
              The BigFile enables a wide variety of unique <abbr title="non-fungible tokens">NFT</abbr>s. Since cube smart contracts can store over 100GB of data, every part of an BIG <abbr title="non-fungible tokens">NFT</abbr> can be hosted on the blockchain giving complete ownership to collectors. All data and code being on-chain allows developers to make any digital object, even full websites, or chat groups into <abbr title="non-fungible tokens">NFT</abbr>s.
            </p>
            <p className="mb-0">
              <Link
                href="https://thebigfile.com/docs/current/developer-docs/use-cases/considerations-for-nft-devs#nfts-on-the-internet-computer"
                className="button-outline"
              >
                Create your own
              </Link>
            </p>
          </TranslatedLayout>
          <TranslatedLayout imageUrl="/img/nft/btc-flower.webp">
            <h2 className="md:tw-heading-60 md:mb-6">Dynamic NFTs</h2>
            <p className="md:tw-lead-sm mb-0">
              Making use of a unique feature of the BigFile, <abbr title="non-fungible tokens">NFT</abbr>s can efficiently communicate with the Web2 world without using oracles. HTTPS outcalls allow NFTs on BIG to query Web2 APIs and change appearance or behave differently depending on the response. For example, <abbr title="Bitcoin">BTC</abbr> Flowers change the color of their paddles based on the last 24 hours of the Bitcoin’s price action.
            </p>
            <a className="link-primary link-with-icon mt-10" href="https://entrepot.app/marketplace/btcflower" target="_blank" rel="noopener noreferrer">
              <svg width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.172 11L10.808 5.63605L12.222 4.22205L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z" fill="currentColor"></path></svg>
              See the BTC Flower collection
            </a>
          </TranslatedLayout>
          <TranslatedLayout
            video={{
              videoUrl: "/img/nft/nft.mp4",
              videoContentType: "video/mp4",
            }}
            reverse={true}
          >
            <h2 className="md:tw-heading-60 md:mb-6">
              Turning TXs into generative NFT art
            </h2>
            <p className="md:tw-lead-sm mb-0">
              Anything can be an NFT on the BigFile, even
              transactions. The Genesis II NFT shows off how diverse and complex
              NFTs can be on the BigFile. It consists of different
              dynamic elements each of which fetches realtime data using HTTPS
              outcalls every 15 mins, showing BIG whale purchases, price change
              over the last 24 hours, current block rate, number of nodes and
              more. The most impressive element is an HTML canvas displaying
              dynamically animating BIG transaction flows. All this is part of
              the NFT and not something stored and accessed off-chain.
            </p>
            <a className="link-primary link-with-icon mt-10" href="https://entrepot.app/marketplace/genesis-ii" target="_blank" rel="noopener noreferrer">
              <svg width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.172 11L10.808 5.63605L12.222 4.22205L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z" fill="currentColor"></path></svg>
              Add a Genesis II NFT to your collection
            </a>
          </TranslatedLayout>
        </section>
        {/* <BackgroundPanel> */}
        <section className="bg-gradient-to-bl from-[#e07934] via-[#964680] to-[#4421a0] py-20 md:py-48 text-white">
          <div className="container-12">
            <h2 className="tw-heading-4 md:tw-heading-60  text-white-60 md:w-8/12 md:mx-auto mb-10 md:mb-20">
              Cost of storing <span className="text-white">1GB</span> of NFT collections on-chain
            </h2>

            <div className="flex flex-col md:flex-row gap-4 mb-16 md:mb-24">
              <div className="flex-1 border border-solid border-white-30 rounded-xl flex flex-col gap-4 py-10 items-center panel-gradient">
                <h3 className="tw-heading-7-caps mb-0">BigFile</h3>
                <img src="/img/nft/ic-logo.webp" alt="" className="w-20" />
                <div>
                  <span className="tw-heading-3">$3</span>{" "}
                  <span className="tw-heading-5">/ year</span>
                </div>
              </div>

              <div className="flex-1 border border-solid border-white-30 rounded-xl flex flex-col gap-4 py-10 items-center">
                <h3 className="tw-heading-7-caps mb-0">Solana</h3>
                <img src="/img/nft/solana-logo.webp" alt="" className="w-20" />
                <div>
                  <span className="tw-heading-3">$110,000</span>{" "}
                  <span className="tw-heading-5">/ year</span>
                </div>
              </div>
              <div className="flex-1 border border-solid border-white-30 rounded-xl flex flex-col gap-4 py-10 items-center">
                <h3 className="tw-heading-7-caps mb-0">Ethereum</h3>
                <img
                  src="/img/nft/ethereum-logo.webp"
                  alt=""
                  className="w-20"
                />
                <div>
                  <span className="tw-heading-3">$79,000,000</span>{" "}
                  <span className="tw-heading-5">/ year</span>
                </div>
              </div>
            </div>

            <p className="tw-lead-sm md:tw-lead md:w-8/12 md:mx-auto mb-16 md:mb-20">
              The BigFile offers unparalleled efficiency that leaves
              other blockchains orders of magnitudes behind with regards to many
              metrics, making it the ideal chain to launch complex NFT
              collections and games. BIG uses the reverse gas model, which means
              end users can mint and trade NFTs with 0 gas fees.


              <a href="https://thebigfile.com/docs/current/developer-docs/use-cases/considerations-for-nft-devs#nfts-on-the-internet-computer"  className="button-outline-white mt-6">Build your own</a>
            </p>


            <div className="panel-gradient border border-solid border-white-30 rounded-xl py-12 px-8 flex flex-col gap-6 text-center md:flex-row">
              <div className="flex flex-col items-center gap-2 md:flex-1">
                <div>
                  <span className="tw-heading-3 md:tw-heading-60">$32.5</span>{" "}
                  <span className="tw-heading-6">/ week</span>
                </div>
                <p className="tw-paragraph md:tw-lead-sm mb-0">
                  Total cost of storing all NFTs
                </p>
              </div>
              <hr className="w-20 bg-white-20 self-center m-0 md:w-px md:h-20" />
              <div className="flex flex-col items-center gap-2  md:flex-1">
                <span className="tw-heading-3 md:tw-heading-60">306,000+</span>
                <p className="tw-paragraph md:tw-lead-sm mb-0">
                  Total transactions
                </p>
              </div>
              <hr className="w-20 bg-white-20 self-center m-0 md:w-px md:h-20" />
              <div className="flex flex-col items-center gap-2  md:flex-1">
                <span className="tw-heading-3 md:tw-heading-60">&lt; $500</span>{" "}
                <p className="tw-paragraph md:tw-lead-sm mb-0">
                  Total transaction costs for all
                  <br />
                  transactions
                </p>
              </div>
            </div>
          </div>
        </section>
        

      </main>
    </Layout>
  );
}

export default NftPage;
