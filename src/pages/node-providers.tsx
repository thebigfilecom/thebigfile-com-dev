import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";
import ShareMeta from "../components/Common/ShareMeta";
import TranslatedLayout from "../components/Common/TranslatedLayout/TranslatedLayout";
import Stats from "../components/Common/Stats";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";

const queryClient = new QueryClient();

const LazyMap = React.lazy(() => import("../components/NodeProvidersPage/Map"));

function NodeProvidersPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    setShowMap(true);
  }, []);

  return (
    <Layout
      title="Node providers"
      description="The BigFile is hosted by a decentralized collection of node machines — physical hardware devices run by independent node providers distributed across data centers globally"
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-node-providers-2.jpg"></ShareMeta>

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
                Sovereign network
              </motion.h1>
              <motion.p
                className="tw-lead-sm md:tw-lead mb-8"
                variants={transitions.item}
              >
                The BigFile is powered by a decentralized network of node machines — physical hardware devices operated by independent providers across global data centers.
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
              src="/img/node-providers/hero.webp"
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
          <div className="md:w-5/10">
            <motion.h2
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-3 mb-3 md:mb-6 text-gradient"
              variants={transitions.item}
            >
              Traditional cloud relies on a single private entity. The BigFile relies on public utility and autonomous governance.
            </motion.h2>
          </div>
        </AnimateSpawn>
        <section className=" container-12 mt-20 md:mt-40">
          <div className="text-center md:w-8/12 md:mx-auto mb-12">
            <h2 className="tw-heading-3 md:tw-heading-60 mb-4 md:mb-6">
              Decentralized computing{" "}
            </h2>
            <p className="tw-paragraph md:tw-lead-sm mb-4 md:mb-6">
            The BigFile blockchain operates on a network of nodes owned and managed by an expanding community of independent providers distributed worldwide. These node providers are carefully selected and vetted by the NNS.{" "}
            </p>
            <p className="mb-0">
              <Link
                className="link-primary link-with-icon"
                href="https://dashboard.thebigfile.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get more data on the dashboard
                <LinkArrowUpRight />
              </Link>
            </p>
          </div>
          
        </section>
        <section className="mb-20 md:mb-40 container-12 flex flex-col gap-16 md:gap-40 mt-20 md:mt-40">
          <TranslatedLayout
            reverse={true}
            imageUrl="/img/node-providers/sovereign-nodes.webp"
          >
            <h2 className="tw-heading-3 md:tw-heading-60 md:mb-6">
              Independent machines
            </h2>
            <p className="tw-lead-sm mb-6 md:mb-10">
            Each node on the BigFile is a dedicated physical server known as a node machine. To ensure true decentralization, each node machine is operated by an independent provider, typically within a data center. This network of nodes is sovereign, free from reliance on corporate cloud services, making it immune to being switched off or tampered with.
            </p>
            <p className="tw-lead-sm mb-6 md:mb-10">
            Unlike other blockchains, where nodes are simply software instances easily spun up on centralized cloud platforms, BigFile's node machines are technically sovereign. They are built to standardized public hardware specifications, designed to maintain performance under load, and ensure no lag within the same subnet blockchain.
            </p>
            <p className="mb-0">
              <Link
                href="https://wiki.thebigfile.com/wiki/Sovereign_Network"
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary link-with-icon"
              >
                <LinkArrowRight />
                About creating a sovereign network
              </Link>
            </p>
          </TranslatedLayout>
          <TranslatedLayout imageUrl="/img/node-providers/node-providers-join.webp">
            <h2 className="md:tw-heading-60 md:mb-6">Node Providers</h2>
            <p className="tw-lead-sm mb-6 md:mb-10">
            To maintain the network's decentralization, each node provider is vetted and approved by token holders through the NNS, the DAO that governs the BigFile. Becoming a node provider requires submitting a proposal along with a self-declaration document detailing the provision of node machines, intent, and proof of identity. Based on this information, the community votes on the onboarding proposal.
            </p>
            <p className="tw-lead-sm mb-6 md:mb-10">
            Once accepted into the community and their node machines are operational, node providers receive rewards for their services. These rewards, determined by the NNS DAO, are based on the 30-day average price of BIG and are distributed on the 30th of each month. The NNS DAO calculates rewards based on three primary factors: hardware generation (Gen 1 or Gen 2), geographic location, and the total number of nodes operated.
            </p>
            <p className="mb-0">
              <Link
                href="https://wiki.thebigfile.com/wiki/Node_Provider_Remuneration"
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary link-with-icon"
              >
                <LinkArrowRight />
                More on renumeration models
              </Link>
            </p>
          </TranslatedLayout>

        </section>

        <section className=" mt-20 md:mt-40 mb-30 md:mb-60">
          <AnimateSpawn
            className="container-10"
            variants={transitions.container}
          >
            <motion.img
              variants={transitions.fadeIn}
              src="/img/node-providers/faq.webp"
              loading="lazy"
              alt=""
              className="md:hidden"
            />
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-10 mt-10 md:mt-0 md:mb-16"
              variants={transitions.item}
            >
              What you need to know about being a node provider
            </motion.h2>
          </AnimateSpawn>

          <div className="container-12 flex flex-col md:flex-row md:items-start">
            <div className="hidden md:block flex-[4] relative">
              <div className="blob blob-infinite blob-md blob-x-0 blob-y-6 opacity-80"></div>
              <img
                src="/img/node-providers/faq.webp"
                loading="lazy"
                alt=""
                className="relative -left-1/12"
              ></img>
            </div>

            <div className="space-y-20 flex-[6]">
              <AnimateSpawn className="space-y-6" variants={transitions.fadeIn}>
                <h3 className="tw-heading-4 md:tw-heading-3">Where to start</h3>
                <p className="tw-paragraph md:tw-lead-sm">
                  Before making the decision to become a node provider, it is
                  recommended to start by familiarizing yourself with the
                  following:
                </p>
                <ul className="checklist space-y-3 tw-paragraph md:tw-lead-sm">
                  <li className="checklist-item pl-8">
                    <Link
                      href="https://wiki.thebigfile.com/wiki/Introduction_to_BigFile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Brief intro to the BigFile
                    </Link>
                  </li>
                  <li className="checklist-item pl-8">
                    <Link
                      href="https://wiki.thebigfile.com/wiki/Sovereign_Network"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The BigFile architecture
                    </Link>
                  </li>
                  <li className="checklist-item pl-8">
                    <Link
                      href="https://wiki.thebigfile.com/wiki/Governance_of_the_Big_File"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Governance of the BigFile
                    </Link>
                  </li>
                  <li className="checklist-item pl-8">
                    <Link
                      href="https://wiki.thebigfile.com/wiki/Node_Provider_Documentation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Node provider overview documentation
                    </Link>
                  </li>
                </ul>
                <p className="tw-paragraph md:tw-lead-sm"></p>
              </AnimateSpawn>
              <AnimateSpawn className="space-y-6" variants={transitions.fadeIn}>
                <h3 className="tw-heading-4 md:tw-heading-3">
                  Onboarding checklist
                </h3>
                <p className="tw-paragraph md:tw-lead-sm">
                With a basic understanding of how the BigFile works, you're ready to start the onboarding process using the following resources:
                </p>
                <ul className="checklist space-y-3 tw-paragraph md:tw-lead-sm">
                  <li className="checklist-item pl-8">
                    <Link
                      href="https://wiki.thebigfile.com/wiki/Node_Provider_Documentation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fill out self-declaration form
                    </Link>
                  </li>
                  <li className="checklist-item pl-8">
                    <Link
                      href="https://wiki.thebigfile.com/wiki/Node_Provider_Onboarding"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Submit proposal and onboard your nodes to the BigFile
                    </Link>
                  </li>
                  <li className="checklist-item pl-8">
                    <Link
                      href="https://wiki.thebigfile.com/wiki/Node_Provider_Matrix_channel"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join the node provider matrix channel
                    </Link>
                  </li>
                  <li className="checklist-item pl-8">
                    <Link
                      href="https://wiki.thebigfile.com/wiki/Node_Provider_Machine_Hardware_Guide"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Choose and purchase hardware
                    </Link>
                  </li>
                  <li className="checklist-item pl-8">
                    <Link
                      href="https://wiki.thebigfile.com/wiki/Node_Provider_Onboarding"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Set up servers in a data center
                    </Link>
                  </li>
                </ul>
                <p className="">
                  <Link
                    href="https://wiki.thebigfile.com/wiki/Node_Provider_Documentation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary"
                  >
                    Get started
                  </Link>
                </p>
              </AnimateSpawn>
            </div>
            <div className="flex-[1]"></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default NodeProvidersPage;
