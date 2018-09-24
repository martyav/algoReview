// From https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript

function list(names) {
  let returnString = "";

  if (!Array.isArray(names)) throw new TypeError("Argument needs to be an array");
  if (typeof names[0] != "object" && names.length > 0) throw new TypeError("Argument needs to be an array of objects");
  if (names.length === 1 && names[0].hasOwnProperty("name")) returnString = names[0].name;
  if (names.length < 2) return returnString;

  for (let i = 0; i < names.length; i++) {
    if (!names[i].hasOwnProperty("name")) continue; 
    
    let individual = names[i].name;
    let secondToLast = names.length - 2;

    if (i < secondToLast) {
      returnString = returnString.concat(`${ individual }, `);
    } else if (i === secondToLast) {
      returnString = returnString.concat(`${ individual } & `); 
    } else {
      returnString = returnString.concat(individual);
    }
  }

  return returnString;
}
