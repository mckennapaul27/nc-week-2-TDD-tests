const expect = require('chai').expect;
const dnaPairs = require('./dnaPairs');

describe('dnaPairs', function (){
    it('returns correct pair for a single character string', function (){
//arrange
let input = 'A';
let expectedResult = [['A', 'T']];

//act
let result = dnaPairs(input);

//assert
expect(result).to.eql(expectedResult);
    });
});