// 피보나치 수열
function fib(n) {
    let result = 0;
    if (n == 1 || n == 2) return 1;
    result = fib(n - 1) + fib(n - 2);
    return result;
}
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465