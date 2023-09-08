const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require ('./basepage');
var driver = require ('selenium-webdriver');

const button1String = "btnButton1";
const button2String = "btnButton2";
const trailCodeXpath = "//td[3]/code";
const verificationMessageXpath = "//*[@id='trail']/code";
const trailCodeCheckButtonId = "solution";


class HomePage extends BasePage{
    async enterUrl(url){
        await this.goToUrl(url);
    }

    async clickButtonB1() {
        await this.clickById(button1String);
    }

    async clickButtonB2() {
        await this.clickById(button2String);
    }
    
    async clickCheckSolutionButton() {
        await this.clickById(trailCodeCheckButtonId);
    }

    async getSolutionVerification() {
        return await this.getTextFromXpath(verificationMessageXpath);
    }

    async getTrailCode() {
        return await this.getTextFromXpath(trailCodeXpath);
    }

    async followBadCodeTrail(code) {
        if (code.length !== 0) {
            let tc1 = code.slice(0, 2);
            let tc2 = code.slice(2, 4);
            let tc3 = code.slice(4, 6);

            await this.rightCodeTrail(tc1, false);
            await this.rightCodeTrail(tc2, false);
            await this.rightCodeTrail(tc3, false);
        }
    }

    async followGoodCodeTrail(code) {
        if (code.length !== 0) {
            let tc1 = code.slice(0, 2);
            let tc2 = code.slice(2, 4);
            let tc3 = code.slice(4, 6);

            await this.rightCodeTrail(tc1, true);
            await this.rightCodeTrail(tc2, true);
            await this.rightCodeTrail(tc3, true);
        }
    }

    async rightCodeTrail(trail, right=true) {
        if (!right) 
            if (trail !== 'b1')
                await this.clickButtonB1();
            else 
                await this.clickButtonB2();
        else 
            if (trail === 'b1')
                await this.clickButtonB1();
            else 
                await this.clickButtonB2();
    }
}
module.exports = new HomePage();