// That old chestnut, reverse a string
//
// This is done using command line arguments and String's .reversed() method
//
// Note that Swift: 
// 1) needs to import Foundation to exit() cleanly and 
// 2) returns a collection of characters, rather than a String object, when .reversed() is called
//
// Also note that this is written in Swift 4. Earlier versions of the language lack a count property on String; instead, you call count
// on the String's .characters property. In addition, Swift 4 renamed String's .reverse() property to .reversed()  

import Foundation

guard CommandLine.arguments.count > 0 else {
    exit(0)
}

let usersString = CommandLine.arguments[0]
let reversedCollection = usersString.reversed()
let reversedString = String(reversedCollection)

print(reversedString)
