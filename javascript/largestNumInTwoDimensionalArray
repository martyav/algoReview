function largestNumInTwoDimensional(array) {
  if (array.length === 0) {
    return null;
  }

  let returnArr = [];

  for (let subArr of array) {
    if (subArr.length === 0) {
      continue;
    }

    if (subArr.length === 1) {
      returnArr.push(subArr[0]);
    }

    let max = Number.NEGATIVE_INFINITY;
    
    for (let value of subArr) {
      if (value > max) {
        max = value;
      }
    }

    returnArr.push(max);
  }

  return returnArr;
}
