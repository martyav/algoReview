function getDigits(num, arr = []) {
  if (!num) return arr;

  arr.push(parseInt(num % 10));

  return getDigits(parseInt(num/10), arr);
}
