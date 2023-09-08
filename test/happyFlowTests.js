const homepage = require('../page/homepage');
const resultPass = "OK. Good answer";
const resultFalse = "NOT OK.";
var should = require("chai").should();

describe("Happy flow tests", function () {
    this.timeout(50000);

    beforeEach(function(){
        homepage.goToUrl("https://antycaptcha.amberteam.pl/exercises/exercise1");
    });
    afterEach(function() {
        homepage.closeBrowser();
    });
    
    it("get successful verification on button trail ", async function () {
        let code = await homepage.getTrailCode();
        await homepage.followGoodCodeTrail(code);
        await homepage.clickCheckSolutionButton();
        let result = await homepage.getSolutionVerification();

        result.should.equal(resultPass);
        result.should.not.equal(resultFalse);
    });
});