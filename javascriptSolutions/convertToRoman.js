// From https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
// Convert the given number into a roman numeral.
//
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let converted = "";

  for (var i = 0; i < decimals.length; i++) {
    if (num >= decimals[i]) {
      let thisMany = parseInt(num / decimals[i]);
      
      converted += romans[i].repeat(thisMany);
      num -= decimals[i] * thisMany;
    }
  }

  return converted;
}


