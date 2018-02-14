var desserts = ['cake', 'ice cream', 'cookies', 'cake', 'ice cream', 'cake', 'cake', 'cake', 'ice cream', 'brownie', 'plums', 'cheese and wine', 'apple pie'];

var puds = desserts.reduce(function (acc, choice) {
    if (!acc[choice]) {
        acc[choice] = acc[choice] = 1;
    } else {
        acc[choice] += 1;
    }    
    return acc;
}, {});

console.log(puds);

