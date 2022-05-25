var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
};

function nestedEvenSum(obj) {
    let count = 0;
    Object.values(obj).forEach((e) => {
        if (e == 2) count += 2;
        else if (typeof e == 'object') count += nestedEvenSum(e);
    });
    return count;
}
console.log(nestedEvenSum(obj1)); // 6

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj2)); // 10