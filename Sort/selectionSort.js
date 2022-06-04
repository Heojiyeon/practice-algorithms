function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let minNum = arr[i];
        for (j = i; j < arr.length; j++) {
            if (minNum > arr[j]) minNum = arr[j];
        }
        let minIdx = arr.findIndex((e) => e == minNum);
        let tmp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = tmp;
    }
    return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2])); //[1, 2, 3, 4, 5]