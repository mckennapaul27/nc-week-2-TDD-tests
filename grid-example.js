function createGrid (n) {
    var grid = [];
    for (var i = 0; i < n; i++) {
        grid.push([]);
        for (var j = 0; j < n; j++) {
            grid[i].push(j);
        }
    }
    return grid;
}

function createGridGenerator (n) {
    return function () {
        var grid = [];
        for (var i = 0; i < n; i++) {
            grid.push([]);
            for (var j = 0; j < n; j++) {
                grid[i].push(j);
            }
        }
        return grid;
    }
}

var gen4by4 = createGridGenerator(4);

gen4by4();
gen4by4();
gen4by4();
gen4by4();
gen4by4();
gen4by4();

var gen7by7 = createGridGenerator(7);

gen7by7();
gen7by7();
gen7by7();
gen7by7();
gen7by7();

console.log(gen4by4());
console.log(gen7by7());

