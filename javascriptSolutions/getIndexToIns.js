// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) 
// once it has been sorted. 
// The returned value should be a number.

function getIndexToIns(arr, num) {
  let sorted = arr.sort(function(a, b) { // sort in JS returns strings...to force it to evaluate numbers, use this
      return a - b
    }
  );

  for (let i = sorted.length - 1; i >= 0; i--) {
    if (num > sorted[i]) {
      return i + 1;
    }
  }

  return 0;
}
