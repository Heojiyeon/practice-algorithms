function insertion(arr) {
    for (i = 1; i < arr.length; i++) {
        let curr = i;
        for (j = i - 1; j >= 0; j--) {
            console.log(arr[j], arr[curr]);
            if (arr[j] > arr[curr]) {
                let tmp = arr[j];
                arr[j] = arr[curr];
                arr[curr] = tmp;
                curr = j;
            }
            else break;
            console.log(arr);
        }
    }
    return arr;
}

console.log(insertion([2, 1, 9, 76, 4])); //[2, 4, 10, 12, 26]