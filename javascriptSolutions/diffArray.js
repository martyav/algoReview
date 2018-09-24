function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2).sort();
  let previous;
  let current;

  for (let i = 1; i < newArr.length; i++) {
    current = newArr[i];
    previous = newArr[i - 1];

    if (previous === current) {
      delete newArr[i - 1]; // deleting creates empty objects, which we must remove by filtering
      delete newArr[i];
    }
  }

  newArr = newArr.filter(function(a) { return a; });

  return newArr;
}

function diffArrayAlt(arr1, arr2) {
  return arr1.concat(arr2).filter(function(a) { return !arr1.includes(a) || !arr2.includes(a); });
}
