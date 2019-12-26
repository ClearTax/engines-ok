#!/usr/bin/env node
const { execSync } = require('child_process')
const { satisfies } = require('semver')
const chalk = require('chalk')
const { success, error, info } = require('log-symbols')
const { engines } = require(`${process.cwd()}/package.json`)

if (!engines) {
  console.log(`${info} Engines field was not found in your package.json`)
  process.exit(1)
}

let isntOk = false

for (let [eng, version] of Object.entries(engines)) {
  const installedVersion = execSync(`${eng} --version`).toString().trim()

  if (satisfies(installedVersion, version)) {
    console.log(chalk.green(`${success} The ${chalk.blue(eng)} version(${installedVersion}) matches the required version(${version})`))
  } else {
    isntOk = true
    console.log(chalk.red(`${error} Oops! The ${chalk.blue(eng)} version(${installedVersion}) doesn't match with the required version(${version})`))
  }
}

if (isntOk) {
  console.log(chalk.yellow('---------------------------------------------------------------------'))
  console.log(chalk.white(`Please update the above ☝ ${chalk.red('errored')} engines to the required ones in package.json`))
  process.exit(1)
}
