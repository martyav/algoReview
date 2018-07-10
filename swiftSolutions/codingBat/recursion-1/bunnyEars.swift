/*
We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).


bunnyEars(0) → 0
bunnyEars(1) → 2
bunnyEars(2) → 4
*/

func bunnyEars(_ bunnies: Int) -> Int {
  guard bunnies != 0 else {
    return 0
  }
  
  var currentBuns = bunnies

  return 2 + bunnyEars(currentBuns - 1)
}
