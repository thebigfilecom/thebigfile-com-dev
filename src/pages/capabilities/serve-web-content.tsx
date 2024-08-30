import Link from "@docusaurus/Link";
import { CardWithDescription } from "@site/src/components/Common/Card";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import YoutubeVideoEmbed from "@site/src/components/Common/YoutubeVideoEmbed";
import Layout from "@theme/Layout";
import React from "react";

function FeaturePage() {
  return (
    <Layout
      title="Serve Web Content"
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
                Serve Web Content
              </h1>
              <p className="tw-lead-sm md:tw-lead mb-0">
              The BigFile (BIG) blockchain has the unique capability to host an entire dapp—frontend, backend, and data all included. This standout feature enables dapps to operate fully on-chain, maintaining the security and decentralization of blockchain technology without compromising on speed or cost-effectiveness.
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
          {/* <div className="sm:order-2 sm:shrink-0 sm:flex-1 mb-10"> */}
          {/* <YoutubeVideoEmbed videoId="jYrXk_hM4cA"></YoutubeVideoEmbed> */}
          {/* </div> */}

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
            <h2>Enabling true Web3</h2>
            <p>
            Currently, most dapps on other blockchains depend on centralized cloud providers like AWS or GCP to host their frontends, creating a single point of failure. A common industry pattern involves using smart contracts for computation while the frontend is served from a centralized Node server. This approach not only exposes the frontend to security risks but also undermines the censorship-resistant nature of blockchain, as centralized servers can be taken down at any time. True Web3 requires that all components of a dapp—including smart contract logic, on-chain data storage, and frontend delivery—are fully decentralized and executed by the blockchain itself.
              <br />
              <br />
              Hosting dapps entirely on-chain allows DAOs launched on the BIG to fully control these applications through on-chain governance. This empowers users to have complete control over these dapps, achieving true decentralization and democratization of web applications.
            </p>

            <h2>Cheap Storage</h2>
            <p>
            Unlike most blockchains, the efficiency and cost structure of the BIG blockchain closely resemble those of traditional IT stacks, making it economically viable to host data- and content-rich dapps, not just small smart contracts as on other blockchains.
              <br />
              
            </p>

            <h2>Smart contracts that can process HTTP requests</h2>
            <p>
            Blockchains handle computations differently from regular web servers, making web serving a challenging task. To address this, the BIG blockchain introduces boundary nodes. These nodes serve as an intermediary layer that translates HTTP requests from users into messages that smart contracts on the BIG can process. This enables users to update the blockchain's state simply by interacting through a web browser.
            </p>

            <h3>SEO</h3>
            <p>
            The dapps running on the BigFile seamlessly integrate into the Web 2.0 world as crawlers are able to access them directly on-chain. This allows dapps to be indexed by search engines and for their metadata to be read in order to generate previews and cards on social platforms.
            </p>

            <h3>Reverse gas model</h3>
            <p>
            In dapps built on Ethereum, for example, users need a wallet or tokens to interact with the platform. This requirement slows down adoption because using a dapp isn't as simple as clicking a website link—it involves purchasing tokens, installing browser plugins, and more. BIG dapps, however, utilize a "Reverse Gas model," where users can interact with a dapp without needing tokens. Instead, the cube smart contract stores cycles and covers the gas fees on behalf of the user.
              <br />
            </p>
          </div>
        </section>

        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15">
          <p className="tw-heading-4 text-center mb-2 w-full mx-auto md:tw-heading-2 md:mb-6 lg:w-8/12">
            Build fully on-chain dapps
          </p>
          <p className="tw-lead-sm mb-2 text-center mx-auto md:mb-6 md:w-6/12">
            Get started today.
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
              title="'Web Serving' article on the 'BIG Wiki'"
              description="Take a deep dive into the BigFile's abiliy to host full dapps 100% on-chain"
              href="https://wiki.thebigfile.com/wiki/Web_Serving"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default FeaturePage;
