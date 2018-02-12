function dnaPairs(str) {
    let result = [];
    str.split('').forEach(function (char){
        switch(char) {
            case 'A':
            result.push([char, 'T']);
            break;
            case 'T':
            result.push([char, 'A']);
            break;
            case 'C':
            result.push([char, 'G']);
            break;
            case 'G':
            result.push([char, 'C']);
            break;         
       }
    });
    return result;
}

module.exports = dnaPairs;