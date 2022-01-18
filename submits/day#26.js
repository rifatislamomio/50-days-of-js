var arr = [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]


function findOdd(arr) {

    var dict = {};
    for (let x of arr) {
        dict[x] = 0;
    }
    for (let x of arr) {
        dict[x] = dict[x] + 1;
    }
    for (let prop in dict) {
        if (dict[prop] % 2 == 1) {
            return parseInt(prop)
        }
    }
}

console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))
