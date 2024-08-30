import React from "react";
import Layout from "@theme/Layout";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import Link from "@docusaurus/Link";
import RightPointer from "@site/static/img/svgIcons/rightPointer.svg";
import {
  CardWithBackground,
  CardWithDescription,
} from "@site/src/components/Common/Card";
import ShareMeta from "../components/Common/ShareMeta";
import TranslatedLayout from "../components/Common/TranslatedLayout/TranslatedLayout";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";

function HTTPSOutcalls() {
  return (
    <Layout
      title="HTTPS Outcalls"
      description="The power of HTTPS outcalls on the BigFile lies in their ability to connect smart contracts directly to the Web 2.0 world, unlocking a wide range of use cases."
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-https-outcalls.webp"></ShareMeta>

      <main className="text-black relative">
        <section className="overflow-hidden bg-infinite text-white">
          <DarkHeroStyles></DarkHeroStyles>
          <div className="container-10 pt-12 mb-30 md:mb-52 md:pt-36 relative">
            <div className="md:w-7/10">
              <h1 className="tw-heading-3 md:tw-heading-2 mb-6">
                HTTPS outcalls
              </h1>
              <p className="tw-lead-sm md:tw-lead mb-0">
              The power of HTTPS outcalls on the BigFile lies in their ability to connect smart contracts directly to the Web 2.0 world, unlocking a multitude of use cases. Retrieve market data from crypto exchanges, send emails, integrate with other blockchains, and much more.
              </p>
            </div>
          </div>
          <div className="container-10 relative">
            <img
              src="/img/whiteBlurredCircle.webp"
              alt=""
              className="absolute pointer-events-none max-w-none w-[800px] aspect-square -right-[200px] bottom-[-400px] md:w-[1500px] md:bottom-[-680px] md:right-[-550px] object-contain object-center"
            />
          </div>
        </section>
        <section className="container-10 relative mb-20 flex flex-col sm:flex-row sm:gap-10 lg:gap-32">
          <div className="sm:order-2 sm:shrink-0 sm:flex-1 relative -top-10 md:-top-20 md:mb-10">
            <img
              src="/img/https-outcalls/big-http-graphic.png"
              alt=""
              className="w-full block"
            />
          </div>

          <div
            className=" mt-10 lg:mt-40 sm:w-6/12 md:w-4/12
            prose
            prose-h2:tw-heading-5 prose-h2:md:tw-heading-3 prose-h2:mb-2 prose-h2:md:mb-6
            prose-p:tw-paragraph prose-p:mb-4
            prose-a:underline prose-a:text-infinite hover:prose-a:text-black hover:prose-a:no-underline
            "
          >
            <h2>How it works</h2>
            <p>
            Today, most of the world's API-accessible data—such as stock prices, football scores, IoT data, or crypto exchange rates—is hosted on Web 2.0 services, outside the secure confines of a blockchain. Since smart contracts often rely on external Web 2.0 data to deliver valuable functionality, ensuring access to this data is crucial. This not only unlocks the full potential of smart contracts but also lays the groundwork for blockchain singularity, where the majority of computations occur on-chain.
            </p>
            <h3>The oracle problem</h3>
            <p>
            A common limitation of blockchain technology is that while smart contracts can receive messages, they cannot send them outside the blockchain. For example, typical smart contracts can receive messages, but they cannot send emails or SMS, query Wikipedia, or make HTTP requests to other services. This limitation has historically been a barrier for many software developers entering the Web3 space. As a result, obtaining off-chain data requires smart contracts to rely on centralized oracle services, which are controlled by intermediaries, vulnerable to hacking, and subject to service fees.
            </p>

            <h3>HTTPS outcalls replace oracles</h3>
            <p>
            Cube HTTPS outcalls on the BigFile blockchain enable direct interaction with Web 2.0 and other blockchains without relying on oracles. Cube smart contracts can make HTTPS outcalls to specified URLs to directly access off-chain data or interact with off-chain systems, such as Web 2.0 services or enterprise IT infrastructure.
            </p>
            <p className="mb-3 mt-6">
              <Link
                href="https://wiki.thebigfile.com/wiki/HTTPS_outcalls"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-heading-6 flex gap-2 items-center"
              >
                <RightPointer className="w-6 h-6"></RightPointer>
                Visit the Wiki for more details
              </Link>
            </p>
          </div>
        </section>
        <section className="mb-20 md:mb-40 container-12 flex flex-col gap-16 md:gap-40">
          <TranslatedLayout
            reverse={true}
            imageUrl="/img/https-outcalls/outcalls.webp"
          >
            <h2 className="tw-heading-4 md:tw-heading-60 md:mb-6">
              Exchange rate cube
            </h2>
            <p className="tw-lead-sm mb-6 md:mb-10">
            Powered by HTTPS outcalls, the exchange rate canister (XRC) on the BigFile fetches data from Web 2.0 servers and operates entirely on-chain. It interacts with major cryptocurrency exchanges using their public APIs to retrieve real-time or historical pricing information. The XRC also periodically queries public APIs from global foreign exchange data providers to obtain forex rates. This canister can be integrated into DEXs to compare exchange rates with market rates and determine the value of assets managed in a cube smart contract, for example, relative to a fiat currency.
            </p>
            <p className="mb-6">
              <Link
                href="https://github.com/thebigfilecom/exchange-rate-canister"
                className="link-primary link-with-icon"
              >
                Power your dapp with the XRC
                <LinkArrowUpRight />
              </Link>
            </p>
            <p className="mb-0">
              <Link
                href="https://forum.thebigfile.com/t/a-smart-contract-with-oracle-capabilities/28"
                className="link-primary link-with-icon"
              >
                Read the blog
                <LinkArrowUpRight />
              </Link>
            </p>
          </TranslatedLayout>
        </section>
        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15">
          <p className="tw-heading-4 text-center mb-2 w-full mx-auto md:tw-heading-2 md:mb-6 lg:w-8/12">
            Build with HTTPS outcalls
          </p>
          <p className="tw-lead-sm mb-2 text-center mx-auto md:mb-6 md:w-6/12">
          Connect smart contracts directly to Web 2.0 to interact with other blockchains or fetch IoT data, stock prices, weather forecasts, and more—all without introducing additional trust assumptions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-20">
            <CardWithDescription
              title="Dev docs"
              description="Start integrating the HTTPS outcalls feature in your dapps and services to connect to off-chain data."
              href="https://thebigfile.com/docs/current/developer-docs/smart-contracts/advanced-features/https-outcalls/"
            />
            <CardWithDescription
              title="Beyond oracles"
              description="Read the BigFile Forum why HTTPS outcalls are  important for blockchains. "
              href="https://forum.thebigfile.com/t/direct-https-outcalls-from-cube-smart-contracts-on-the-bigfile/29"
            />
            <CardWithBackground
              title="Sample Code"
              description="Build a dapp with cube outgoing HTTPS outcalls"
              href="/samples?term=https+outcalls"
              bgImageClass={"bg-https-outcalls"}
            />
            <CardWithDescription
              title="BigFile Wiki"
              description="Get a high-level overview of how HTTPS outcalls work on the BigFile."
              href="https://wiki.thebigfile.com/wiki/HTTPS_outcalls"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default HTTPSOutcalls;
