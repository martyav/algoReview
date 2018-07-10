/*
http://codingbat.com/prob/p143900

Given a string, compute recursively the number of times lowercase "hi" appears in the string, however do not count "hi" that have an 'x' immedately before them.


countHi2("ahixhi") → 1
countHi2("ahibhi") → 2
countHi2("xhixhi") → 0
*/

public int countHi2(String str) {
  if (str.length() < 2) {
    return 0;
  }
  
  if (str.substring(0, 2).equals("hi")) {
    return 1 + countHi2(str.substring(1, str.length()));
  }
  
  if (str.substring(0, 1).equals("x")) {
    if (str.length() > 2 && str.substring(1, 3).equals("hi")) {
      return countHi2(str.substring(3, str.length()));
    }
  }
  
  return countHi2(str.substring(1, str.length()));
}
