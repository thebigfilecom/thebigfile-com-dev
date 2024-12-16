import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import { CardWithDescription } from "../components/Common/Card";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import ShareMeta from "../components/Common/ShareMeta";
import TranslatedLayout from "../components/Common/TranslatedLayout/TranslatedLayout";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";

function WhatIsBigPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="What is BigFile"
      description={`The BigFile adds autonomous serverless cloud functionality to the public Internet - making it possible to build almost any system or service entirely on a decentralized network using “canister software,” an evolution of smart contracts.`}
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-what-is-the-big.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}

        <section className=" bg-infinite text-white pt-20" ref={heroRef}>
          <AnimateSpawn
            className="container-10 pt-10 pb-14 md:pb-24 md:pt-36 relative"
            variants={transitions.container}
          >
        
            <div className="sm:w-8/10 md:w-6/10 relative">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-8 md:mb-6"
                variants={transitions.item}
              >
                What is the
                <br className="hidden md:block" /> BigFile
              </motion.h1>
              <motion.p
                className="pb-[15%] sm:pb-0 tw-lead-sm md:tw-lead mb-0"
                variants={transitions.item}
              >
                BigFile is an AI-powered decentralized blockchain network engineered to provide decentralized, immutable, and scalable data storage solutions. It is designed to securely host applications, files, and Big Data, while facilitating computations on smart contracts at unparalleled scalability.
              </motion.p>
            </div>
          </AnimateSpawn>
        </section>

        <AnimateSpawn
          className="container-8 mt-80 md:mt-[540px] relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="">
            <motion.h2
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-3 mb-8 md:mb-10 text-gradient"
              variants={transitions.item}
            >
              BigFile is an AI-powered decentralized blockchain network engineered to provide decentralized, immutable, and scalable data storage solutions. It is designed to securely host applications, files, and Big Data, while facilitating computations on smart contracts at unparalleled scalability. 
              <br />
              BigFile offers a revolutionary approach to decentralized data management, enabling individuals and businesses to create an open, borderless digital future free from centralized control.
            </motion.h2>

            <motion.p
              className="mb-0 flex flex-col items-start gap-6 md:gap-8"
              variants={transitions.item}
            >
              <Link className="button-primary text-center" href="/capabilities">
                BigFile capabilities
              </Link>
              <Link
                className="link-primary link-with-icon"
                href="https://wiki.thebigfile.com/wiki/History"
              >
                <span>
                  <span className="hidden sm:inline">Wiki history </span>
                  <span className="sm:hidden">History </span>
                  of the BigFile
                </span>
                <LinkArrowUpRight />
              </Link>
            </motion.p>
          </div>
        </AnimateSpawn>

        <section
          className="mt-20 md:mt-48
          bg-[linear-gradient(180deg,transparent_0%,transparent_97%,#3b00b9_97%,#3b00b9_100%)]
          sm:bg-[linear-gradient(180deg,transparent_0%,transparent_87%,#3b00b9_87%,#3b00b9_100%)]
          md:bg-[linear-gradient(180deg,transparent_0%,transparent_77%,#3b00b9_77%,#3b00b9_100%)]
          relative "
        >
          <div className="blob blob-white blob-sm md:blob-xl blob-x-7 blob-y-8"></div>

          <div className="container-12">
            <AnimateSpawn
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5"
              variants={transitions.container}
            >
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-big-file/icon-tamperproof.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">File Storage</h3>
                <p className="tw-paragraph-sm text-black/60 md:tw-paragraph mb-0">
                BigFile offers unmatched solutions for long-term data storage, ensuring security, scalability, and immutability. This reduces fees and improves scalability for businesses requiring large-scale storage.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-big-file/icon-autonomous.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Social Platforms</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Social platforms share IP addresses of users with governments. Privacy-focused social apps have centralized servers. In an era where data ownership and censorship are growing concerns, it’s time for social apps to benefit from the immutable, censorship-resistant nature of the permaweb.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-big-file/icon-simple.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Decentralized AI</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Artificial Intelligence (AI) thrives on vast amounts of data. BigFile addresses the challenges of secure data management, immutability, and provenance, which are critical for AI systems. 
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-big-file/icon-sovereign.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Gaming & NFTs</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                In the world of NFTs and gaming, creators and players require lasting solutions. Whether you're developing an NFT marketplace, minting atomic assets, or building immersive gaming worlds, BigFile serves as the foundation for tamper-proof, monetized, and easily accessible digital creations.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-big-file/icon-web3-ois.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Bureaucracy</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Verifying, managing, and transmitting complex and time-consuming bureaucratic processes and documents through the BigFile network ensures 100% security while effectively addressing issues of fraud.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-big-file/icon-next-gen-ai.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Blockchain Data</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Blockchain applications and oracle services must be able to trust that the data they rely on will remain permanently accessible. BigFile indexes and retrieves decentralized data storage on BigFile blockchain, ensuring that data such as transaction histories, price feeds, and oracle inputs are archived and served forever.
                </p>
              </motion.div>
            </AnimateSpawn>
          </div>
        </section>

        <section className="bg-infinite text-white pt-20 md:pt-44">
          <div className="container-10 md:w-6/10 md:mx-auto">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 text-center mb-0"
              variants={transitions.item}
            >
              Use Cases BigFile
            </motion.h2>
          </div>
          <div className=" container-12 flex flex-col gap-16 md:gap-40 relative pt-20">
            <TranslatedLayout imageUrl="/img/what-is-big-file/node-providers.webp">
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
              BigFile Mining
              </h2>

              <p className="tw-lead-sm">
              BigFile mining is a process that enhances the network’s security by providing storage capacity. This system is based on the Storage Proof of Random Access (SPoRA) model, which relies not only on computational power but also on the secure storage of data. BigFile miners provide the necessary physical hardware (such as disk storage capacity) to store data on the network and earn BIG Token rewards in return. The mining process involves not only creating new blocks but also ensuring the integrity and accessibility of existing data, for which miners are regularly rewarded.
              </p>
              <p>
                <Link
                  href="/node-providers"
                  className="link-white link-with-icon"
                >
                  <LinkArrowRight />
                  Sovereign hardware network
                </Link>
              </p>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/what-is-big-file/subnet-blockchains.webp"
              reverse={true}
            >
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Subnet blockchains
              </h2>
              <p className="tw-lead-sm">
              The BigFile combines node machines into highly efficient subnet blockchains, which enhance the capacity for hosting tamperproof smart contracts. BigFile also features a permissionless automated governance system called the Network Nervous System, which directs nodes to join or leave subnets.
              </p>
              <p>
                <Link
                  href="/how-it-works#Architecture"
                  className="link-white link-with-icon"
                >
                  <LinkArrowRight />
                  BigFile architecture
                </Link>
              </p>
            </TranslatedLayout>
            
          </div>
        </section>
        <AnimateSpawn
          className="pt-30 md:pt-40 bg-[linear-gradient(180deg,#3b00b9_0%,#3b00b9_75%,transparent_75%,transparent_100%)] text-white relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="blob blob-lg md:blob-xl blob-white md:blob-white-dense blob-x-5 blob-y-8 z-0 md:opacity-60"></div>
          
          
        </AnimateSpawn>
        <section className="container-12 pt-10 md:pt-16 pb-30 md:pb-20 relative">
          <div className="text-center mb-16 md:mb-20">
            <AnimateSpawn
              className="container-12"
              variants={transitions.container}
            >
              
            </AnimateSpawn>
          </div>

          <div className="flex flex-col gap-16 md:gap-40">
            <TranslatedLayout imageUrl="/img/what-is-big-file/big-wallet.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                BIG ID
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              BIG ID is a platform enabling users to securely store and manage their data on the BigFile network. It offers the ability to permanently store files in a decentralized and reliable manner.
              </p>
              <Link
                className="link-primary link-with-icon"
                href="/big-id"
              >
                <LinkArrowRight /> Wallet on BIG
              </Link>
            </TranslatedLayout>
            <TranslatedLayout imageUrl="/img/what-is-big-file/sovereign-infrastructure.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Sovereign infrastructure
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              Traditional IT infrastructure—relying on centralized cloud services, closed-source software, and proprietary security hardware—comes with inherent vulnerabilities, such as backdoors for surveillance and kill switches. As a result, governments have often been compelled to compromise their sovereignty over critical digital infrastructure. BigFile addresses this challenge with specialized localized sovereign subnets, tailored for governments, NGOs, and enterprises with unique requirements. This innovative solution provides an unstoppable, secure, and transparent sovereign platform infrastructure, empowering organizations to regain control over the digital foundations of society.
              </p>
              <Link
                className="link-primary link-with-icon"
                href="/node-providers"
              >
                <LinkArrowRight /> IT beyond cloud
              </Link>
            </TranslatedLayout>

            <TranslatedLayout imageUrl="/img/what-is-big-file/multi-chain.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Native multi-chain
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              BigFile is actively working on integrating the Bitcoin Network and native Ethereum. Innovations like cross-chain communication enable the BigFile network to seamlessly transfer, receive, and send BTC and ETH directly across chains, fostering a trustless multi-chain environment. This approach allows end users to transfer crypto assets as effortlessly and quickly as sending a chat message, without relying on bridges or third-party intermediaries.
              </p>
              <p className="mb-3">
                <Link
                  className="link-primary link-with-icon"
                  href="/file-storage"
                >
                  <LinkArrowRight /> File Storage
                </Link>
              </p>
              <p className="mb-3">
                <Link
                  className="link-primary link-with-icon"
                  href="/decentralized-ai"
                >
                  <LinkArrowRight /> Decentralized AI
                </Link>
              </p>
            </TranslatedLayout>
          </div>
        </section>

        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15 mt-30">
          <AnimateSpawn
            className=" relative text-white"
            variants={transitions.container}
          >
            <motion.div
              className="blob blob-purple blob-sm blob-x-5 blob-y-7 z-[-1] md:blob-lg"
              variants={transitions.fadeIn}
            ></motion.div>
            <motion.h2
              className="tw-heading-3 text-center mb-2 w-full mx-auto md:tw-heading-60 md:mb-6 lg:w-6/12"
              variants={transitions.item}
            >
              Get with the BigFile
            </motion.h2>
          </AnimateSpawn>

          <AnimateSpawn
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-16"
            variants={transitions.container}
          >
            <CardWithDescription
              title="Tech insights"
              description=""
              href="/how-it-works"
            />

            <CardWithDescription
              title="BigFile community"
              description=""
              href="https://thebigfile.com/community"
            />
            <CardWithDescription
              title="Developer docs"
              description=""
              href="/docs/current/home"
            />
            <CardWithDescription
              title="BigFile dapps"
              description=""
              href="/ecosystem"
            />
          </AnimateSpawn>
        </section>
      </main>
    </Layout>
  );
}

export default WhatIsBigPage;
