func fizzBuzz(start: Int = 1, end: Int = 100) -> Void {
    let range = start...end
    
    for number in range {
        guard number % 5 == 0 || number % 3 == 0 else {
            print(number)
            continue
        }
        
        var fizzAndOrBuzz = ""
        
        if number % 3 == 0 {
            fizzAndOrBuzz = "Fizz"
        }
        
        if number % 5 == 0 {
            fizzAndOrBuzz += "Buzz"
        }
        
        print(fizzAndOrBuzz)
    }
}

fizzBuzz()

let fizzBuzzClosure = { (number: Int) -> Void in
    number % 15 == 0 ? print("FizzBuzz") : number % 3 == 0 ? print("Fizz") : number % 5 == 0 ? print("Buzz") : print(number)}


Array(1...100).map { fizzBuzzClosure($0) }
