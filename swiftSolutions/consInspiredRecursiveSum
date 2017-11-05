// Yesterday, I learned about pairs and consing via a Coursera class using ML. 
// It made recusive functions, a concept I'm struggled with, a little more clear.
// I felt inspired to try out the concept of heads and tails in Swift.

func sumUp(array: [Int]) -> Int? {
    guard !array.isEmpty else {
        return nil
    }
    
    var mutableArray = array
    
    if array.count == 1 {
        return array[0]
    } else {
        let first = mutableArray[0]
        let second = mutableArray[1]
        let newHead = first + second
        let newTail = mutableArray[2...]
        
        return sumUp(array: [newHead] + newTail)
    }
    
}

sumUp(array: [])
