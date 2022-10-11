function compareArrays(arr1, arr2) {
  let result;  
  /*let arrSum = [arr1, arr2];
    result = arrSum.every(comparingElemnts => arr1 === arr2);
    не понимаю как использовать every в данных условиях задачи, вариант выше не работает */
    if (arr1.toString() === arr2.toString()) {
      result = true;
    } else {
      result = false;
    }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(positiveElement => positiveElement > 0).filter(devisibleElement => devisibleElement % 3 === 0).map((multipleElement) => multipleElement * 10);
  return resultArr; // array
}
