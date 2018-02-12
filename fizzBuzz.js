function fizzBuzz (num) {
if(isDivisibleBy3(num) && isDivisibleBy5(num)) {
        return 'fizzbuzz';
    }
  
if (isDivisibleBy3(num)) {
      return 'fizz';
  }
if(isDivisibleBy5(num)) {
      return 'buzz';
  }  
  return num;
}

function isDivisibleBy3 (num) {
    return num % 3 === 0;
}

function isDivisibleBy5 (num) {
    return num % 5 === 0;
}

module.exports = fizzBuzz;