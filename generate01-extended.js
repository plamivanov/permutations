const numSys = 2 // numeric system
const digitsCount = 3 //count of digits
const resultsArray = new Array(Math.pow(numSys, digitsCount)); // complexity n numSys na stepen digitCount
let counter = 0; // counter to check the right complexity - formula

const arr = new Array(digitsCount).fill(0);

function GenerateAll_01(arr, position) {
    if (position == arr.length) {
        console.log(arr.join(''));

        // add results to to an resultsArray
        resultsArray[counter] = arr.slice();
        counter++;

        return;
    }
    for (let index = 0; index < numSys; index++) {
        arr[position] = index;
        GenerateAll_01(arr, position + 1)
    }

    // arr[position] = index;  // if 0 or 1 only 
    // GenerateAll_01(arr,position+1)
    // arr[position] = 1;
    // GenerateAll_01(arr,position+1)
}

GenerateAll_01(arr, 0)

// 000
// 001
// 010
// 011
// 100
// 101
// 110
// 111

console.log(resultsArray);
console.log(`resultsArray length ${resultsArray.length} and the counter is ${counter}, 
numSys is ${numSys} and digitsCount is ${digitsCount}`);