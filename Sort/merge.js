function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];

    while (result.length != (arr1.length + arr2.length)) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }

        if (arr1.length == i) return result.concat(arr2.slice(j));
        else if (arr2.length == j) return result.concat(arr1.slice(i));
    }
    return result;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
// [1, 2, 10, 14, 50. 99, 100];