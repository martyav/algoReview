 function downRotate(arr, shift) {
   try {
     arr.every(row => row.constructor === Array)
   } catch(error) {
     throw new TypeError("First arg must be an array of arrays");
   }

   try {
     let check = arr[1];
     check.constructor === Array;
   } catch(error) {
     throw new Error("First arg must be a multi-dimensional array which contains more than one row");
   }

   const end = arr.length;
   const moveLastIndex = Math.abs((shift - end) % end);
   const frontArr = arr.splice(moveLastIndex);
   const backArr = arr.splice(0, moveLastIndex);

   return frontArr.concat(backArr);
 };
