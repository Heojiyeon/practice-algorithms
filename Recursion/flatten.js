function flatten(arr) {
  let result = [];
  arr.forEach((curr) => {
    if (Array.isArray(curr)) {
      result = result.concat(flatten(curr))
    } else {
      result.push(curr)
    }
  });
  return result;
}


console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]