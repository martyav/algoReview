func recursiveFactorial(_ num: Int, _ iterator: Int = 1, _ product: Int = 1) -> Int {
    guard iterator <= num else { return product }
    
    let currentProduct = iterator * product
    let newIterator = iterator + 1

    return recursiveFactorial(num, newIterator, currentProduct)
}
