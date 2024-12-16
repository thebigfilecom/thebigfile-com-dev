import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import LinkArrowRight from "@site/src/components/Common/Icons/LinkArrowRight";
import LinkArrowUpRight from "@site/src/components/Common/Icons/LinkArrowUpRight";
import {
  TranslatedCard,
  TranslatedCardList,
} from "@site/src/components/Common/TranslatedCards/TranslatedCards";
import TranslatedLayout from "@site/src/components/Common/TranslatedLayout/TranslatedLayout";
import { NewsCard } from "@site/src/components/NewsPage/Cards";
import { Press } from "@site/src/components/NewsPage/types";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnimateSpawn from "../../components/Common/AnimateSpawn";
import ShareMeta from "../../components/Common/ShareMeta";
import { useDarkHeaderInHero } from "../../utils/use-dark-header-in-hero";

const MotionLink = motion(Link);

const AnimatedNewsCard = ({
  news,
  linkLabel,
}: Parameters<typeof NewsCard>["0"]) => {
  return (
    <motion.div variants={transitions.item} className="flex">
      <NewsCard news={news} linkLabel={linkLabel} />
    </motion.div>
  );
};

const FeatureCard = ({ iconUrl, title }) => {
  return (
    <motion.div
      variants={transitions.item}
      className="
        flex-1 rounded-xl md:rounded-3xl 
        bg-[linear-gradient(82deg,#9ECFCF_-15.16%,#43BC9D_38.97%,#357494_100%)] 
        md:bg-[linear-gradient(0deg,#9ECFCF_-23.13%,#43BC9D_34.74%,#357494_100%)] 
        backdrop-blur-lg 
        text-center px-8 py-6 md:p-10 
        flex md:flex-col gap-8 md:gap-5 items-center
      "
    >
      <img
        src={iconUrl}
        alt={title}
        loading="lazy"
        className="h-16 md:h-24 aspect-square"
      />
      <h3 className="tw-heading-6 text-white/80 mb-0">{title}</h3>
    </motion.div>
  );
};

function SustainabilityPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  function scrollToDownload() {
    document
      .getElementById("get-report")
      .scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Layout
      title="Blockchain for Sustainable Business"
      description="Blockchain technology catalyzes sustainability efforts by enhancing transparency, traceability, and accountability in business operations."
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-sustainability.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}

        <AnimateSpawn variants={transitions.container} el={motion.section}>
          <div
            className="overflow-hidden  text-white pt-20"
            style={{
              background: `linear-gradient(77.94deg, #357095 -9.34%, #348B8D 21.93%, #39B392 48.29%, #4BA89C 75.1%, #348B8D 90.37%, #357195 108.5%)`,
            }}
            ref={heroRef}
          >
            <div className="container-10 pt-12 pb-32 md:pb-20 md:pt-36 relative">
              <div className="blob blob-white-dense blob-sm md:blob-md blob-x-5 blob-y-10 md:blob-x-9 opacity-90"></div>

              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-6 md:w-8/10"
                variants={transitions.item}
              >
                Blockchain for a Sustainable Future
              </motion.h1>
              <motion.p
                className="tw-lead-sm md:tw-lead md:w-6/10"
                variants={transitions.item}
              >
                Empowering sustainable business, blockchain technology redefines transparency, strengthens traceability, and ensures accountability, paving the way for more ethical and efficient operations.
              </motion.p>
            </div>
          </div>
        </AnimateSpawn>

        <AnimateSpawn
          className="container-12 relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="md:absolute text-center md:right-0 md:top-0 -translate-y-5/12 md:-translate-y-7/12">
            <img
              src="/img/features/sustainability-hero.webp"
              className="w-full sm:w-[480px] lg:w-[660px] aspect-square"
              alt=""
            />
          </div>
        </AnimateSpawn>

        <AnimateSpawn
          className="container-10"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="relative">
            <div className="md:w-9/10 -mt-32 md:mt-52 md:order-1">
              <motion.p
                className="tw-heading-4 sm:tw-heading-3 md:tw-heading-60 mb-6 md:mb-10 text-gradient-green"
                variants={transitions.item}
              >
                Sustainability is becoming a global priority, fueled by regulatory pressures, energy consumption challenges, climate change concerns, and the growing need for cost-efficient operations.
              </motion.p>
              <motion.p>
                <button onClick={scrollToDownload} className="button-white">
                  Read Sustainable Use Cases Report
                </button>
              </motion.p>
            </div>
          </div>
        </AnimateSpawn>

        <AnimateSpawn
          className="container-10 flex mt-20 md:mt-30 pb-20 md:pb-40 flex-col sm:flex-row gap-10 md:gap-0"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="flex-1 sm:order-2">
            <p className="tw-paragraph md:tw-lead mb-0">
            An application's environmental footprint is just one dimension of sustainability. Equally important are factors such as operational costs, scalability, longevity, security, privacy, resilience against attacks, and a sustainable business model—ensuring long-term economic viability after launch.
            </p>
          </div>

          <div className="flex-1 md:-translate-x-2/10 text-center relative sm:order-1 -mb-[66vw] md:mb-0">
            <img
              src="/img/features/sustainability-globe.svg"
              alt=""
              className="max-w-full sm:absolute top-0 left-0 right-0"
            />
          </div>
        </AnimateSpawn>
        <section className="bg-white pt-20 md:pt-30 relative">
          <AnimateSpawn
            variants={transitions.container}
            className="container-6 text-center"
          >
            <motion.h2
              variants={transitions.item}
              className="tw-heading-5 md:tw-heading-3 mb-0"
            >
              Top 4 reasons for using Blockchain Technology for transformation
            </motion.h2>
          </AnimateSpawn>
          <AnimateSpawn
            variants={transitions.container}
            className="container-10 mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5"
          >
            <FeatureCard
              iconUrl="/img/features/sustainability/icon-1.webp"
              title="Transparency"
            ></FeatureCard>
            <FeatureCard
              iconUrl="/img/features/sustainability/icon-2.webp"
              title="Accountability"
            ></FeatureCard>
            <FeatureCard
              iconUrl="/img/features/sustainability/icon-3.webp"
              title="Verifiability"
            ></FeatureCard>
            <FeatureCard
              iconUrl="/img/features/sustainability/icon-4.webp"
              title="Efficiency"
            ></FeatureCard>
          </AnimateSpawn>
          <AnimateSpawn
            variants={transitions.container}
            className="container-10 mt-20 md:mt-30"
          >
            <div className="md:w-6/10">
              <motion.h2
                variants={transitions.item}
                className="tw-heading-5 md:tw-heading-3 mb-3 md:mb-6"
              >
                Why BigFile stands out as a model blockchain for sustainability applications.
              </motion.h2>
              <motion.p
                variants={transitions.item}
                className="tw-lead-sm md:tw-lead mb-3 md:mb-8"
              >
                BigFile offers significantly greater sustainability compared to traditional IT stacks, thanks to its innovative architectural approach that enhances energy efficiency.
              </motion.p>
              <ul className="list-none pl-0 space-y-4 md:space-y-8">
                <motion.li
                  className="tw-heading-6 md:tw-heading-5 pl-8 md:pl-16 relative bg-[url(/img/features/sustainability/icon-check-mobile.svg)] md:bg-[url(/img/features/sustainability/icon-check.svg)] bg-left-top bg-no-repeat min-h-6 md:min-h-16"
                  variants={transitions.item}
                >
                  The most sustainable blockchain, delivering efficiency at scale. Each transaction on BigFile consumes minimal energy, measured in low watt-hours, making it exceptionally energy efficient.
                </motion.li>
                <motion.li
                  className="tw-heading-6 md:tw-heading-5 pl-8 md:pl-16 relative bg-[url(/img/features/sustainability/icon-check-mobile.svg)] md:bg-[url(/img/features/sustainability/icon-check.svg)] bg-left-top bg-no-repeat min-h-6 md:min-h-16"
                  variants={transitions.item}
                >
                  Transparent reporting: The power consumption of all node machines on the BigFile blockchain is publicly available on a dedicated dashboard.
                </motion.li>
              </ul>
            </div>
          </AnimateSpawn>
        </section>

        <AnimateSpawn
          className="bg-infinite overflow-hidden "
          variants={transitions.container}
          el={motion.section}
        >
          <div className="container-10 py-30 md:py-40 flex flex-col sm:flex-row text-white relative">
            <div className="blob blob-white blob-sm md:blob-xl blob-x-10 blob-y-3 md:blob-y-5 opacity-70"></div>
            <div className="flex-1 mt-40 sm:mt-0">
              <h2 className="tw-heading-4 md:tw-heading-3 mb-6">
                Connect with us for your Sustainability Use Case
              </h2>
              <p className="tw-lead-sm md:tw-lead mb-6 md:mb-8">
                Write to us if you would like to develop a use case from the
                report, or a unique one.
              </p>
              <p className="mb-0">
                <Link href="mailto:info@thebigfile.com" className="button-white">
                  Get in touch
                </Link>
              </p>
            </div>
            <div className="flex-1 ">
              <img
                src="/img/features/sustainability/get-in-touch.svg"
                alt=""
                loading="lazy"
                className="absolute top-0 right-0 left-0 max-w-md md:max-w-none sm:left-auto sm:-right-30 sm:-top-6"
              ></img>
            </div>
          </div>
        </AnimateSpawn>
      </main>
    </Layout>
  );
}

export default SustainabilityPage;
