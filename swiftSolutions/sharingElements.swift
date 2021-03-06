// Return only the elements shared by two arrays -- there should be no duplicates in the returned array -- i.e [1,2,3], not [1,1,1,2,3]

func sharedElements(arr1: [Int], arr2: [Int]) -> [Int] {
    let set1 = Set(arr1)
    let set2 = Set(arr2)

    return Array(set1.intersection(set2))
}

func sharedElements2(arr1: [Int], arr2: [Int]) -> [Int] {
    var shared = [Int]()

    for index in 0..<arr1.count {
        for jindex in 0..<arr2.count {
            guard arr1[index] == arr2[jindex] else { continue }
            shared.append(arr1[index])
        }
    }

    return Array(Set(shared))
}

func sharedElements3(arr1: [Int], arr2: [Int]) -> [Int] {
    let cleanedOfDuplicates = Array(Set(arr1))
    return cleanedOfDuplicates.filter { arr2.contains($0) }
}
