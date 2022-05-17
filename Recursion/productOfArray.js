// 배열의 모든 수의 곱
function productOfArray(arr) {
    let result = 1;
    console.log(arr);
    if (arr.length == 0) return 1;
    result = arr[0] * productOfArray(arr.slice(1));
    return result;
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60