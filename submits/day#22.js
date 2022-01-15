let uniqueInOrder = (iterable) => {
    var ara = []
    var prevItem = null;
    for (i of iterable) {
        if (i !== prevItem) {
            ara.push(i)
        }
        prevItem = i;
    }
    return ara;
};
console.log(uniqueInOrder('ABBCcAD'))