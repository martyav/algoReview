/*
Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.


posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true
*/

func posNeg(first: Int, second: Int, negative: Bool) -> Bool {
  guard negative else {
      return first < 0 && second < 0
    } 
    
    return (first < 0 && second > 0) || (second < 0 && first > 0)
}
