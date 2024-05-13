# BigFile developer portal

The BigFile developer portal brings together all the resources needed for developers to build on the
BigFile. Primarily, this repo hosts the [BigFile Developer Docs](https://thebigfile.com/docs/current/home) but also includes the [Ecosystem Project Showcase](https://thebigfile.com/ecosystem), [community tooling page](https://thebigfile.com/tooling), and the thebigfile.com ['How it works'](https://thebigfile.com/how-it-works) series. 



## Submodules

The developer docs utilize submodules for several subfolders of documentation. To edit these pages, changes must be made in the submodule's repo and merged into that repo. Then you must open a PR in this repo that pulls the latest submodule updates to apply the changes.

The following submoules and their corresponding repos are currently used:

- SDK
    - `/docs/current/developer-docs/developer-tools/cli-tools/cli-reference/`
    - GitHub Repo: https://github.com/dfinity/sdk.git

- Motoko
    - `/docs/current/motoko/main/base/`
    - GitHub Repo: https://github.com/dfinity/motoko.git

- quill
    - `/docs/current/developer-docs/developer-tools/cli-tools/quill`
    - GitHub Repo: https://github.com/dfinity/quill.git

- Internet Identity
    - `/docs/current/references/ii-spec`
	- GitHub Repo: https://github.com/dfinity/internet-identity.git

- Interface Spec
    - `/docs/current/references/ic-interface-spec `
    - GitHub Repo: https://github.com/dfinity/interface-spec.git

- Sample projects
    - `/docs/current/references/samples`
    - GitHub Repo: https://github.com/dfinity/examples.git
    - Note: This submodule intentionally uses `.md` files instead of `.mdx` files. Therefore, these pages do not support components such as tags and tooltips.

- dfxvm
    - `/docs/current/developer-docs/developer-tools/cli-tools/dfxvm`
    - GitHub Repo: https://github.com/dfinity/dfxvm.git

- Response verification
    - `/docs/current/developer-docs/web-apps/http-compatible-canisters/custom-http-canisters`
    - GitHub Repo: https://github.com/dfinity/response-verification

### Updating submodules

To update all submodules, run the command:

```
git submodule update --remote
```

### Reverting submodule changes

To revert submodule changes in a PR that did not intend to update submodules, run the commands:

```
git checkout master
git submodule update
git checkout <your branch>
git add * # especially submodules
```

### Embedding YouTube videos

You can embed YouTube videos by adding the following iframe code, replacing the `src=` link with the YouTube link you'd like to embed:

```
<iframe width="560" height="315" src="https://www.youtube.com/embed/b9_PsPQ24tE?si=0w2pIVuSJFhRWAeX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
```

## Contribution workflow

Here is a description of how a contribution should be made to the developer portal:

1. The contributor creates a fork/branch where proposed changes are made.
2. A pull request (PR) is created from that branch/fork to `master`. A build preview is generated and the reviewers can directly check the preview website.
3. After the pull request is merged into `master`, CI/CD will deploy the contents to ICP. The changes made will appear on the website. 

### Deployed previews

Whenever a Pull Request for a branch is created on the repository, a GitHub bot will comment on the PR with a preview link once one has been generated.

You can view the status of the preview build job by navigating to the bottom of the PR and viewing the 'Build deployment preview' job. If this job fails, the preview will not be shown. Any errors in the build must be resolved before the PR can be approved and merged.

## Deployment best practices

The portal repo uses git submodules to distribute content authoring across several repositories. This can prove
challenging if you want to make updates to docs that refer to stale content in other repos. Here are some best practices
that may prove helpful when contributing to `portal`.

1. Don't commit changes to `submodules`.
   a. Check your staged changes and see if any files are nested within the `submodules` directory. If so - revert them.
   Those changes must go into the corresponding submodule repository.
2. Be wary of the order of operations when it comes to submodules.
   a. If you do intend to make changes to content under `submodules`, the changes need to be merged into the respective
   repo first.
   b. Once the change has been merged, you will also need to update `portal`'s ref to that repo. You can do that by
   running `git submodule update --remote --merge`
3. Build locally.
   a. You can save yourself some headaches if you run `npm run build` locally before you push your changes. If the build
   fails locally, it will almost certainly fail in CI.
   b. Our CI requires that a set of checks pass before a PR can be merged. One of those checks is whether the code can be
   deployed to a canister. You do not need to deploy a canister locally, but at the very least `npm run build` should
   pass.


## Adding documentation for community-created agents and CDKs

The [agents](https://internetcomputer.org/docs/current/developer-docs/build/agents)
and [CDKs](https://internetcomputer.org/docs/current/developer-docs/build/cdks) sections should not only contain docs
for DFINITY-created agents and CDKs.
We therefore invite other projects to:

- Link to their own agents or CDKs on the respective index pages (the files to be edited are
  in `docs/developer-docs/build/agents/index.md` or `docs/developer-docs/smart-contracts/write/overview.mdx`).
- Add their own documentation as a folder under `Agents` or `CDKs`.

## Adding community-created developer tools

We invite developers to add their ICP-focused developer tools to
the [developer tools page](https://internetcomputer.org/tooling) by appending an entry to the `communityToolingItems`
array in `src/components/Common/toolingItems.ts`.

Please make sure to add appropriate tags to make the tool easy to discover for other devs. Avoid introducing new tags if
possible.

## Community-created sample projects

You can submit your sample project to be displayed on the [samples page](https://internetcomputer.org/samples).

Add your submission to [the community projects file](/community/communityProjects.ts) and open a pull request. You can
use an editor with TypeScript support to make sure your submission
follows [the schema](/src/components/Common/sampleItems.ts).

### Showcase submission guidelines

_Disclaimer: You should have a working canister for your product to be showcased. Our team will review the PR and get
back to you for any further questions. In the meantime, please contact devcomms@dfinity.org if you have any questions._

Add your project to the end of [`showcase.json`](/showcase.json). Refer to the object schema below for the required
fields.

Make up a unique project id. For example, if your project is called `Awesome ICP Project!`, your project id could
be `awesome-icp-project`.

Your logo/video/screenshots files should be prefixed with your project id, and placed in the `/static/img/showcase`
folder. For example, if your project id is `awesome-icp-project`, your logo file should be
named `awesome-icp-project_logo.webp` and placed in the `/static/img/showcase` folder.

The [Ecosystem Helper](https://mvw4g-yiaaa-aaaam-abnva-cai.icp0.io/) is an on-chain tool that helps you submit your project to internetcomputer.org. It helps with image conversion, resizing, previewing the project cards used throughout the website, and it produces a valid JSON document you can use. Fill out the form and download the asset bundle in a zip file.

### Asset guidelines

| Asset       |          | Requirements | Format       | Notes                                                                             |
|-------------|----------|--------------|--------------|-----------------------------------------------------------------------------------|
| logo        | required | 112x112px    | webp/svg/png | Currently displayed 56x56px                                                       |
| screenshots | optional | 1024x576px   | webp/jpg     | The schema supports multiple files, but only the first one will be displayed      |
| video       | optional | max 10MB     | webm/mp4     | If there is a video file specified, it will be displayed instead of a screenshot. |

### Tags

The list of tags is not final, and will be updated as the project evolves. For now, the following tags are available:

- `Wallet`
- `Bitcoin`
- `NFT`
- `SocialFi`
- `DeFi`
- `Games`
- `DAO`
- `Metaverse`
- `Tools / Infrastructure`

### Object schema

```
  {
    id: string,
    name: string,
    oneLiner: string, // short description of the project
    website: string, // URL starting with `https://`

    tags: ('Wallet' | 'Bitcoin' | 'NFT' | 'SocialFi' | 'DeFi' | 'Games' | 'DAO' | 'Metaverse' | 'Tools / Infrastructure')[],
    description: string, // description of the project
    stats: string, // eg. "10,000 users"
    logo: string, // url to logo file, eg. /img/showcase/awesome-icp-project_logo.webp
    
    usesInternetIdentity: boolean,
    authOrigins?: string[]; // optional additional (URL) origins that can be utilized for signing in to your dapp

    github?: string, // full URL to github repo, if available
    youtube?: string, // full URL to a YouTube video or channel, if available
    twitter?: string, // full URL to a twitter account, if available

    screenshots?: string[], // optional array of urls to screenshot files

    video?: string, // optional url to video file, eg. /img/showcase/awesome-icp-project_video.webm
    videoContentType?: 'video/webm' | 'video/mp4', // to feed into the type attribute of the video/source element

    submittableId?: string, // optional id of the submittable form
  },
```

## Running a local development instance of this repo

### Requirements

- [Node v18](https://nodejs.org/en/blog/release/v18.17.0)

### Install and run locally

While modifying documentation in the repository, you can preview the changes locally by executing the following
commands.

```bash
cd portal/
git submodule update --init
npm ci
npm start
```

The developer portal frontend should appear in your browser under http://localhost:3000.

To preview a specific locale in the context of an internationalization contribution, start the docs with the following
command:

```bash
npm start -- --locale <locale>
```
