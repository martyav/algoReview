// From https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice
//
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let copyOfArr2 = arr2.slice();
  copyOfArr2.splice(n, 0, ...arr1); // recall ... spreads out the elements in an array -- if we don't use it, we get an error

  return copyOfArr2;
}
