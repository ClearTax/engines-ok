# engines-ok

Checks the engines in *package.json* - **node/npm**

[![NPM](https://badgen.net//npm/v/engines-ok)](https://www.npmjs.com/package/engines-ok)

[![Screenshot](./screenshot.png)](https://www.npmjs.com/package/engines-ok)

## Install

`npm i engines-ok -D`

or globally as

`npm i engines-ok -g`

## Usage

### Basic

```shell
engines-ok
```

### As npm hooks

package.json

```js
"scripts": {
  "preinstall": "npm i engines-ok@latest -D && engines-ok"
}
```

## Authors

- [Dhruv Jain](https://github.com/maddhruv)

---

[![ClearTax](https://assets1.cleartax-cdn.com/cleartax-brand/logos/2018/01/pinchy_yellow_black.png)](https://cleartax.in)
