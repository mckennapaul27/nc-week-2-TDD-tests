const expect = require('chai').expect;
const primeChecker = require('../primeChecker');

describe('primeChecker', function(){
    it('it returns true if the passed number is prime', function(){
        expect(primeChecker(13)).to.equal(true);
    });
    it('it returns true if the passed number is prime', function(){
        expect(primeChecker(9)).to.equal(false);
    });
});