// From https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// Targets can be any length, from 0, up to the length of the original string.
// Return your answer as a boolean.

function confirmEnding(str, target) {
  let length = target.length;

  if (length === 0) {
    return false;
  }

  let endIndex = str.length;
  let startIndex = endIndex - length;
  let slice = str.slice(startIndex, endIndex);

  return slice === target;
}

confirmEnding("Bastian", "n");
