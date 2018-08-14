// Classic

function fizzbuzz(range) {
  let vals = Array.from({length: range}, (x, i) => i + 1);

  vals.forEach(function(num) {
    let msg = "";
    
    if (num % 3 === 0) {msg = msg.concat("Fizz")};
    if (num % 5 === 0) {msg = msg.concat("Buzz")};

    if (msg === "") {msg = num};

    console.log(msg)
  })
}
