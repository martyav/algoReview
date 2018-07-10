def exponent(base, power):
  if power == 0:
    return 1
  if power == 1:
    return base
    
  return exponent(base, power - 1) * base
