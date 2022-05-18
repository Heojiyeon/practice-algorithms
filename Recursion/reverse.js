function reverse(words) {
    let result = '';
    let n = 0;
    let currWord = words[words.length - 1];
    if (words.length === 0) return result;
    n++;
    return result = currWord + reverse(words.slice(0, words.length - n));
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'