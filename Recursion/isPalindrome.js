function isPalindrome(words) {
    let result = true;
    let n = 0;
    let currWords = words.slice(n, words.length - n);
    if (n == Math.floor(words.length / 2)) return result;
    n++;
    if (currWords[0] != currWords[words.length - 1]) return !result;
    return result;
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium'));// false
