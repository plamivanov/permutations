const k = 3;
const arrNumbers = [4, 5, 6, 7, 8];
const originalLength = arrNumbers.length;
let arr = new Array(3);
let counter = 0;


function GenerateCombinations(index, arrNumbers) {
    if (index >= k) {
        counter++;
        console.log(arr + ' ----> ' + counter)
    } else {
        for (let i = 0; i < originalLength; i++) {
            arr[index] = arrNumbers[i];
            GenerateCombinations(index + 1, arrNumbers)
        }
    }
}

GenerateCombinations(0, arrNumbers);