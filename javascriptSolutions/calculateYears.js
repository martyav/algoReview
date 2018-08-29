/*
From https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
  
Mr. Scrooge has a sum of money that he wants to invest, and he wants to know how many years this sum has
to be kept in the bank in order for this sum of money to amount to a certain target value.

The sum is kept for n years in the bank where interest is paid yearly, and the new sum is re-invested 
yearly after paying tax.

Note that the principal is not taxed but only the year's accrued interest
*/

function calculateYears(principal, interest, tax, desired) {
  if (principal === 0 || interest === 0) {
    throw new Error("We can't accrue interest on nothing");
  }

  let year = 0;
  let total = principal;
  
  while (total < desired) {
    let moneyToAdd = total * interest;
    let moneyToSubtract = moneyToAdd * tax;
    let finalMoneyReinvested = moneyToAdd - moneyToSubtract
    
    total += finalMoneyReinvested;
    year++;
  }
  
  return year;
}
