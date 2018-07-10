/*
http://codingbat.com/prob/p146974

Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.


scoresIncreasing([1, 3, 4]) → true
scoresIncreasing([1, 3, 2]) → false
scoresIncreasing([1, 1, 4]) → true
*/

public boolean scoresIncreasing(int[] scores) {
  if (scores.length == 1) {
    return true;
  }
  
  if (scores[0] <= scores[1]) {
    if (scores.length == 2) {
      return true;
    } else {
    
      int[] oldArray = scores;
      int startIndex = 1;
      int endIndex = scores.length;
      
      return scoresIncreasing(Arrays.copyOfRange(oldArray, startIndex, endIndex));
    }
  }
  
  return false;
}
