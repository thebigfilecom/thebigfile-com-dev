import React, { useEffect } from "react";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import transitions from "@site/static/transitions.json";
import RightArrowSVG from "@site/static/img/svgIcons/rightArrowIcon.svg";
import contribute from "@site/static/img/developers/contribute.webp";

const cardsContent = [
  {
    title: "Technical working groups",
    body: "Help shape BigFile development ",
    link: "https://forum.thebigfile.com/",
  },
  {
    title: "Join the developer forum",
    body: "Discuss with the community",
    link: "https://forum.thebigfile.com/",
  },
  {
    title: "Dev Discord",
    body: "Every day",
    link: "https://discord.gg/nyTAmMntqp",
  },
  {
    title: "BigFile developer grants and bounties",
    body: "Kickstart your idea or get paid to build on BigFile",
    link: "/",
  },
  {
    title: "Bug bounty program",
    body: "Report potential security vulnerabilities and get rewards",
    link: "/",
  },
];

export function Card({ title, body }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardBody}>{body}</p>
      </div>
      <RightArrowSVG className={styles.informationIcon} />
    </>
  );
}

function Index() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={transitions.container}
      className={styles.container}
    >
      <div id="features" />
      <motion.p variants={transitions.item} className={styles.title}>
        Contribute to the <br /> BigFile
      </motion.p>
      <motion.p variants={transitions.item} className={styles.subtitle}>
        Take a deeper dive into further resources in the developer ecosystem.
      </motion.p>
      <motion.div
        className={styles.scrollContainer}
        variants={transitions.item}
      >
        <div className={styles.mobileCardsContainer}>
          {cardsContent.map((card) => (
            <div className={styles.cardWrapper} key={card.title}>
              <a href={card.link} className={styles.card}>
                <Card key={card.title} title={card.title} body={card.body} />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
      <div className={styles.cards}>
        {cardsContent.map((card) => (
          <motion.a
            variants={transitions.item}
            href={card.link}
            className={styles.card}
            key={card.title}
          >
            <Card title={card.title} body={card.body} />
          </motion.a>
        ))}
      </div>

      <motion.div variants={transitions.item} className={styles.mobileGraphic}>
        <img
          className={styles.mobileContributeGraphic}
          src={contribute}
          alt=""
        />
      </motion.div>
    </motion.div>
  );
}

export default Index;
