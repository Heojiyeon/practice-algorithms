function sort(arr) {
    if (arr.length <= 1) return arr;
    else {
        let halfNum = Math.floor(arr.length / 2);
        let halfArr = sort(arr.slice(0, halfNum));
        let rest = sort(arr.slice(halfNum));
        return merge(halfArr, rest);
    }
}

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

console.log(sort([4, 12, 7, 2, 23, 1, 42, 6]));