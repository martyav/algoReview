function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(function(a) { return !arr1.includes(a) || !arr2.includes(a); });
}
