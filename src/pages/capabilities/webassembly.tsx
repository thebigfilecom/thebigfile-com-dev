import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnimateSpawn from "@site/src/components/Common/AnimateSpawn";
import { CardWithDescription } from "@site/src/components/Common/Card";
import LinkArrowUpRight from "@site/src/components/Common/Icons/LinkArrowUpRight";
import ShareMeta from "@site/src/components/Common/ShareMeta";
import TranslatedLayout from "@site/src/components/Common/TranslatedLayout/TranslatedLayout";
import { useDarkHeaderInHero } from "@site/src/utils/use-dark-header-in-hero";

function WebAssemblyPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="WebAssembly on BigFile"
      description="One of the advantages of the BigFile blockchain is its use of WebAssembly for executing smart contracts and decentralized applications, allowing developers to write code in a wide range of languages that compile to WebAssembly."
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-webassembly.jpg"></ShareMeta>

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
                WebAssembly <br className="md:hidden" />
                on BIG
              </motion.h1>
              <motion.p
                className="tw-lead-sm md:tw-lead mb-8"
                variants={transitions.item}
              >
                A advantage of the BigFile blockchain is its use of WebAssembly for executing smart contracts and decentralized applications — written in a wide variety of languages that compile to WebAssembly.
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
              src="/img/webassembly/webassembly-hero-image.webp"
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
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-3 mb-3 md:mb-10 text-gradient"
              variants={transitions.item}
            >
              WebAssembly is designed from the ground up to be secure, safe, and fast. These characteristics enable BigFile to run scalable decentralized applications for clients, government institutions, and enterprises.
            </motion.h2>

            <motion.p className="mb-0" variants={transitions.item}>
              <Link href="https://forum.thebigfile.com/t/webassembly-on-the-bigfile/24" className="link-primary link-with-icon">
                Read how BigFile uses WebAssembly
                <LinkArrowUpRight />
              </Link>
            </motion.p>
          </div>
        </AnimateSpawn>

        <section className="container-12 py-30 md:py-48">
          <div className="flex flex-col gap-16 md:gap-40">
            <TranslatedLayout
              imageUrl="/img/webassembly/image-1.webp"
              reverse={true}
            >
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Why WebAssembly
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-0">
              BigFile runs application code across multiple decentralized nodes, operated by node providers who are selected and vetted by BIG token holders. This replicated execution remains reliable even in the presence of untrusted or malicious nodes. A critical aspect of replicated execution is determinism, meaning that identical code with the same inputs always produces the same result. This deterministic execution is a cornerstone of BigFile’s functionality and is assured by WebAssembly.
                <br />
                <br />
                WebAssembly is rapidly becoming the de facto standard for secure and safe computation, offering benefits for both server-side systems and client browsers. Its ecosystem continues to grow, fueled by contributions from industry, academia, and open-source enthusiasts. BigFile provides a secure platform for running server-side WebAssembly components and code in a more distributed and secure execution environment, enabling developers and enterprises to harness this technology to build powerful decentralized applications.
              </p>
            </TranslatedLayout>
            <TranslatedLayout imageUrl="/img/webassembly/image-2.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                WebAssembly and Cloud
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              BigFile aims to integrate decentralization and statefulness into cloud computing, while also bringing cloud features like fast, scalable, general-purpose computation into the realm of blockchain. WebAssembly is ideal for this mission, as it is a general-purpose, sandboxed virtual machine designed to be secure, safe, fast, and deterministic.
              </p>
              <p className="mb-0">
                <Link
                  href="https://forum.thebigfile.com/t/the-bigfile-revolutionizing-blockchain-with-stateful-decentralized-serverless-computing/33"
                  className="link-primary link-with-icon"
                >
                  Read about cloud computing on BigFile
                  <LinkArrowUpRight />
                </Link>
              </p>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/webassembly/image-3.webp"
              reverse={true}
            >
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                WebAssembly vs EVM
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              WebAssembly and EVM are both virtual machines for blockchains, but the key difference is that WebAssembly is general-purpose and supports a wide range of programming languages. On BigFile, WebAssembly delivers vastly higher compute and storage capacity for its applications.
                <br />
                <br />
                Since WebAssembly is more expressive and performant, it can even emulate an EVM. 
              </p>
              
            </TranslatedLayout>
          </div>
        </section>

        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15 mt-0 md:mt-40">
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
              Cube Development Kits
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead md:w-5/12 md:mx-auto text-center"
              variants={transitions.item}
            >
              WebAssembly enables BigFile developers to write Cube smart contracts in a variety of programming languages.
            </motion.p>
          </AnimateSpawn>

          <AnimateSpawn
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-16"
            variants={transitions.container}
          >
            <CardWithDescription
              title="Rust"
              description="Offers high performance and a wealth of libraries developed by the Rust community over the years, all supported and maintained by BigFile."
              href="/docs/current/developer-docs/backend/rust/"
            />
            <CardWithDescription
              title="TypeScript"
              description="Developed by Demergent Labs, Azle is a TypeScript CDK for the BigFile enabling developers to write cubes using JavaScript."
              href="https://github.com/demergent-labs/azle"
            />
            <CardWithDescription
              title="Python"
              description="Kybra, developed by Demergent Labs, is a Python CDK for BigFile—essentially a Python runtime for building canisters on the BigFile platform."
              href="https://github.com/demergent-labs/kybra"
            />
          </AnimateSpawn>
        </section>
      </main>
    </Layout>
  );
}

export default WebAssemblyPage;
