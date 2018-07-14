// From https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence
//
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  let stringArray = str.split(" ");
  let returnArray = [];

  for (let word of stringArray) {
    let newWord = word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
    returnArray.push(newWord);
  }

  let returnString = returnArray.join(" ");
  
  return returnString;
}
