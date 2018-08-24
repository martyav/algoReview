function memoizeFactors(n, arr = []) {
  if (n === 0) {
    return arr;
  }
    
  if (arr.length === 0 || arr[0] % n === 0) {
    arr.push(n)
    return memoizeFactors(n - 1, arr);
  }
  
  return memoizeFactors(n - 1, arr);
}
