let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n = 3;
let res = new Array(3);
let counter = 0;

function generateCombinateions(arr, n, index, ind) {

    if (index >= n) {
        counter++;
        console.log(`${res} ---> ${counter} `)
        return;
    }
    for (let i = ind; i < arr.length; i++) {
        res[index] = arr[i];
        generateCombinateions(arr, n, index + 1, i + 1)
    }
}

// arr.length ! / (arr.length - k)! * k!
function cobinationsCountFormula(arr, n) {
    let countCombinations = arr.length;
    for (let i = 1; i < n; i++) {
        countCombinations *= (arr.length - i);
        countCombinations /= (i + 1);
    }

    return countCombinations
}
generateCombinateions(arr, n, 0, 0)
console.log('formula total count of combinations: ' + cobinationsCountFormula(arr, n))
// 1 2 3
// 1 2 4
// 1 2 5
// 1 3 4
// 1 3 5
// 1 4 5
// 2 3 4
// 2 3 5
// 2 4 5
// 3 4 5