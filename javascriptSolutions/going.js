// WIP

function going(n) {
    let fraction = 1/factorial(n);
    let series = 0;
    
    for (let i = 1; i <= n; i++) {
      series += factorial(i);
    }
    
    let final = fraction * series;
    let mantissa = final.toString().split(".")[1];
    
    console.log(mantissa)
    
    if (mantissa.toString().length > 6) {
      final = parseFloat((fraction * series).toFixed(6));
    }
    
    return final;
}

function factorial(n) {
  if (n < 2) {
    return 1;
  }
  
  return n * factorial(n - 1);
}
