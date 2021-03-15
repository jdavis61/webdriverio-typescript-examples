# webdriverio-typescript-examples
This repo contains examples of how to create page objects and tests using [WebdriverIO 7.0](https://github.com/webdriverio/webdriverio) and [TypeScript](https://www.typescriptlang.org/). The application under test is tourdedave's "[the-internet](https://github.com/tourdedave/the-internet)" project which contains examples of hard to automate pages. The test runner is the [wdio-mocha-framework](https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-mocha-framework). 

This project was created to serve as a reference to others interested in WebdriverIO TypeScript tests.

# Dependencies
* Node.js - The latest [LTS release](https://nodejs.org/en/)
* Java -- Needed to run the selenium server
* Chrome.

# Test execution
To run the tests, clone the latest version of this repo then install the node modules using ```npm install```. Afterwards execute ```npm run build``` then ```npm run test```.

To run a test by itself, use ```./node_modules/.bin/wdio --spec <path to test> wdio.conf.js```.
