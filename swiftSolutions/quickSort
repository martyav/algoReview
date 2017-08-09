func quickSort(arr: [Int]) -> [Int] {

    guard arr.count > 1 else { return arr }

    let pivot = arr[arr.count/2]
    let less = arr.filter{$0 < pivot}
    let equal = arr.filter{$0 == pivot}
    let more = arr.filter{$0 > pivot}

    return quickSort(arr: less) + equal + quickSort(arr: more)
}

