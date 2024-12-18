const fetch = require("node-fetch-retry");

let cache;

/** @type {import('@docusaurus/types').PluginModule} */
const votingRewardsPlugin = async function () {
  return {
    name: "voting-rewards",
    async loadContent() {
      if (!cache) {
        cache = [0.5, 1, 2, 3, 4, 5, 6, 7, 8].map((dissolveDelay) => {
          const dissolveDelayBonus = 1 + dissolveDelay / 8;
          const mockDailyRewards = 0.01;
          const estimatedRewards = mockDailyRewards * dissolveDelayBonus;
          return {
            dissolveDelay,
            reward: estimatedRewards * 365.25 * 100,
          };
        });
      }

      return cache;
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
};

module.exports = votingRewardsPlugin;
