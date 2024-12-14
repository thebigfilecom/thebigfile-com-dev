// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  build: [
    {
      type: "category",
      label: "Getting started",
      items: [
        {
          type: "doc",
          label: "Overview of BigFile",
          id: "developer-docs/getting-started/overview-of-bigfile",
        },
        {
          type: "doc",
          label: "Development workflow",
          id: "developer-docs/getting-started/development-workflow",
        },
	{
          type: "doc",
          label: "Installing tools",
          id: "developer-docs/getting-started/install/index",
        },
        {
          type: "doc",
          label: "Hello, world!",
          id: "developer-docs/getting-started/hello-world",
        },
        {
          type: "doc",
          label: "Developer accounts",
          id: "developer-docs/getting-started/accounts",
        },
        {
          type: "doc",
          label: "Default project template",
          id: "developer-docs/getting-started/default-template",
        },
        {
          type: "category",
          label: "Deploy smart contracts",
          items: [
            {
              type: "doc",
              label: "Local deployment",
              id: "developer-docs/getting-started/deploy/local",
            },
            {
              type: "doc",
              label: "Mainnet deployment",
              id: "developer-docs/getting-started/deploy/mainnet",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Smart contracts",
      items: [
        {
          type: "category",
          label: "Overview",
          items: [
            "developer-docs/smart-contracts/overview/introduction",
            "developer-docs/smart-contracts/overview/inside-cubes",
            "developer-docs/smart-contracts/overview/cube-lifecycle",
          ],
        },
        {
          type: "category",
          label: "Write",
          items: [
            "developer-docs/smart-contracts/write/overview",
            "developer-docs/smart-contracts/write/resources",
          ],
        },
        {
          type: "doc",
          label: "Create",
          id: "developer-docs/smart-contracts/create",
        },
        {
          type: "doc",
          label: "Compile",
          id: "developer-docs/smart-contracts/compile",
        },
	{
          type: "doc",
          label: "Install",
          id: "developer-docs/smart-contracts/install",
        },
        {
          type: "category",
          label: "Deploy",
          items: [
            "developer-docs/smart-contracts/deploy/overview",
            "developer-docs/smart-contracts/deploy/larger-wasm",
            "developer-docs/smart-contracts/deploy/sharing",
          ],
        },
        {
          type: "category",
          label: "Call",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "developer-docs/smart-contracts/call/overview",
            },
            {
              type: "doc",
              label: "Passing in arguments",
              id: "developer-docs/smart-contracts/call/arguments",
            },
          ],
        },
        {
          type: "category",
          label: "Maintain",
          items: [
            "developer-docs/smart-contracts/maintain/control",
            "developer-docs/smart-contracts/maintain/delete",
            "developer-docs/smart-contracts/maintain/history",
            "developer-docs/smart-contracts/maintain/import",
            "developer-docs/smart-contracts/maintain/recovery",
            "developer-docs/smart-contracts/maintain/state",
            "developer-docs/smart-contracts/maintain/settings",
            "developer-docs/smart-contracts/maintain/storage",
            "developer-docs/smart-contracts/maintain/upgrade",
            "developer-docs/smart-contracts/maintain/resource-limits",
            "developer-docs/smart-contracts/maintain/trapping",
            {
              type: "category",
              label: "Cost",
              items: [
                "developer-docs/gas-cost",
                "developer-docs/cost-estimations-and-examples",
              ],
            },
            {
              type: "category",
              label: "Topping up canisters",
              items: [
                "developer-docs/smart-contracts/topping-up/topping-up-canister",
                "developer-docs/smart-contracts/topping-up/cycles_management_services",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Test",
          items: [
            "developer-docs/smart-contracts/test/benchmarking",
            "developer-docs/smart-contracts/test/staging-environment",
            "developer-docs/smart-contracts/test/reproducible-builds",
            "developer-docs/smart-contracts/test/troubleshooting",
          ],
        },
        {
          type: "category",
          label: "Advanced features",
          items: [
            {
              type: "doc",
              label: "Composite queries",
              id: "developer-docs/smart-contracts/advanced-features/composite-query",
            },
            {
              type: "doc",
              label: "Management canister",
              id: "developer-docs/smart-contracts/advanced-features/management-canister",
            },
            {
              type: "doc",
              label: "Handling GET/POST requests",
              id: "developer-docs/smart-contracts/advanced-features/handling-get-post-requests",
            },
            {
              type: "doc",
              label: "Serving an HTTP request",
              id: "developer-docs/smart-contracts/advanced-features/serving-http-request",
            },
            {
              type: "doc",
              label: "Async code and inter-canister calls",
              id: "developer-docs/smart-contracts/advanced-features/async-code",
            },
            {
              type: "category",
              label: "HTTPS outcalls",
              items: [
                "developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-overview",
                "developer-docs/smart-contracts/advanced-features/https-outcalls/making-http-requests",
                "developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-how-to-use",
                "developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-get",
                "developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-post",
              ],
            },
            {
              type: "doc",
              label: "On-chain randomness",
              id: "developer-docs/smart-contracts/advanced-features/randomness",
            },
            "developer-docs/smart-contracts/advanced-features/periodic-tasks",
            "developer-docs/smart-contracts/advanced-features/system-canisters",
          ],
        },
        {
          type: "category",
          label: "Best practices",
          items: [
            {
              type: "doc",
              label: "General",
              id: "developer-docs/smart-contracts/best-practices/general",
            },
            {
              type: "doc",
              label: "Storage",
              id: "developer-docs/smart-contracts/best-practices/storage",
            },
            {
              type: "doc",
              label: "Troubleshooting latency",
              id: "developer-docs/smart-contracts/best-practices/troubleshooting",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Developer tools",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "developer-docs/developer-tools/dev-tools-overview",
        },
        {
          type: "category",
          label: "Command line",
          items: [
            {
              type: "category",
              label: "dfx",
              link: {
                type: "doc",
                id: "developer-docs/developer-tools/cli-tools/cli-reference/index",
              },
	      items: [
                "developer-docs/developer-tools/cli-tools/cli-reference/big-parent",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-bootstrap",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-build",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-cache",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-canister",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-deploy",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-deps",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-generate",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-help",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-identity",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-info",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-ledger",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-new",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-ping",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-quickstart",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-schema",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-start",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-stop",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-upgrade",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-wallet",
                "developer-docs/developer-tools/cli-tools/cli-reference/big-envars",
                {
                  type: "category",
                  label: "Advanced dfx workflows",
                  items: [
                    "developer-docs/developer-tools/cli-tools/advanced-dfx/dfx-migration",
                    "developer-docs/developer-tools/cli-tools/advanced-dfx/networks-json",
                    "developer-docs/developer-tools/cli-tools/advanced-dfx/specifying-replica-version",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "quill",
              link: {
                type: "doc",
                id: "developer-docs/developer-tools/cli-tools/quill-cli-reference/index",
              },
              items: [
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-parent",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-account-balance",
                {
                  type: "category",
                  label: "quill ckbtc",
                  link: {
                    type: "doc",
                    id: "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc",
                  },
                  items: [
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-balance",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-retrieve-btc",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-retrieve-btc-status",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-transfer",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-update-balance",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-withdrawal-address",
                  ],
                },
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-claim-neurons",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-generate",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-get-neuron-info",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-get-proposal-info",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-list-neurons",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-list-proposals",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-neuron-manage",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-neuron-stake",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-public-ids",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-qr-code",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-replace-node-provider-id",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-scanner-qr-code",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-send",
                {
                  type: "category",
                  label: "quill sps",
                  link: {
                    type: "doc",
                    id: "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps",
                  },
                  items: [
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-balance",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-configure-dissolve-delay",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-disburse",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-disburse-maturity",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-follow-neuron",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-get-sale-participation",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-get-swap-refund",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-list-deployed-snses",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-make-proposal",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-make-upgrade-canister-proposal",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-neuron-permission",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-new-sale-ticket",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-pay",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-register-vote",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-split-neuron",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-stake-maturity",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-stake-neuron",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-status",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-transfer",
                  ],
                },
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-transfer",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-update-node-provider",
              ],
            },
            "developer-docs/developer-tools/cli-tools/big-admin",
          ],
        },
        {
          type: "category",
          label: "Off-chain libraries",
          items: [
            {
              type: "category",
              label: "Agents",
              items: [
                "developer-docs/developer-tools/off-chain/agents/overview",
                "developer-docs/developer-tools/off-chain/agents/javascript-agent",
                "developer-docs/developer-tools/off-chain/agents/nodejs",
                "developer-docs/developer-tools/off-chain/agents/rust-agent",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "On-chain libraries",
          items: [
            {
              type: "doc",
              id: "developer-docs/developer-tools/on-chain/cdks",
            },
          ],
        },
        {
          type: "category",
          label: "IDE",
          items: [
            "developer-docs/developer-tools/ide/vs-code",
            "developer-docs/developer-tools/ide/gitpod",
	    "developer-docs/developer-tools/ide/codespaces",
	    "developer-docs/developer-tools/ide/dev-containers",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Web apps",
      items: [
        {
          type: "category",
          label: "Application frontends",
          items: [
            "developer-docs/web-apps/application-frontends/overview",
            "developer-docs/web-apps/application-frontends/custom-frontend",
            "developer-docs/web-apps/application-frontends/existing-frontend",
            "developer-docs/web-apps/application-frontends/serving-static-assets",
            "developer-docs/web-apps/application-frontends/add-stylesheet",
            "developer-docs/web-apps/application-frontends/bundlers",
            "developer-docs/web-apps/application-frontends/webpack-dev-server",
          ],
        },
        {
          type: "category",
          label: "Browser JS",
          items: [
            "developer-docs/web-apps/browser-js/js-frameworks",
            "developer-docs/web-apps/browser-js/js-request-api",
          ],
        },
        {
          type: "category",
          label: "Frameworks",
          items: ["developer-docs/web-apps/frameworks/juno"],
        },
        {
          type: "category",
          label: "Custom domains",
          items: [
            "developer-docs/web-apps/custom-domains/using-custom-domains",
            "developer-docs/web-apps/custom-domains/dns-setup",
          ],
        },
        "developer-docs/web-apps/design-dapps",
        "developer-docs/web-apps/independently-verifying-ic-signatures",
        "developer-docs/web-apps/obtain-verify-ic-pubkey",
        {
          type: "category",
          label: "User sign-up and login",
          items: [
            {
              type: "category",
              label: "BIG ID (BIG ID)",
              items: [
                "developer-docs/web-apps/user-login/big-id/overview",
                "developer-docs/web-apps/user-login/big-id/creating-big-id",
                "developer-docs/web-apps/user-login/big-id/integrate-big-id",
                "developer-docs/web-apps/user-login/big-id/alternative-origins",
              ],
            },
            "developer-docs/web-apps/user-login/email-password",
          ],
        },
        {
          type: "category",
          label: "Using HTTP certification",
          items: [
            {
              type: "doc",
              id: "developer-docs/web-apps/http-compatible-canisters/custom-http-canisters",
              label: "Custom HTTP canisters",
            },
            {
              type: "doc",
              id: "developer-docs/web-apps/http-compatible-canisters/serving-json-over-http",
              label: "Serving JSON over HTTP",
            },
            {
              type: "doc",
              id: "developer-docs/web-apps/http-compatible-canisters/serving-static-assets-over-http",
              label: "Serving static assets over HTTP",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "ErisAI",
      items: [
        "developer-docs/ai/overview",
        "developer-docs/ai/ai-on-chain",
        "developer-docs/ai/machine-learning-sample"
      ],
    },
    {
      type: "category",
      label: "Digital assets",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "developer-docs/defi/overview",
        },
        {
          type: "category",
          label: "BIG tokens",
          items: [
            "developer-docs/defi/big-tokens/overview",
            "developer-docs/defi/big-tokens/ledger-local-setup",
            "developer-docs/defi/big-tokens/using-the-ledger",
            "developer-docs/defi/big-tokens/account-trimming",
          ],
        },
        {
          type: "category",
          label: "Rosetta API",
          link: {
            type: "doc",
            id: "developer-docs/defi/rosetta/overview",
          },
          items: [
            "developer-docs/defi/rosetta/hotkeys",
            "developer-docs/defi/rosetta/neuron-lifecycle",
            "developer-docs/defi/rosetta/staking-support",
            "developer-docs/defi/rosetta/staking-tutorial",
            "developer-docs/defi/rosetta/transfers",
          ],
        },
        {
          type: "category",
          label: "Asset custody",
          items: [
            "developer-docs/defi/asset-custody/custody-options",
            "developer-docs/defi/asset-custody/self-custody-quickstart",
          ],
        },
        {
          type: "category",
          label: "NFTs",
          items: ["developer-docs/defi/nfts/considerations-for-nft-devs"],
        },
      ],
    },
    {
      type: "category",
      label: "Governance",
      items: [
        {
          type: "category",
          label: "Network Nervous System (NNS)",
          items: [
            "developer-docs/daos/fms/overview",
            {
              type: "category",
              label: "Using the FMS dapp",
              items: [
              "developer-docs/daos/fms/fms-app-quickstart",
              ],
            },
            {
              type: "category",
              label: "Neurons",
              items: [
              "developer-docs/daos/fms/neuron-management",
              "developer-docs/daos/fms/staking-voting-rewards",
            ],
          },
        "developer-docs/daos/fms/neurons-fund",
        {
          type: "category",
          label: "Proposals",
          items: [
            "developer-docs/daos/fms/proposal-requirements",
          ],
        },
	],
        },
      ],
    },
    {
      type: "category",
      label: "Sample apps",
      items: [
        "samples/overview",
        {
          type: "category",
          label: "Hosting",
          items: [
            "references/samples/hosting/godot-html5-template/README",
            "references/samples/hosting/photo-storage/README",
            "references/samples/hosting/static-website/README",
          ],
        },
        {
          type: "category",
          label: "Rust",
          items: [
            "references/samples/rust/basic_dao/README",
            "references/samples/rust/canister-info/README",
            "references/samples/rust/composite_query/README",
            "references/samples/rust/counter/README",
            "references/samples/rust/defi/src/frontend/README",
            "references/samples/rust/dip721-nft-container/README",
            "references/samples/rust/encrypted-notes-dapp/README",
            "references/samples/rust/icp_transfer/README",
            "references/samples/rust/nft-wallet/README",
            "references/samples/rust/performance_counters/README",
            "references/samples/rust/periodic_tasks/README",
            "references/samples/rust/qrcode/README",
            "references/samples/rust/token_transfer/README",
            "references/samples/rust/token_transfer_from/README",
          ],
        },
        {
          type: "category",
          label: "Native dapps",
          items: [
            "references/samples/native-apps/unity_ii_applink/README",
            "references/samples/native-apps/unity_ii_deeplink/README",
            "references/samples/native-apps/unity_ii_deeplink/ii_integration_dapp/README",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Bootcamps",
      items: [
        {
          type: "category",
          label: "Developer journey",
          link: {
            type: "doc",
            id: "tutorials/developer-journey/index",
          },
          items: [
            {
              type: "category",
              label: "Level 0: Pre-flight operations",
              link: {
                type: "doc",
                id: "tutorials/developer-journey/level-0/index",
              },
              items: [
                "tutorials/developer-journey/level-0/big-overview",
                "tutorials/developer-journey/level-0/big-terms",
                "tutorials/developer-journey/level-0/dev-env",
                "tutorials/developer-journey/level-0/intro-smartcontracts",
                "tutorials/developer-journey/level-0/intro-languages",
                "tutorials/developer-journey/level-0/intro-big",
              ],
            },
            {
              type: "category",
              label: "Level 1: Space cadet",
              link: {
                type: "doc",
                id: "tutorials/developer-journey/level-1/index",
              },
              items: [
                "tutorials/developer-journey/level-1/1.1-live-demo",
                "tutorials/developer-journey/level-1/1.3-first-dapp",
                "tutorials/developer-journey/level-1/1.4-using-cycles",
                "tutorials/developer-journey/level-1/1.5-deploying-smartcontracts",
                "tutorials/developer-journey/level-1/1.6-managing-smartcontracts",
              ],
            },
            {
              type: "category",
              label: "Level 2: Space explorer",
              link: {
                type: "doc",
                id: "tutorials/developer-journey/level-2/index",
              },
              items: [
                "tutorials/developer-journey/level-2/2.1-storage-persistence",
                "tutorials/developer-journey/level-2/2.2-advanced-smartcontracts-calls",
                "tutorials/developer-journey/level-2/2.3-third-party-smartcontracts",
                "tutorials/developer-journey/level-2/2.4-intro-candid",
                "tutorials/developer-journey/level-2/2.5-unit-testing",
              ],
            },
            {
              type: "category",
              label: "Level 3: Space engineer",
              link: {
                type: "doc",
                id: "tutorials/developer-journey/level-3/index",
              },
              items: [
                "tutorials/developer-journey/level-3/3.1-package-managers",
                "tutorials/developer-journey/level-3/3.2-https-outcalls",
                "tutorials/developer-journey/level-3/3.3-certified-data",
                "tutorials/developer-journey/level-3/3.4-intro-to-agents",
                "tutorials/developer-journey/level-3/3.5-identities-and-auth",
              ],
            },
            {
              type: "category",
              label: "Level 4: Space pilot",
              link: {
                type: "doc",
                id: "tutorials/developer-journey/level-4/index",
              },
              items: [
                "tutorials/developer-journey/level-4/4.1-big-ledger",
                "tutorials/developer-journey/level-4/4.4-nns-governance",
                "tutorials/developer-journey/level-4/4.5-using-quill",
              ],
            },
            {
              type: "category",
              label: "Level 5: BigFile astronaut",
              link: {
                type: "doc",
                id: "tutorials/developer-journey/level-5/index",
              },
              items: [
                "tutorials/developer-journey/level-5/5.1-BIG-ETH-tutorial",
                "tutorials/developer-journey/level-5/5.2-token-swap-tutorial",
                "tutorials/developer-journey/level-5/5.3-NFT-tutorial",
                "tutorials/developer-journey/level-5/5.4-auction-tutorial",
                "tutorials/developer-journey/level-5/5.5-next-steps",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Hackathon prep course",
          link: {
            type: "doc",
            id: "tutorials/hackathon-prep-course/index",
          },
          items: [
            "tutorials/hackathon-prep-course/what-is-bigfile",
            "tutorials/hackathon-prep-course/deploying-first-fullstack-dapp",
            "tutorials/hackathon-prep-course/exploring-the-backend",
            "tutorials/hackathon-prep-course/exploring-the-frontend",
            "tutorials/hackathon-prep-course/integrating-with-tokens",
            "tutorials/hackathon-prep-course/authentication",
            "tutorials/hackathon-prep-course/obtaining-cycles",
            "tutorials/hackathon-prep-course/managing-canisters",
            "tutorials/hackathon-prep-course/sample-starter-projects",
            "tutorials/hackathon-prep-course/resources",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Core concepts",
      items: [
        "concepts/canisters-code",
        "concepts/governance",
        "concepts/nodes-subnets",
        "concepts/subnet-types",
        "concepts/tokens-cycles",
      ],
    },
    {
      type: "category",
      label: "References",
      items: [
        {
          type: "category",
          label: "BigFile specification",
          items: [
            "references/http-gateway-protocol-spec",
            "references/big-interface-spec",
            "references/id-encoding-spec",
          ],
        },
        {
          type: "doc",
          label: "Message execution properties",
          id: "references/message-execution-properties",
        },
        {
          type: "category",
          label: "Languages",
          items: [
            "references/candid-ref",
            {
              type: "link",
              label: "Rust CDK references",
              href: "/",
            },
          ],
        },
        {
          type: "category",
          label: "Core services",
          items: [
            {
              type: "doc",
              label: "Asset canister",
              id: "references/asset-canister",
            },
            {
              type: "doc",
              label: "BIG token standard",
              id: "references/big-token-standard",
            },
            {
              type: "doc",
              label: "Ledger canister",
              id: "references/ledger",
            },
          ],
        },
        {
          type: "category",
          label: "Feature references",
          items: [
            "references/https-outcalls-how-it-works",
            "references/t-ecdsa-how-it-works",
            "references/supported-signatures",
          ],
        },
      ],
    },
  ],
  rust: [
    {
      type: "category",
      label: "Building with Rust",
      link: {
        type: "doc",
        id: "developer-docs/backend/rust/index",
      },
      items: [
        "developer-docs/backend/rust/infrastructure",
        "developer-docs/backend/rust/project-organization",
        "developer-docs/backend/rust/dev-env",
        "developer-docs/backend/rust/quickstart",
        "developer-docs/backend/rust/deploying",
        "developer-docs/backend/rust/intercanister",
        "developer-docs/backend/rust/upgrading",
        "developer-docs/backend/rust/optimizing",
        "developer-docs/backend/rust/counter",
        "developer-docs/backend/rust/timers",
        "developer-docs/backend/rust/stable-structures",
        "developer-docs/backend/rust/searching-records",
        "developer-docs/backend/rust/access-control",
        "developer-docs/backend/rust/candid",
        "developer-docs/backend/rust/samples",
        "developer-docs/backend/rust/generating-candid",
        "developer-docs/backend/rust/message-inspect",
      ],
    },
  ],
  solidity: [
    {
      type: "doc",
      label: "Solidity",
      id: "developer-docs/backend/solidity/index",
    },
  ],
  python: [
    {
      type: "doc",
      label: "Python",
      id: "developer-docs/backend/python/index",
    },
  ],
  typescript: [
    {
      type: "doc",
      label: "TypeScript",
      id: "developer-docs/backend/typescript/index",
    },
  ],
};

/**
 * Add UI tests in development mode
 */
if (process.env.NODE_ENV === "development") {
  sidebars["__ui_tests_internal__"] = [
    {
      type: "autogenerated",
      dirName: "tests",
    },
  ];
}

module.exports = sidebars;
