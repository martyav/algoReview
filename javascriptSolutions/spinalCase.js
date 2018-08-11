/*
 From https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
 
 Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 
 You may be passed strings such as "All TheSmall things" or "Underline_fun_yay"
*/

function spinalCase(str) {
  const changeInCase = /([a-z])(?=[A-Z])/g;
  const delimiter = /\s|_/g;

  let replaceDelimiters = str.replace(delimiter, "-");
  let detectCaseChanges = replaceDelimiters.replace(changeInCase, "-");
  let cleanString = ""

  for (let i = 0; i < replaceDelimiters.length; i++) {
    if (replaceDelimiters[i] !== detectCaseChanges[i]) {
      cleanString += replaceDelimiters[i].toLowerCase();
    } 

    cleanString += detectCaseChanges[i].toLowerCase();
  }

  return cleanString;
}
