function isTriangle(a, b, c) {
    arr = [a, b, c].sort((a, b) => a - b)
    return arr[0] + arr[1] > arr[2]
}
console.log(isTriangle(1,2,2))