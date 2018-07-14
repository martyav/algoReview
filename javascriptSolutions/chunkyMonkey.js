// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var returnArray = [];

  for (let i = 0; i < arr.length; i += size) {
    let newArr = arr.slice(i, size + i);
    
    returnArray.push(newArr);
  }

  return returnArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
