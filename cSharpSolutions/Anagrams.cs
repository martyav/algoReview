// From https://www.codewars.com/kata/523a86aa4230ebb5420001e1
//
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
//
// 'abba' & 'baab' == true
//
// 'abba' & 'bbaa' == true
//
// 'abba' & 'abbba' == false
// Write a function that will find all the anagrams of a word from a list. 
// You will be given two inputs a word and an array with words. 
// You should return an array of all the anagrams or an empty array if there are none. 

using System;
using System.Collections.Generic;

public static class Kata
{
  public static List<string> Anagrams(string word, List<string> words)
  {
    List<string> result = new List<string>();
    
    foreach (string item in words) 
    {
      if (item.Length != word.Length) 
        continue;
      
      // Sorting is obvious but let's try it without it
      
      Dictionary<char, int> checkWord = new Dictionary<char, int>();
      Dictionary<char, int> checkItem = new Dictionary<char, int>();

      for (int i = 0; i < item.Length; i++) 
      { 
        char currentCharInWord = word[i];
        char currentCharInItem = item[i];

        if (checkWord.ContainsKey(currentCharInWord)) 
          checkWord[currentCharInWord] += 1;
        else 
          checkWord.Add(currentCharInWord, 1);
        
        if (checkItem.ContainsKey(currentCharInItem)) 
          checkItem[currentCharInItem] += 1;
        else 
          checkItem.Add(currentCharInItem, 1);
      }
      
      bool match = true;
      
      foreach (char key in checkWord.Keys) 
      {
        if (!checkItem.ContainsKey(key) || checkItem[key] != checkWord[key]) 
        {
          match = false;
          break;
        }
      }
      
      if (!match) 
        continue;
      
      result.Add(item);
    }
    
    return result;
  }
}
