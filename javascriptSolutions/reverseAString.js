function reverseString(str) {
  let finalString = "";

  for (let letter of str) {
    finalString = letter + finalString;
  }

  return finalString
}

reverseString("hello");
