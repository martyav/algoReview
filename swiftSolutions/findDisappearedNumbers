/* 
  Given an unsorted array of numbers, find those numbers that are not included in the range between the smallest number and the biggest. For example, in the array [1,2,4,5], the function should return the number 3.
*/

func findDisappearedNumbers(_ nums: [Int]) -> Set<Int> {
    var checkerSet: Set<Int> = []

    for index in 1...nums.count {
        checkerSet.insert(index)
        print(checkerSet)
    }

    for number in nums {
        print(checkerSet.contains(number))
        if checkerSet.contains(number) {
            checkerSet.remove(number)
        }
    }
    return checkerSet
}

findDisappearedNumbers([4,3,2,7,8,2,3,1])
