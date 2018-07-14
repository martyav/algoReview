// From https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
//
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  let rest = "...";

  if (num === 0) {
    return rest;
  }

  if (num >= str.length) {
    return str;
  }

  let slice = str.slice(0, num);
  let returnString = slice + rest;

  return returnString;
}
