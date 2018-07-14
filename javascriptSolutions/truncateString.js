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
