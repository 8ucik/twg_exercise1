var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor(){
        global.driver = driver;
    }
    async goToUrl(url){
        await driver.get(url);
    }

    async clickByXpath(xpath) {
        await driver.findElement(By.xpath(xpath)).click();
    }

    async clickById(id){
        await driver.findElement(By.id(id)).click();
    }

    async closeBrowser(){
        await driver.dispose();
        await driver.quit();
    }
    
    async getTextFromXpath(xpath) {
        return await driver.findElement(By.xpath(xpath)).getText().then(function (value) {
            return value
        });
    }
}
module.exports = BasePage;