/*
http://codingbat.com/prob/p183174

Given a string, return true if it is a nesting of zero or more pairs of parenthesis, like "(())" or "((()))". Suggestion: check the first and last chars, and then recur on what's inside them.


nestParen("(())") → true
nestParen("((()))") → true
nestParen("(((x))") → false
*/

public boolean nestParen(String str) {
  if (str.length() < 1) {
    return true;
  }
  
  if (str.substring(0, 1).equals("(")) {
    if (str.charAt(str.length() - 1) == ')') {
      return nestParen(str.substring(1, str.length() - 1));
    } else {
      return false;
    }
  }
  
  return false;
}
