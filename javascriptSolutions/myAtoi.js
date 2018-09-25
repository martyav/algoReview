/* From https://leetcode.com/problems/string-to-integer-atoi/description/

Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found.
Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits
as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect
on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists
because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

* Only the space character ' ' is considered as whitespace character.
* Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range:
[−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231)
is returned.
*/

var myAtoi = function(str) {
    const reg = /^(\d+?)+.*?(\d+)|^(\d+?)/;
    str = str.trim();
    
    const first = str.slice(0,1);
    // e in Javascript is used to indicate scientific notation, but here we must treat it as any other letter
    const rest = str.slice(1).split("e"); 
    let findNum;
    
    if (first === "-" || first === "+") {
      findNum = first.concat(reg.exec(rest));
    } else if (str.match(reg)) {
      findNum = reg.exec(str.split("e"));
    }
    
    let returnVal = parseFloat(findNum) || 0;

    // int32's limits
    if (returnVal < -2147483648) returnVal = -2147483648; 
    if (returnVal > 2147483647) returnVal = 2147483647;
    
    return returnVal;
};
