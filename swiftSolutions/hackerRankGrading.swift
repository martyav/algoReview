/*
https://www.hackerrank.com/challenges/grading
*/

func findNextMultipleOfFive(_ number: Int) -> Int {
    var foundMultiple = 1
    
    let divisor = (number/5) + 1
    
    foundMultiple = divisor * 5
    
    return foundMultiple
    
}

func roundUpIfCloseToMultipleOfFive(_ number: Int) -> Int {
    if findNextMultipleOfFive(number) - number < 3 {
        return findNextMultipleOfFive(number)
    }
    
    return number
}

let numberOfStudents = Int(readLine()!)!
var currentGrade: Int = 0

var iterator = 0

while iterator != numberOfStudents {
    currentGrade = Int(readLine()!)!
    
    if currentGrade >= 38 {
        print(roundUpIfCloseToMultipleOfFive(currentGrade))
    } else {
        print(currentGrade)
    }
    
    iterator += 1
}
