// From https://www.codewars.com/kata/54ba84be607a92aa900000f1
//
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. 
// Ignore letter case.

using System;
using System.Linq;

public class Kata
{
  public static bool IsIsogram(string str) 
  {
    var sameCase = str.ToUpper();
    var uniqued = sameCase.Distinct().ToList();
    var uniquedString = String.Join("", uniqued);
    
    return String.Equals(sameCase, uniquedString);
  }
}
