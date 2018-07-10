/*
Input = "The quick brown fox jumps over the lazy dog."
Output = True

Input = "How vexingly quick daft zebras jump!"

Output = True

Input = "Some other sentence without all the letters."

Output = False

A pangram is a sentence that uses every letter of the alphabet at least once. A famous pangram is "The quick brown fox jumps over the lazy dog." Given a String, return whether or not it is a pangram. Ignore capitalization and punctuation.
*/

func isPangram(_ text: String) -> Bool {
    let alphabet: Set<Character> = Set("abcdefghijklmnopqrstuvwxyz ".characters)
    var cleanText = text.trimmingCharacters(in: CharacterSet.punctuationCharacters).lowercased()
    
    print(cleanText)
    
    let checker: Set<Character> = Set(cleanText.characters)
    
    print(checker.sorted())
    print(alphabet)
    
    return checker == alphabet
}

isPangram("The quick brown fox jumps over the lazy dog.")
