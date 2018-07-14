// Remove all falsy values from an array.

function bouncer(arr) {
 let newArr = arr.filter(function(item, index, array){
    return item; // this works because falsey values will evaluate to false by the filter and be skipped
  });
  
  return newArr;
}
