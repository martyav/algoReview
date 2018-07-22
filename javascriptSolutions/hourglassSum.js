// From https://www.hackerrank.com/challenges/2d-array/problem
/*

*/

function grabRow(arr, index, jindex, above) {
    let finalArr = [];
    let firstRow = 0;
    let lastRow = arr.length - 1;
    let firstColumn = 0;
    let lastColumn = arr[jindex].length - 1;
    
    if (arr.length < 3 || index === firstRow || index === lastRow) {
        return null;
    }
    
    if (arr[jindex].length < 3 || jindex === firstColumn || jindex === lastColumn) {
        return null;
    }
    
    if (above) {
        finalArr.push(arr[index - 1][jindex + 1]);
        finalArr.push(arr[index - 1][jindex]);
        finalArr.push(arr[index - 1][jindex - 1]);
    } else {
        finalArr.push(arr[index + 1][jindex - 1]);
        finalArr.push(arr[index + 1][jindex]);
        finalArr.push(arr[index + 1][jindex + 1]);
    }
    
    return finalArr;
}

function hourglass(arr, index, jindex) { 
    let top = grabRow(arr, index, jindex, true);
    let bottom = grabRow(arr, index, jindex, false)
    
    if (!top || !bottom) {
        return null;    
    }
    
    let finalArr = top.concat(bottom)
    finalArr.push(arr[index][jindex]);
    
    return finalArr;
}

function sumUp(arr, index, jindex) {
    let sumArr = hourglass(arr, index, jindex);
    let final = 0;
    
    if (sumArr) {
        for (let value of sumArr) {
            final += value;
        }
        
        return final;
    }
    
    return 0;
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let sums = [];
    
    for (let index = 0; index < arr.length; index++) {
        for (let jindex = 0; jindex < arr[index].length; jindex++) {
            let temp = sumUp(arr, index, jindex);
            sums.push(temp);
        }
    }

    let max = Number.NEGATIVE_INFINITY;
    
    for (let value of sums) {
        if (value > max) {
            max = value;
        }
    }
    
    return max;
}
