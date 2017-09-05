func addNumbers(in text: String) -> Int {
    var total = 0
    
    let digits = CharacterSet.decimalDigits
    let iteratableText = text.characters.map {String($0)}
    var foundNumber: String = ""
    
    func addToTotal() {
        if !foundNumber.isEmpty {
            total += Int(foundNumber)!
            foundNumber = ""
        }
    }
    
    for index in 0..<iteratableText.count {
        let value = iteratableText[index]
        let scalar = UnicodeScalar(value)
        
        if digits.contains(scalar!) {
            foundNumber += value
        } else {
            addToTotal()
        }
    }
    
    addToTotal()
    
    return total
}

addNumbers(in: "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog")
