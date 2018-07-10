/*
http://codingbat.com/prob/p104029

Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".


stringClean("yyzzza") → "yza"
stringClean("abbbcdd") → "abcd"
stringClean("Hello") → "Helo"
*/

public String stringClean(String str) {
  if (str.length() == 2) {
    if (str.substring(0, 1).equals(str.substring(1, 2))) {
      return str.substring(1, 2);
    }
  }
  
  if (str.length() < 2) {
    return str;
  }
  
  if (str.substring(0, 1).equals(str.substring(1, 2))) {
    return stringClean(str.substring(1, str.length()));
  }
  
  return  stringClean(str.substring(0, 1)) + stringClean(str.substring(1, str.length()));
}
