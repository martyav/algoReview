func factorial(_ num: Int) -> Int {

    var product = 1

    for index in 1...num {
        product *= index
    }

    return product
}

func recursiveFactorial(_ num: Int, _ iterator: Int = 1, _ product: Int = 1) -> Int {

    guard iterator <= num else { return product }

    let currentProduct = iterator * product
    let newIterator = iterator + 1
    
    return recursiveFactorial(num, newIterator, currentProduct)
}

func higherOrderFactorial(_ num: Int) -> Int {
  
  return (1...num).reduce(1, *)
}
