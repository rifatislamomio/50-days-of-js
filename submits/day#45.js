function findOutlier(integers) {
    cE = 0
    cO = 0
    for (x of integers) {
        if (cE > 1 || cO > 1)
            break
        if (x % 2 == 0) cE++
        else cO++
    }
    parity = cE > 1 ? 'even' : 'odd'

    for (x of integers) {
        if (parity === 'even' && x % 2 != 0) return x
        if (parity === 'odd' && x % 2 == 0) return x
    }
}

var arr = [0,0,0,3,0,0,0]
console.log(findOutlier(arr))