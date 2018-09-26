// From https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  let convertedString = "";

  function converter(str) {
    let returnVal; 

    switch (str) {
      case "&":
        returnVal = "&amp;";
        break;
      case "<":
        returnVal = "&lt;";
        break;
      case ">":
        returnVal = "&gt;";
        break;
      case '"':
        returnVal = "&quot;";
        break;
      case "'":
        returnVal = "&apos;";
        break;
      default: 
        returnVal = str;
    }

    return returnVal;
  }

  [...str].forEach(char => convertedString = convertedString.concat(converter(char)));

  return convertedString;
}
