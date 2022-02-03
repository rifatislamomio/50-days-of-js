function nthlargest(arr, highest) {
    arr.sort((a, b) => a - b).reverse()
    return arr[highest - 1]
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest([ 10, 100, 1000, 10000], 2));