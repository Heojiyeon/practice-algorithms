function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let minNum = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[minNum] > arr[j]) minNum = j;
        }
        if (i != j) {
            let tmp = arr[minNum];
            arr[minNum] = arr[i];
            arr[i] = tmp;
        }
    }
    return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2])); //[1, 2, 3, 4, 5]