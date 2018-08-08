// Check if a string is properly formatted US telephone number. It must include an area code. 
// Parentheses, spaces, and dashes may or may not be present as delimiters.
// No other characters beside digits, parentheses, spaces, or dashes are allowed

function telephoneCheck(str) {
  let naiveTest = /[^a-zA-Z]\d{10, 11}/g
  let tenDigitTest = /^(\(\d{3}\)|\d{3})\s?\-?\d{3}\s?\-?\d{4}$/g
  let elevenDigitTest = /(^1)\s?\-?(\(\d{3}\)|\d{3})\s?\-?\d{3}\s?\-?\d{4}$/g;

  return naiveTest && elevenDigitTest.test(str) || tenDigitTest.test(str);
}

