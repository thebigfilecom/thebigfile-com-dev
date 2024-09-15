import snsDataJson from "@site/.docusaurus/sns-data/default/sns-data.json";
import React from "react";
import { DaoCardProps } from "../components/SpsPage/DaoCard";

export const snsData = snsDataJson as any as {
  name: string;
  description: string;
  url: string;
  logo: string;
  rootCanisterId: string;
  proposalCount: number;
  icpRaised: number;
  participants: number;
}[];

export const openChatDao = snsData.find(
  (dao) => dao.rootCanisterId === "3e3x2-xyaaa-aaaaq-aaalq-cai"
);
export const sonicDao = snsData.find(
  (dao) => dao.rootCanisterId === "qtooy-2yaaa-aaaaq-aabvq-cai"
);
export const goldDao = snsData.find(
  (dao) => dao.rootCanisterId === "tw2vt-hqaaa-aaaaq-aab6a-cai"
);

export const extraMetadata: Record<string, Partial<DaoCardProps>> = {
  "tw2vt-hqaaa-aaaaq-aab6a-cai": {
    // Gold DAO
    twitter: "https://twitter.com/gldrwa",
    description: (
      <>
        The Gold DAO represents a groundbreaking fusion of traditional gold and modern blockchain technology, allowing anyone in the world to access physical gold instantaneously, without depending on banks.
      </>
    ),
  },

  "qtooy-2yaaa-aaaaq-aabvq-cai": {
    // Sonic
    name: "Sonic",
    twitter: "https://twitter.com/sonic_ooo",
    description: (
      <>
        The open DeFi suite on the BigFile blockchain governed by the
        people for the people. Sonic unleashes the potential of crypto trading
        through innovative DeFi products.
      </>
    ),
  },

  "3e3x2-xyaaa-aaaaq-aaalq-cai": {

    // ICX
    twitter: "https://twitter.com/icxdao",
    description: (
      <>
        A decentralized social network with the functionalities you love on
        platforms like Twitter, but with privacy, ownership, and
        community-driven governance.
      </>
    ),
  },

  "rzbmc-yiaaa-aaaaq-aabsq-cai": {
    // Nuance
    twitter: "https://twitter.com/nuancedapp",
    description: (
      <>
        The world's first publishing platform built entirely on-chain. In the
        same way DeFi has taken the middleman out of finance, Nuance does the
        same for the written word.
      </>
    ),
  },

  "extk7-gaaaa-aaaaq-aacda-cai": {
    // Neutrinite
    twitter: "https://twitter.com/ICPCoins",
    description: (
      <>
        Neutrinite SPS DAO for ICPCoins. This platform is dedicated to securely
        sourcing data from DEXes, DAOs, and other DeFi applications.
      </>
    ),
  },

  "ecu3s-hiaaa-aaaaq-aacaq-cai": {
    // Trax
    twitter: "https://twitter.com/onlyontrax",
    description: (
      <>A decentralised music platform own and governed by artists and fans.</>
    ),
  },
};

export function dashboardUrlFromRootCanisterId(rootCanisterId: string) {
  return `https://dashboard.thebigfile.com/sns/${rootCanisterId}`;
}
