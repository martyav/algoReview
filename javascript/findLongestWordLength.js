function findLongestWordLength(str) {
  if (str.length === 0) {
    return null;
  }

  let strArray = str.split(" ");

   if (strArray.length === 1) {
    return strArray.length;
  }

  let maxLength = 0;
  
  for (let word of strArray) {
    let currentLength = word.length;

    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
}
