// n제곱 수
function power(num, upper) {
    let result = 1;
    if (upper === 0) return result;
    result = num * power(num, upper - 1);
    return result;
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16