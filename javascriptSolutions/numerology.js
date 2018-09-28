function getDigits(num, arr = []) {
  if (!num) return arr;

  arr.push(parseInt(num % 10));

  return getDigits(parseInt(num/10), arr);
}

function numerology(num) {
  const arr = getDigits(num);
  const sum = arr.reduce((total, current) => total + current);

  if (sum > 9) return numerology(sum);
  
  return sum;
}
