// From https://www.codewars.com/kata/the-hashtag-generator/train/javascript

function generateHashtag (str) {
  if (typeof str != "string") {
    throw new TypeError("Argument must be a string")
  }
  
  if (str.length < 1 || str.trim().length < 1) {
    return false;
  }
  
  let strArr = str.split(" ");
  let finalResult = "#";
  
  for (let word of strArr) {
    if (!word[0]) {
      continue;
    }
    
    let firstLetter = word.slice(0,1);
    let rest = word.slice(1);
    
    if (firstLetter != firstLetter.toUpperCase()) {
      firstLetter = firstLetter.toUpperCase();
    }
    
    finalResult += (firstLetter + rest);
  }
  
  if (finalResult.length > 140) {
    return false;
  }
  
  return finalResult;
}
