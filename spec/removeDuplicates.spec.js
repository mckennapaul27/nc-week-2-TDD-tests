const expect = require('chai').expect;
const removeDuplicates = require('../removeDuplicates');


describe.only('removeDuplicates', function () {
    it('returns the same array if it contains no duplicates', function () {
        expect(removeDuplicates([1,2,3])).to.eql([1,2,3]);
    });
    it('returns a de-duplicated version of the passed array', function () {
        let input = [1,2,3,1];
        expect(removeDuplicates(input)).to.eql([1,2,3]);
        input = [1,1,2,2,3,3];
        expect(removeDuplicates(input)).to.eql([1,2,3]);
    });
});