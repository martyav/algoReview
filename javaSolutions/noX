/*
http://codingbat.com/prob/p118230

Given a string, compute recursively a new string where all the 'x' chars have been removed.


noX("xaxb") → "ab"
noX("abc") → "abc"
noX("xx") → ""
*/

public String noX(String str) {
  if (str.length() == 0) {
    return str;
  }
  
  if (str.length() == 1) {
      if (str.substring(0, 1).equals("x")) {
      return "";
    } else {
      return str;
    }
  }
  
  if (str.substring(0, 1).equals("x")) {
    return noX(str.substring(1, str.length()));
  } else {
    return str.substring(0, 1) + noX(str.substring(1, str.length()));
  }
}
