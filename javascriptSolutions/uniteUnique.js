// From https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
//
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
  let finalArr = [];
  let args = [...arguments];

  for (let arr of args) {
    for (let num of arr) {
      if (!finalArr.includes(num)) {
        finalArr.push(num)
      }
    }
  } 

  return finalArr;
}
