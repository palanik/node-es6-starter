# node-es6-starter
Node.js ES6+ starter with [Babel.js](https://babeljs.io/), [ESLint](http://eslint.org/) & [nyc](https://github.com/istanbuljs/nyc) with minimal setup.

1. Write node.js source code in ES6 syntax.
2. Unit test the source code.
3. Transpile to ES5.
4. Publish ES5 code to NPM.

## Motivation

I created this repo to use it as a starting point for build npm libaries using ES6 (& beyond) syntax & features.

The current, stable version of [node.js](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.16.1) supports [99%](http://node.green/) ES6 (aka ES2015) [features](https://github.com/lukehoban/es6features). But behind with newer specs - ES2016 (ES7), ES2017 (ES8), ES2018 (ES9), ES2019 (ES10)...

We also build npm modules to run on older versions of Node.js.

### Configuration

All configuration settings for dev/build tools are defined in [package.json](package.json) eliminating the dependency of addtional tool specific configuration files such as `.babelrc`, `.eslintrc`, `.nycrc` etc.

### Babel.js

We will use Babel.js with [ES2015 preset](https://babeljs.io/docs/en/babel-preset-env) to transpile ES6 code to ES5.

### Coding style

Airbnb has an excellent [style guide](https://github.com/airbnb/javascript) for ES6. We will follow the guide and adhere to the recommended coding style.

### ESLint

We will use ESLint](http://eslint.org/) with Airbnb style and pre-parse our code to detect violations of the style.

### Unit testing

Prefer running tests on the source code rather than on the transpiled code. 

Using [chai](https://www.chaijs.com/) assertation library with [mocha](https://mochajs.org/) test framework for unit testing.

Also using [nyc](https://github.com/istanbuljs/nyc), to instrument ES6 source code for tests and to generate coverage reports.


## Quick Start
1. Make sure you have recent, [stable](https://nodejs.org/en/about/releases/) version of node (>= 12.16.1).

	```
	nave use stable
	node -v
	```
2. Clone or download this repo.

3. Get latest releases of the tools

	```
	npm update --save
	```

## Commands
### Lint
```
npm run lint
```

### Build
```
npm run build
```

### Test
#### Unit test
```
npm run test
```

#### Coverage
```
npm run test-cov
```

### Run
#### ES6 code via babel-node
```
npm run dev
```

#### ES5 code (transpiled)
```
npm run build

node lib/
```
or
```
npm start
```


### Preview Publish
```
npm pack
tar -tf node-es6-starter-1.0.0.tgz
```

### Publish to npm registry
Registry is specifed in [package.json](package.json) `publishConfig` entry

**Delete the `.tgz` file before publishing**.
```
npm publish
```

## Code Directories

`./src` - source code, stays in git repo. Not published to npm.

`./test` - unit tests, stays in git repo. Not published to npm.

`./lib` - transpiled ES5 code, not saved in git, gets published to npm.

## License

  [MIT](LICENSE)
