package com.company;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.List;
import java.util.ArrayList;
import java.util.Random;

public class Main {
  /*
  * Q1. add-function
  *
  * Write a method named add that takes in two numbers as arguments.
  *
  * The function should return the sum of the two.
  */

  static int add(int num1, int num2) {
    return num1 + num2;
  }

  /*
  * Q2. age-calculator
  *
  * Write a method named calculateAge that takes two arguments: birth year and current year.
  *
  * The method should then calculate the two possible ages based on that year, and return the
  * result in the following format: (replacing 'NN' with the possible years):
  * "You are either NN or NN + 1."
  */

  static String calculateAge(int birthYear, int currentYear) {
    int age = currentYear - birthYear;
    return String.format("You are either %d or %d.", age, age + 1);
  }

  /*
  * Q3. exes-and-ohs
  *
  * Check to see if a string has the same count of 'x's and 'o's.
  *
  * The method must return a boolean and be case insensitive. The string may contain any Unicode
  * character -- not just 'x's and 'o's -- and may be of any length.
  */

  static boolean exesAndOhs(String text) {
    String lowercase = text.toLowerCase();

    Pattern findEx = Pattern.compile("x");
    Matcher exes = findEx.matcher(lowercase);

    Pattern findOh = Pattern.compile("o");
    Matcher ohs = findOh.matcher(lowercase);

    return exes.results().count() == ohs.results().count();
  }

  /*
  * Q4. endsly
  *
  * Write a Java method that takes a string as a parameter and returns true if it ends in "ly".
  */

  static boolean endsly(String text) {
    String lowercase = text.toLowerCase();

    Pattern findLy = Pattern.compile("ly");
    Matcher lyMatcher = findLy.matcher(lowercase);

    return lyMatcher.find();
  }

  /*
  * Q5. chessboard
  *
  * Write a program that creates a single string that represents an 8×8 grid, using newline
  * characters to separate lines.
  *
  * At each position of the grid there is either a space or a “#” character. The characters should
  * form a chess board.
  */

  static String chessboard(int size) {
    String board = "";

    for(int i = 0; i < size; i++) {
      for (int j = 0; j < size; j++) {
        if(i % 2 == 0) {
          if(j % 2 == 0) {
            board += " ";
          } else {
            board += "#";
          }
        } else {
          if(j % 2 == 0) {
            board += "#";
          } else {
            board += " ";
          }
        }

        if(j == (size - 1)){
          board += "\n";
        }
      }
    }

    return board;
  }

  /*
  * Q6. scanner-hungry-hippos
  *
  * Hippos only like to eat foods that begin with the letter 'h'. In an effort to reduce food waste,
  * the local zoo has hired you to write a Java program that can predict whether or not the hippos
  * will eat a given food.
  *
  * While running, your program should prompt the user to enter a food. If the food is one that
  * hippos like to eat, the program should print "Yum!" -- otherwise, it should print "Yuck!".
  */

  static void scannerHungryHippos() {
    System.out.println("Hello! Let's play Hungry Hungry Scanner.\n");

    Scanner input = new Scanner(System.in);

    Pattern findH = Pattern.compile("^[hH]");
    Matcher hMatcher;

    while(true) {
      System.out.println("Enter a food.");

      hMatcher = findH.matcher(input.nextLine());

      if(hMatcher.find()) {
        System.out.println("Yum!");
      } else {
          System.out.println("Yuck!");
        }
      }
  }

  /*
  * Q7. string-elide
  *
  * Write a method that takes a string parameter. For longer strings, the method returns a new
  * string constructed out of the first three letters of the argument, followed by three periods
  * ("..."), followed by the last letter of the argument.
  *
  * However, if the resulting string is not shorter than the argument, the method should return the
  * argument instead.
  */

  static String elide(String text) {
    if(text.length() > 7) {
      return text.substring(0, 3) + "..." + text.substring(text.length() - 1);
    }
    return text;
  }

  /*
  * Q8. triangle
  * Write a loop that will print the following triangle to the console:
  *
  *  #
  *  ##
  *  ###
  *  ####
  *  #####
  *  ######
  *  #######
  */

  static void triangle() {
    String steps = "";

    while(steps.length() < 7) {
      steps += "#";
      System.out.println(steps);
    }
  }

  /*
  * Q9. count-code
  *
  * Write a Java method that takes a string parameter and returns the number of times that the
  * string "code" appears anywhere in the given string, except we'll accept any letter for the 'd',
  * so "cope" and "cooe" count.
  */

  static int countCode(String text) {
    Pattern findCode = Pattern.compile("co.e");
    Matcher codes = findCode.matcher(text.toLowerCase());
    
    int count = 0;

    while (codes.find()) {
      count ++;
    }

    return count;
  }

  /*
  * Q10. count-the-vowels
  *
  * Write a function that accepts a string as a parameter and counts the number of vowels within the
  * string (vowels include a, e, i, o , u - don't count 'y').
  *
  * The function should return the number of vowels in the string.
  */

  static int countTheVowels(String text) {
    Pattern findVowels = Pattern.compile("[aeiou]");
    Matcher vowels = findVowels.matcher(text.toLowerCase());
    
    int count = 0;

    while (vowels.find()) {
      count ++;
    }

    return count;
  }

  /*
  * Q11. cut-a-string-at-character
  *
  * Write a function to return a part of string after a specified character.
  *
  * The function should take two arguments, the first being the string, and the second being the
  * character. The function should return only the part of the string that comes AFTER the specified
  * character.
  *
  * In other words, the function should chop the string into two parts and return only the part that
  * comes after the specified character.
  */

  static String cut(String text, Character after) {
    int startIndex = text.indexOf(after);
    int lastIndex = text.length();

    return text.substring(startIndex, lastIndex);
  }

  /*
  * Q12. twelve-days
  *
  *  Print "The Twelve Days of Christmas", an English carol with a lot of repetition!
  *
  * You can find the structure of the lyrics here: (The Twelve Days of Christmas Lyrics)
  * [http://en.wikipedia.org/wiki/The_Twelve_Days_of_Christmas_%28song%29#Lyrics].
  *
  * Use variables to store bits of repeated data and print the full lyrics.
  */

  static void twelveDaysOfXmas() {
    String [] gifts = {"a Partridge in a Pear Tree!\n",
        "Two Turtle Doves, and",
        "Three French Hens,",
        "Four Calling Birds,",
        "Five Golden Rings!",
        "Six Geese A-Laying,",
        "Seven Swans A-Swimming,",
        "Eight Maids A-Milking,",
        "Nine Ladies Dancing,",
        "Ten Lords A-leaping,",
        "Eleven Pipers Piping,",
        "Twelve Drummers Drumming,"
    };

    String [] prettyOrdinals = {
        "first",
        "second",
        "third",
        "fourth",
        "fifth",
        "sixth",
        "seventh",
        "eighth",
        "ninth",
        "tenth",
        "eleventh",
        "twelfth"
    };

    for(int i = 0; i < 12; i++) {
      String ordinal = prettyOrdinals[i];

      System.out.println(String.format("On the %s day of Christmas, my true love gave to me:", ordinal));

      for(int j = i; j >= 0; j--) {
        System.out.println(gifts[j]);
      }
    }
  }

  /*
  * Q13. scanner-ice-cream-start-up
  *
  * Your friends just came up with a great new start-up idea: it's like Uber for ice cream! They've
  * asked you to write a prototype Java program that will accept ice cream orders for delivery. The
  * program should use a Scanner object to read user input and should:

  *  1. Greet the user and ask them for a name.
  *  2. Ask the user what flavor of ice cream they would like.
  *  3. One-by-one, offer three toppings of your choice which the user will select by inputting
  *     'yes'.
  *  4. Calculate the total price of the order: the base ice cream costs $2.33 and each topping is
  *     an additional $0.33 cents.
  *  5. Calculate a delivery wait time estimate, which should be a random number of minutes between
  *     one and sixty.
  *  6. Print an order confirmation to the console that contains the following details: the user's
  *     name, ice cream flavor, number of toppings, total price, and delivery wait time.
  */

  static void icecreamStartUp() {
    Scanner input = new Scanner(System.in);

    String [] possibleToppings = {"crushed butterfingers", "waffle cone pieces", "caramel sauce"};
    List<String> chosenToppings = new ArrayList<String>();

    System.out.println("Hello! What's your name?");
    String name = input.next();
    System.out.println(String.format("%s, is it? What flavor of icecream would you like, %s?",
        new Object[]{name, name}));
    String flavor = input.next();
    System.out.println("What toppings would you like? We have:");

    for(int i = 0; i < possibleToppings.length; i++) {
      System.out.println(possibleToppings[i]);
      String selection = input.next();
      if ("yes".equals(selection)) {
        chosenToppings.add(possibleToppings[i]);
      }
    }

    Random rand = new Random();
    int waitTime = rand.nextInt(59) + 1;
    double price = 2.33 + (0.33 * chosenToppings.size());

    System.out.println(String.format("This is your order confirmation.\n%s ordered %s icecream with", new Object[]{name, flavor}));

    if(!chosenToppings.isEmpty()) {
      for(int i = 0; i < chosenToppings.size(); i++) {
        System.out.println(chosenToppings.get(i));
      }
    }

    System.out.println(String.format("%s's order comes to %3.2f\nEstimated wait time is %d minutes.", new Object[]{name, price, waitTime}));

  }

  public static void main(String[] args) {
    int q1 = add(1,2);
    String q2 = calculateAge(1978, 2017);
    boolean q3 = exesAndOhs("xxo");
    boolean q4 = endsly("endsly");
    String q5 = chessboard(8);
    String q7 = elide("Hello!");
    int q9 = countCode("aaaacodexxxcopexxxxcoxeyyy");
    int q10 = countTheVowels("aeiou");
    String q11 = cut("tom@myspace.com", '@');

    System.out.println(q1);
    System.out.println(q2);
    System.out.println(q3);
    System.out.println(q4);
    System.out.println(q5);
    System.out.println(q7);
    System.out.println(q9);
    System.out.println(q10);
    System.out.println(q11);
    triangle();
    twelveDaysOfXmas();

    icecreamStartUp();
    // scannerHungryHippos();
  }
}
