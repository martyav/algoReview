/*

Given one non-whitespace printable character, make a 3x3 square representation of that input. For example, if the input is #, then the output is:



###

# #

###



*/



func makeASquare3(_ c: String) {

  [1,2,3].map{$0==2 ? print(c+" "+c) : print(c+c+c)}

}
