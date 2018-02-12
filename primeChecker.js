function primeChecker (num) {
    const maxDiviser = Math.ceil(num / 2);
    for (let divisor = 2; divisor < maxDiviser; divisor++) {
        if(num % divisor === 0) return false;
    }
    return true;
}

module.exports = primeChecker;