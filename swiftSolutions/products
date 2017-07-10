/*
 Given an array of n integers where n > 1, return an array of the same size as the input array, where the value at every index of the output array is the product of all elements in the array except the element at the given index.
 
 */
 
let quinput = [10, 4, 1, 6, 2]
let quoutput = [48,120,480,80,240]

func products(arr:[Int]) -> [Int] {
    var newArr: [Int] = []
 
    for index in 0..<arr.count {
        var product = 1
            for jindex in 0..<arr.count where jindex != index {
                product *= arr[jindex]
        }
        newArr.append(product)
    }
 
    return newArr
}
 
let test = products(arr: input)
