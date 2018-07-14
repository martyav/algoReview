// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.
//
// Note: You have to use the arguments object.

function destroyer(arr) {
  // Arguments contains all the arguments passed to a method. We need to spread it, turn it into an array, then slice it after the first arg
  let args = Array(...arguments).slice(1); 

  arr = arr.filter(function(a) {
    return !args.includes(a);
  });

  return arr;
}
