function compareArrays(arr1, arr2) {
  let result;  
  if (arr1.length === arr2.length) {
    return result = arr1.every((item, index) => item === arr2[index]);
    } else
    return false;
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(positiveElement => positiveElement > 0).filter(devisibleElement => devisibleElement % 3 === 0).map((multipleElement) => multipleElement * 10);
  return resultArr; // array
}
