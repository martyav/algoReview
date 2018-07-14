// From https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
//
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (num === 0) {
    return "";
  }

  if (num >= str.length) {
    return str;
  }

  let endIndex = num;
  let startIndex = 0;
  let rest = "..."
  let slice = str.slice(startIndex, endIndex);
  let returnString = slice + rest;

  return returnString;
}
