import React from "react";
import AnimateSpawn from "../../Common/AnimateSpawn";
import transitions from "@site/static/transitions.json";

import { motion } from "framer-motion";
import Link from "@docusaurus/Link";
import LinkArrowDown from "../../Common/Icons/LinkArrowDown";
import LinkArrowUpRight from "../../Common/Icons/LinkArrowUpRight";
import LinkArrowRight from "../../Common/Icons/LinkArrowRight";

const FeaturesSection = () => {
  return (
    <section className="bg-[#1B025A] text-white pt-30 md:pt-56" id="technology">
      <div className="mb-12 md:mb-30 container-10">
        <h2 className="tw-heading-3 md:tw-title-lg mb-0 md:w-8/10">
          Amazing, you made it this far. Discover more{" "}
          <span className="text-gradient-purple md:tw-heading-60">
            BigFile key features:
          </span>
        </h2>
      </div>

      <AnimateSpawn
        className="container-12 mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5"
        el={motion.section}
        variants={transitions.container}
      >
        <motion.div
          className="flex-1 bg-white rounded-xl text-black p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
          variants={transitions.item}
        >
          <img
            src="/img/what-is-bigfile/icon-sovereign.svg"
            alt=""
            loading="lazy"
            className="w-30"
          />
          <h3 className="tw-lead md:tw-title-sm mb-0">Decentralized AI</h3>
          <p className="mb-0 tw-paragraph-sm text-black/60">
          Artificial Intelligence relies on vast amounts of data for training, analysis, and execution. Managing this data efficiently and securely is a critical challenge, especially when immutability and comprehensive audit trails are essential.
          </p>
          <p className="mb-0 -mx-3">
            <Link className="link-primary " href="/decentralized-ai">
              <LinkArrowRight />
              Decentralized AI Details
            </Link>
          </p>
        </motion.div>
        <motion.div
          className="flex-1 bg-white rounded-xl text-black p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
          variants={transitions.item}
        >
          <img
            src="/img/what-is-bigfile/icon-web3-ois.svg"
            alt=""
            loading="lazy"
            className="w-30"
          />
          <h3 className="tw-lead md:tw-title-sm mb-0">Sites and Apps</h3>
          <p className="mb-0 tw-paragraph-sm text-black/60">
          Web apps and static sites can be deployed on BigFile, ensuring they remain permanently accessible and unaltered, all for a low, one-time hosting fee. This makes it an ideal solution for decentralized apps, archival websites, educational resources, and legacy projects that require long-term availability without ongoing maintenance costs.
          </p>
          <p className="mb-0  -mx-3">
            <Link className="link-primary" href="/capabilities">
              <LinkArrowRight />
              BigFile Capabilities Overview
            </Link>
          </p>
        </motion.div>
        <motion.div
          className="flex-1 bg-white rounded-xl text-black p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
          variants={transitions.item}
        >
          <img
            src="/img/what-is-bigfile/icon-next-gen-ai.svg"
            alt=""
            loading="lazy"
            className="w-30"
          />
          <h3 className="tw-lead md:tw-title-sm mb-0">File Storage</h3>
          <p className="mb-0 tw-paragraph-sm text-black/60">
          Permanent data storage on the BigFile blockchain guarantees that public and private documents, media, and other digital assets remain undeletable. This makes it an ideal solution for preserving legal, medical, historical records, or any data that must never be lost.
          </p>
          <p className="mb-0 -mx-3 flex flex-col gap-3 items-center">
            <Link className="link-primary" href="/file-storage">
              <LinkArrowRight />
              BigDrive on BigFile
            </Link>
            <Link className="link-primary" href="/ecosystem">
              <LinkArrowRight />
              BigFile Ecosystem
            </Link>
          </p>
        </motion.div>
        <motion.div
          className="flex-1 bg-white rounded-xl text-black p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
          variants={transitions.item}
        >
          <img
            src="/img/what-is-bigfile/icon-tamperproof.svg"
            alt=""
            loading="lazy"
            className="w-30"
          />
          <h3 className="tw-lead md:tw-title-sm mb-0">Oracle and Blockchain Data</h3>
          <p className="mb-0 tw-paragraph-sm text-black/60">
           Blockchain applications and oracle services must be able to trust that the data they rely on will remain permanently accessible. BigFile indexes and retrieves permanent data storage on BigFile blockchain, ensuring that data such as transaction histories, price feeds, and oracle inputs are archived and served forever.
          </p>
          <p className="mb-0 -mx-3">
            <Link
              className="link-primary"
              href="/how-it-works"
            >
              <LinkArrowRight />
              Oracle and Blockchain Data
            </Link>
          </p>
        </motion.div>
        <motion.div
          className="flex-1 bg-white rounded-xl text-black p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
          variants={transitions.item}
        >
          <img
            src="/img/what-is-bigfile/icon-autonomous.svg"
            alt=""
            loading="lazy"
            className="w-30"
          />
          <h3 className="tw-lead md:tw-title-sm mb-0">Social Platforms</h3>
          <p className="mb-0 tw-paragraph-sm text-black/60">
           Social platforms share IP addresses of users with governments. Privacy-focused social apps have centralized servers. In an era where data ownership and censorship are growing concerns, it’s time for social apps to benefit from the immutable, censorship-resistant nature of the decentralized web.
          </p>
          <p className="mb-0">
            <Link className="link-primary" href="/ecosystem">
              <LinkArrowRight />
              BigFile Ecosystem
            </Link>
          </p>
        </motion.div>
        <motion.div
          className="flex-1 bg-white rounded-xl text-black p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
          variants={transitions.item}
        >
          <img
            src="/img/what-is-bigfile/icon-simple.svg"
            alt=""
            loading="lazy"
            className="w-30"
          />
          <h3 className="tw-lead md:tw-title-sm mb-0">Cost effective</h3>
          <p className="mb-0 tw-paragraph-sm text-black/60">
           While the monthly costs of traditional cloud providers remain constant, the cost of storing 1 GB of data is calculated over time. BigDrive may have higher initial costs, but it offers significantly lower prices in the long term.
          </p>
          <p className="mb-0">
            <span className="tw-heading-5">$30 / GB / Forever</span>
          </p>
        </motion.div>
      </AnimateSpawn>
    </section>
  );
};

export default FeaturesSection;
