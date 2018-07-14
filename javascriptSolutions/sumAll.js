// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
  let first = arr[0];
  let second = arr[1];

  if (first === second) {
    return first;
  }

  if (first > second) {
    second = arr[0];
    first = arr[1];
  }

  let sum = 0;

  for (let i = first; i <= second; i++) {
    sum += i;
  }

  return sum;
}
