import Link from "@docusaurus/Link";
import { CardWithDescription } from "@site/src/components/Common/Card";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import RightPointer from "@site/static/img/svgIcons/rightPointer.svg";
import Layout from "@theme/Layout";
import React from "react";

function FeaturePage() {
  return (
    <Layout
      title="Limitless Scaling"
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
                Limitless Scaling
              </h1>
              <p className="tw-lead-sm md:tw-lead mb-0">
              The BigFile (BIG) effortlessly scales by adding additional nodes to power new subnets, all managed through the File Management System (FMS). Unlike most blockchains, which have transaction limits hard-coded into their protocols (e.g., adding more servers to Bitcoin doesn’t increase its transaction capacity), BIG scales seamlessly without the need for cumbersome layers.
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
              See{" "}
              <Link href="https://dashboard.thebigfile.com">
                BigFile Dashboard
              </Link>{" "}
              for the scale of the BIG.
            </p>
            <h3>Subnet Architecture</h3>
            <p>
            The BigFile blockchain operates on a global network of nodes owned and managed by an expanding community of independent providers. These node providers are carefully selected and vetted by the NNS neuron holders.
              <br />
              <br />
              The BigFile's scalability is driven by its partitioning into subnet blockchains, each of which processes update and query calls independently. This architecture allows the network to scale effortlessly by simply adding more subnets. For update calls that need to be processed on every node, this approach ensures higher throughput, enabling more updates per second. The BigFile can seamlessly add hundreds of new subnets through the NNS.
              <br />
              <br />
              For query calls, scalability is easily achieved by adding more nodes to a subnet, as these calls are processed locally on a single node. Expanding the network with additional nodes and subnets ensures both web-speed performance and virtually infinite scalability.
            </p>

            <p className="mb-3 mt-6">
              <Link
                href="/"
                className="tw-heading-6 flex gap-2 items-center"
              >
                <RightPointer className="w-6 h-6"></RightPointer>
                Start building
              </Link>
            </p>
          </div>
        </section>

        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15">
          <p className="tw-heading-4 text-center mb-2 w-full mx-auto md:tw-heading-2 md:mb-6 lg:w-8/12">
            Build fast dapps. Quickly.
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
              description="Install SDKs to build dapps."
              href="/docs/current/developer-docs/smart-contracts/write/overview"
            />
            <CardWithDescription
              title="'Limitless Scaling' article on the BIG Wiki"
              description="Take a deep dive into the BigFile's scaling."
              href="https://wiki.thebigfile.com/wiki/Limitless_Scaling"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default FeaturePage;
