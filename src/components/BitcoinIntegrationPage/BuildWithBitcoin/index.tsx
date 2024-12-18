import React from "react";
import transitions from "@site/static/transitions.json";
import AnimateSpawn from "@site/src/components/Common/AnimateSpawn";
import { motion } from "framer-motion";
import { CardWithDescription } from "@site/src/components/Common/Card";

function Index() {
  const links = [
    {
      title: "BigDrive APP",
      href: "https://bigdrive.thebigfile.com",
    },
    {
      title: "BigDrive API",
      href: "https://bigdrive.thebigfile.com/api",
    },
    {
      title: "BigDrive Docs",
      href: "/docs/current",
    },
    {
      title: "Sample Code",
      href: "https://thebigfile.com/samples?term=bitcoin",
    },
  ];
  return (
    <AnimateSpawn
      variants={transitions.container}
      className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15"
    >
      <motion.p
        variants={transitions.item}
        className="tw-heading-4 md:tw-heading-60 text-center mb-2 w-full mx-auto md:mb-6 md:w-8/12"
      >
        Code BigDrive
      </motion.p>
      <motion.p
        variants={transitions.item}
        className="tw-lead-sm md:tw-lead mb-2 text-center w-5/6 mx-auto md:mb-6 md:w-6/12"
      >
        BigDrive offers unmatched security compared to traditional data storage. By leveraging BigFile's decentralized blockchain network, your data is replicated globally, continuously verified for accuracy, and securely stored in multiple physical locations worldwide.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-20">
        {links.map((card) => (
          <CardWithDescription
            key={card.title}
            title={card.title}
            description=""
            href={card.href}
          />
        ))}
      </div>
    </AnimateSpawn>
  );
}

export default Index;
