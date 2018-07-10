// from https://www.codewars.com/kata/513e08acc600c94f01000001
//
// Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned.
// The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded
// to the closest valid value.

using System.Text;

public class Kata
{
  public static string convertOne(int colorValue) 
  {
    string max = "FF";
    string min = "00";
    
    if (colorValue > 255) 
      return max;
    
    if (colorValue < 0) 
      return min;
    
    string hexValue = colorValue.ToString("X"); 
    
    if (hexValue.Length == 1) 
      hexValue = "0" + hexValue;
    
    return hexValue;
  }
  
  public static string Rgb(int r, int g, int b) 
  {
    StringBuilder sb = new StringBuilder();
    
    string hexR = convertOne(r);
    string hexG = convertOne(g);
    string hexB = convertOne(b);
    
    sb.Append(hexR);
    sb.Append(hexG);
    sb.Append(hexB);
    
    return sb.ToString();
  }
}
