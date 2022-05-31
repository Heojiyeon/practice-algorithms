function linearSearch(nums, target) {
    // add whatever parameters you deem necessary - good luck!
    let idx = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) idx = i;
    }
    return idx;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); //1