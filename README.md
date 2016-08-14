# node-es6-starter
Node.js ES6 (aka ES2015) starter with [Babel.js](https://babeljs.io/) & [ESLint](http://eslint.org/)

1. Write node.js source code in ES6 syntax.
2. Transpile to ES5.
3. Publish ES5 code to NPM.

## Motivation

I created this repo to use it as a starting point for build npm libaries using ES6 syntax.

### Babel.js
The current, stable version of [node.js](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V6.md#6.3.1) supports [95%](http://node.green/) ES6 [features](https://github.com/lukehoban/es6features). 

Also, we build npm modules to run on older versions of Node.js.

We will use Babel.js with [ES2015 preset](http://babeljs.io/docs/plugins/preset-es2015/) to compile ES6 code to ES5.


### Coding style

Airbnb has an excellent [style guide](https://github.com/airbnb/javascript) for ES6. We will follow the guide and adhere to the recommended coding style.

### ESLint

We will use ESLint with Airbnb style and pre-parse our code to detect violations of the style.

 
## Quick Start
1. Make sure you have recent, stable version of node (>= 6.1.0).

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

### Run
#### ES6 code via babel
```
npm run dev
```

#### ES5 code (Transpiled)
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

./lib - transpiled ES5 code, not saved in git, gets published to npm.
./src - source code, stays in git repo.

## License

  [MIT](LICENSE)
