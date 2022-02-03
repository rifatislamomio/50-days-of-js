
function mostFreq(arr) {
    var map = {}
    for (let x of arr) {
        if (x in map) {
            map[x] = map[x] + 1;
        }
        else {
            map[x] = 1
        }
    }

    var maxKey = ''
    var max = -999999;
    for (let key in map) {
        if (map[key] > max) {
            max = map[key];
            maxKey = key
        }
    }

    return maxKey + ' ' + max
}

const arr = [1, 2, 2, 4, 5, 6, 6];

console.log(mostFreq(arr));