function capitalizeFirst(arr) {
    let result = [];
    arr.forEach((word) => {
        let curr = word[0];
        let rest = word.slice(1);
        curr = toUpper(curr);
        function toUpper(curr) {
            return curr.toUpperCase();
        }
        curr = curr.concat(...rest);
        result.push(curr);
    });
    return result;
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']