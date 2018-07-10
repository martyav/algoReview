*/
 Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution.
 */

let nums = [2, 11, 7, 15]
let target = 9

func findTheTargetSum(_ arr: [Int], target: Int) -> (Int?,Int?) {
    var addend1:Int?
    var addend2: Int?

    for indexOfNum1 in 0..<arr.count {
        for indexOfNum2 in 0..<arr.count {
            if arr[indexOfNum1] + arr[indexOfNum2] == target {
                addend1 = indexOfNum1
                addend2 = indexOfNum2
            }
        }
    }

    return (addend1, addend2)
}

findTheTargetSum(nums, target: 9)

func findTheTargetSumAlternate(_ arr: [Int], target: Int) -> (Int?,Int?) {
    var addend1:Int?
    var addend2: Int?
    var diff: Int
    var checkerArr = [Int]()

    for indexOfNum1 in 0..<arr.count {
        if target > arr[indexOfNum1] {
            diff = target - arr[indexOfNum1]
        } else {
            diff = arr[indexOfNum1] - target
        }
        checkerArr.append(diff)
    }

    for findingTheMatch in 0..<arr.count {
        var counter = 0
        if arr[findingTheMatch + counter] + checkerArr[(arr.count - 1) - findingTheMatch] == target {
            print(checkerArr[(arr.count - 1) - findingTheMatch])
            addend1 = findingTheMatch + counter
            addend2 = (arr.count - 1) - findingTheMatch
            break
        } else {
            counter += 1
            continue
        }
    }

    return (addend1, addend2)
}

findTheTargetSumAlternate(nums, target: 18)
