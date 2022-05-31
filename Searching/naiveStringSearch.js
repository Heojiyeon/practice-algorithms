function searchString(longStr, target) {
    let count = 0;
    for (i = 0; i < longStr.length; i++) {
        if (longStr.slice(i, i + target.length) == target) count++;
        if (i == (longStr.length - target.length)) return count;
    }
}

console.log(searchString("emomgniomngomgn", "omgn")); //2