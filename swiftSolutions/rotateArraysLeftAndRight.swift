func rotate(array: [Int], leftward rotation: Int) -> [Int] {
    var newIndices = [Int]()
    var newArray = [Int]()
    
    for number in 0..<array.count {
        var newIndex = (number + rotation) % array.count        
        newIndices.append(newIndex)
    }
    
    for value in newIndices {
        newArray.append(array[value])
    }
    
    return newArray
}

func rotate(array: [Int], rightward rotation: Int) -> [Int] {
    var newIndices = [Int]()
    var newArray = [Int]()
    
    for number in 0..<array.count {
        var newIndex = (number - rotation) % array.count
        
        if newIndex < 0 {
            newIndex += array.count
        }
        
        newIndices.append(newIndex)
    }
    
    for value in newIndices {
        newArray.append(array[value])
    }
    
    return newArray
}
