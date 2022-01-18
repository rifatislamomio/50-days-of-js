// Vowel Count
function getCount(str) {
    const vowels = "aeiou".split('');
    let vowelsCount = 0;
    for (let l of str.toLocaleLowerCase()) {
        if (vowels.includes(l)) {
            vowelsCount++;
        }
    }

    return vowelsCount;
}

console.log(getCount("abracadabra"));
