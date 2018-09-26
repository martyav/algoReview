// From https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function generateFibs(limit, arr = []) {
  if (arr[0] + arr[1] > limit) {
    return arr;
  }

  if (arr.length < 2) {
    arr.unshift(1)
    return generateFibs(limit, arr);
  }

  arr.unshift(arr[0] + arr[1]);
  return generateFibs(limit, arr);
}

function sumFibs(num) {
  let fibs = generateFibs(num);
  let reducer = function(total, current) {
    return total + current;
  }

  return fibs.filter(x => x % 2 != 0).reduce(reducer);
}
