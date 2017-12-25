/*
 Input = 412
 Output = 7
 
 Input = 1480
 
 Output = 13
 
 Input = 1023
 
 Output = 6
 
 Given an Int as input, return the sum of its digits. Then do it recursively.
 */

func numerology(_ num: Int) -> Int {
    var sum = 0
    let numArr = Array(String(num).characters)

    for digit in numArr {
        sum += Int(String(digit))!
    }

    return sum
}

numerology(123)

var sum = 0

func recursiveNumerology(_ num: Int) -> Int {
    var numArr = Array(String(num).characters)
    let newNum: Int

    sum += Int(String(describing: numArr[numArr.count - 1]))!
    numArr.removeLast()

    // base case
    guard numArr.count != 0 else { return sum }

    newNum = Int(String(numArr))!
    return recursiveNumerology(newNum)
}

recursiveNumerology(402)

func recursiveNumerology2(_ num: Int) -> Int {
    guard num > 10 else {
        return num
    }
    
    return (num % 10) + recursiveNumerology2(n/10) 
}
