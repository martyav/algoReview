func palindromeRedux(_ text: String) -> Bool {
    let textArr = Array(text.characters)

    var modifier: Int = 0
    
    if textArr.count % 2 != 0 {
        modifier = 1
        for index in 0...((textArr.count/2) + modifier) {
            if textArr[index] != textArr[textArr.count - 1 - index] {
                return false
            }
        }
    }

    return true
}
