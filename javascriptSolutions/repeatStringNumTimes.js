// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  if (num === 0) {
    return str;
  }

  let returnString = ""
  let count = 0;

  while (count < num) {
    returnString += str;
    count++;
  }

  return returnString;
}
