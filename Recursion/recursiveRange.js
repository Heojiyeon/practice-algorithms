// 0부터 주어진 수까지의 합
function recursiveRange(num) {
    let sum = 0;
    if (num === 0) return 0;
    sum = num + recursiveRange(num - 1);
    return sum;
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55 