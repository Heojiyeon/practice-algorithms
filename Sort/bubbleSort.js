function bubbleSort(arr) {
    for (i = arr.length; i > 0; i--) {
        for (j = 0; j < i; j++) {
            let change = false;
            console.log(arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                change = true;
            }
            if (change) return arr;
        }
        console.log(arr);
    }
    return arr;
}

console.log(bubbleSort([11, 12, 13, 31, 23, 41, 57]));