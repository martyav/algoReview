// https://www.hackerrank.com/challenges/camelcase/problem

/* 
Alice wrote a sequence of words in CamelCase -- a string having the following properties:

* It is a concatenation of one or more words consisting of English letters.
* All letters in the first word are lowercase.
* For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.

Given a string, print the number of words in the string on a new line.
*/

let input = readLine()!

func numberOfWords(in text: String) -> Int {
    let array = text.components(separatedBy: CharacterSet.uppercaseLetters)
    
    return array.count
}

print(numberOfWords(in: input))

// Fun fact: CharacterSet.uppercaseLetters is not the same as CharacterSet.capitalizedLetters!

// .capitalizedLetters corresponds to Unicode Lt, a category which contains 31 characters,
// mostly Greek: http://www.fileformat.info/info/unicode/category/Lt/list.htm

// .uppercaseLetters returns a set of characters combining Lt with Lu, a different category
// containing about 1700 characters: 
// http://www.fileformat.info/info/unicode/category/Lu/list.htm

// Using .capitlaizedLetters instead of .uppercaseLetters will often return 1, 
// if the text argument is not empty, since the algorithm will not separate the words 
// correctly
