import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import { Faq, FaqSection } from "../components/Common/Faq/Faq";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";
import LinkCardsSection from "../components/Common/LinkCardsSection";
import ShareMeta from "../components/Common/ShareMeta";
import {
  TranslatedCard,
  TranslatedCardList,
} from "../components/Common/TranslatedCards/TranslatedCards";
import TranslatedLayout from "../components/Common/TranslatedLayout/TranslatedLayout";
import VideoCard from "../components/Common/VideoCard";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";

const MotionLink = motion(Link);

function InternetIdentityPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="BIG ID"
      description="BIG ID on BigFile redefines user experiences by removing friction from the authentication journey and enabling data sovereignty."
    >
      <ShareMeta image="/img/shareImages/share-bigid.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        <section className="bg-black text-white pt-20" ref={heroRef}>
          {bgDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}

          <div className="container-10 pt-20 pb-12 sm:pb-0 md:pb-40 md:pt-36 relative">
            <div className="blob blob-white blob-xl md:blob-xl md:blob-x-8 md:blob-y-10 opacity-100"></div>
            <motion.h1
              className="tw-heading-3 md:tw-heading-2 mb-2 md:mb-6 md:w-8/10"
              variants={transitions.item}
            >
              Decentralized BIG ID.
            </motion.h1>
            <div className="relative  md:w-5/10">
              <motion.p
                className="tw-lead-sm md:tw-lead mb-8"
                variants={transitions.item}
              >
                BIG ID is a platform enabling users to securely store and manage their data on the BigFile network. It offers the ability to permanently store files in a decentralized and reliable manner.
              </motion.p>
              <motion.p className="mb-0" variants={transitions.item}>
                <Link
                  className="link-white link-with-icon"
                  href="https://bigid.thebigfile.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkArrowRight />
                  Start building
                </Link>
              </motion.p>
            </div>
          </div>
          <div className="container-12 relative">
            <div className="text-center md:w-5/10 relative md:absolute top-0 sm:top-40 md:top-0 translate-y-24 sm:translate-y-10 md:-translate-y-1/2 right-0 -mt-30 md:-mt-30">
              <img
                src="/img/big-id/big-id-hero.webp"
                alt="Start building on BIG ID"
                className="w-full max-w-sm sm:max-w-[720px] md:max-w-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="container-10 relative mt-24 sm:mt-52 md:mt-40">
          <AnimateSpawn className="md:w-6/12" variants={transitions.container}>
            <motion.h2
              className="tw-heading-4 text-gradient md:tw-heading-60 mb-0"
              variants={transitions.item}
            >
              Harness the full potential of BIG ID
            </motion.h2>
          </AnimateSpawn>
        </section>

        <section className="container-12 pt-20 md:pt-30">
          <div className="flex flex-col gap-16 md:gap-40">
            <TranslatedLayout
              imageUrl="/img/big-id/image-1.webp"
              reverse={true}
            >
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                100% decentralized
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-0">
              BIG ID is fully decentralized, as apps built on BigFile store data entirely on-chain. This makes it more secure and fault-tolerant than digital identity solutions hosted on protocols that rely on centralized cloud providers like Amazon Web Services.
              </p>
            </TranslatedLayout>
            <TranslatedLayout imageUrl="/img/big-id/image-2.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                User friendly
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-0">
              Log in securely using a password. Future updates will introduce support for FaceID, TouchID, and passwords, offering users flexible options to access their accounts. Built on centralized technology, passwords make BIG ID more user-friendly compared to traditional authentication methods.
              </p>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/big-id/image-3.webp"
              reverse={true}
            >
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Enhanced security
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-0">
              BIG ID eliminates the need for apps to store passwords in a database. When a user creates a BIG ID, they are automatically assigned a public and private key pair. The private key is securely locked in a tamper-proof chip on the user's device, ensuring that it cannot be retrieved by anyone.
              </p>
            </TranslatedLayout>

            <TranslatedLayout imageUrl="/img/big-id/image-4.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Strict privacy
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-0">
              Each time a user creates an account with an app using BIG ID, a unique key pair is generated and managed specifically for that app. This ensures that users can interact with the app without worrying about their data being shared.
              </p>
            </TranslatedLayout>
            
            <TranslatedLayout imageUrl="/img/big-id/image-3.webp"
            reverse={true}
            >
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Easy integration
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-3 md:mb-6">
               A local-first, self-custodial wallet with comprehensive features: create, import, or export wallets using passphrase or key files, enjoy seamless Ledger support, send and receive BIG tokens, upload decentralized data (text, files, folders, or deploy static websites), and easily view transactions and data.
              </p>
              <p className="mb-0">
                <Link
                  href="/docs/current/developer-docs/integrations/big-id/integrate-identity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary"
                >
                  <LinkArrowRight />
                  Integrate BIG ID
                </Link>
              </p>
            </TranslatedLayout>
          </div>
        </section>
        <section className="bg-infinite pt-24 mt-20 md:mt-30">
          <div className="container-12 text-white">
            <AnimateSpawn
              className="mx-auto md:w-6/12 text-center"
              variants={transitions.item}
            >
              <h2 className="tw-heading-3 md:tw-heading-60">
               BIG ID for a new era
              </h2>
            </AnimateSpawn>

            <AnimateSpawn
              className="md:mx-1/12 mt-24 md:mt-0 md:flex md:gap-1/10 md:items-center"
              variants={transitions.container}
            >
              <motion.div
                className="relative flex-[4] max-w-sm md:max-w-none"
                variants={transitions.fadeIn}
              >
                <div className="blob blob-purple blob-md blob-x-2 blob-y-3 z-0 opacity-50"></div>
                <img
                  src="/img/big-id/seamless-authentication.webp"
                  alt="Seamless authentication"
                  className="relative"
                  loading="lazy"
                />
              </motion.div>
              <div className="mt-12 md:mt-0 flex-[5] self-end">
                <motion.h2
                  className="tw-heading-4 mb-6 md:tw-heading-3"
                  variants={transitions.item}
                >
                  Seamless authentication
                </motion.h2>
                <motion.div variants={transitions.item}>
                  <p className="mb-0 tw-lead-sm md:tw-lead text-white/80">
                  BIG ID is built on WebAuthN, a global authentication standard. It eliminates the need for usernames and passwords by replacing them with passkeys—registered devices like smartphones, laptops, or hardware wallets such as YubiKey or Ledger. To authenticate their identity, users simply connect with BIG ID and unlock their device.
                  </p>
                </motion.div>
              </div>
            </AnimateSpawn>
          </div>

          <AnimateSpawn
            variants={transitions.container}
            className="py-20 md:py-30"
          >
            <div className="container-10 grid gap-4 grid-cols-2 md:grid-cols-4">
              <motion.div
                variants={transitions.item}
                className="flex-1 rounded-3xl bg-white/90 backdrop-blur-2xl text-center p-5 md:p-10 flex flex-col gap-5 items-center"
              >
                <img
                  src="/img/big-id/icon-3.svg"
                  alt="Age verification"
                  loading="lazy"
                />
                <h3 className="tw-lead-sm text-black/80 mb-0">
                  Age verification
                </h3>
              </motion.div>
              <motion.div
                variants={transitions.item}
                className="flex-1 rounded-3xl bg-white/90 backdrop-blur-2xl text-center p-5 md:p-10 flex flex-col gap-5 items-center"
              >
                <img
                  src="/img/big-id/icon-4.svg"
                  alt="Know your customer"
                  loading="lazy"
                />
                <h3 className="tw-lead-sm text-black/80 mb-0">
                  Know your customer
                </h3>
              </motion.div>
              <motion.div
                variants={transitions.item}
                className="flex-1 rounded-3xl bg-white/90 backdrop-blur-2xl text-center p-5 md:p-10 flex flex-col gap-5 items-center"
              >
                <img
                  src="/img/big-id/icon-1.svg"
                  alt="Proof of humanity"
                  loading="lazy"
                />
                <h3 className="tw-lead-sm text-black/80 mb-0">
                  Proof of humanity
                </h3>
              </motion.div>
              <motion.div
                variants={transitions.item}
                className="flex-1 rounded-3xl bg-white/90 backdrop-blur-2xl text-center p-5 md:p-10 flex flex-col gap-5 items-center"
              >
                <img
                  src="/img/big-id/icon-2.svg"
                  alt="Academic transcripts"
                  loading="lazy"
                />
                <h3 className="tw-lead-sm text-black/80 mb-0">
                  Academic transcripts
                </h3>
              </motion.div>
            </div>
          </AnimateSpawn>
        </section>

        <section className="container-10 mt-20 md:mt-30">
          <AnimateSpawn className="" variants={transitions.container}>
            <motion.h2
              className="tw-heading-4 text-gradient md:tw-heading-60 mb-0 text-center"
              variants={transitions.item}
            >
              A versatile solution <br className="hidden md:block" />
              for all providers
            </motion.h2>
          </AnimateSpawn>
        </section>
        <section className="container-10 mt-6 md:mt-10">
          <TranslatedCardList className="md:mx-1/12">
            <TranslatedCard
              title="Enterprises"
              icon={
                <img
                  src="/img/big-id/icon-5.svg"
                  loading="lazy"
                  aria-hidden="true"
                />
              }
            >
              <motion.p
                className="mb-0 tw-paragraph"
                variants={transitions.item}
              >
                Simplify authentication and credential sharing to enhance the user experience, while reducing costs and cyberthreats by eliminating the need to store passwords.
              </motion.p>
            </TranslatedCard>
            <TranslatedCard
              title="Developers"
              icon={
                <img
                  src="/img/big-id/icon-6.svg"
                  loading="lazy"
                  aria-hidden="true"
                />
              }
            >
              <motion.p
                className="mb-0 tw-paragraph"
                variants={transitions.item}
              >
                Enhance your app's value by integrating advanced authentication and credential verification tools into your tech stack.
              </motion.p>
            </TranslatedCard>
            <TranslatedCard
              title="Education"
              icon={
                <img
                  src="/img/big-id/icon-7.svg"
                  loading="lazy"
                  aria-hidden="true"
                />
              }
            >
              <motion.p
                className="mb-0 tw-paragraph"
                variants={transitions.item}
              >
                Guarantee the integrity and accuracy of academic records by issuing digital copies of degrees, qualifications, and certificates.
              </motion.p>
            </TranslatedCard>
            <TranslatedCard
              title="Governments"
              icon={
                <img
                  src="/img/big-id/icon-8.svg"
                  loading="lazy"
                  aria-hidden="true"
                />
              }
            >
              <motion.p
                className="mb-0 tw-paragraph"
                variants={transitions.item}
              >
                Offer citizens a decentralized digital identity solution, avoiding the risks of placing their data in the hands of private companies that may host servers in different countries or jurisdictions.
              </motion.p>
            </TranslatedCard>
          </TranslatedCardList>
        </section>
        
        <section className="container-12 mt-20 md:mt-30">
          <FaqSection
            contentClassName="md:mr-1/12"
            id="participate"
            title={
              <div className=" mb-12 md:mb-0">
                <h2 className="tw-heading-3 text-gradient mb-6 md:tw-heading-60">
                  FAQs
                </h2>
                <p className="tw-lead-sm mb-0">
                  Find answers to commonly asked questions about BIG ID.
                </p>
              </div>
            }
          >
            <Faq title="Why is it recommended to use an BIG ID wallet?">
              <p>
              Using a BIG ID wallet is highly recommended as it securely stores your private keys and serves as a trusted interface for dApps. With your explicit approval, the wallet signs transactions and other data, ensuring that your BIG tokens remain protected from malicious applications attempting unauthorized access or transactions.
              </p>
            </Faq>
            <Faq title="Can I use these wallets as a cold wallet?">
              <p>
              Yes, you can use most of the wallets available for BigFile to generate cold wallets. You can find a step by step guide for this here.
              </p>
              <p>* Please make sure to keep multiple copies of your wallet key file in secure locations, as we cannot help you to recover your wallet if you lose it *</p>
              
            </Faq>
            <Faq title="Can I send BIG tokens to MyEtherWallet/another third party wallet or an ETH address?">
              <p>
              No, BIG tokens are fundamentally incompatible with MyEtherWallet, third-party wallets, or Ethereum addresses. Sending your BIG tokens to addresses or wallets on other blockchains will result in their decentralized loss. Always ensure you are using a wallet compatible with the BigFile network.
              </p>
            </Faq>
          </FaqSection>
        </section>

        <LinkCardsSection
          className="mb-20 md:mb-30 mt-30 md:mt-40"
          title="Get familiar with the BigFile"
          cards={[
            {
              label: "Blogs",
              href: "https://bigfile.medium.com/",
            },
            {
              label: "BigFile Community",
              href: "/community",
            },
            {
              label: "Dev docs",
              href: "/docs/current/home",
            },
            {
              label: "BigFile dapps",
              href: "/ecosystem",
            },
          ]}
        />
      </main>
    </Layout>
  );
}

export default InternetIdentityPage;
