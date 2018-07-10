// From https://www.codewars.com/kata/52685f7382004e774f0001f7
//
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

using System.Text;

public static class TimeFormat
{   
    public static string AddLeadingZero(int time) 
    {
        StringBuilder sb = new StringBuilder();
        
        if ((time/10) < 1) 
          sb.Append("0");
        
        sb.Append(time);
        
        return sb.ToString();
    }
    
    public static string GetReadableTime(int seconds)
    {
        const int units = 60;
        const int unitsSquared = 3600;
        
        int hh = (seconds/(unitsSquared)) % unitsSquared;
        int mm = (seconds/units) % units;
        int ss = seconds % units;
        
        return $"{AddLeadingZero(hh)}:{AddLeadingZero(mm)}:{AddLeadingZero(ss)}";
    }
}
