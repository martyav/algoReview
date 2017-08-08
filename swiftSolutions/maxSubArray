func maxSubArray(_ nums: [Int]) -> Int {
    var sum = Int.min

    if nums.count == 1 { return nums[0] }
    if nums.isEmpty { return 0 }

    for indexOfFirstNum in 0..<nums.count {
        var internalSum = nums[indexOfFirstNum]

        guard (indexOfFirstNum + 1) != nums.count else { break }

        for indexOfSecondNum in (indexOfFirstNum + 1)..<nums.count {
            internalSum += nums[indexOfSecondNum]
            
            if internalSum >= sum {
                sum = internalSum
            } else if internalSum < sum { break }
        }
    }
    return sum
}
