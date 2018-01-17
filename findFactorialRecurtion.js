function findFactorial(n) {
    if (n <= 1) {
        return 1
    }

    return findFactorial(n - 1) * findFactorial(n - 1)
}

console.log(findFactorial(5))