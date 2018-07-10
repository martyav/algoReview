func diagonalDifference(of matrix: [[Int]]) -> Int {
    var diff = 0
    var sumLeftToRight = 0
    var sumRightToLeft = 0

    for index in 0..<matrix.count {
        sumLeftToRight += matrix[index][index]
        sumRightToLeft += matrix[index][(matrix.count - 1) - index]
    }

    diff = sumRightToLeft - sumLeftToRight

    if diff >= 0 {
        return diff
    } else {
        return diff * -1
    }
}

var arr = [[1,2,3,4], [5,6,7,9], [10,11,12,13], [14,15,16,17]]

print(calcDiag(arr))
