function stringifyNumbers(obj) {
    let result = {};
    let vals = Object.values(obj);
    let keys = Object.keys(obj);
    for (var i = 0; i < vals.length; i++) {
        if (parseInt(vals[i])) {
            vals[i] = vals[i] + '';
            result[keys[i]] = vals[i];
        }
        else if (typeof vals[i] == 'object' && vals[i].length !== 0) {
            vals[i] = stringifyNumbers(vals[i]);
        }
        result[keys[i]] = vals[i];
    }
    return result;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/