/* 
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { // not a general solution, but why bother with obfuscating unicode values?
    let alphabetFront = "ABCDEFGHIJKLM";
    let alphabetBack = "NOPQRSTUVWXYZ";
    let isLetter = /[^\W^\d]/;

    let final = "";

    for (var i = 0; i < str.length; i++) {
        let charToAdd = str[i];
        console.log(charToAdd);

        if (isLetter.test(charToAdd)) {
          let index;
          
          if (alphabetFront.includes(charToAdd)) {
            index = alphabetFront.indexOf(charToAdd);
            charToAdd = alphabetBack[index];
          } else {
            index = alphabetBack.indexOf(charToAdd);
            charToAdd = alphabetFront[index];
          }
        }

        final += charToAdd;
    }

    return final;
}
