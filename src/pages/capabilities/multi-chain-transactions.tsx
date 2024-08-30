import Link from "@docusaurus/Link";
import { CardWithDescription } from "@site/src/components/Common/Card";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import RightPointer from "@site/static/img/svgIcons/rightPointer.svg";
import Layout from "@theme/Layout";
import React from "react";

function FeaturePage() {
  return (
    <Layout
      title="Multi-chain transactions"
      // fill in meta description
      description=""
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <main className="text-black relative">
        <section className="overflow-hidden bg-infinite text-white">
          <DarkHeroStyles></DarkHeroStyles>
          <div className="container-10 pt-12 mb-30 md:mb-52 md:pt-36 relative">
            <div className="md:w-7/10">
              <h1 className="tw-heading-3 md:tw-heading-2 mb-6">
                Multi-chain transactions
              </h1>
              <p className="tw-lead-sm md:tw-lead mb-0">
              On the BigFile, smart contracts can interact directly with other blockchains without relying on trusted centralized bridges vulnerable to hacks and rug pulls. This is achieved through Chain Key Cryptography.
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
        <section className="container-10 relative  mt-20 lg:mt-40 mb-20 md:mb-60 flex flex-col sm:flex-row sm:gap-10 md:gap-48">
          {/* 
            delete this div if image is not needed 
          */}
          <div className="sm:order-2 sm:shrink-0 sm:flex-1 mb-10">
            <img
              src="/img/features/ic-generic.png"
              alt=""
              className="w-full block"
            />
          </div>

          <div
            className="
            sm:flex-1 
            prose 
            prose-h2:tw-heading-5 prose-h2:md:tw-heading-3 prose-h2:mb-2 prose-h2:md:mb-6
            prose-h3:tw-heading-7 prose-h3:mb-2
            prose-p:tw-paragraph prose-p:mb-4
            prose-a:underline prose-a:text-infinite hover:prose-a:text-black hover:prose-a:no-underline
            "
          >
            <h2>How It Works</h2>
            <p>
            As of now, no other blockchain can create transactions on other blockchains directly from their smart contracts. When blockchains mention "native integrations," they are typically referring to a bridge operated by the company behind them.
            </p>
            <h3>Service Composability</h3>
            <p>
            The Web3 ecosystem comprises multiple blockchains, each with unique strengths and capabilities. A core principle of Web3 is service composability, where different blockchain services are combined to create new functionalities. To fully support this paradigm in a multi-chain environment, tokenized assets and liquidity must seamlessly move between services across various blockchains. The BigFile enables this without relying on centralized, trusted bridges operated by companies, ensuring a truly decentralized approach.
            </p>

            <p>
            For example, when building a DeFi framework on the Ethereum blockchain, developers often rely on centralized servers or cloud services to create the user experience. This approach introduces significant security vulnerabilities and exposes developers to legal liabilities, as regulators may argue that the service is not truly decentralized. A more secure and decentralized alternative would be to build the user experience on the BigFile using cube smart contracts, which are governed by a DAO.
            </p>

            <h3>Threshold ECDSA</h3>
            <p>
            The chain-key cryptography protocol engine has been extended to enable hosted smart contracts to manage ECDSA public keys and generate corresponding signatures without storing private keys on the blockchain, preventing potential theft. Importantly, ECDSA is the signature scheme used to sign transactions on other blockchains, allowing smart contracts on the BigFile to create transactions that can be directly executed by those blockchains.
            </p>

            <p className="mb-3 mt-6">
              <Link
                href="https://wiki.thebigfile.com/wiki/Trustless_multi-chain_web3_using_the_IC"
                className="tw-heading-6 flex gap-2 items-center"
              >
                <RightPointer className="w-6 h-6"></RightPointer>
                Learn more on Wiki
              </Link>
            </p>
          </div>
        </section>

        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15">
          <p className="tw-heading-4 text-center mb-2 w-full mx-auto md:tw-heading-2 md:mb-6 lg:w-8/12">
            Build on the BIG
          </p>
          <p className="tw-lead-sm mb-2 text-center mx-auto md:mb-6 md:w-6/12">
          Using the power of chain key cryptography, the BigFile can thus be used as an orchestration blockchain, or meta blockchain, upon which new services can be built that combine functionality and assets provided by other blockchains in the Web3 universe - all without the need to trust a central party, and without the inconvenience and risk of using wrapping and bridges.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-20">
            {/* add or remove CardWithDescription components on demand */}

            <CardWithDescription
              title="Deploy a 'Hello World' Dapp in 10 Minutes"
              description="Get started with your first BIG dapp"
              href="/docs/current/tutorials/developer-journey/"
            />
            <CardWithDescription
              title="Build dapps with the language of your choice"
              description="Learch about programming languages on the BIG."
              href="/docs/current/developer-docs/smart-contracts/write/overview"
            />
            <CardWithDescription
              title="Sample Code"
              description="Learn about BIG capabilities from community samples."
              href="/samples"
            />
            <CardWithDescription
              title="'Trustless multi-chain Web3' article on the BIG Wiki"
              description="Learn about how BIG's smart contracts directly interact with other blockchains, without trusted centralized bridges."
              href="https://wiki.thebigfile.com/wiki/Trustless_multi-chain_web3_using_the_IC"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default FeaturePage;
