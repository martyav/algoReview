func countUp(_ target: Int, startingAt: Int) {
    print(startingAt)
    
    if startingAt == target { return }
    else { return countUp(target, startingAt: startingAt + 1) }
}
