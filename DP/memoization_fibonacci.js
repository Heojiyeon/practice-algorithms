function fib(n) {
    if (n < 3) return 1;
    let memo = [];
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
}

console.log(fib(7)); 