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
    title: "Decentralized Data Storage",
    description:
      "BigFile offers the perfect solution for permanent, secure, and scalable file storage. With immutable data, bundling for efficient uploads, and self-sovereignty through decentralized gateways, BigFile provides a long-term answer to your file storage needs—whether for business, personal use, or critical data preservation.",
    image: "/img/features/serve-web.webp",
    href: null,
    refText: null,
    imageSide: "right",
  },
  {
    title: "Oracle and Blockchain Data",
    description:
      "Cross-Chain and Modular Integration: As blockchain ecosystems become more interconnected, BigFile provides robust cross-chain functionality, enabling oracles and DeFi applications to seamlessly exchange data with Ethereum, Solana, and other major chains. Its modular design ensures smooth integration with diverse blockchain systems, granting access to BigFile’s data while delivering top-tier performance and security.",
    image: "/img/features/no-oracles-image.webp",
    href: "/",
    refText: null,
    imageSide: "left",
  },
  {
    title: "Sites and Apps",
    description:
      "Web applications and static sites can be seamlessly deployed to the permaweb, ensuring they remain accessible and unaltered indefinitely for a low, one-time hosting fee. This solution is ideal for decentralized applications, archive websites, educational resources, and legacy projects, offering long-term availability without the burden of ongoing maintenance costs.",
    image: "/img/features/seo-image.webp",
    href: "https://forum.thebigfile.com/t/sites-and-apps-management-in-bigfile-blockchain-network/42",
    refText: "Read the Forum",
    imageSide: "right",
  },
  {
    title: "The brain of the BigFile",
    description:
      "The BigFile is governed by a fully on-chain, permissionless system that regularly upgrades the protocol according to the intentions of BIG token holders, as expressed through their votes.",
    image: "/img/features/nns-image.webp",
    href: "/",
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
    title: "Permanent Data Storage",
    description:
      "BigFile introduces a pay once, enjoy forever model, enabling users to securely store data permanently without recurring fees. This decentralized and permanent storage solution eliminates the need for subscriptions or renewals, making it ideal for archiving data, safeguarding legal documents, preserving academic research, and storing personal or corporate files long-term.",
    href: "/how-it-works#Chain-key-technology",
  },
  {
    title: "Blockweave Structure",
    description: `BigFile leverages the innovative Blockweave structure, a distributed data storage mechanism inherited and further enhanced from Arweave. Unlike traditional blockchain architectures that require nodes to verify the entire chain, Blockweave optimizes this process by requiring nodes to validate only specific parts of the network. This approach significantly reduces resource consumption and improves the efficiency of data storage and retrieval processes.`,
    href: "",
  },
  {
    title: "Proof of Access (PoA)",
    description: `Proof of Access (PoA) is the core consensus mechanism that powers the BigFile network. Designed to ensure data integrity and security, PoA validates the storage and accessibility of data across the network. Unlike traditional Proof of Work (PoW) systems that prioritize computational power for mining new blocks, PoA requires miners to prove they can access specific data from previous blocks in the network, thus guaranteeing the continuity and integrity of the stored data.`,
    href: "",
  },
  {
    title: "Gateway Architecture",
    description: `BigFile’s Gatewsay Architecture introduces a new paradigm for scalability and specialization in decentralized networks. Inspired by traditional cloud computing’s horizontal scaling model, subnets allow the network to grow by creating smaller, specialized blockchains within the broader BigFile ecosystem. Each gateway operates semi-independently, while still being interconnected with the main BigFile chain, enabling tailored use cases and optimized performance.`,
    href: "",
  },
  {
    title: "Neural Mining",
    description: `BigFile's innovative Neural Mining mechanism combines artificial intelligence (AI) and blockchain technology to create an advanced ecosystem that goes beyond traditional data storage and verification. Neural Mining leverages GPU-based mining infrastructure to provide high computational power for AI applications and the operation of large language models (LLMs) in a decentralized framework.`,
    href: "/decentralized-ai",
  },
  {
    title: "Energy Efficiency & Sustainability",
    description: `BigFile adopts an eco-conscious approach by integrating energy-optimized technologies and sustainable infrastructure. Building upon the energy-efficient Blockweave structure inherited from Arweave, BigFile enables both individuals and businesses to minimize their environmental impact.`,
    href: "/capabilities/sustainability",
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
                BigFile is an AI-powered decentralized blockchain network engineered to provide decentralized, immutable, and scalable data storage solutions. It is designed to securely host applications, files, and Big Data, while facilitating computations on smart contracts at unparalleled scalability.
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
              Permanent and Decentralized
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-0"
              variants={transitions.item}
            >
              BigFile integrates cutting-edge innovations to revolutionize web experiences with the power of blockchain and AI.
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
                BigDrive — The On-chain Permanent File Storage
              </motion.h3>
              <motion.p
                className="tw-paragraph md:tw-lead-sm  mb-6 text-white-80"
                variants={transitions.item}
              >
                Streamline your digital world with BigDrive: the app that simplifies file management and inspires creativity with its pay-once, enjoy-forever model. Rethink your approach to cloud storage—because true decentralized demands a new way forward.
              </motion.p>
              <motion.p className="mb-0" variants={transitions.item}>
                <Link
                  href="/bigdrive"
                  className="tw-heading-6 flex gap-2 items-center text-white hover:text-white-60 hover:no-underline"
                >
                  <RightPointer className="w-6 h-6"></RightPointer>
                  Get Started
                </Link>
              </motion.p>
            </div>
          </SingleCard>
          <SingleCard>
            <motion.h3
              variants={transitions.item}
              className="tw-heading-4 md:tw-heading-3 mb-4 "
            >
              Decentralized Social Platforms
            </motion.h3>
            <motion.p
              className="tw-paragraph md:tw-lead-sm text-black-60 mb-12"
              variants={transitions.item}
            >
              Most social platforms share users' IP addresses with governments, privacy-focused apps rely on centralized servers, and few grant users full ownership of their data or the freedom to transfer it elsewhere. In an age where data ownership and censorship are critical concerns, it's time for social applications to harness the immutable and censorship-resistant power of decentralized technology.
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
              Fully On-Chain: Say Goodbye to the Cloud
            </motion.h3>
            <motion.p
              className="tw-paragraph md:tw-lead-sm text-black-60 mb-0"
              variants={transitions.item}
            >
              BigFile delivers a full-stack solution for developers to build decentralized online services and games. By operating entirely on-chain without any reliance on centralized cloud providers, BigFile ensures true decentralization, enhanced security, and resilience against single points of failure.
            </motion.p>
          </SingleCard>

          <SingleCard>
            <motion.h3
              variants={transitions.item}
              className="tw-heading-4 md:tw-heading-3 mb-4 "
            >
              Web3 Gaming and NFTs
            </motion.h3>
            <motion.p
              className="tw-paragraph md:tw-lead-sm text-black-60 mb-4"
              variants={transitions.item}
            >
              In the world of NFTs and gaming, creators and players demand permanence and reliability. BigFile provides the foundation for unruggable digital assets, offering unparalleled solutions for NFT storage and gaming infrastructure. Whether you're building an NFT marketplace, minting atomic assets, or creating immersive gaming worlds, BigFile ensures tamper-proof, cost-effective, and accessible digital creations.
            </motion.p>

            <motion.p className="mb-0" variants={transitions.item}>
              <Link
                href="/nft"
                className="tw-heading-6 flex gap-2 items-center"
              >
                <RightPointer className="w-6 h-6"></RightPointer>
                More on the Web3 & NFTs
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
                href="https://forum.thebigfile.com/t/streamlining-bureaucracy-with-bigfile/41"
                className="tw-heading-6 flex gap-2 items-center text-white hover:text-white-60 hover:no-underline"
              >
                <RightPointer className="w-6 h-6"></RightPointer>
                How Bureaucracy integration works?
              </Link>
            </motion.p>
          </SplitCard>
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
              Explore the Blockchain of Tomorrow
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-6"
              variants={transitions.item}
            >
              Gain a deeper understanding of the BigFile blockchain with comprehensive technical articles detailing the BigFile Protocol and its groundbreaking features. Explore open-source repositories, in-depth technical documentation, and a vast array of resources to empower your development journey.
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
