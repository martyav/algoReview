/*
    From https://www.codewars.com/kata/going-to-zero-or-to-infinity/train/javascript
    
    Calculate (1 / n!) * (1! + 2! + 3! + ... + n!) for a given n, where n is an integer greater or equal to 1.

    To avoid discussions about rounding, return the result truncated to 6 decimal places, for example:

    1.0000989217538616 will be truncated to 1.000098
    1.2125000000000001 will be truncated to 1.2125
*/

function going(n) {
    if (n > 169) {
      throw new RangeError("Vanilla Javascript has only one number type: float. It can only represent values within the 64 bit range. The number you passed in has a factorial that will exceed this range.");
    }

    let fraction = 1/factorial(n);
    
    let series = 0;
    
    for (let i = 1; i <= n; i++) {
      series += factorial(i);
    }
    
    let final = fraction * series;

    
    let stringNum = final.toString().split(".");
    let characteristic = stringNum[0];
    let mantissa = stringNum[1];
        
    if (mantissa.toString().length > 6) {
      final = parseFloat(characteristic + "." + mantissa.slice(0,6));
    }
    
    return final;
}

function factorial(n) {
  if (n < 2) {
    return 1;
  }
  
  return n * factorial(n - 1);
}
