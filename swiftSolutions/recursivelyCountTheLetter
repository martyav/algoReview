func recursivelyCountTheLetter(_ letter: String, in string: String) -> Int {
    guard !string.isEmpty else { return 0 }

    if letter == String(string[string.startIndex]) {
        return recursivelyCountTheLetter(letter, in: string.substring(from: string.index(after: string.startIndex))) + 1
    }

    return recursivelyCountTheLetter(letter, in: string.substring(from: string.index(after: string.startIndex)))
}
