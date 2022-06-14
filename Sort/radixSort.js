function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let currMax = 0;
    for (i = 0; i < arr.length; i++) {
        currMax = Math.max(currMax, digitCount(arr[i]));
    }
    return currMax;
}

function radixSort(nums) {
    let maxlen = mostDigits(nums);
    for (k = 0; k < maxlen; k++) {
        let bucket = Array.from({ length: 10 }, () => []);
        for (j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], k);
            bucket[digit].push(nums[j]);
        }
        nums = [].concat(...bucket);
    }
    return nums;
}

console.log(radixSort([123, 5, 32, 29, 5444]));

// console.log(mostDigits([1234, 56, 7])); //4

// console.log(digitCount(1)); //1
// console.log(digitCount(25)); //2
// console.log(digitCount(314)); //3

// console.log(getDigit(12345, 0)); //5
// console.log(getDigit(12345, 1)); //4
// console.log(getDigit(12345, 2)); //3
// console.log(getDigit(12345, 3)); //2
// console.log(getDigit(12345, 4)); //1