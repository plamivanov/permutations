const n = 3;
const startNum = 4;
const endNum = 8;
let arr = new Array(n);
let counter = 0


function GenerateCombinations(arr, index, startNum, endNum) {
    if (index >= arr.length) {
        counter++;
        console.log(arr.join('') + '--->' + counter);
    } else {
        for (let i = startNum; i <= endNum; i++) {
            arr[index] = i;
            GenerateCombinations(arr, index + 1, i + 1, endNum)

        }
    }
}

GenerateCombinations(arr, 0, startNum, endNum)

// 4 5 6
// 4 5 7
// 4 5 8
// 4 6 7
// 4 6 8
// 4 7 8
// 5 6 7
// 5 6 8
// 5 7 8
// 6 7 8