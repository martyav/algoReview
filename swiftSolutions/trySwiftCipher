//: Playground - noun: a place where people can play

import UIKit
import PlaygroundSupport

let url = NSURL(string: "http://tryswiftmerrill.herokuapp.com/json/puzzle.json")
let request = NSURLRequest(url: url! as URL)

NSURLConnection.sendAsynchronousRequest(request as URLRequest, queue: OperationQueue.current!) { data, response, error in
    if let data = response {
        let contents = String(data: data, encoding: String.Encoding.utf8)?.components(separatedBy: ",")
        
        var message: [String] = []
        
        for word in contents! {
            guard !word.contains("_") else { continue }
            
            let backwardsWord = word.characters.reversed().dropLast().map {String($0)}
            
            message.append(backwardsWord.joined())
        }
        
        var nicelyFormattted = ""
        
        for word in message {
            nicelyFormattted += word.trimmingCharacters(in: CharacterSet.punctuationCharacters) + " "
        }
        
        print(" ")
        print(nicelyFormattted)
    }
}

PlaygroundPage.current.needsIndefiniteExecution = true
