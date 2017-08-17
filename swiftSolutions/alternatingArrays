/*

 Write a function that takes two arrays as input, and returns a single array that alternates the elements of each input array.

 Sample  input: [1,4,8,2], [3,9,10,0]

 Sample output: [1,3,4,9,8,10,2,0]

 */

func alternate(arr1: [Int], arr2: [Int]) -> [Int] {

    var alternated: [Int] = []
    let length = arr1.count + arr2.count
    let shorter: [Int]
    let longer: [Int]

    if arr1.count < arr2.count {
        shorter = arr1
        longer = arr2
    } else {
        shorter = arr2
        longer = arr1
    }

    for index in 0..<length where index < shorter.count {
            alternated.append(shorter[index])
            alternated.append(longer[index])
    }
    
    if alternated.count < length {
        let newStartingIndex = shorter.count
        
        for index in newStartingIndex..<longer.count {
            alternated.append(longer[index])
        }
    }

    return alternated
}
