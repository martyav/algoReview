/*
 You are given an input array, an array of tuples of elements to swap, and a closure mapping two inputs to a Bool.  Make all swaps in order, then return a tuple containing the swapped array and whether or not it is sorted according to the input condition.
 Sample input:
 [1,6,2,9,3], [(1,2), (2,4), (3,4)], {(a, b) -> Bool in return a < b}
 
 Sample output:
 [1,2,3,6,9], true
 */

func makeThisIntoThat(arr: [Int], swaps: [(Int, Int)], closure: ((Int, Int)) -> Bool) -> [Int] {
    var newArr: [Int] = arr
 
    for index in 0..<swaps.count {
        newArr[swaps[index].1] = newArr[swaps[index].0]
    }
 
    return newArr
}
