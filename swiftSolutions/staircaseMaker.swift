/*
Write a program that prints a staircase of size n. For example, a staircase of size n = 3 would look like
  #
 ##
###
*/

func stairCaseMaker(n: Int) {
    var block = "#"
    var space = " "
    
    while block.characters.count <= n {
        for i in 0..<(n - block.characters.count) {
            print(space, terminator: "")
        }
        print(block)
        block += "#"
    }
}
