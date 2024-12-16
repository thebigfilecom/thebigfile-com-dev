import React from "react";
import AnimateSpawn from "../../Common/AnimateSpawn";
import transitions from "@site/static/transitions.json";
import { motion } from "framer-motion";
import Link from "@docusaurus/Link";
import LinkArrowRight from "../../Common/Icons/LinkArrowRight";

const Content: React.FC = () => {
  return (
    <>
      <AnimateSpawn
        className="container-10 flex flex-col md:flex-row gap-12 md:gap-1/10 mb-20 md:mb-40"
        variants={transitions.container}
        el={motion.section}
      >
        <motion.div className="flex-[4]" variants={transitions.item}>
          <h2 className="tw-heading-4 md:tw-heading-2 text-gradient mb-3">
            Immutable and Secure
          </h2>
          <p className="tw-paragraph mb-3">
            BigFile offers ransomware-immune storage, ensuring that once data is written, it remains unaltered and tamper-proof. This immutability is crucial for industries requiring trusted, long-term storage, such as business records and legal services. Whether safeguarding sensitive information or preserving historical archives, BigFile guarantees secure and reliable access to your data.
          </p>
          <p className="tw-paragraph mb-3">
            BigFile empowers users to autonomously run and manage data uploads, providing complete control over file storage and access. With the flexibility to choose from multiple gateways, users gain enhanced autonomy and true data sovereignty.
          </p>
          <p className="tw-paragraph mb-3">
            Our CLI offers a comprehensive set of commands that can be seamlessly integrated into larger workflows and CI/CD pipelines. This enables automation not only for uploads but for entire development processes built around decentralized storage solutions.
          </p>
          <p className="mb-0 mt-8">
            <Link
              className="link-primary link-with-icon"
              href="/how-it-works/"
            >
              <LinkArrowRight></LinkArrowRight>
              What is BigFile CLI
            </Link>
          </p>
        </motion.div>
        <motion.div className="flex-[5] space-y-5" variants={transitions.item}>
          <div className="bg-white rounded-xl p-6 md:p-8">
            <h3 className="tw-heading-6 md:tw-heading-4 mb-4">
             Decentralized Data Storage
            </h3>
            <p className="tw-paragraph mb-0">
              Most people rely on cloud storage apps, social media platforms, and personal hard drives to store their digital files, but these options are not built to last. Hard drives fail, social media policies shift unpredictably, and cloud storage demands ongoing subscriptions. BigDrive provides a lasting alternative: pay once, store forever. With BigDrive's decentralized data storage, your files remain secure for generations—no subscriptions required.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8">
            <h3 className="tw-heading-6 md:tw-heading-4 mb-4">
              BigFile Miners
            </h3>
            <p className="tw-paragraph mb-0">
             BigFile is secured by an open, decentralized network of miners who store and replicate data in exchange for BIG token rewards. These rewards are sustainably funded through the BigFile endowment, ensuring your data remains perpetually available, supported by a transparent and immutable risk model.
            </p>
          </div>
        </motion.div>
      </AnimateSpawn>
    </>
  );
};

export default Content;
