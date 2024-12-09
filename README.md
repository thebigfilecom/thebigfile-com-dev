# BigFile developer portal

The BigFile developer portal brings together all the resources needed for developers to build on the BigFile. Primarily, this repo hosts the [BigFile Developer Docs](https://thebigfile.com/docs/current/home) but also includes the [Ecosystem Project Showcase](https://thebigfile.com/ecosystem), [community tooling page](https://thebigfile.com/tooling), and the thebigfile.com ['How it works'](https://thebigfile.com/how-it-works) series. 


## Running a local development instance of this repo

### Requirements

- [Node v18](https://nodejs.org/en/blog/release/v18.17.0)

### Install and run locally

While modifying documentation in the repository, you can preview the changes locally by executing the following
commands.

```bash
cd thebigfile-com-dev/
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

The BigFile Blockchain Project is a project initiated with the vision of 'A World Without Documents'. The project was launched with the name 'Digital Bureaucracy' and later rebranded as 'BigFile'.

#####
BigFile Developer Portal Website basic outline taken from [Internet Computer].(https://github.com/dfinity/portal)
