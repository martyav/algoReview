 function leftRotate(arr, shift) {
   const end = arr.length;
   const moveLastIndex = Math.abs((end - shift) % end);
   const frontArr = arr.splice(moveLastIndex);
   const backArr = arr.splice(0, moveLastIndex);

   return frontArr.concat(backArr);
 };
