import React from "react";
import AnimateSpawn from "../../Common/AnimateSpawn";
import transitions from "@site/static/transitions.json";
import { motion } from "framer-motion";
import Link from "@docusaurus/Link";
import LinkArrowRight from "../../Common/Icons/LinkArrowRight";

const Content: React.FC = () => {
  return (
    <>
      <AnimateSpawn
        className="container-10 flex flex-col md:flex-row gap-12 md:gap-1/10 mb-20 md:mb-40"
        variants={transitions.container}
        el={motion.section}
      >
        <motion.div className="flex-[4]" variants={transitions.item}>
          <h2 className="tw-heading-4 md:tw-heading-2 text-gradient mb-3">
            Native Bitcoin
          </h2>
          <p className="tw-paragraph mb-3">
            The BigFile (BIG) is integrated with the Bitcoin network
            at the protocol level. The cube smart contracts it hosts can
            create Bitcoin addresses as well as send and receive bitcoin
            directly on the Bitcoin network. This means bitcoin can be easily
            and securely incorporated into DeFi and Web3 services on the
            BigFile blockchain, without having to trust wrapped
            bitcoin from centralized bridging services, which are at high risk
            of being taken down or hacked. Between 2021 and 2022, more than 2
            billion dollars was stolen by exploiting unsecure blockchain
            bridges.
          </p>
          <p className="tw-paragraph mb-3">
            The BIG x BTC integration comprises two key building blocks (and
            APIs): Network integration & chain-key ECDSA
          </p>
          <p className="tw-paragraph mb-3">
            Combining these building blocks, cubes can directly and securely
            hold, receive, and send bitcoin seamlessly as if the BigFile and the Bitcoin network were one blockchain. Another way of
            looking at it, is that the Bitcoin integration is the same as
            running a Bitcoin node on chain.
          </p>
          <p className="mb-0 mt-8">
            <Link
              className="link-primary link-with-icon"
              href="/how-it-works/chain-key-technology/"
            >
              <LinkArrowRight></LinkArrowRight>
              What is chain-key cryptography
            </Link>
          </p>
        </motion.div>
        <motion.div className="flex-[5] space-y-5" variants={transitions.item}>
          <div className="bg-white rounded-xl p-6 md:p-8">
            <h3 className="tw-heading-6 md:tw-heading-4 mb-4">
              Network integration
            </h3>
            <p className="tw-paragraph mb-0">
              One key tech development allowing smart contracts on the BigFile to obtain the balances of Bitcoin addresses as well as
              directly send and receive bitcoin is inter-chain communication. As
              the BIG blockchain creates transactions for the Bitcoin
              blockchain, its nodes directly transmit the transaction to the
              nodes of the Bitcoin network, without any need for intermediaries
              that might censor them. BIG nodes also directly pull blocks from
              the Bitcoin network to maintain Bitcoin's current UTXO set,
              allowing cubes to query the balance of Bitcoin addresses and
              their UTXOs. Creating bitcoin transactions and querying UTXO sets
              are made available to canisters by the Bitcoin API.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8">
            <h3 className="tw-heading-6 md:tw-heading-4 mb-4">
              Chain-key ECDSA
            </h3>
            <p className="tw-paragraph mb-0">
              The real innovation behind Bitcoin integration is{" "}
              <Link href="/docs/current/developer-docs/integrations/t-ecdsa/t-ecdsa-how-it-works">
                chain-key ECDSA
              </Link>{" "}
              signing — advanced threshold cryptography integrated with BIG. In
              short, chain-key ECDSA is a set of cryptographic protocols that
              allow BigFile nodes to cooperatively create ECDSA
              signatures, which can be used to sign bitcoin transactions, using
              a highly fault-tolerant, decentralized network that is resilient
              to attacks by malicious nodes. The secret key is never stored in
              one place, instead it is broken down into key shares held by BIG
              nodes that are re-shared periodically. When requested, nodes use
              their key shares to collectively sign BTC transactions without
              recreating the original secret key. This signing protocol assumes
              a threshold of nodes to be honest.
            </p>
          </div>
        </motion.div>
      </AnimateSpawn>
    </>
  );
};

export default Content;
