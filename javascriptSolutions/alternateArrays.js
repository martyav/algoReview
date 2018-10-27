function alternateArrays(arr1, arr2) {
  let limit = a.length + b.length;
  let newArr = [];

  for (let i = 0; i < limit; i++) {
    if (i % 2 === 0) {
      if (arr1.length === 0) {
        newArr.push(...arr2);
        break;
      }
      newArr.push(arr1.shift());
    } else if (i % 2 === 1) {
      if (arr2.length === 0) {
        newArr.push(...arr1);
        break;
      }
      newArr.push(arr2.shift());
    } 
  }

  return newArr;
}
