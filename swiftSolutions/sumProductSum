// Given an array of Ints as input, write a function that returns a Tuple, where the first value is the sum of the even numbers, the second value is the product of the odd numbers, and the third number is the sum of the negative numbers. 

func processArr(_ arr: [Int]) -> (Int, Int, Int) {
    var sumOfEvens = 0
    var productOfOdds = 1
    var sumOfNegs = 0

    for num in arr {
        if num < 0 {
            sumOfNegs += num
        }

        if num % 2 == 0 {
            sumOfEvens += num
        } else {
            productOfOdds *= num
        }
    }

    return (sumOfEvens,productOfOdds,sumOfNegs)
}
