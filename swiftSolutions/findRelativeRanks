func findRelativeRanks(_ nums: [Int]) -> [String] {

        let gold = "Gold Medal"
        let silver = "Silver Medal"
        let bronze = "Bronze Medal"
        var rankDict = [Int:Int]()

        let rankings = nums.sorted(by: >)
        var returnMe = [String]()
        
        for index in 0..<nums.count {
            rankDict[nums[index]] = rankings.index(of: nums[index])
        }

        for index in 0..<nums.count {
            switch rankDict[nums[index]]! {
            case 0:
                returnMe.append(gold)
            case 1:
                returnMe.append(silver)
            case 2:
                returnMe.append(bronze)
            default:
                returnMe.append(String(describing: rankDict[nums[index]]! + 1))

            }
        }
        return returnMe
}
