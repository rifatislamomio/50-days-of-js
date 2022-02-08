function getMiddle(s) {
    sArr = s.split('')
    len = sArr.length
    if (len == 0) return sArr[0]
    else if (len % 2 == 0) return sArr[len / 2 - 1] + sArr[len / 2]
    else return sArr[Math.floor(len / 2)]
}

console.log(getMiddle('testing'))