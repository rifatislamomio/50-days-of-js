var ara = [1, 2, -1, 2]

function findEvenIndex(arr) {
    {
        const forReducer = (a, b) => a + b;
        var left, right = 0;
        if (ara.length == 0) {
            return -1;
        }
        else {
            for (var i = 0; i < arr.length; i++) {
                if (i == 0) {
                    right = arr.slice(1).reduce(forReducer, 0);
                    if (i === right) return i;
                }
                else {
                    left = arr.slice(0, i).reduce(forReducer, 0);
                    right = arr.slice(i + 1).reduce(forReducer, 0);
                    if (left === right) return i
                }
            }
            return -1;
        }
    }
}
console.log(findEvenIndex(ara))
