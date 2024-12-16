import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import ShareMeta from "../components/Common/ShareMeta";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";
import TranslatedLayout from "../components/Common/TranslatedLayout/TranslatedLayout";
import { ShowcaseCard } from "../components/Common/Card";
import Newsletter from "../components/Common/Newsletter/Newsletter";

const layoutData = [
  {
    id: 1,
    image: "img/accelerator/image_1.webp",
    title: "Unlimited Storage",
    description:
      "Every account provides unlimited data storage, allowing you to upload as much or as little as you want. With no risk of account inactivity, every file you upload is securely stored and ready for access whenever you return.",
    reverse: true,
  },
  {
    id: 2,
    image: "img/accelerator/image_2.webp",
    title: "Easy File Management",
    description:
      "Easily rename, move, and organize files and drives to fit your personal or business filing system. Choose whether to keep files private, share them selectively, or make them publicly accessible to everyone.",
    reverse: false,
  },
  {
    id: 3,
    image: "img/accelerator/image_3.webp",
    title: "Totally Private",
    description:
      "Like you, we prioritize data privacy above all else. We never collect personal information, and your account is accessible only to you. With BigDrive, your data truly belongs to you and no one else.",
    reverse: true,
  },
  {
    id: 4,
    image: "img/accelerator/image_4.webp",
    title: "No Inactive Accounts",
    description:
      "At BigDrive, you never have to worry about inactive accounts. Whether you use it daily or return after years, your account remains active, and your files are always ready for access.",
    reverse: false,
  },
  {
    id: 5,
    image: "img/accelerator/image_5.webp",
    title: "Version Tracking",
    description:
      "Documents evolve through interactions and changes. With BigDrive, you can track every modification, review the history of saved versions, and access any previously uploaded document effortlessly.",
    reverse: true,
  },
];

const cardsData = [
  {
    id: 1,
    imageSrc: "img/accelerator/icon_1.svg",
    title: "A one-stop storage",
    subtitle: "Think outside the box",
    description:
      "Safely keep and organize your most important personal and business files, ensuring they are never lost or deleted.",
  },
  {
    id: 2,
    imageSrc: "img/accelerator/icon_2.svg",
    title: "Creator's Paradise",
    subtitle: "Start your journey as Web3 pro",
    description:
      "Harness the power of BigDrive to bring your digital creations to life. Discover essential tips and tricks for managing metadata, manifests, and NFTs effortlessly.",
  },
  {
    id: 3,
    imageSrc: "img/accelerator/icon_3.svg",
    title: "Built for Developers",
    subtitle: "Echo your expertise in the field",
    description:
      "Bring your next project to life on the permaweb. Use BigDrive to create a decentralized website or launch a forever-running app with ease.",
  },
  {
    id: 4,
    imageSrc: "img/accelerator/icon_4.svg",
    title: "Blockchain for Everyone",
    subtitle: "A Blockchain for Everyone",
    description:
      "Like the internet, but built to last for generations. Preserve websites, news articles, and files in a decentralized digital time capsule.",
  },
];

const MotionLink = motion(Link);

function AcceleratorPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="BigDrive | The On-chain Permanent File Storage"
      description="Streamline your digital world with BigDrive: the app that simplifies file management and inspires creativity with its pay-once, enjoy-forever model."
    >
      <ShareMeta image="/img/shareImages/share-bigdrive.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        <section
          className="bg-infinite text-white pt-20 mb-[10vw] lg:mb-3"
          ref={heroRef}
          style={{
            background: "linear-gradient(63deg, #3B00B9 0%, #D38ED7 100%)",
          }}
        >
          {bgDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}

          <div className="container-10 mb-40 pt-20 pb-12 sm:pb-40 md:pb-40 md:pt-36 relative z-10">
            <div className="relative">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-1 md:mb-3"
                variants={transitions.item}
              >
                BigDrive
              </motion.h1>
              <motion.h2 className="tw-heading-4 md:tw-heading-3 mb-2 md:mb-6">
                The On-chain Permanent File Storage
              </motion.h2>
              <div className="relative  md:w-5/10">
                <motion.p
                  className="tw-lead-sm md:tw-lead mb-8"
                  variants={transitions.item}
                >
                  Streamline your digital world with BigDrive: the app that simplifies file management and inspires creativity with its pay-once, enjoy-forever model.
                </motion.p>
              </div>
              <MotionLink
                href="https://bigdrive.thebigfile.com"
                className="button-white"
                variants={transitions.item}
              >
                Request Early Access
              </MotionLink>
            </div>

            <AnimateSpawn
              variants={null}
              el={motion.section}
              className="pointer-events-none relative md:absolute -z-1 right-0 bottom-0 -mt-60 md:mt-0 md:w-2/10"
            >
              <div className=" md:absolute md:w-[250%] md:bottom-0 md:-right-12  translate-y-1/3 ">
                <motion.img
                  src="/img/accelerator/acceleratorheader.svg"
                  alt=""
                  className="w-full h-full object-cover max-w-sm md:max-w-none"
                />
              </div>
            </AnimateSpawn>
          </div>
        </section>

        <section className="container-10 relative -mt-8 md:mt-40">
          <AnimateSpawn variants={transitions.container}>
            <motion.h2
              className="text-gradient tw-heading-4 md:tw-heading-60 mb-0 md:max-w-9/12"
              variants={transitions.item}
            >
              Rethink your approach to cloud storage—because true decentralized demands a new way forward.
            </motion.h2>
          </AnimateSpawn>
        </section>

        <section className="container-12 pt-20 pb-20 md:pt-30 md:pb-30">
          <div className="flex flex-col gap-8 md:gap-18">
            {layoutData.map((item) => (
              <TranslatedLayout
                key={item.id}
                imageUrl={item.image}
                reverse={item.reverse}
              >
                <aside className="mb-24 md:mb-0">
                  <h3 className="tw-heading-4 md:tw-heading-60 mb-6 -mt-6 md:mt-0">
                    {item.title}
                  </h3>
                  <p className="tw-paragraph md:tw-lead-sm mb-0">
                    {item.description}
                  </p>
                </aside>
              </TranslatedLayout>
            ))}
          </div>
        </section>

        <AnimateSpawn
          className="bg-infinite text-white"
          el={motion.section}
          variants={transitions.container}
        >
          <div className=" py-20 md:pt-40 md:pb-44">
            <motion.h2
              className="container-10 tw-heading-3 md:text-[60px] md:leading-[70px] mb-6"
              variants={transitions.item}
            >
              Value Proposition & Key Personas
            </motion.h2>

            <div className="container-12 mt-12 md:mt-20 grid grid-cols-1 gap-5 text-black sm:grid-cols-2 md:grid-cols-4">
              {cardsData.map((card) => (
                <ShowcaseCard
                  key={card.id}
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  imgSrc={card.imageSrc}
                />
              ))}
            </div>
            <aside className="container-10 md:mt-40 md:flex md:items-center	">
              <div className="pt-24 md:w-1/3">
                <motion.h3 className="tw-heading-4">Secure your data with the power of a global network.</motion.h3>
                <motion.p className="text-2xl mb-0 ">
                 BigDrive offers unmatched security compared to traditional data storage. By leveraging BigFile's decentralized blockchain network, your data is replicated globally, continuously verified for accuracy, and securely stored in multiple physical locations worldwide.
                </motion.p>
              </div>
              <div className="md:w-2/3 relative mt-6 md:mt-64 md:mb-64">
                <div className="pointer-events-none md:absolute w-full  md:-right-24 md:top-1/2  md:-translate-y-1/2">
                  <motion.div
                    className="absolute blob blob-white blob-md md:blob-lg blob-x-6 md:blob-x-8 blob-y-2 -z-1"
                    variants={transitions.fadeIn}
                  ></motion.div>
                  <motion.img
                    variants={transitions.fadeIn}
                    src="/img/accelerator/trustless_ratings.webp"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </aside>
          </div>
        </AnimateSpawn>
        <section className="max-w-page relative mx-auto mb-10 mt-15 px-6 md:mb-28 md:px-24 md:mt-60 text-center">
          <AnimateSpawn
            className=" relative text-white"
            variants={transitions.container}
          >
            <motion.div
              className="blob blob-purple blob-sm  blob-x-5 blob-y-7 z-[-1] md:blob-lg"
              variants={transitions.fadeIn}
            ></motion.div>
            <motion.h2
              className="tw-heading-3 text-center mb-6 w-full mx-auto md:tw-heading-60 md:mb-12 lg:w-8/12"
              variants={transitions.item}
            >
              Find out how BigDrive can help You accelerate
            </motion.h2>
            <div>
              <MotionLink
                href="https://bigdrive.thebigfile.com"
                className="button-white"
                variants={transitions.item}
              >
                Request Early Access
              </MotionLink>
            </div>
          </AnimateSpawn>

          <AnimateSpawn
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-16"
            variants={transitions.container}
          ></AnimateSpawn>
        </section>
        <section className="pt-30 mb-20  md:pt-20 md:mb-30 " id="subscribe">
          <Newsletter
            fields={[
              {
                name: "EMAIL",
                placeholder: "Email",
                type: "email",
                required: true,
              },
            ]}
            ctaLabel="Get updates!"
            postUrl="https://thebigfile.us14.list-manage.com/subscribe/post?u=c077aedaaac14cbbf2fb9522b&amp;id=38a1cc340f&amp;f_id=00647ae0f0"
            decoration={
              <img
                src="/img/newsletter/email-image-2.webp"
                alt=""
                loading="lazy"
              />
            }
            className="mb-20 relative "
          >
            <h2 className="text-white tw-heading-5 md:tw-heading-4 mb-6 md:mb-8 md:pr-10">
              Sign up for email updates{" "}
              <span className="text-white-60">
                to keep up to date with the BigFile
              </span>
            </h2>
          </Newsletter>
        </section>
      </main>
    </Layout>
  );
}

export default AcceleratorPage;
