/*
Write a function that returns the sum of all the Ints except the corners in an array of arrays of Integers ( [[Int]] ).
You can assume that the input array of arrays has the same number of rows and columns.

Sample input:
[[1,2,3],
[4,5,6],
[7,8,9]]

Sample output: 25
*/

// corners are defined as the first and last elements in the first array, and the first and last elements in the last array

func sumEverythingButCorners(_ array: [[Int]]) -> Int {
    var sum = 0
    let firstIndex = 0
    
    for indexOfInnerArray in 0..<array.count {
        let innerArray = array[indexOfInnerArray]
        let lastArrayIndex = array.count - 1
        
        for indexOfNumber in 0..<innerArray.count {
            let lastInnerArrayIndex = innerArray.count - 1
            
            if indexOfInnerArray == firstIndex || indexOfInnerArray == lastArrayIndex {
                if indexOfNumber == firstIndex || indexOfNumber == lastInnerArrayIndex {
                    continue
                } else {
                    sum += innerArray[indexOfNumber]
                }
            } else {
                sum += innerArray[indexOfNumber]
            }
        }
    }
    
    return sum
}
