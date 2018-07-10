/*

 Take all instances of a given list of characters and turn any of them found within a given string into a second list of characters
 
 Example:
 
 If the given list is "aeiou", and the string is "anonymous", and the characters are to be transformed into "AEIOU", the end result should be:
 "AnOnymOUs"
 
 */

func trace(take: String, andMakeThem: String, inThis: String) -> String {

    if take.isEmpty || andMakeThem.isEmpty || inThis.isEmpty {

        return "Empty strings? We need values in every parameter!"
    }

    let takeArr: [Character] = Array(take.characters)
    let makeThemArr: [Character] = Array(andMakeThem.characters)
    let check = takeArr.count

    guard makeThemArr.count == check else {

        return "The number of characters to swap needs to be even with the number of characters in the initial list."
    }
    
    let iterateOver: [Character] = Array(inThis.characters)
    var newString = ""
    var swapChar: [Character: Character] = [:]

    for index in 0..<takeArr.count {
        swapChar[takeArr[index]] = makeThemArr[index]
    }

    for char in iterateOver {
        let addThis = swapChar[char] ?? char

        newString += String(addThis)
    }
    
    return newString
}

var printTrace = trace(take: "abc", andMakeThem: "ABC", inThis: "charles")

print(printTrace)
