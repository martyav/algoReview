/*
http://codingbat.com/prob/p167015

Given a string, compute recursively (no loops) the number of "11" substrings in the string. The "11" substrings should not overlap.

count11("11abc11") → 2
count11("abc11x11x11") → 3
count11("111") → 1
*/

public int count11(String str) {
  if (str.length() < 2) {
    return 0;
  }
  
  if (str.substring(0, 1).equals("1") && str.substring(1, 2).equals("1")) {
    return 1 + count11(str.substring(2, str.length()));
  }
  
  return count11(str.substring(1, str.length()));
}
