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
      description={`The BigFile is the only blockchain storing all components of an NFT on the blockchain, including assets. This opens up capabilities for BIG NFTs that go way beyond "overpriced links to JPGs".`}
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
                <img src="/img/nft/big-logo.webp" alt="" className="w-20" />
                <div>
                  <span className="tw-heading-3">$25</span>{" "}
                  <span className="tw-heading-5">/Forever</span>
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


            
          </div>
        </section>
        

      </main>
    </Layout>
  );
}

export default NftPage;
