/*
http://codingbat.com/prob/p158175

Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".


pairStar("hello") → "hel*lo"
pairStar("xxyy") → "x*xy*y"
pairStar("aaaa") → "a*a*a*a"
*/

public String pairStar(String str) {
  if (str.length() < 2) {
    return str;
  }
  
  if (str.substring(0, 1).equals(str.substring(1, 2))) {
    return pairStar(str.substring(0, 1) + "*" + str.substring(1, str.length()));
  }
  
  return pairStar(str.substring(0, 1)) + pairStar(str.substring(1, str.length()));
}
