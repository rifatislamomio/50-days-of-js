function getDivisorsCnt(num) {
    divCount = 0
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            if (num / i == i) divCount++
            else divCount += 2
        }
    }
    return divCount;
}


console.log(getDivisorsCnt(16)) 
