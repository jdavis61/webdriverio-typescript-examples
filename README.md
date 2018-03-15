# webdriverio-typescript-samples
This repo contains examples of how to use webdriverio to create page objects and tests. The tests are written in TypeScript and executed using the [wdio-mocha-framework](https://github.com/webdriverio/wdio-mocha-framework). The application under test is a forked copy of tourdedave's "the-internet" project which contains numerous examples of hard to automate pages. This project was created to serve as a reference to others interested in writing webdriver.io tests with TypeScript.

# Dependencies
* Ruby -- Needed to run the "the-internet" project locally.
* Node.js - Version 6 on Windows due to an issue with node fibers, 7+ on mac/linux should be fine.
* Java -- Needed to run the selenium server
* Chrome.

# Web server setup instructions
To start the "the-internet" web server, clone the latest version of this repo from https://github.com/jdavis61/the-internet.git. Then start the server using the rackup command. If you receive the message "Your Ruby version is 2.3.3, but your Gemfile specified x.x.x", add the version of Ruby installed on your machine to the Gemfile. Once the webserver is started, the home page may be found at http://localhost:9292.

```
git clone https://github.com/jdavis61/the-internet.git
rackup
```

# Test execution
To run the tests, clone the latest version of this repo and do an npm install. Then execute ```npm run test```.

To run a test by itself, use ```./node_modules/.bin/wdio --spec <path to test> wdio.conf.js```.


# MISC Archive notes
# REFS
https://github.com/jonnyreeves/hello-ts-mocha/blob/master/test/CalculatorTest.ts

# TYPINGS (essential, otherwise typescript will not work with webdriverio (or node) at all)
https://github.com/typings/typings

618  npm install --save typings
619  ./node_modules/.bin/typings search --name mocha
623  ./node_modules/.bin/typings install debug --save
626  ./node_modules/.bin/typings install dt~mocha --global --save

$ ./node_modules/.bin/typings search --name webdriverio


https://github.com/webdriverio/webdriverio/issues/1686
