const homepage = require('../page/homepage');
const resultFalse = "NOT OK.";
const resultPass = "OK. Good answer";
const defaultResult = "Trail..."
var should = require("chai").should();

describe("Negative flow tests", function () {
    this.timeout(50000);

    beforeEach(function(){
        homepage.goToUrl("https://antycaptcha.amberteam.pl/exercises/exercise1");
    });
    afterEach(function() {
        homepage.closeBrowser();
    });

    it("get negative verification on button trail", async function() {
        let code = await homepage.getTrailCode();
        await homepage.followBadCodeTrail(code);
        await homepage.clickCheckSolutionButton();
        
        let result = await homepage.getSolutionVerification();
        result.should.equal(resultFalse);
        result.should.not.equal(resultPass);
        result.should.not.equal(defaultResult);
    });

    it("get negative verification without button trail", async function() {
        await homepage.clickCheckSolutionButton();
        
        let result = await homepage.getSolutionVerification();
        result.should.equal(resultFalse);
        result.should.not.equal(resultPass);
        result.should.not.equal(defaultResult);
    });

    it("get negative verification with only 2 buttons", async function() {
        await homepage.clickButtonB1();
        await homepage.clickButtonB2();
        await homepage.clickCheckSolutionButton();

        let result = await homepage.getSolutionVerification();
        result.should.equal(resultFalse);
        result.should.not.equal(resultPass);
        result.should.not.equal(defaultResult);
    });
});