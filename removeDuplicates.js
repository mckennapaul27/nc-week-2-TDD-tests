//removeDuplicates([1,2,3]) => [1,2,3]
//removeDuplicates([1,2,3,1]) => [1,2,3]


function removeDuplicates (arr) {
    let duplicates = {};
    var result = [];
    for ( var i = 0; i < arr.length; i++ ) {
      if(result.indexOf(arr[i])===-1) {
        result.push(arr[i]);
      }
    }
    return result;
  }

module.exports = removeDuplicates;