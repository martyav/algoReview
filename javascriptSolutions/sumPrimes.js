function sumPrimes(num) {
  let primes = generatePrimes(num);

  return primes.reduce((total, current) => total + current);
}

function generatePrimes(limit) {
  let primes = [];

  for (let num = 2; num <= limit; num++) {
    let divisors = [];

    for (let jum = 1; jum <= num; jum++) {
      if (num % jum === 0) divisors.push(jum);
    }

    if (divisors.length === 2) primes.push(num);
  }

  return primes;
}
