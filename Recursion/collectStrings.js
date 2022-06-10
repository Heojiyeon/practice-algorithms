function collectStrings(obj) {
    let result = [];
    const vals = Object.values(obj);
    for (i = 0; i < vals.length; i++) {
        if (typeof vals[i] == "string") result.push(vals[i]);
        else result = result.concat(collectStrings(vals[i]));
    }
    return result;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])