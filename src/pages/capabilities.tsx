import Link from "@docusaurus/Link";
import RightPointer from "@site/static/img/svgIcons/rightPointer.svg";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import ShareMeta from "../components/Common/ShareMeta/ShareMeta";

const SplitCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  imageSideClassName?: string;
  contentSideClassName?: string;
  image: React.ReactNode;
  imageSide: "left" | "right";
}> = ({
  className,
  children,
  image,
  imageSide,
  imageSideClassName,
  contentSideClassName,
}) => {
  return (
    <AnimateSpawn
      className={clsx(
        "bg-white-50 rounded-xl overflow-hidden flex flex-col md:flex-row items-start",
        imageSide === "right"
          ? "flex-row"
          : "flex-col-reverse md:flex-row-reverse",
        className
      )}
      variants={transitions.container}
    >
      <div
        className={clsx(
          "flex-[4] p-6 md:p-16",
          imageSide === "right" ? "md:pr-0" : "md:pl-0",
          contentSideClassName
        )}
      >
        {children}
      </div>
      <motion.div
        className={clsx("flex-[6] self-center text-[0px]", imageSideClassName)}
        variants={transitions.fadeIn}
      >
        {image}
      </motion.div>
    </AnimateSpawn>
  );
};

const SingleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "bg-white-50" }) => {
  return (
    <AnimateSpawn
      className={clsx("rounded-xl overflow-hidden p-6 md:p-16", className)}
      variants={transitions.container}
    >
      {children}
    </AnimateSpawn>
  );
};

interface CardData {
  title: string;
  description: string;
  image: string;
  href: string | null;
  refText: string | null;
  imageSide: "right" | "left";
}

const SmallCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  href: string;
}> = ({ children, className = "bg-white-50", href }) => {
  return (
    <AnimateSpawn variants={transitions.container}>
      <Link
        className={clsx(
          "rounded-xl overflow-hidden p-6 md:p-8 hover:no-underline hover:text-black translate-y-0 hover:-translate-y-3 transition-transform text-black h-full block",
          className
        )}
        href={href}
      >
        {children}
      </Link>
    </AnimateSpawn>
  );
};

const cardsData: CardData[] = [
  {
    title: "Serve the web directly from smart contracts.",
    description:
      "BigFile is a blockchain with Cube smart contracts that can provide web services by processing HTTP requests. This enables 100% of online services to be run directly from the blockchain, ensuring full decentralization.",
    image: "/img/features/serve-web.webp",
    href: null,
    refText: null,
    imageSide: "right",
  },
  {
    title: "Connect Web2 and Web3 without oracles",
    description:
      "Until now, blockchains had to rely on expensive and slow oracles to read from off-chain data sources. BigFile smart contracts can directly connect to Web2 APIs, rendering oracles obsolete. This opens up countless possibilities, such as sending emails, push notifications, fetching digital asset or fiat prices, and much more—directly from the blockchain.",
    image: "/img/features/no-oracles-image.webp",
    href: "/https-outcalls",
    refText: "About HTTPS outcalls",
    imageSide: "left",
  },
  {
    title: "Googleable smart contracts.",
    description:
      "Search engines like Google can’t index smart contracts running on other blockchains. Developers are often forced to use centralized cloud providers to host frontends, making them at least somewhat searchable—a compromise. BigFile, however, hosts smart contracts that can be directly indexed by all popular search engines. No need for frontends on public clouds. This is how true Web3 works.",
    image: "/img/features/seo-image.webp",
    href: "https://forum.thebigfile.com/t/seo-support-for-fully-on-chain-websites-built-on-bigfile/25",
    refText: "Read the blog",
    imageSide: "right",
  },
  {
    title: "The brain of the BigFile",
    description:
      "The BigFile is governed by a fully on-chain, permissionless system that regularly upgrades the protocol according to the intentions of BIG token holders, as expressed through their votes.",
    image: "/img/features/nns-image.webp",
    href: "/fms",
    refText: "Participate in BigFile governance",
    imageSide: "right",
  },
  {
    title: "Turn any Web3 service into a DAO",
    description:
      "The BigFile allows developers to turn their dapps into a DAO to achieve full decentralization — 100% on-chain",
    image: "/img/features/sns-image.webp",
    href: "/",
    refText: "Overview of BigFile DAOs",
    imageSide: "left",
  },
];



const smallCardsData = [
  {
    title: "Chain-Key Cryptography",
    description:
      "BigFile employs a suite of advanced cryptographic mechanisms, collectively known as chain-key cryptography, enabling BIG to achieve functionalities and scalability that are unattainable on other blockchains.",
    href: "/how-it-works#Chain-key-technology",
  },
  {
    title: "Concurrent Execution",
    description: `Powered by BIG's asynchronous communication, "actor" smart contracts run in parallel, enabling horizontal scaling and preventing reentrancy attacks, such as the infamous DAO attack.`,
    href: "/capabilities/actor-model",
  },
  {
    title: "Heartbeats",
    description: `On other blockchain networks, smart contract computations can only be triggered by submitting a new transaction. In contrast, BigFile allows cube smart contracts to be configured for automatic invocation by the blockchain itself at specified block intervals.`,
    href: "/capabilities/daemon-contracts",
  },
  {
    title: "Multi-block Transactions",
    description: `Smart contract calls (TXs) can be long-running and span multiple blocks, eliminating the tedious "round gas limit" present on most blockchains. This simplification of smart contract programming unlocks new use cases.`,
    href: "/capabilities/multi-block-transactions",
  },
  {
    title: "WebAssembly (Wasm)",
    description: `Write cube smart contracts in any language that compiles to Wasm. SDKs are available for Motoko, Rust, TypeScript, Python, and C++, but you can also use any other language that compiles to Wasm.`,
    href: "/capabilities/webassembly",
  },
  {
    title: "Subnets & infinite scalability",
    description: `The BigFile incorporates a novel subnet architecture
  that enables infinite scalability, making 100% on-chain
  mass-market Web3 services possible. No cloud servers needed.`,
    href: "/capabilities/limitless-scaling",
  },
];

function FeaturesPage() {
  return (
    <Layout
      title="BigFile capabilities"
      description="The BigFile is 'alien tech' crypto. It extends the
    internet by smashing through historical limitations, unlocking new capabilities
    for Web3 and the world..."
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-features.jpg"></ShareMeta>

      <main className="text-black relative overflow-hidden">
        <AnimateSpawn
          variants={transitions.container}
          el={motion.section}
          className="overflow-hidden"
        >
          <div className="container-10 pt-12 mb-40 md:mb-60 md:pt-30 relative">
            <div className="md:w-7/10 lg:w-6/10">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-6"
                variants={transitions.item}
              >
                BigFile capabilities
              </motion.h1>
              <motion.p
                className="tw-lead-sm md:tw-lead mb-0"
                variants={transitions.item}
              >
                BigFile (BIG) is an open and secure AI-powered blockchain network capable of hosting programs, files, data, and Big Data in the form of smart contracts. It securely performs computations on smart contracts and offers infinite scalability.
              </motion.p>
            </div>
          </div>
        </AnimateSpawn>
        <AnimateSpawn
          className="container-10 text-white relative mb-32 md:mb-20"
          el={motion.section}
          variants={transitions.container}
        >
          <motion.div
            variants={transitions.fadeIn}
            className="
              z-[-1]
              blob
              blob-purple 
              blob-md md:blob-lg
              blob-center
            "
          ></motion.div>
          <div className="md:w-6/10 mx-auto text-center">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-3 md:mb-6"
              variants={transitions.item}
            >
              Web experience
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-0"
              variants={transitions.item}
            >
              The BigFile integrates several innovations to deliver web experiences that are often indistinguishable from Web2 — all powered directly by the blockchain.{" "}
            </motion.p>
          </div>
        </AnimateSpawn>
        <section className="container-12 grid md:grid-cols-2 gap-5">
          {cardsData.slice(0, 2).map((card, index) => (
            <SplitCard
              className="md:col-span-2"
              key={index}
              imageSide={card.imageSide}
              image={<img src={card.image} alt="" loading="lazy"></img>}
            >
              <motion.h3
                className="tw-heading-4 md:tw-heading-3 mb-4"
                variants={transitions.item}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="tw-paragraph md:tw-lead-sm mb-0 text-black-60 mb-6"
                variants={transitions.item}
              >
                {card.description}
              </motion.p>
              {card.refText && card.href && (
                <motion.p className="mb-0" variants={transitions.item}>
                  <Link
                    href={card.href}
                    className="tw-heading-6 flex gap-2 items-center"
                  >
                    <RightPointer className="w-6 h-6"></RightPointer>
                    {card.refText}
                  </Link>
                </motion.p>
              )}
            </SplitCard>
          ))}
          <SingleCard className="bg-gradient-100 from-[#0E031F] to-[#281447] text-white relative pb-52">
            <img
              src="/img/features/astronaut-image.webp"
              alt=""
              className="absolute w-[194px] bottom-0 right-20 z-0"
              loading="lazy"
            />
            <img
              src="/img/features/astronaut-bg.svg"
              alt=""
              className="absolute w-[512px] -bottom-1/2 -right-10 z-0"
            />
            <div className="relative">
              <motion.h3
                variants={transitions.item}
                className="tw-heading-4 md:tw-heading-3 mb-4 "
              >
                BIG ID — Web3 auth using WebAuthn
              </motion.h3>
              <motion.p
                className="tw-paragraph md:tw-lead-sm  mb-6 text-white-80"
                variants={transitions.item}
              >
                The BigFile blockchain has replaced the traditional username and password model with a more advanced and secure method of cryptographic authentication. This approach is not only more convenient but also works seamlessly across all of a user's devices and enhances privacy. It is based on the W3C's Web Authentication (WebAuthn) standard, utilizing hardware-based key protection for users.
              </motion.p>
              <motion.p className="mb-0" variants={transitions.item}>
                <Link
                  href="/big-id"
                  className="tw-heading-6 flex gap-2 items-center text-white hover:text-white-60 hover:no-underline"
                >
                  <RightPointer className="w-6 h-6"></RightPointer>
                  Wallet on BigFile
                </Link>
              </motion.p>
            </div>
          </SingleCard>
          <SingleCard>
            <motion.h3
              variants={transitions.item}
              className="tw-heading-4 md:tw-heading-3 mb-4 "
            >
              Breakthrough performance
            </motion.h3>
            <motion.p
              className="tw-paragraph md:tw-lead-sm text-black-60 mb-12"
              variants={transitions.item}
            >
              Low latency and high throughput are the two most important metrics for measuring performance, and BigFile excels in both. Unlike most blockchains, BIG has no theoretical maximum for transactions per second (TX/s). Throughput scales horizontally with each added subnet, similar to how cloud computing scales with added machines. Smart contracts on different subnets can always communicate with each other, without being bottlenecked by the growing number of subnets.
            </motion.p>

            
          </SingleCard>
          {cardsData.slice(2, 3).map((card, index) => (
            <SplitCard
              key={index}
              className="md:col-span-2"
              imageSide={card.imageSide}
              image={<img src={card.image} alt="" loading="lazy"></img>}
            >
              <motion.h3
                className="tw-heading-4 md:tw-heading-3 mb-4"
                variants={transitions.item}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="tw-paragraph md:tw-lead-sm mb-0 text-black-60 mb-6"
                variants={transitions.item}
              >
                {card.description}
              </motion.p>
              {card.refText && card.href && (
                <motion.p className="mb-0" variants={transitions.item}>
                  <Link
                    href={card.href}
                    className="tw-heading-6 flex gap-2 items-center"
                  >
                    <RightPointer className="w-6 h-6"></RightPointer>
                    {card.refText}
                  </Link>
                </motion.p>
              )}
            </SplitCard>
          ))}

          <SingleCard>
            <motion.h3
              variants={transitions.item}
              className="tw-heading-4 md:tw-heading-3 mb-4 "
            >
              100% On-Chain: No Cloud Required
            </motion.h3>
            <motion.p
              className="tw-paragraph md:tw-lead-sm text-black-60 mb-0"
              variants={transitions.item}
            >
              The BigFile offers a comprehensive tech stack for developers to build on. It can host online services and games entirely on-chain, without ever relying on centralized cloud providers. This ensures complete decentralization and eliminates single points of failure.
            </motion.p>
          </SingleCard>

          <SingleCard>
            <motion.h3
              variants={transitions.item}
              className="tw-heading-4 md:tw-heading-3 mb-4 "
            >
              Reverse Gas Model
            </motion.h3>
            <motion.p
              className="tw-paragraph md:tw-lead-sm text-black-60 mb-4"
              variants={transitions.item}
            >
              One of the major hurdles to blockchain adoption for end users is having to buy and hold tokens to interact with the blockchain to pay for gas fees. Developers charge up their smart contracts with cycles (the BIG analogue to gas), so users don’t have to pay when interacting with the smart contracts. This removes a major barrier of entry for end users.
            </motion.p>

            <motion.p className="mb-0" variants={transitions.item}>
              <Link
                href="/capabilities/reverse-gas"
                className="tw-heading-6 flex gap-2 items-center"
              >
                <RightPointer className="w-6 h-6"></RightPointer>
                More on the Reverse Gas Model
              </Link>
            </motion.p>
          </SingleCard>
        </section>


        
        <AnimateSpawn
          className="container-10 text-white relative mb-20 mt-44  md:mt-56"
          el={motion.section}
          variants={transitions.container}
        >
          <motion.div
            variants={transitions.fadeIn}
            className="
              z-[-1]
              blob
              blob-infinite 
              blob-lg
              blob-center
            "
          ></motion.div>
          <div className="md:w-6/10 mx-auto text-center">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-3 md:mb-6"
              variants={transitions.item}
            >
              Streamlining Bureaucracy with BigFile
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-0"
              variants={transitions.item}
            >
              BigFile is developing a blockchain and AI-powered solution for the increasingly complex bureaucratic processes. Bureaucracy is a broad field with various categories, and instead of creating separate solutions for each, BigFile offers a single, comprehensive solution aimed at eliminating the complexities of bureaucratic procedures.
            </motion.p>
          </div>
        </AnimateSpawn>

        <section className="container-12 grid md:grid-cols-2 gap-5">
          <SplitCard
            imageSide="right"
            imageSideClassName="text-center"
            image={
              <img
                src="/img/features/bureaucracy.webp"
                alt=""
                className="my-10 h-[150px] md:h-[280px] aspect-[708/420]"
                loading="lazy"
              ></img>
            }
            className="md:col-span-2 text-white bg-[url(/img/features/bitcoin-bg-mobile.webp)] md:bg-[url(/img/features/bitcoin-bg.webp)] bg-stretch md:bg-cover"
          >
            <motion.h3
              className="tw-heading-4 md:tw-heading-3 mb-4 "
              variants={transitions.item}
            >
              Streamlining Bureaucracy with BigFile
            </motion.h3>
            <motion.p
              className="tw-paragraph md:tw-lead-sm mb-6 "
              variants={transitions.item}
            >
              The AI-supported BigFile Blockchain Project aims to eliminate the challenging and time-consuming paperwork and bureaucratic transactions between countries, institutions, and individuals. It is a document management and transfer solution specifically developed for a decentralized blockchain, designed to simplify your life by combining the power of artificial intelligence and blockchain technologies.
            </motion.p>
            <motion.p className="mb-0" variants={transitions.item}>
              <Link
                href="https://forum.thebigfile.com/t/streamlining-bureaucracy-with-bigfile/26"
                className="tw-heading-6 flex gap-2 items-center text-white hover:text-white-60 hover:no-underline"
              >
                <RightPointer className="w-6 h-6"></RightPointer>
                How Bureaucracy integration works?
              </Link>
            </motion.p>
          </SplitCard>
        </section>

        <AnimateSpawn
          className="container-10 text-white relative mb-15 mt-48 md:mt-56"
          el={motion.section}
          variants={transitions.container}
        >
          <motion.div
            variants={transitions.fadeIn}
            className="
              z-[-1]
              blob
              blob-purple 
              blob-md md:blob-lg
              blob-center
            "
          ></motion.div>
          <div className="md:w-6/10 mx-auto text-center">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-3 md:mb-6"
              variants={transitions.item}
            >
              Democracy on the blockchain
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-0"
              variants={transitions.item}
            >
              DAOs are the future of the digital economy and a fundamental component of BigFile.
            </motion.p>
          </div>
        </AnimateSpawn>
        <section className="container-12 grid md:grid-cols-2 gap-5">
          {cardsData.slice(3, 5).map((card, index) => (
            <SplitCard
              className="md:col-span-2"
              key={index}
              imageSide={card.imageSide}
              imageSideClassName={
                card.image === "/img/features/sns-image.webp"
                  ? "relative w-full min-h-[50vw] sm:min-h-[20vh] md:min-h-0 md:h-full overflow-hidden"
                  : null
              }
              image={
                <img
                  className={
                    card.image === "/img/features/sns-image.webp"
                      ? "px-6 w-[550px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      : null
                  }
                  src={card.image}
                  alt=""
                  loading="lazy"
                ></img>
              }
            >
              <motion.h3
                className="tw-heading-4 md:tw-heading-3 mb-4"
                variants={transitions.item}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="tw-paragraph md:tw-lead-sm mb-0 text-black-60 mb-6"
                variants={transitions.item}
              >
                {card.description}
              </motion.p>
              {card.refText && card.href && (
                <motion.p className="mb-0" variants={transitions.item}>
                  <Link
                    href={card.href}
                    className="tw-heading-6 flex gap-2 items-center"
                  >
                    <RightPointer className="w-6 h-6"></RightPointer>
                    {card.refText}
                  </Link>
                </motion.p>
              )}
            </SplitCard>
          ))}
        </section>

        <AnimateSpawn
          className="container-10  relative mb-6 md:mb-10 mt-30 md:mt-40"
          el={motion.section}
          variants={transitions.container}
        >
          <motion.div
            variants={transitions.fadeIn}
            className="
              z-[-1]
              blob md:hidden
              blob-infinite 
              blob-sm
              blob-top-right
            "
          ></motion.div>
          <div className="md:w-5/10">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-4 md:mb-8"
              variants={transitions.item}
            >
              Innovative Protocol Features
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-0"
              variants={transitions.item}
            >
              Countless innovations in cryptography and distributed computing were essential to create the first true BigFile. Here are a few of our favorites.
            </motion.p>
          </div>
        </AnimateSpawn>
        <section className="container-12 grid sm:grid-cols-2 md:grid-cols-3 gap-5 relative">
          <motion.div
            variants={transitions.fadeIn}
            className="
              z-[-1]
              hidden md:block
              blob
              blob-infinite 
              blob-sm
              blob-top-right
            "
          ></motion.div>
          {smallCardsData.map((card, index) => (
            <SmallCard key={index} href={card.href}>
              <h3 className="tw-heading-6 md:tw-heading-5 mb-3">
                {card.title}
              </h3>
              <p className="tw-paragraph-sm md:tw-paragraph text-black-60 mb-0">
                {card.description}
              </p>
            </SmallCard>
          ))}
        </section>
        <AnimateSpawn
          className="container-10 text-white relative my-44 md:my-56"
          el={motion.section}
          variants={transitions.container}
        >
          <motion.div
            variants={transitions.fadeIn}
            className="
              z-[-1]
              blob
              blob-purple 
              blob-md md:blob-lg
              blob-center
            "
          ></motion.div>
          <div className="md:w-6/10 mx-auto text-center">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-3 md:mb-6"
              variants={transitions.item}
            >
              Take a tech dive
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-6"
              variants={transitions.item}
            >
              Discover the inner workings of the BigFile blockchain through easy-to-read tech articles covering the core protocol, governance, chain-key cryptography, chain-key signatures, and more. Explore open-source repositories, in-depth white papers, and additional resources.
            </motion.p>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-0"
              variants={transitions.item}
            >
              <Link className="button-white" href="/how-it-works">
                How BigFile works
              </Link>
            </motion.p>
          </div>
        </AnimateSpawn>
      </main>
    </Layout>
  );
}

export default FeaturesPage;
