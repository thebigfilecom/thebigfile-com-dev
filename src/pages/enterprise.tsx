import Link from "@docusaurus/Link";
import useGlobalData from "@docusaurus/useGlobalData";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import { CardWithDescription } from "../components/Common/Card";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";
import ShareMeta from "../components/Common/ShareMeta";
import TranslatedLayout from "../components/Common/TranslatedLayout/TranslatedLayout";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";

function EnterprisePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="Enterprise"
      description="Build next-generation enterprise systems by using advanced smart contract technology hosted on the BigFile blockchain."
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-enterprise.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}

        <section
          className="overflow-hidden bg-infinite text-white pt-20"
          ref={heroRef}
        >
          <AnimateSpawn
            className="container-10 pt-20 pb-40 md:pb-52 md:pt-36 relative"
            variants={transitions.container}
          >
            <div className="blob blob-white blob-xl md:blob-xl md:blob-x-8 md:blob-y-10 opacity-100"></div>
            <div className="md:w-7/10 relative">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-2 md:mb-6"
                variants={transitions.item}
              >
                Cloud 3.0
              </motion.h1>
              <motion.p
                className="tw-lead-sm md:tw-lead mb-8"
                variants={transitions.item}
              >
                <span style={{display: "block", height: "0.6em"}}></span>
                A truly <i>decentralized cloud</i> represents the next evolution of blockchain technology—a cloud not controlled by any single company or organization but open to everyone, decentralized like the internet itself. Imagine a blockchain-powered serverless cloud capable of hosting both data and logic, seamlessly handling file transfers, bureaucracy, and HTTP requests. In this cloud, data is tamper-proof, unstoppable, and horizontally scalable, enabling the creation of sovereign systems and services that need no firewalls for protection.
                <span style={{display: "block", height: "0.6em"}}></span>
              </motion.p>
            </div>
          </AnimateSpawn>
        </section>

        <AnimateSpawn
          className="container-12 relative"
          el={motion.section}
          variants={transitions.fadeIn}
        >
          <div className="text-center md:w-5/10 relative md:absolute top-30 sm:top-40 md:top-0 -translate-y-1/2 right-0 -mt-30 md:-mt-24">
            <img
              src="/img/enterprise/enterprise-hero-image.webp"
              alt=""
              className="w-full max-w-sm sm:max-w-lg md:max-w-none"
            />
          </div>
        </AnimateSpawn>
        <AnimateSpawn
          className="container-10 md:mt-30 relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="md:w-6/10">
            <motion.h2
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-3 mb-3 md:mb-6 text-gradient"
              variants={transitions.item}
            >
              Legacy technologies, costly and time-consuming bureaucratic processes, rising development and management expenses, and missed business opportunities are among the key challenges that hinder technology startups, institutions, and companies from innovating and staying competitive. At BigFile, we aim to solve these long-standing issues with a serverless cloud infrastructure powered by an advanced public network, where everything integrates seamlessly.
            </motion.h2>
          </div>
        </AnimateSpawn>
        <br/><br/>
        <section className="bg-infinite relative overflow-hidden text-white">
          <div className="blob blob-white blob-sm md:blob-xl blob-x-7 blob-y-0"></div>
          <div className="container-10 mt-20 md:mt-40 md:w-6/10 md:mx-auto">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 text-center mb-0"
              variants={transitions.item}
            >
              Why build on the BigFile?
            </motion.h2>
          </div>
          <div className="mb-20 md:mb-40 container-12 flex flex-col gap-16 md:gap-40 relative pt-20">
            <TranslatedLayout
              imageUrl="/img/enterprise/serverless.webp"
              reverse={true}
            >
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Serverless Computing
              </h2>
              <p className="tw-lead-sm">
              For businesses, government agencies, and Web3 projects seeking serverless architectures that enable fast and secure development cycles while reducing infrastructure maintenance and operational costs, BigFile—a decentralized blockchain network—will soon offer a powerful alternative.
              </p>
              <p className="tw-lead-sm">
              BigFile’s programming model is designed to resemble that of serverless cloud architectures, allowing applications to be written easily in widely used languages such as Rust or Python. 
              </p>
              
              <p className="mb-0">
                <Link
                  href="https://forum.thebigfile.com/t/bigfile-a-blockchain-offering-ai-powered-decentralized-serverless-computing-and-bureaucratic-transactions/23"
                  className="link-white link-with-icon"
                >
                  <LinkArrowUpRight />
                  Read the blog and paper
                </Link>
              </p>
            </TranslatedLayout>
            <TranslatedLayout imageUrl="/img/enterprise/platform-risk-large.webp">
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Manage platform risk
              </h2>
              <p className="tw-lead-sm">
              Large-scale software systems that rely on centralized cloud providers are subject to vendor lock-in, which can lead to increasing server costs or necessitate codebase refactoring.
              </p>
              <p className="tw-lead-sm">
              BigFile offers an alternative technology stack that is open and decentralized. Independently owned and operated "node machines," installed in data centers around the world, are connected by advanced network protocols to form a seamless, serverless cloud that is stateful, tamperproof, unstoppable, autonomous, and sovereign—capable of supporting any system.
              </p>
              <p className="tw-lead-sm">
              This is an open cloud where you can build sovereign enterprise infrastructure—just like the internet—without a corporate owner who can make arbitrary updates, introduce backdoors, or implement kill switches.
              </p>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/enterprise/security-teams.webp"
              reverse={true}>
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Kill security costs &amp; risks
              </h2>
              <p className="tw-lead-sm">
              The BigFile hosts tamperproof and unstoppable software systems and services that don't require protection from firewalls, SIEM logging, or other traditional cybersecurity frameworks. 
              </p>
              <p className="tw-lead-sm">
              Simply put, the BigFile has no backdoors for hackers to exploit, and hosted software or data cannot be attacked by viruses or ransomware.          
              </p>

              <p className="mb-0">
                <Link
                  href="/how-it-works"
                  className="link-white link-with-icon"
                >
                  <LinkArrowRight />
                  How the BigFile is designed
                </Link>
              </p>
            </TranslatedLayout>            
            <TranslatedLayout imageUrl="/img/enterprise/digital-identity.webp">
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Built-in digital identity
              </h2>
              <p className="tw-lead-sm mb-6 md:mb-10">
              There's no need to build proprietary identity solutions or rely on for-profit companies to safeguard user data and privacy. BIG ID is a privacy-focused authentication framework native to BigFile, empowering both individuals and businesses with full control over their digital identities. Using secure passkeys, BIG ID seamlessly integrates with any service running on BigFile, enabling a secure and decentralized approach to identity management. The BigFile web wallet enhances this experience, allowing users to deploy decentralized data directly from their browser, securely connect to decentralized applications, and navigate the weave effortlessly. With BIG ID, the future of digital identity is secure, private, and user-centric.
              </p>
              <p className="mb-0">
                <Link
                  href="/big-id"
                  className="link-white link-with-icon"
                >
                  <LinkArrowRight />
                  More on BIG ID
                </Link>
              </p>
            </TranslatedLayout>
                        
            <TranslatedLayout imageUrl="/img/big-tokens/hero.webp">
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Tokenized business models
              </h2>
              <p className="tw-lead-sm">
              From loyalty programs and memberships to ticketing, bureaucratic processes, car rentals or sales, real estate transactions, and title deeds, businesses and institutions must effectively manage customer and citizen relationships to succeed. BigFile provides a unified digital wallet that simplifies the management of digital assets and identities.
              </p>
              <p className="tw-lead-sm">
              Organizations can leverage BigFile's built-in token-based voting tools to effectively involve users in the product development lifecycle and actively encourage their participation.
              </p>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/what-is-big-file/open-internet-services.webp"
              reverse={true}
            >
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
               Extending Existing Software with Blockchain Capabilities
              </h2>
              <p className="tw-lead-sm">
              BigFile smart contracts can handle and generate HTTP requests, allowing them to host full-fledged web applications, enterprise solutions, and bureaucratic process networks directly on the blockchain. They also enable direct API calls to online services running in traditional cloud environments or other infrastructures. This flexibility empowers businesses, institutions, and individuals to integrate blockchain capabilities into their existing software, eliminating the need to rebuild their entire operations from scratch on the blockchain.
              </p>
            </TranslatedLayout>
            
          </div>
        </section>
        <section className="mt-20 md:mt-48">
          <div className="container-10">
            <h2 className="tw-heading-3 md:tw-heading-60 text-black md:w-6/10 md:mx-auto text-center mb-10 md:mb-16">
              Applications of autonomous cloud
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
              <div className="flex flex-col">
                <img
                  src="/img/enterprise/development-costs-2.svg"
                  alt=""
                  className="w-24 md:w-30"
                />
                <h3 className="mt-4 md:mt-6 mb-2 tw-heading-5">
                  Secure inter-org workflows
                </h3>
                <p className="tw-paragraph mb-0">
                  Privately share documents with other organizations
                  and customers, using on-chain encryption enabled by VETKeys.
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="/img/enterprise/digital-identity.svg"
                  alt=""
                  className="w-24 md:w-30"
                />
                <h3 className="mt-4 md:mt-6 mb-2 tw-heading-5">
                  Digital identity layer
                </h3>
                <p className="tw-paragraph mb-0">
                  Privacy-enhancing identity layer for seamless
                  and secure authentication across systems and services/applications.
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="/img/enterprise/loyalty-programs.svg"
                  alt=""
                  className="w-24 md:w-30"
                />
                <h3 className="mt-4 md:mt-6 mb-2 tw-heading-5">
                  Tokenized reward programs
                </h3>
                <p className="tw-paragraph mb-0">
                  Simplify customer loyalty and employee reward programs using
                  tokens.
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="/img/enterprise/secure-sharing.svg"
                  alt=""
                  className="w-24 md:w-30"
                />
                <h3 className="mt-4 md:mt-6 mb-2 tw-heading-5">
                  Verifiable credentials
                </h3>
                <p className="tw-paragraph mb-0">
                  Share only the necessary personal information with other
                  platforms.
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="/img/enterprise/ownership.svg"
                  alt=""
                  className="w-24 md:w-30"
                />
                <h3 className="mt-4 md:mt-6 mb-2 tw-heading-5">
                  Simple self-custody
                </h3>
                <p className="tw-paragraph mb-0">
                  Cryptographically secured user ownership of data, and digital assets.
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="/img/enterprise/supply-chain.svg"
                  alt=""
                  className="w-24 md:w-30"
                />
                <h3 className="mt-4 md:mt-6 mb-2 tw-heading-5">Supply chain</h3>
                <p className="tw-paragraph mb-0">
                  Blockchain transparency and immutability for easy
                  verification of authenticity.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container-12 py-30 md:py-48">
          <div className="text-center mb-16 md:mb-30">
            <AnimateSpawn
              className="container-12"
              variants={transitions.container}
            >
              <motion.h2
                className="tw-heading-3 md:tw-heading-2 text-gradient text-center md:w-8/12 md:mx-auto mb-8"
                variants={transitions.item}
              >
                Enterprises adopting the BigFile
              </motion.h2>
            </AnimateSpawn>
          </div>

          <div className="flex flex-col gap-16 md:gap-40">
            
            
            <AnimateSpawn
              className="container-12"
              variants={transitions.container}
            >
              <motion.div variants={transitions.container}>
                <Link
                  className="button-outline text-center"
                  href="/ecosystem"
                >
                  other projects on the BigFile
                </Link>
              </motion.div>
            </AnimateSpawn>
          </div>
        </section>
        <AnimateSpawn
          className="bg-infinite overflow-hidden "
          variants={transitions.container}
          el={motion.section}
        >
          <div className="container-10 py-30 md:py-40 flex flex-col sm:flex-row text-white relative">
            <div className="blob blob-white blob-sm md:blob-xl blob-x-10 blob-y-3 md:blob-y-5"></div>
            <div className="flex-1 mt-40 sm:mt-0">
              <h2 className="tw-heading-4 md:tw-heading-3 mb-6">
                Interested in running a pilot on the BigFile?
              </h2>
              <p className="tw-lead-sm md:tw-lead mb-6 md:mb-8">
              Embracing and committing to a new technology is a significant decision. Connect with our development team to explore how BigFile can benefit your business or government.
              </p>
              <p className="mb-0">
                <Link
                  href="mailto:info@thebigfile.com"
                  className="button-white"
                >
                  get in touch
                </Link>
              </p>
            </div>
            <div className="flex-1 ">
              <img
                src="/img/enterprise/enterprise-learnmore-background-image.svg"
                alt=""
                loading="lazy"
                className="absolute top-0 right-0 left-0 max-w-md md:max-w-none sm:left-auto sm:-right-30"
              ></img>
            </div>
          </div>
        </AnimateSpawn>

        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15 mt-40">
          <AnimateSpawn
            className=" relative text-white"
            variants={transitions.container}
          >
            <motion.div
              className="blob blob-purple blob-sm blob-x-5 blob-y-7 z-[-1] md:blob-xl"
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
              title="Network dashboard"
              description=""
              href="https://dashboard.thebigfile.com/"
            />

            <CardWithDescription
              title="Sample code"
              description=""
              href="/samples?selectedDomains=Asynchronous+DeFi"
            />
            <CardWithDescription
              title="Developer docs"
              description=""
              href="/docs/current/home"
            />
            <CardWithDescription
              title="How it works"
              description=""
              href="/how-it-works"
            />
          </AnimateSpawn>
        </section>
      </main>
    </Layout>
  );
}

export default EnterprisePage;
