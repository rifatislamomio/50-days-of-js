
const totalGrains = (input) => {
    var sum = 0;
    for (let i = 1; i <= input; i++) {
        sum = sum + grainsOn(i);
    }
    return sum;
}

const grainsOn = (input) => {
    
    return Math.pow(2, input-1)
}

console.log(`Grains on 5th square: ${grainsOn(5)}`)
console.log(`Total grains upto 5th square: ${totalGrains(5)}`)
