// Return true if the string in the first element of the array contains all of the letters of the string in the second element 
// of the array.
//
// For example, ["hello", "Hell"], should return true because all of the letters in the second string are present in the first,
// ignoring case.

function mutation(arr) {
  let word1 = arr[0].toLowerCase();
  let word2 = arr[1].toLowerCase();

  if (word1 === word2) {
    return true;
  }
  
  if (word1.length === 0 || word2.length === 0) {
    return false;
  }

  for (let letter of word2) {
    if (!word1.includes(letter)) {
      return false;
    }
  }

  return true;
}
