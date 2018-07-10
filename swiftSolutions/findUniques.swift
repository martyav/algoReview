func findUniques(_ arr: [Int]) -> [Int] {

    guard arr.count != 0 else {
        print("The array is empty")
        return []
    }

    var uniques = [Int]()
    let checkForDupes = Set(arr)
    var runningTally = [Int : Int]()

    for item in checkForDupes {
        runningTally[item] = 0
    }

    for item in arr {
        runningTally[item]! += 1
    }

    for (key,val) in runningTally where val == 1 {
        uniques.append(key)
    }

    return uniques
}

