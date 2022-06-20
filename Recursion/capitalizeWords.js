function capitalizeWords(arr) {
    let result = [];
    for (i of arr) {
        function toUpper(i) { return i.toUpperCase(); }
        result = result.concat(toUpper(i));
    }
    return result;
}

console.log(capitalizeWords(["heesoo", "jiyeon"]));