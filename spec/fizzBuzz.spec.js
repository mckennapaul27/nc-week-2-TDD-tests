const expect = require('chai').expect;
const fizzBuzz = require('../fizzBuzz');

describe('fizzBuzz', function () {
  it('returns the passed number when it is not divisble by 3 or 5', function () {
    expect(fizzBuzz(1)).to.equal(1);
    expect(fizzBuzz(2)).to.equal(2);
    expect(fizzBuzz(7)).to.equal(7);
  });
  it('returns fizz when the passed number is divisible by 3', function () {
    expect(fizzBuzz(3)).to.equal('fizz');  
    expect(fizzBuzz(6)).to.equal('fizz');  
    expect(fizzBuzz(9)).to.equal('fizz');   
  });
  it('returns buzz when the passed number is divisible by 3', function () {
    expect(fizzBuzz(5)).to.equal('buzz');  
    expect(fizzBuzz(10)).to.equal('buzz');  
    expect(fizzBuzz(20)).to.equal('buzz');   
  });
  it('returns fizzbuzz when the passed number is divisible by 3 and 5', function () {
    expect(fizzBuzz(15)).to.equal('fizzbuzz');  
    expect(fizzBuzz(30)).to.equal('fizzbuzz');  
    expect(fizzBuzz(45)).to.equal('fizzbuzz');   
  });
});