// https://www.hackerrank.com/challenges/kangaroo/problem

/*
There are two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity). The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump. The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump. Given the starting locations and movement rates for each kangaroo, can you determine if they'll ever land at the same location at the same time?
*/

var input = readLine()!
let values = input.components(separatedBy: " ").map {Int($0)}

func kangaroo(startingPosition1 sp1: Int, velocity1 v1: Int, startingPosition2 sp2: Int, velocity2 v2: Int) {
    func positionAtStep(startingPosition: Int, velocity: Int, step: Int) -> Int {
        return startingPosition + velocity * step
    }
    
    func sanityChecker(sp1: Int, v1: Int, sp2: Int, v2: Int) -> Bool {
        if sp1 > sp2 && v1 > v2 {
            return false
        } else if sp2 > sp1 && v2 > v1 {
            return false
        }
        
        return true
    }
    
    guard sanityChecker(sp1: sp1, v1: v1, sp2: sp2, v2: v2) else {
        print("NO")
        return
    }
    
    // I realize this is the worst way...
    
    for step in 1...10_000 {
        let kangaroo1 = positionAtStep(startingPosition: sp1, velocity: v1, step: step)
        let kangaroo2 = positionAtStep(startingPosition: sp2, velocity: v2, step: step)
        
        if kangaroo1 == kangaroo2 {
            print("YES")
            return
        }
    }
    
    print("NO")
    return
}

kangaroo(startingPosition1: values[0]!, velocity1: values[1]!, startingPosition2: values[2]!, velocity2: values[3]!)

// Better way -- high school algebra win

func kangaroo(startingPosition1 sp1: Int, velocity1 v1: Int, startingPosition2 sp2: Int, velocity2 v2: Int) {
    func isΔPositionDivisibleByΔVelocity(sp1: Int, v1: Int, sp2: Int, v2: Int) -> Bool {
        let ΔV = (v1 - v2)
        let ΔP = (sp2 - sp1)
        
        guard ΔV != 0 else {
            return false
        }
        
        return ΔP % ΔV == 0
    }
    
    let kangaroosMeet = isΔPositionDivisibleByΔVelocity(sp1: sp1, v1: v1, sp2: sp2, v2: v2)
    
    guard v1 > v2 && kangaroosMeet else {
        print("NO")
        return
    }
    
    print("YES")
    return
}
