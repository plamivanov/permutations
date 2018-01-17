let n = 11;

function fibunaci(n) {
    if ((n == 1) || (n == 2)) {
        return 1;
    } else {
        return fibunaci(n - 1) + fibunaci(n - 2);

    }
}
console.log(fibunaci(n));

// 1 1 2 3 5 8 13 21 34 55 89