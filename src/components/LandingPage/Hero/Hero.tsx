import { useDarkHeaderInHero } from "@site/src/utils/use-dark-header-in-hero";
import { useFontsLoaded } from "@site/src/utils/use-fonts-loaded";
import transitions from "@site/static/transitions.json";
import React, { useRef } from "react";
import AnimateSpawn from "../../Common/AnimateSpawn";
import DarkHeroStyles from "../../Common/DarkHeroStyles";
import ParticleAnimation from "./ParticleAnimation";
import {
  LiveStats,
  SmartContractMemory,
} from "./Stats";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const Hero: React.FC<{
  
  headline: React.ReactNode;
  // headlines: string[];
  children?: React.ReactNode;
}> = ({ headline, children }) => {
  const fontLoaded = useFontsLoaded();

  const darkRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(darkRef);

  return (
    <section className=" bg-black" id="home" ref={darkRef}>
      {isDark && <DarkHeroStyles bgColor="transparent" />}

      <ParticleAnimation />

      <div className="pt-[152px] pb-8 md:pt-52 md:pb-30 md:grid relative mt-[-72px] md:mt-[-111px]">
        <div className="container-10 col-start-1 row-start-1 w-full">
          <div className="md:w-7/10 lg:w-8/10">
            <h1
              className="
                animate-fade-up 
                font-[1000] uppercase tracking-[-0.03em] leading-none 
                text-[50px]
                sm:text-[46px]
                md:text-[100px] 
                lg:text-[110px] 
                text-gradient-white 
                grid mb-0"
              style={{
                animationPlayState: fontLoaded ? "running" : "paused",
              }}
            >
              {headline}
            </h1>

          </div>
        </div>
        <div className="container-12 w-full col-start-1 row-start-1 md:flex justify-end mt-8 md:mt-0">
          <AnimateSpawn
            className="md:w-80 flex flex-col gap-1 text-left"
            variants={transitions.container}
          >
            <QueryClientProvider client={queryClient}>
              {/* <EthEquivalentTxRate /> */}
              {/* <TotalBlocks /> */}
              <SmartContractMemory />
              <LiveStats />
            </QueryClientProvider>
          </AnimateSpawn>
        </div>
      </div>
      <div className="relative">{children}</div>
    </section>
  );
};

export default Hero;
