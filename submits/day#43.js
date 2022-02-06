function high(x) {
    x = x.toLocaleLowerCase()
    wordArr = x.split(' ')
    maxWeight = 0
    maxWWord = ''
    for (let word of wordArr) {
        if (maxWeight < calcWordWeight(word)) {
            maxWeight = calcWordWeight(word)
            maxWWord = word
        }
    }
    return maxWWord;
}

function calcWordWeight(str) {

    var ALPHABETS = "abcdefghijklmnopqrstuvwxyz".split('')
    var alpha = []
    for (let i in ALPHABETS) {
        alpha[ALPHABETS[i]] = parseInt(i) + 1
    }

    str = str.split('')
    weight = 0
    for (let x of str) {
        weight += alpha[x]
    }
    return weight
}


var s = 'what time are we climbing up the volcano'
console.log(high(s))

