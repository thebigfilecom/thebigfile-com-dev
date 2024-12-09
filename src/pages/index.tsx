import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import StartBuildingSection from "@site/src/components/LandingPage/StartBuilding";
import Layout from "@theme/Layout";
import React from "react";

import FeaturesSection from "../components/LandingPage/FeaturesSection/FeaturesSection";
import { CardsSection } from "../components/LandingPage/Hero/Cards";
import Hero from "../components/LandingPage/Hero/Hero";
import IntroCards from "../components/LandingPage/Hero/IntroCards";
import {
  CollapsedVisionSection,
  VisionSection,
} from "../components/LandingPage/Hero/VisionSection";
import NewsletterSection from "../components/LandingPage/NewsletterSection/NewsletterSection";
import SectionsBar from "../components/LandingPage/SectionsBar";
import Sustainable from "../components/LandingPage/Sustainable/Sustainable";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <Hero
        headline={<>BIGFILE BLOCKCHAIN</>}
      >
        <CardsSection />
        
        <VisionSection>
          BigFile is an AI-powered decentralized blockchain network engineered to provide permanent, immutable, and scalable data storage solutions. It is designed to securely host applications, files, and Big Data, while facilitating computations on smart contracts at unparalleled scalability. 
        </VisionSection>
        <IntroCards />
      </Hero>

      <main className="w-full relative bg-[#F1EEF5] z-[0]">
        <div className="overflow-hidden">
          
          <FeaturesSection />
          <Sustainable id="sustainable"></Sustainable>
          <StartBuildingSection
            id="startBuilding"
            title="Become a Web3 pioneer"
            body="Start a DAO, create a token, build dapps and host assets with the full stack entirely on-chain."
            cta="BUILD REAL WEB3"
            ctaLink="/developers"
            cards={[
              {
                title: "Dev forum",
                body: "Engage with the BigFile community to shape future features, propose new ideas, and ask questions.",
                link: "https://forum.thebigfile.com",
              },
              {
                title: "Dev docs",
                body: "Get to know the concepts, architecture and technical breakthroughs that enable the BigFile. Plus step-by-step guides on how to stake your tokens, and more.",
                link: "/docs/current/home",
              },
              {
                title: "Sample code",
                body: "From a simple DEX, to on-chain encrypted storage, NFT minting, and a basic DAO, learn how to build on the BigFile.",
                link: "/samples",
              },
              {
                title: "ErisAI",
                body: "ErisAI Complet Solutions Blockchain AI.",
                link: "/ai",
              },
            ]}
          />
          

          <NewsletterSection formUrl="https://thebigfile.us14.list-manage.com/subscribe/post?u=c077aedaaac14cbbf2fb9522b&amp;id=38a1cc340f&amp;f_id=00647ae0f0">
            Sign up for email updates{" "}
            <span className="text-white-60">
              to keep up to date with the BigFile
            </span>
          </NewsletterSection>
        </div>
      </main>
      <SectionsBar />
    </Layout>
  );
}
