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
      title="BIG Wallet"
      description="BIG Wallet on BigFile redefines user experiences by removing friction from the authentication journey and enabling data sovereignty."
    >
      <ShareMeta image="/img/shareImages/share-internet-identity.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        <section className="bg-infinite text-white pt-20" ref={heroRef}>
          {bgDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}

          <div className="container-10 pt-20 pb-12 sm:pb-0 md:pb-40 md:pt-36 relative">
            <div className="blob blob-white blob-xl md:blob-xl md:blob-x-8 md:blob-y-10 opacity-100"></div>
            <motion.h1
              className="tw-heading-3 md:tw-heading-2 mb-2 md:mb-6 md:w-8/10"
              variants={transitions.item}
            >
              A fully decentralized digital identity solution for the future.
            </motion.h1>
            <div className="relative  md:w-5/10">
              <motion.p
                className="tw-lead-sm md:tw-lead mb-8"
                variants={transitions.item}
              >
                BIG Wallet redefines user experiences by eliminating friction in the authentication process and empowering data sovereignty.
              </motion.p>
              <motion.p className="mb-0" variants={transitions.item}>
                <Link
                  className="link-white link-with-icon"
                  href="/docs/current/references/big-wallet-spec/"
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
                src="/img/big-wallet/big-wallet-hero.webp"
                alt="Start building on BIG Wallet"
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
              Harness the full potential of digital identity
            </motion.h2>
          </AnimateSpawn>
        </section>

        <section className="container-12 pt-20 md:pt-30">
          <div className="flex flex-col gap-16 md:gap-40">
            <TranslatedLayout
              imageUrl="/img/big-wallet/image-1.webp"
              reverse={true}
            >
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                100% decentralized
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-0">
              BIG Wallet is fully decentralized, as apps built on BigFile store data entirely on-chain. This makes it more secure and fault-tolerant than digital identity solutions hosted on protocols that rely on centralized cloud providers like Amazon Web Services.
              </p>
            </TranslatedLayout>
            <TranslatedLayout imageUrl="/img/big-wallet/image-2.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                User friendly
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-0">
              Instead of using passwords to sign in, users simply unlock their devices with FaceID, TouchID, or passcodes to access their accounts. By unlocking their devices, they authorize the use of a passkey. Built on standardized technology, passkeys make BIG Wallet more convenient than traditional authentication methods.
              </p>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/big-wallet/image-3.webp"
              reverse={true}
            >
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Enhanced security
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-0">
              BIG Wallet eliminates the need for apps to store passwords in a database. When a user creates a BIG Wallet, they are automatically assigned a public and private key pair. The private key is securely locked in a tamper-proof chip on the user's device, ensuring that it cannot be retrieved by anyone.
              </p>
            </TranslatedLayout>

            <TranslatedLayout imageUrl="/img/big-wallet/image-4.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Strict privacy
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-0">
              Each time a user creates an account with an app using BIG Wallet, a unique key pair is generated and managed specifically for that app. This ensures that users can interact with the app without worrying about their data being shared.
              </p>
            </TranslatedLayout>
            
            <TranslatedLayout imageUrl="/img/big-wallet/image-3.webp"
            reverse={true}
            >
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Easy integration
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-3 md:mb-6">
              BIG Wallet seamlessly integrates with both Web2 and Web3 apps, deploying cube smart contracts to request authentication and verify user identities.
              </p>
              <p className="mb-0">
                <Link
                  href="/docs/current/developer-docs/integrations/big-wallet/integrate-identity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary"
                >
                  <LinkArrowRight />
                  Integrate BIG Wallet
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
                Identity solutions for a new era
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
                  src="/img/big-wallet/seamless-authentication.webp"
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
                  BIG Wallet is built on WebAuthN, a global authentication standard. It eliminates the need for usernames and passwords by replacing them with passkeys—registered devices like smartphones, laptops, or hardware wallets such as YubiKey or Ledger. To authenticate their identity, users simply connect with BIG Wallet and unlock their device.
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
                  src="/img/big-wallet/icon-3.svg"
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
                  src="/img/big-wallet/icon-4.svg"
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
                  src="/img/big-wallet/icon-1.svg"
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
                  src="/img/big-wallet/icon-2.svg"
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
                  src="/img/big-wallet/icon-5.svg"
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
                  src="/img/big-wallet/icon-6.svg"
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
                  src="/img/big-wallet/icon-7.svg"
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
                  src="/img/big-wallet/icon-8.svg"
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
                  Find answers to commonly asked questions about BIG Wallet.
                </p>
              </div>
            }
          >
            <Faq title="What’s the problem with Web2 authentication?">
              <p>
              Websites typically store usernames and passwords in a database. When a user logs in, their device sends the password to the website, which then checks it against its records. However, databases are increasingly vulnerable to breaches. While encrypting passwords adds an extra layer of security, storing them as plaintext is a poor practice.
              </p>
              <p>
              To make matters worse, user-generated passwords are often easily hackable. Cybercriminals have an array of tools at their disposal, including spyware, phishing, and brute force attacks, where algorithms use trial and error to guess the correct combination of letters, numbers, and symbols.
              </p>
            </Faq>
            <Faq title="What are the challenges with Web3 authentication?">
              <p>
              Web3 authentication may appear to be a step forward, but users remain vulnerable due to reliance on a single authentication factor. For example, keys are typically stored on the same device where the crypto wallet is installed. If someone steals or gains access to that device, the user loses control of their wallet.
              </p>
            </Faq>
            <Faq title="What exactly is public key cryptography?">
              <p>
              Public key cryptography is an encryption method that utilizes a pair of keys to securely encrypt and decrypt messages between two parties. The public key functions like a username and can be shared openly, while the private key, much like a password, must be kept secret.
              </p>
              <p>
              BIG Wallet leverages digital signatures, an application of public key cryptography, for the login process. To start, an app sends an authentication request to the user's device. The device takes the request and creates a digital signature using their private key and a cryptographic algorithm. The app then verifies the signature using the user's public key and approves the request.
              </p>
            </Faq>
            <Faq title="What ensures the security of BIG Wallet?">
              <p>
              Most modern computing devices contain a TPM (Trusted Platform Module) chip. One of the functions of a TPM chip is storing sensitive information, which in BIG Wallet's case is a copy of a user's private key. When BIG Wallet prompts the user to unlock their device, either by entering a PIN code or using biometrics such as fingerprint  recognition, the TPM chip creates a new digital signature using their private key.
              </p>
              <p>
              The user's private key is highly secure due to the virtually impenetrable TPM chip. This chip is embedded in the device's motherboard, and any attempt to tamper with it can result in irreparable damage.
              </p>
            </Faq>
            <Faq title="What makes BIG Wallet private?">
              <p>
              In Web2 authentication, a username is typically linked to an email address, which big tech companies use as a unique identifier to track a user's activity. While transparency is a core principle of blockchain technology in Web3, it also allows anyone to trace the transactions of an individual wallet address using a block explorer.
              </p>
              <p>
              Cryptographic pseudonyms are digital identities that protect a user's privacy online. They have a wide range of applications, from messaging apps to social media platforms and Web3 dapps. With BIG Wallet, a new pseudonym is generated each time a user logs in, ensuring that apps cannot track their activity.
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
              label: "BigFile community events",
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
