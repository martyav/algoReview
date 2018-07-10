/*
 Input = "Racecar"
 Output = True
 
 Input = "Madam"
 
 Output = True
 
 Input = "Apple"
 
 Output = False
 
 Bonus Input: "No lava on Avalon.  No lava?  No avalon."
 
 Bonus Output: True
 
 A palindrome is a word that is the same backwards and forwards. Write a function that determines if a given String is a palindrome. Then write a function that does it recursively. Then do it with a full sentence as input ignoring spaces and punctuation.
 */

func isPalindrome(_ text: String, index: Int = 0) -> Bool {
    let textArr = Array(text.lowercased().characters)
    guard index < textArr.count - 1 - index else { return true }

    if textArr[index] == textArr[(textArr.count - 1) - index] {
        let newIndex = index + 1
        return isPalindrome(text, index: newIndex)
    } else {
        return false
    }
}


var string = "racfwerffrfergweg4wtg4h5gtrbh54h3wb5b4wg35yt53twefqcar"
var gnirts = "racecar"

isPalindrome(string)
isPalindrome(gnirts)

