// From https://www.codewars.com/kata/514b92a657cdc65150000006
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.
//
// Courtesy of ProjectEuler.net

using System.Collections.Generic;
using System.Linq;

public static class Kata
{
  public static int Solution(int value)
  {
  
    if (value < 3) 
      return 0;
    
    if (value < 5) 
      return 3;
    
    int sum = 0;
    int threeLimit = value/3;
    var list = new List<int>();
    
    for (int num = 1; num <= threeLimit; num++) 
    {
      int currentThree = num * 3;
      int currentFive = num * 5;
      
      if (currentThree == currentFive) 
        continue;
    
      if (currentFive < value && currentThree < value) 
      {
        list.Add(currentThree);
        list.Add(currentFive);
      }
      else 
      {
        list.Add(currentThree);
      }
    }
    
    var cleanList = list.Distinct();
    
    foreach (int num in cleanList) 
    {
      sum += num;
    }
    
    return sum;
  }
}
