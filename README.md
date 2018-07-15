# webdriverio-typescript-samples
This repo contains examples of how to use webdriverio to create page objects and tests. The tests are written in TypeScript and executed using the [wdio-mocha-framework](https://github.com/webdriverio/wdio-mocha-framework). The application under test is tourdedave's "[the-internet](https://github.com/tourdedave/the-internet)" project which contains examples of hard to automate pages. This project was created to serve as a reference to others interested in writing webdriver.io tests with TypeScript.

# Dependencies
* Node.js - Version 6 on Windows due to an issue with node fibers, 7+ on mac/linux should be fine.
* Java -- Needed to run the selenium server
* Chrome.

# Test execution
To run the tests, clone the latest version of this repo then install the node modules using ```npm install```. Afterwards execute ```npm run build``` then ```npm run test```.

To run a test by itself, use ```./node_modules/.bin/wdio --spec <path to test> wdio.conf.js```.