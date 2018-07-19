// From https://www.hackerrank.com/challenges/day-of-the-programmer/problem

/*

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
