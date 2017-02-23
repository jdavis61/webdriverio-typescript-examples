# webdriverio-typescript-samples

First attempt at using typescript with webdriver.io

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
