// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;
// 주어진 배열 속 원소 중 홀수가 존재한다면 true, 아니면 false

function someRecursive(arr, isOdd) {
    let result = false;
    let currArr = arr;

    if (currArr.length === 0) return result;
    if (isOdd(currArr[currArr.length - 1])) {
        return !result;
    }
    currArr.pop();
    result = someRecursive(currArr, isOdd);
    return result;
}


console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false