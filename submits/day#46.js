function findNeedle(haystack) {
    index = haystack.findIndex((item) => item === 'needle')
    return "found the needle at position " + index
}
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))