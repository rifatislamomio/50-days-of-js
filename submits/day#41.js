function openOrSenior(data) {
    result = []
    for (let x of data) {
        if (x[0] >= 55 && x[1] >= 7) result.push('Senior')
        else result.push('Open')
    }
    return result
}

let output = openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
]);

console.log(output);
