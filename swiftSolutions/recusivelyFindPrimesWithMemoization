var primes: [Int] = []

func findPrimesRecursively(_ n: Int, listMaker: Int = 2) -> Bool {
    guard n > 1 || n % 2 != 0 else { return false }
    
    guard listMaker <= Int(sqrt(Double(n))) else { return true }

    primes.append(listMaker)

    for number in primes {
        if n % number == 0 {
            
            return false
        } else {
            if !primes.contains(number) {
                primes.append(number)
            }
        }
    }

    return findPrimesRecursively(n, listMaker: listMaker + 1)
}
