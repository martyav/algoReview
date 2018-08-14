// Classic

function fizzbuzz(range) {
  for (let num = 1; num <= range; num++) {
    let msg = "";
    
    if (num % 3 === 0) {msg = msg.concat("Fizz")};
    if (num % 5 === 0) {msg = msg.concat("Buzz")};

    if (msg === "") {msg = num};

    console.log(msg)
  })
}
