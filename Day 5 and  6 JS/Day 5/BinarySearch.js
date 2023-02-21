function binarySearch(arr, x, start, end) {
    if (start > end) return false; 
    let mid = (start + end) / 2;  
    if (arr[mid] === x) return true; 
    if(arr[mid] > x)   return binarySearch(arr, x, start, mid-1); 
    else return binarySearch(arr, x, mid+1, end); 
  }

let arr = [1, 3, 5, 7, 9];
let x = 5;
let result = binarySearch(arr, x, 0, arr.length - 1);

if (result) console.log("Element found!");
else console.log("Element not found.");

  