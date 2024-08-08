import BuildWithBitcoin from "@site/src/components/BitcoinIntegrationPage/BuildWithBitcoin";
import React, { useRef } from "react";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/BitcoinIntegrationPage/Hero";
import HowItWorks from "@site/src/components/BitcoinIntegrationPage/HowItWorks";
import Videos from "@site/src/components/BitcoinIntegrationPage/Videos";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";
import ShareMeta from "../components/Common/ShareMeta";
import DarkHeroStyles from "../components/Common/DarkHeroStyles";
import Content from "../components/BitcoinIntegrationPage/Content";

function BitcoinIntegration() {
  const ref = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(ref);

  return (
    <Layout
      title="BIG as a Bitcoin"
      description="The BigFile adds the missing smart contract layer to Bitcoin. Leveraging Chain Fusion Technology, BIG can directly read and write to Bitcoin, enabling dapps that natively interact with Bitcoin."
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-bitcoin-integration.jpg"></ShareMeta>

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

export default BitcoinIntegration;
