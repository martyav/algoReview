/*
 Input: "Hello, there"
 Output: "HeLlO, tHeRe"
 
 Input: "TESTING"
 
 Output: "TeStInG"
 
 Input: "Here. Have another String as a sample!"
 
 Output: "HeRe. HaVe aNoThEr sTrInG As a sAmPlE!"
 
 Write a function that takes a String as input, and returns a String with every other character capitalized.
 */

func gamzee(_ text: String) -> String {
    var gamzeefied: String = ""

    let textArr = Array(text.uppercased().characters)

    for index in 0..<textArr.count {
        if index % 2 != 0 {
            gamzeefied = gamzeefied + String(textArr[index]).lowercased()
        } else {
            gamzeefied = gamzeefied + String(textArr[index])
        }
    }

    return gamzeefied
}

gamzee("shbcfhjcbjh7werf")

func recursiveGamzee(_ text: String, gamzeefied: String = "", numOfCycles: Int = 0) -> String {
    guard text != "" else { return gamzeefied }

    var internalGamzeefied = gamzeefied
    var textArr = Array(text.characters)
    var internalText = ""

    if numOfCycles % 2 != 0 {
        internalGamzeefied = gamzeefied + String(textArr[0]).lowercased()
    } else {
        internalGamzeefied = gamzeefied + String(textArr[0]).uppercased()
    }

    textArr.removeFirst()
    print(textArr)

    for char in textArr {
        internalText += String(char)
    }

    return recursiveGamzee(internalText, gamzeefied: internalGamzeefied, numOfCycles: numOfCycles + 1)
}

recursiveGamzee("Hello, world!")
