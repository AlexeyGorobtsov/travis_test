const actions = require('./node_modules/selenium-webdriver/lib/actions');
const LegacyActionSequence = actions.LegacyActionSequence;

const test = require('./test/index');
const href = 'https://alexeygorobtsov.github.io/travis_test/';


const webdriver = require('./node_modules/selenium-webdriver/index'),
    By = webdriver.By,
    until = webdriver.until;

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get(href)
    .then(() => {
        driver.sleep(1000).then(() => test.colorH1.colorH1(driver, By));
    })
    .then(() => driver.sleep(2000).then(() => driver.quit()));