import React, { useEffect } from "react";
import styles from "./index.module.css";
import { motion, useAnimation } from "framer-motion";
import transitions from "@site/static/transitions.json";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import RightArrowSVG from "@site/static/img/svgIcons/rightArrowIcon.svg";
import BGCircle from "@site/static/img/purpleBlurredCircle.webp";

function Index() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <div className={styles.section}>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={transitions.container}
        className={styles.container}
      >
        <motion.p variants={transitions.item} className={styles.title}>
          Get your dapp off the ground
        </motion.p>
        <img src={BGCircle} className={styles.BGShape} alt="" />
        <div className={styles.cards}>
          <motion.a
            variants={transitions.item}
            href={"https://thebigfile.com/grants/"}
            className={clsx(
              styles.card,
              styles.cardContainer,
              styles.cardHover
            )}
          >
            <div className={styles.bodyContainer}>
              <p className={styles.informationTitle}>Developer grants</p>
              <p className={styles.informationBody}>
                The BigFile Developer Grant Program aims to catalyze the growth of the BigFile ecosystem.
              </p>
            </div>
            <RightArrowSVG className={styles.informationIcon} />
          </motion.a>
          <motion.a
            variants={transitions.item}
            href={"https://thebigfile.com"}
            target="_blank"
            className={clsx(
              styles.card,
              styles.cardContainer,
              styles.cardHover
            )}
          >
            <div className={styles.bodyContainer}>
              <p className={styles.informationTitle}>BIGFund</p>
              <p className={styles.informationBody}>
              The BIG Fund was established to support visionary teams in developing and scaling the decentralized bureaucracy and decentralized finance systems that will shape the future.
              </p>
            </div>
            <RightArrowSVG className={styles.informationIcon} />
          </motion.a>
          <motion.a
            variants={transitions.item}
            href={"https://faucet.thebigfile.com/"}
            className={clsx(
              styles.card,
              styles.cyclesContainer,
              styles.cardHover
            )}
          >
            <div className={styles.bodyContainer}>
              <p className={styles.informationTitle}>Cycles faucet</p>
              <p className={styles.informationBody}>
                Get free cycles to use for testing and deployment of your
                project on the BigFile.
              </p>
            </div>
            <RightArrowSVG className={styles.informationIcon} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default Index;
