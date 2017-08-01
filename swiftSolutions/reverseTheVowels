/* 
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
*/

func reverseVowels(_ s: String) -> String {
    let sArr = Array(s.characters)
    let vowelsToFind = Array("aeiouAEIOU".characters)
    var vowelsWeFound = [Character]()
    var foundVowelIndexSwapper = 0
    var finalString = ""
    
    for char in sArr where vowelsToFind.contains(char) {
        vowelsWeFound.append(char)
    }
    
    vowelsWeFound = vowelsWeFound.reversed()
    
    for char in sArr {
        if vowelsToFind.contains(char) {
            finalString += String(describing: vowelsWeFound[foundVowelIndexSwapper])
            foundVowelIndexSwapper += 1
        } else {
            finalString += String(char)
        }
    }
    
    return finalString
}

