const redirects = `

  # external redirects (/from -> https://.../to/)
  /docs/token-holders/seed-donations.html https://wiki.thebigfile.com/wiki/How-To:_Claim_neurons_for_seed_participants
  /deck-main https://deck.thebigfile.com

  # .html file internal redirects (/../from.html -> to)
  /docs/developers-guide/working-with-canisters.html /docs/current/developer-docs/smart-contracts/maintain/settings

  # regular internal redirects (from -> to)
  /features/green /capabilities/sustainability
  /features /capabilities

  /howitworks /how-it-works
  /showcase /ecosystem
  /basics /what-is-big-file
  /docs/videos-tutorials /developers
  /docs /docs/current/home
  /docs/current/ /docs/current/home
  /docs/current/concepts/file-storage /file-storage
  /docs/current/developer-docs/ic-overview /docs/current/developer-docs/getting-started/overview-of-bigfile
  /docs/current/developer-docs/production/computation-and-storage-costs /docs/current/developer-docs/gas-cost
  /docs/current/developer-docs/deploy/computation-and-storage-costs /docs/current/developer-docs/gas-cost
  /docs/current/ic-overview  /docs/current/home
  /docs/download /docs/current/developer-docs/getting-started/install/
  /docs/http-middleware /docs/current/home
  /docs/introduction/welcome /docs/current/home
  /docs/operators-guide/ops-guide /docs/current/home
  /docs/search /docs/current/home
  /docs/support /docs/current/home
  /docs/samples /samples
  /docs/samples/codelabs /samples
  /docs/samples/codelabs/data-persistence /samples
  /docs/samples/codelabs/minimalistic-motoko-dapp /samples
  /docs/samples/codelabs/minimalistic-rust-dapp /samples
  /docs/samples/codelabs/simple-nft /samples
  /docs/samples/codelabs/static-website /samples
  /docs/samples/* /samples

  /docs/current/developer-docs/integrations/http_requests/http_requests-how-it-works /docs/current/references/https-outcalls-how-it-works
  
  /docs/rust-guide/rust-intro /docs/current/developer-docs/backend/rust/
  /docs/languages/languages-overview /docs/current/developer-docs/smart-contracts/write/overview
  /docs/current/developer-docs/smart-contracts/write/choosing-language /docs/current/developer-docs/smart-contracts/write/overview
  /docs/current/developer-docs/frontend/my-contacts /docs/current/developer-docs/web-apps/application-frontends/add-stylesheet
  /docs/current/developer-docs/updates/computation-and-storage-costs /docs/current/developer-docs/gas-cost
  /docs/current/developer-docs/updates/release-notes/ /docs/current/other/updates/release-notes/
  /docs/current/developer-docs/quickstart/local-quickstart /docs/current/developer-docs/getting-started/install/
  /docs/current/developer-docs/setup/install/index.mdx /docs/current/developer-docs/getting-started/install/


  /docs/current/developer-docs/build/ /docs/current/developer-docs/smart-contracts/write/overview
  /docs/current/developer-docs/build/languages/other-languages/* /docs/current/developer-docs/smart-contracts/write/overview
  /docs/current/developer-docs/build/languages/work-with-languages /docs/current/developer-docs/smart-contracts/write/overview
  /docs/current/developer-docs/build/using-an-agent /docs/current/developer-docs/smart-contracts/write/overview
  /docs/current/developer-docs/build/backend/reproducible-builds /docs/current/developer-docs/smart-contracts/test/reproducible-builds
  /docs/current/developer-docs/build/frontend/custom-frontend /docs/current/developer-docs/web-apps/application-frontends/custom-frontend
  /docs/current/developer-docs/build/frontend/webpack-config /docs/current/developer-docs/web-apps/application-frontends/overview#modifying-the-webpack-configuration
  /docs/current/developer-docs/build/install-upgrade-remove /docs/current/developer-docs/getting-started/install/
  /docs/current/developer-docs/build/languages/rust/* /docs/current/developer-docs/backend/rust/
  /docs/current/developer-docs/build/project-setup/manage-canisters /docs/current/developer-docs/smart-contracts/maintain/settings
  /docs/current/developer-docs/build/project-setup/design-dapps /docs/current/developer-docs/web-apps/design-dapps
  /docs/current/developer-docs/build/troubleshooting /docs/current/developer-docs/smart-contracts/test/troubleshooting
  /docs/current/developer-docs/build/agents/ /docs/current/developer-docs/developer-tools/off-chain/agents/overview
  /docs/current/developer-docs/build/agents/javascript/javascript-intro /docs/current/developer-docs/developer-tools/off-chain/agents/javascript-agent
  /docs/current/developer-docs/build/agents/javascript/*  /docs/current/developer-docs/developer-tools/off-chain/agents/javascript-agent


  /docs/current/developer-docs/build/cdks/cdk-rs-dfinity/*  /docs/current/developer-docs/backend/rust/:splat





  /docs/developers-guide/concepts/file-storage /file-storage
  /docs/developers-guide/concepts/concepts-intro /docs/current/developer-docs/getting-started/overview-of-bigfile
  /docs/developers-guide/customize-projects /docs/current/developer-docs/smart-contracts/compile
  /docs/developers-guide/design-apps /docs/current/developer-docs/web-apps/design-dapps
  /docs/developers-guide/install-upgrade-remove /docs/current/developer-docs/getting-started/install/
  /docs/developers-guide/lang-service-ide /docs/current/developer-docs/developer-tools/ide/vs-code
  /docs/developers-guide/reinstalling-dfx /docs/current/developer-docs/getting-started/install/
  /docs/developers-guide/sample-apps /samples
  /docs/developers-guide/sdk-guide /docs/current/developer-docs/getting-started/install/
  /docs/developers-guide/troubleshooting /docs/current/developer-docs/smart-contracts/test/troubleshooting

  /docs/developers-guide/tutorials/custom-frontend /docs/current/developer-docs/web-apps/application-frontends/custom-frontend
  /docs/developers-guide/tutorials/my-contacts /docs/current/developer-docs/web-apps/application-frontends/add-stylesheet
  /docs/developers-guide/webpack-config /docs/current/developer-docs/web-apps/application-frontends/overview
  /docs/developers-guide/work-with-languages /docs/current/developer-docs/smart-contracts/write/overview
  /docs/developers-guide/working-with-canisters /docs/current/developer-docs/smart-contracts/maintain/settings

  /docs/quickstart/1-quickstart /docs/current/tutorials/developer-journey/
  /docs/quickstart/2-quickstart /docs/current/tutorials/developer-journey/
  /docs/quickstart/3-quickstart /docs/current/tutorials/developer-journey/
  /docs/quickstart/4-2-convert-icp-to-cycles /docs/current/tutorials/developer-journey/
  /docs/quickstart/4-quickstart /docs/current/tutorials/developer-journey/
  /docs/quickstart/5-quickstart /docs/current/tutorials/developer-journey/
  /docs/quickstart/local-quickstart /docs/current/developer-docs/getting-started/deploy/local
  /docs/quickstart/network-quickstart /docs/current/developer-docs/getting-started/deploy/mainnet
  /docs/quickstart/quickstart-intro /docs/current/tutorials/developer-journey/
  /docs/quickstart/newcomers /docs/current/home
  /docs/current/developer-docs/quickstart/* /docs/current/tutorials/developer-journey/
  /developers-guide/quickstart /docs/current/tutorials/developer-journey/
  /docs/current/developer-docs/quickstart/windows-wsl /docs/current/developer-docs/getting-started/install/windows-wsl
  /docs/current/developer-docs/quickstart/hello10mins/ /docs/current/tutorials/developer-journey/

  /docs/rosetta-api/ledger /docs/current/developer-docs/defi/big-tokens/overview
  /docs/rosetta-api/ledger-local-setup /docs/current/developer-docs/defi/big-tokens/ledger-local-setup
  /docs/integration/ledger-quick-start /docs/current/developer-docs/defi/big-tokens/overview
  /docs/current/developer-docs/functionality/ledger/* /docs/current/developer-docs/defi/big-tokens/ledger-local-setup


  /docs/current/developer-docs/best-practices/* /docs/current/developer-docs/use-cases/:splat
  /docs/current/developer-docs/deploy/* /docs/current/developer-docs/production/:splat
  /docs/current/tokenomics/nns/community-fund /docs/current/developer-docs/daos/fms/neurons-fund
  /docs/developers-guide/cli-reference/* /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/:splat
  /docs/developers-guide/concepts/* /docs/current/developer-docs/getting-started/overview-of-bigfile

  /docs/ic-identity-guide/* /docs/current/tokenomics/identity-auth/:splat

  /docs/release-notes/* /docs/current/other/updates/release-notes/:splat
  /docs/rosetta-api/* /docs/current/developer-docs/integrations/rosetta/:splat
  /docs/rust-guide/* /docs/current/developer-docs/backend/rust/:splat
  /docs/token-holders/* /docs/current/tokenomics/token-holders/:splat
  /features/* /capabilities/:splat
  /howitworks/* /how-it-works/:splat
  /sustainability /capabilities/sustainability
  /docs/current/tutorials/deploy_sample_app /docs/current/tutorials/developer-journey/
  /install.sh)" /docs/current/developer-docs/getting-started/install/
  /docs/current/tutorials/create_your_first_app/ /docs/current/tutorials/developer-journey/
  /docs/quickstart/quickstart-intro.html /docs/current/developer-docs/getting-started/install/
  /docs/ic-identity-guide/auth-how-to.html /docs/current/developer-docs/web-apps/user-login/big-id/integrate-big-id/
  /docs/current/developer-docs/build/agents/agent-dfinity	/docs/current/developer-docs/developer-tools/off-chain/agents/overview
  /docs/current/tokenomics/identity-auth/what-is-ic-identity /docs/current/developer-docs/web-apps/user-login/big-id/overview
  /docs/quickstart/local-quickstart.html /docs/current/developer-docs/getting-started/install/
  /language-guide/ /docs/current/tutorials/developer-journey/level-0/intro-languages
  /docs/current/developer-docs/build/cdks/cdk-rs-dfinity/rust-quickstart /docs/current/developer-docs/backend/rust/
  /docs/quickstart/network-quickstart.html /docs/current/developer-docs/getting-started/install/
  /docs/token-holders/nns-app-quickstart.html /docs/current/developer-docs/daos/fms/fms-app-quickstart
  /developers-guide/quickstart.html /docs/current/tutorials/developer-journey/
  /docs/current/tokenomics/identity-auth/auth-how-to /docs/current/developer-docs/web-apps/user-login/big-id/overview
  /docs/developers-guide/tutorials-intro.html /docs/current/tutorials/developer-journey/
  /docs/quickstart/quickstart.html /docs/current/developer-docs/getting-started/install/
  /apis/site/proxy /docs/current/references/http-gateway-protocol-spec
  /docs/developers-guide/concepts/what-is-ic /docs/current/developer-docs/getting-started/overview-of-bigfile
  /language-guide/index /docs/current/tutorials/developer-journey/level-0/intro-languages
  /docs/current/developer-docs/production/instruction-limits /docs/current/developer-docs/smart-contracts/maintain/resource-limits
  /docs/current/developer-docs/backend/resource-limits /docs/current/developer-docs/smart-contracts/maintain/resource-limits
  /docs/current/concepts/data-centers /docs/current/developer-docs/getting-started/overview-of-bigfile
  /docs/current/developer-docs/build/languages/rust/rust-intro /docs/current/developer-docs/backend/rust/
  /docs/current/developer-docs/frontend/javascript-frontend /docs/current/developer-docs/web-apps/application-frontends/overview
  /docs/current/developer-docs/frontend/react-frontend /docs/current/developer-docs/web-apps/application-frontends/overview
  /docs/current/developer-docs/frontend/svelte-frontend /docs/current/developer-docs/web-apps/application-frontends/overview
  /docs/current/developer-docs/frontend/vue-frontend /docs/current/developer-docs/web-apps/application-frontends/overview
  /docs/current/concepts/index /docs/current/developer-docs/getting-started/overview-of-bigfile
  /docs/current/concepts /docs/current/developer-docs/getting-started/overview-of-bigfile
  /docs/current/developer-docs/integrations/https-outcalls/index /docs/current/developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-how-to-use
  /docs/current/developer-docs/integrations/https-outcalls /docs/current/developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-how-to-use
  /docs/current/developer-docs/integrations/index /docs/current/developer-docs/getting-started/overview-of-bigfile
  /docs/current/developer-docs/integrations /docs/current/developer-docs/getting-started/overview-of-bigfile
  /docs/current/developer-docs/setup/index /docs/current/developer-docs/getting-started/install/
  /docs/current/developer-docs/setup /docs/current/developer-docs/getting-started/install/
  /docs/current/developer-docs/setup/quickstart /docs/current/developer-docs/getting-started/install/
  /docs/current/tutorials/index /docs/current/developer-docs/getting-started/overview-of-bigfile
  /docs/current/tutorials/ /docs/current/developer-docs/getting-started/overview-of-bigfile
  /docs/current/developer-docs/backend/eu-subnets /docs/current/concepts/subnet-types
  /docs/current/developer-docs/backend/choosing-language /docs/current/developer-docs/smart-contracts/write/overview
  /docs/current/developer-docs/production/deploying-and-upgrading /docs/current/developer-docs/smart-contracts/deploy/overview
  /docs/current/developer-docs/index /docs/current/developer-docs/getting-started/overview-of-bigfile
  /docs/current/developer-docs /docs/current/developer-docs/getting-started/overview-of-bigfile
  /docs/current/concepts/what-is-ic /docs/current/developer-docs/getting-started/overview-of-bigfile
  /docs/current/developer-docs/setup/development-workflow /docs/current/developer-docs/getting-started/development-workflow
  /docs/current/developer-docs/setup/hello-world /docs/current/developer-docs/getting-started/hello-world
  /docs/current/developer-docs/setup/install/ /docs/current/developer-docs/getting-started/install/
  /docs/current/developer-docs/setup/accounts /docs/current/developer-docs/getting-started/accounts
  /docs/current/developer-docs/setup/first-canister /docs/current/developer-docs/getting-started/default-template
  /docs/current/developer-docs/setup/deploy-locally /docs/current/developer-docs/getting-started/deploy/local
  /docs/current/developer-docs/setup/deploy-mainnet /docs/current/developer-docs/getting-started/deploy/mainnet
  /docs/current/developer-docs/production/best-practices /docs/current/developer-docs/smart-contracts/best-practices/general
  /docs/current/references/dev-tools-overview /docs/current/developer-docs/developer-tools/dev-tools-overview
  /docs/current/references/cdks /docs/current/developer-docs/developer-tools/on-chain/cdks
  /docs/current/developer-docs/agents/ /docs/current/developer-docs/developer-tools/off-chain/agents/overview
  /docs/current/developer-docs/agents/javascript-intro /docs/current/developer-docs/developer-tools/off-chain/agents/javascript-agent
  /docs/current/developer-docs/agents/nodejs /docs/current/developer-docs/developer-tools/off-chain/agents/nodejs
  /docs/current/developer-docs/agents/ic-agent-dfinity /docs/current/developer-docs/developer-tools/off-chain/agents/rust-agent
  /docs/current/references/gitpod /docs/current/developer-docs/developer-tools/ide/gitpod
  /docs/current/developer-docs/setup/vs-code /docs/current/developer-docs/developer-tools/ide/vs-code
  /docs/current/references/cli-reference/ /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/
  /docs/current/references/cli-reference/big-parent /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-parent
  /docs/current/references/cli-reference/big-bootstrap /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-bootstrap
  /docs/current/references/cli-reference/big-build /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-build
  /docs/current/references/cli-reference/big-cache /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-cache
  /docs/current/references/cli-reference/big-canister /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-canister
  /docs/current/references/cli-reference/big-deploy /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-deploy
  /docs/current/references/cli-reference/big-generate /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-generate
  /docs/current/references/cli-reference/big-help /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-help
  /docs/current/references/cli-reference/big-identity /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-identity
  /docs/current/references/cli-reference/big-info /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-info
  /docs/current/references/cli-reference/big-ledger /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-ledger
  /docs/current/references/cli-reference/big-new /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-new
  /docs/current/references/cli-reference/big-ping /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-ping
  /docs/current/references/cli-reference/big-quickstart /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-quickstart
  /docs/current/references/cli-reference/big-schema /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-schema
  /docs/current/references/cli-reference/big-start /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-start
  /docs/current/references/cli-reference/big-stop /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-stop
  /docs/current/references/cli-reference/big-upgrade /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-upgrade
  /docs/current/references/cli-reference/big-wallet /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-wallet
  /docs/current/references/cli-reference/big-envars /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/big-envars
  /docs/current/references/cli-reference/big-json-reference /docs/current/developer-docs/developer-tools/cli-tools/big-json-reference
  /docs/current/references/quill-cli-reference/ /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-parent
  /docs/current/references/quill-cli-reference/quill-account-balance /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-account-balance
  /docs/current/references/quill-cli-reference/ckbtc/quill-ckbtc /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc
  /docs/current/references/quill-cli-reference/ckbtc/quill-ckbtc-balance /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-balance
  /docs/current/references/quill-cli-reference/ckbtc/quill-ckbtc-retrieve-btc /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-retrieve-btc
  /docs/current/references/quill-cli-reference/ckbtc/quill-ckbtc-retrieve-btc-status /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-retrieve-btc-status
  /docs/current/references/quill-cli-reference/ckbtc/quill-ckbtc-transfer /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-transfer
  /docs/current/references/quill-cli-reference/ckbtc/quill-ckbtc-update-balance /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-update-balance
  /docs/current/references/quill-cli-reference/ckbtc/quill-ckbtc-withdrawal-address /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-withdrawal-address
  /docs/current/references/quill-cli-reference/quill-claim-neurons /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-claim-neurons
  /docs/current/references/quill-cli-reference/quill-generate /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-generate
  /docs/current/references/quill-cli-reference/quill-get-neuron-info /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-get-neuron-info
  /docs/current/references/quill-cli-reference/quill-get-proposal-info /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-get-proposal-info
  /docs/current/references/quill-cli-reference/quill-list-neurons /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-list-neurons
  /docs/current/references/quill-cli-reference/quill-list-proposals /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-list-proposals
  /docs/current/references/quill-cli-reference/quill-neuron-manage /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-neuron-manage
  /docs/current/references/quill-cli-reference/quill-neuron-stake /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-neuron-stake
  /docs/current/references/quill-cli-reference/quill-public-ids /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-public-ids
  /docs/current/references/quill-cli-reference/quill-qr-code /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-qr-code
  /docs/current/references/quill-cli-reference/quill-replace-node-provider-id /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-replace-node-provider-id
  /docs/current/references/quill-cli-reference/quill-scanner-qr-code /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-scanner-qr-code
  /docs/current/references/quill-cli-reference/quill-send /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-send
  /docs/current/references/quill-cli-reference/sps/quill-sps /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps
  /docs/current/references/quill-cli-reference/sps/quill-sps-balance /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-balance
  /docs/current/references/quill-cli-reference/sps/quill-sps-configure-dissolve-delay /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-configure-dissolve-delay
  /docs/current/references/quill-cli-reference/sps/quill-sps-disburse /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-disburse
  /docs/current/references/quill-cli-reference/sps/quill-sps-disburse-maturity /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-disburse-maturity
  /docs/current/references/quill-cli-reference/sps/quill-sps-follow-neuron /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-follow-neuron
  /docs/current/references/quill-cli-reference/sps/quill-sps-get-sale-participation /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-get-sale-participation
  /docs/current/references/quill-cli-reference/sps/quill-sps-get-swap-refund /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-get-swap-refund
  /docs/current/references/quill-cli-reference/sps/quill-sps-list-deployed-snses /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-list-deployed-snses
  /docs/current/references/quill-cli-reference/sps/quill-sps-make-proposal /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-make-proposal
  /docs/current/references/quill-cli-reference/sps/quill-sps-make-upgrade-canister-proposal /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-make-upgrade-canister-proposal
  /docs/current/references/quill-cli-reference/sps/quill-sps-neuron-permission /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-neuron-permission
  /docs/current/references/quill-cli-reference/sps/quill-sps-new-sale-ticket /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-new-sale-ticket
  /docs/current/references/quill-cli-reference/sps/quill-sps-pay /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-pay
  /docs/current/references/quill-cli-reference/sps/quill-sps-register-vote /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-register-vote
  /docs/current/references/quill-cli-reference/sps/quill-sps-split-neuron /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-split-neuron
  /docs/current/references/quill-cli-reference/sps/quill-sps-stake-maturity /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-stake-maturity
  /docs/current/references/quill-cli-reference/sps/quill-sps-stake-neuron /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-stake-neuron
  /docs/current/references/quill-cli-reference/sps/quill-sps-status /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-status
  /docs/current/references/quill-cli-reference/sps/quill-sps-transfer /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/sps/quill-sps-transfer
  /docs/current/references/quill-cli-reference/quill-transfer /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-transfer
  /docs/current/references/quill-cli-reference/quill-update-node-provider /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-update-node-provider
  /docs/current/developer-docs/backend/candid/generating-candid /docs/current/developer-docs/backend/rust/generating-candid
  /docs/current/developer-docs/setup/deploy /docs/current/developer-docs/smart-contracts/deploy/overview
  /docs/current/developer-docs/production/larger-wasm /docs/current/developer-docs/smart-contracts/deploy/larger-wasm
  /docs/current/developer-docs/production/social-sharing /docs/current/developer-docs/smart-contracts/deploy/sharing
  /docs/current/developer-docs/setup/delete /docs/current/developer-docs/smart-contracts/maintain/delete
  /docs/current/developer-docs/production/canister-history /docs/current/developer-docs/smart-contracts/maintain/history
  /docs/current/developer-docs/setup/build /docs/current/developer-docs/smart-contracts/compile
  /docs/current/developer-docs/setup/pulling-canister-dependencies /docs/current/developer-docs/smart-contracts/maintain/import
  /docs/current/developer-docs/production/canister-recovery /docs/current/developer-docs/smart-contracts/maintain/recovery
  /docs/current/developer-docs/setup/state /docs/current/developer-docs/smart-contracts/maintain/state
  /docs/current/developer-docs/setup/manage-canisters /docs/current/developer-docs/smart-contracts/maintain/settings
  /docs/current/developer-docs/production/storage /docs/current/developer-docs/smart-contracts/maintain/storage
  /docs/current/developer-docs/setup/upgrade /docs/current/developer-docs/smart-contracts/maintain/upgrade
  /docs/current/developer-docs/production/resource-limits /docs/current/developer-docs/smart-contracts/maintain/resource-limits
  /docs/current/developer-docs/setup/manage-projects /docs/current/developer-docs/smart-contracts/compile
  /docs/current/developer-docs/production/topping-up-canister /docs/current/developer-docs/smart-contracts/topping-up/topping-up-canister
  /docs/current/developer-docs/getting-started/cycles/cycles_management_services /docs/current/developer-docs/smart-contracts/topping-up/cycles_management_services
  /docs/current/developer-docs/production/staging-environment /docs/current/developer-docs/smart-contracts/test/staging-environment
  /docs/current/developer-docs/backend/reproducible-builds /docs/current/developer-docs/smart-contracts/test/reproducible-builds
  /docs/current/developer-docs/backend/troubleshooting /docs/current/developer-docs/smart-contracts/test/troubleshooting
  /docs/current/developer-docs/integrations/composite-query /docs/current/developer-docs/smart-contracts/advanced-features/composite-query
  /docs/current/developer-docs/backend/periodic-tasks /docs/current/developer-docs/smart-contracts/advanced-features/periodic-tasks
  /docs/current/developer-docs/setup/best-practices/architecture /docs/current/developer-docs/smart-contracts/write/overview
  /docs/current/developer-docs/smart-contracts/best-practices/architecture /docs/current/developer-docs/smart-contracts/write/overview
  /docs/current/developer-docs/setup/best-practices/general /docs/current/developer-docs/smart-contracts/best-practices/general
  /docs/current/developer-docs/setup/best-practices/storage /docs/current/developer-docs/smart-contracts/best-practices/storage
  /docs/current/developer-docs/setup/best-practices/troubleshooting /docs/current/developer-docs/smart-contracts/best-practices/troubleshooting
  /docs/current/developer-docs/frontend/ /docs/current/developer-docs/web-apps/application-frontends/overview
  /docs/current/developer-docs/frontend/custom-frontend /docs/current/developer-docs/web-apps/application-frontends/custom-frontend
  /docs/current/developer-docs/frontend/add-stylesheet /docs/current/developer-docs/web-apps/application-frontends/add-stylesheet
  /docs/current/developer-docs/frontend/boilerplate-frontend /docs/current/developer-docs/web-apps/application-frontends/overview
  /docs/current/developer-docs/frontend/existing-frontend /docs/current/developer-docs/web-apps/application-frontends/existing-frontend
  /docs/current/developer-docs/production/custom-domain/ /docs/current/developer-docs/web-apps/custom-domains/using-custom-domains
  /docs/current/developer-docs/production/custom-domain/dns-setup /docs/current/developer-docs/web-apps/custom-domains/dns-setup
  /docs/current/developer-docs/backend/design-dapps /docs/current/developer-docs/web-apps/design-dapps
  /docs/current/developer-docs/integrations/big-id/overview  /docs/current/developer-docs/web-apps/user-login/big-id/overview
  /docs/current/developer-docs/integrations/big-id/creating-big-id /docs/current/developer-docs/web-apps/user-login/big-id/creating-big-id
  /docs/current/developer-docs/integrations/big-id/integrate-identity /docs/current/developer-docs/web-apps/user-login/big-id/integrate-big-id
  /docs/current/developer-docs/integrations/big-id/alternative-origins /docs/current/developer-docs/web-apps/user-login/big-id/alternative-origins  
  /docs/current/developer-docs/integrations/ledger/introduction_and_overview /docs/current/developer-docs/defi/overview
  /docs/current/developer-docs/integrations/ledger/  /docs/current/developer-docs/defi/big-tokens/overview
  /docs/current/developer-docs/integrations/ledger/ledger-local-setup  /docs/current/developer-docs/defi/big-tokens/ledger-local-setup
  /docs/current/developer-docs/integrations/ledger/interact-with-ledger  /docs/current/developer-docs/defi/big-tokens/using-the-ledger
  /docs/current/developer-docs/integrations/ledger/collecting-dust /docs/current/developer-docs/defi/big-tokens/account-trimming
  /docs/current/developer-docs/integrations/rosetta/index  /docs/current/developer-docs/defi/rosetta/overview
  /docs/current/developer-docs/integrations/rosetta/  /docs/current/developer-docs/defi/rosetta/overview
  /docs/current/developer-docs/integrations/rosetta/hotkeys /docs/current/developer-docs/defi/rosetta/hotkeys
  /docs/current/developer-docs/integrations/rosetta/neuron-lifecycle /docs/current/developer-docs/defi/rosetta/neuron-lifecycle
  /docs/current/developer-docs/integrations/rosetta/staking-support /docs/current/developer-docs/defi/rosetta/staking-support
  /docs/current/developer-docs/integrations/rosetta/staking-tutorial /docs/current/developer-docs/defi/rosetta/staking-tutorial
  /docs/current/developer-docs/integrations/rosetta/transfers /docs/current/developer-docs/defi/rosetta/transfers
  /docs/current/tokenomics/token-holders/custody-options-intro /docs/current/developer-docs/defi/asset-custody/custody-options
  /docs/current/tokenomics/token-holders/self-custody-quickstart /docs/current/developer-docs/defi/asset-custody/self-custody-quickstart
  /docs/current/developer-docs/use-cases/considerations-for-nft-devs /docs/current/developer-docs/defi/nfts/considerations-for-nft-devs
  /docs/current/tokenomics/nns/nns-intro /docs/current/developer-docs/daos/fms/overview
  /docs/current/tokenomics/token-holders/nns-app-quickstart /docs/current/developer-docs/daos/fms/fms-app-quickstart
  /docs/current/tokenomics/nns/neurons-fund /docs/current/developer-docs/daos/fms/neurons-fund
  /docs/current/tokenomics/nns/nns-staking-voting-rewards /docs/current/developer-docs/daos/fms/staking-voting-rewards
  /docs/current/tokenomics/nns/proposal-requirements /docs/current/developer-docs/daos/fms/proposal-requirements
  /docs/current/tokenomics/index /docs/current/developer-docs/daos/overview
  /docs/current/tokenomics/ /docs/current/developer-docs/daos/overview
  /docs/current/developer-docs/integrations/https-outcalls/https-outcalls-how-it-works /docs/current/references/https-outcalls-how-it-works
  /docs/current/developer-docs/developer-tools/cli-tools/networks-json /docs/current/developer-docs/developer-tools/cli-tools/advanced-dfx/networks-json
  /docs/current/developer-docs/production/system-canisters /docs/current/developer-docs/smart-contracts/advanced-features/system-canisters
  /docs/current/developer-docs/backend/arguments /docs/current/developer-docs/smart-contracts/call/arguments
  /docs/current/developer-docs/frontend/index /docs/current/developer-docs/web-apps/application-frontends/overview
  /docs/current/developer-docs/integrations/https-outcalls/https-outcalls-get /docs/current/developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-get
  /docs/current/developer-docs/integrations/https-outcalls/https-outcalls-how-to-use /docs/current/developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-how-to-use
  /docs/current/developer-docs/integrations/https-outcalls/https-outcalls-overview /docs/current/developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-overview
  /docs/current/developer-docs/integrations/https-outcalls/https-outcalls-post /docs/current/developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-post
  /docs/current/developer-docs/setup/big-admin /docs/current/developer-docs/developer-tools/cli-tools/big-admin
  /docs/current/developer-docs/backend/subnet-types /docs/current/concepts/subnet-types
  /docs/current/samples/host-a-website /docs/current/references/samples/hosting/static-website/
  /docs/current/developer-docs/smart-contracts/overview/development-cycle /docs/current/developer-docs/smart-contracts/overview/cube-lifecycle
  /docs/current/developer-docs/web-apps/user-login/big-id/integrate-identity /docs/current/developer-docs/web-apps/user-login/big-id/integrate-big-id
  `
  .split(/[\r\n]+/)
  .map((line) => line.trim().replace(/^#.*$/, "").trim())
  .filter((l) => l.length > 0)
  .map((l) => l.split(/\s+/));

function isSplat(redirect) {
  return redirect[0].includes("/*");
}

function isExternal(redirect) {
  return redirect[1].startsWith("http");
}

function isExactUrl(redirect) {
  return redirect[0].endsWith(".html");
}

function ruleToRedirect(rule) {
  const from = rule[0].replace(/(.+)\/$/, "$1");
  const to = rule[1];
  return {
    from,
    to,
  };
}

exports.getRedirects = function () {
  return redirects
    .filter((r) => !isSplat(r) && !isExternal(r) && !isExactUrl(r))
    .map(ruleToRedirect)
    .map((r) => ({
      to: r.to.replace(/#.+$/, ""),
      from: r.from,
    }));
};

exports.getExternalRedirects = function () {
  return redirects.filter((r) => isExternal(r)).map(ruleToRedirect);
};

exports.getExactUrlRedirects = function () {
  return redirects
    .filter((r) => !isExternal(r) && isExactUrl(r))
    .map(ruleToRedirect);
};

exports.getSplatRedirects = function (existingUrl) {
  const urls = [];

  for (const redirect of redirects.filter(
    (r) => isSplat(r) && !isExternal(r)
  )) {
    const trimmedSource = redirect[0].replace("/*", "/");

    if (redirect[1].includes(":splat")) {
      const trimmedDestination = redirect[1].replace(":splat", "");
      if (existingUrl.startsWith(trimmedDestination)) {
        const completeSourceUrl = existingUrl.replace(
          trimmedDestination,
          trimmedSource
        );
        urls.push(completeSourceUrl);
      }
    }
  }

  return urls;
};
