var nestedArr = [
    [1, 2, 3],
    5,
    'foo',
    [7, 8, 8, 'cat'],
    [4, 5, 6],
    false
];

var flatArr = nestedArr.reduce(function(acc, elem) {
    if (Array.isArray(elem)) {
        acc = acc.concat(elem);
    } else {
        acc.push(elem);
    }
    return acc;
}, []);

console.log(flatArr);

