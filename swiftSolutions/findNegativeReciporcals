// Given an array of integers, return all the positive numbers that have their opposites in the array.

let barr: [Int] = [1,2,5,-5,0,-6,-5,9,10,-1,4,5,0,5,5,-1,1]

func findOpposite(_ arr: [Int]) -> [Int] {
    var ourOpposites:[Int] = []

    guard arr.count > 1 else { return ourOpposites }

    for checkMe in arr where checkMe > 0 {
        for checkAgainst in arr where checkAgainst < 0{
            if checkMe * -1 == checkAgainst {
                guard !ourOpposites.contains(checkMe) else { break }
                ourOpposites.append(checkMe)
            }
        }
    }

    return ourOpposites
}

findOpposite(barr)

// Chris's code -- linear time (https://github.com/cristopherchavezny)

func numWhosOppositeIsInThe(arr: [Int]) -> Set<Int> {
    var answer = Set<Int>()
    for num in arr {
        if arr.contains(-num), num > 0, !answer.contains(num) {
            answer.insert(num)
        }
    }
    return answer
}

numWhosOppositeIsInThe(arr: barr)

func noDuplicates(_ arr: [Int]) -> [Int] {
    var container = [Int]()
    for item in arr {
        guard !container.contains(item) else {continue}
        container.append(item)
    }
    
    return container
}

var winput = [4,3,3,2,3,2,5,4,4]
var woutput = [4,3,2,5]

noDuplicates(winput)
