// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  if (size === 0) {
    throw new RangeError("Size must be greater than 0.")
  }

  if (!arr || arr.length < 1) {
    throw new Error("We must have an array conntaing elements passed in an argument.")
  }

  if (arr.length < size) {
    throw new RangeError("The second argument must be equal to or less than the length of the array");
  }
  
  var returnArray = [];

  for (let i = 0; i < arr.length; i += size) {
    let newArr = arr.slice(i, size + i);
    
    returnArray.push(newArr);
  }

  return returnArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
