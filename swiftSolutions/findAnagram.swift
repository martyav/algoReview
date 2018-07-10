// check if text1 is an anagram of text2, ignoring punctuation, cases, and spacing

func findAnagram(one: String, two: String) -> Bool {
    let text1 = one.trimmingCharacters(in: CharacterSet.whitespacesAndNewlines.union(CharacterSet.punctuationCharacters)).lowercased()
    let text2 = two.trimmingCharacters(in: CharacterSet.whitespacesAndNewlines.union(CharacterSet.punctuationCharacters)).lowercased()

    var textArr1 = [Character]()
    var textArr2 = [Character]()

    for letter in text1.characters {
        textArr1.append(letter)
    }

    for letter in text2.characters {
        textArr2.append(letter)
    }

    return textArr2.sorted() == textArr1.sorted()
}
