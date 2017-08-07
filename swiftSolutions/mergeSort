func mergeSort(arr: [Int]) -> [Int] {
    guard arr.count > 1 else { return arr }

    let midIndex = arr.count/2
    let left = mergeSort(arr: Array(arr[0..<midIndex]))
    let right = mergeSort(arr: Array(arr[midIndex..<arr.count]))

    return merge(leftArr: left, rightArr: right)
}

func merge(leftArr: [Int], rightArr: [Int]) -> [Int] {
    var leftPointer = 0
    var rightPointer = 0
    var mergedArr = [Int]()

    while leftPointer < leftArr.count && rightPointer < rightArr.count {
        if leftArr[leftPointer] < rightArr[rightPointer] {
            mergedArr.append(leftArr[leftPointer])
            leftPointer += 1
        } else {
            mergedArr.append(rightArr[rightPointer])
            rightPointer += 1
        }
    }
    return mergedArr + leftArr[leftPointer..<leftArr.count] + rightArr[rightPointer..<rightArr.count]
}

let arr1 = [12322322,6,945, 3232,434,32,1221,432423,666]
let arr2 = [2,3,4,7,8]

merge(leftArr: arr1, rightArr: arr2)
