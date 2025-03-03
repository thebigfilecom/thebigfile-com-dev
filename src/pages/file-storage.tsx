import BuildWithBitcoin from "@site/src/components/BitcoinIntegrationPage/BuildWithBitcoin";
import React, { useRef } from "react";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/BitcoinIntegrationPage/Hero";
import HowItWorks from "@site/src/components/BitcoinIntegrationPage/HowItWorks";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";
import ShareMeta from "../components/Common/ShareMeta";
import DarkHeroStyles from "../components/Common/DarkHeroStyles";
import Content from "../components/BitcoinIntegrationPage/Content";

function FileStorage() {
  const ref = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(ref);

  return (
    <Layout
      title="File Storage"
      description="From legal contracts to digital collections, BigFile guarantees that your decentralized data will remain secure and accessible for generations to come."
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/file-storage.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}
        <Hero ref={ref}></Hero>
        <HowItWorks></HowItWorks>
        <Content></Content>
        {/* <ReleaseTimeline></ReleaseTimeline> */}
        
        <BuildWithBitcoin></BuildWithBitcoin>
      </main>
    </Layout>
  );
}

export default FileStorage;
