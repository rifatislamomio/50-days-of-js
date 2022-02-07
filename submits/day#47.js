function isIsogram(str) {
    arr = str.toLocaleLowerCase().split('')
    set = new Set(arr)
    return arr.length == set.size
}

console.log(isIsogram('Dermatoglyphics'))