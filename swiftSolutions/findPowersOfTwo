func findPowersOf2(_ arr: [Int]) -> [Int]? {

    func helper(_ num: Int) -> Bool {
        guard num != 2 else { return true }

        let divisor = num/2
        
        if divisor % 2 == 0 {
           return helper(divisor)
        }

        return false
    }

    var foundPowers: [Int] = []

    guard !arr.isEmpty else { return nil }

    for num in arr where num % 2 == 0 {
        if helper(num) {
            foundPowers.append(num)
        }
    }

    return foundPowers
}
