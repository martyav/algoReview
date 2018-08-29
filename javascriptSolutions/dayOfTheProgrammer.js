/* From https://www.hackerrank.com/challenges/day-of-the-programmer/problem

Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer 
(the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

From 1700 to 1917, Russia's official calendar was the Julian calendar; since  they used the Gregorian calendar 
system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after 
January 31st was February 14. This means that in 1918, February 14th was the 32nd day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap 
year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian 
calendar, leap years are either of the following:

Divisible by 400.
Divisible by 4 and not divisible by 100.

Given a year, y, find the date of the 256th day of that year according to the official Russian calendar
during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit 
month, and yyyy is y.
*/

function isLeapYear(year) {
    if (year > 1918) {
        return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
    } 
    
    return year % 4 === 0;
}

function addLeadingZero(number) {
    if (number < 10) {
        return "0" + number;
    }
    
    return number;
}

function solve(year) {
    let target = 256;
    let arr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31];
    
    if (isLeapYear(year)) {
        arr[2] = 29;
    };
    
    if (year === 1918) {
        arr[2] = 15;
    };
    
    let count = 0;
    let month = 0;
    
    for (let index = 0; index < arr.length; index++) {
        count += arr[index];

        if (count >= target) {
            month = index;
            break;
        }
    }
    
    let day = target - (count - arr[month]);
    
    day = addLeadingZero(day);
    month = addLeadingZero(month);
    
    
    return `${day}.${month}.${year}`;
}
