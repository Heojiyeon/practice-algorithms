function fib(n) {
    let result = [0, 1, 1];

    if (n < 3) return result[n];
    for (i = 3; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n];
}



console.log(fib(7)); //5