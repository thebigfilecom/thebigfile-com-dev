import AnimateSpawn from "@site/src/components/Common/AnimateSpawn";
import transitions from "@site/static/transitions.json";
import { motion } from "framer-motion";
import React from "react";

function Index() {
  return (
    <AnimateSpawn
      el={motion.section}
      variants={transitions.container}
      className="container-10 flex gap-8 md:gap-1/10 items-center flex-col md:flex-row mb-20 md:mb-40"
    >
      <div className="md:order-1 md:flex-[5]">
        <motion.h2
          variants={transitions.item}
          className="tw-heading-5 md:tw-heading-3 text-gradient mb-0"
        >
          BigFile leverages bundling to scale permanent data storage efficiently. Whether you're storing a few files or gigabytes of data, bundling combines multiple transactions into one, minimizing fees while enabling faster and more reliable uploads.
        </motion.h2>
      </div>
    </AnimateSpawn>
  );
}

export default Index;
