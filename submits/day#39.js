var MIXING_TIME = []
MIXING_TIME['Pure Strawberry Joy'] = .5
MIXING_TIME['Energizer'] = 1.5
MIXING_TIME['Green Garden'] = 1.5
MIXING_TIME['Tropical Island'] = 3
MIXING_TIME['All or Nothing'] = 5

const timeToMixJuice = (name) => {
    if (MIXING_TIME[name] == undefined) return 2.5
    return MIXING_TIME[name]
}

var WEDGES = []
WEDGES['small'] = 6
WEDGES['medium'] = 8
WEDGES['large'] = 10

const limesToCut = (wedgesNeeded, limes) => {
    totalWedges = 0;
    let i = 0;
    for (i in limes) {
        totalWedges += WEDGES[limes[i]];
        if (totalWedges >= wedgesNeeded) break;
    }
    return parseInt(i) + 1
}


const remainingOrders = (timeLeft, orders) => {
    currTime = 0
    jobLeft = []
    for (let x of orders) {
        if (currTime >= timeLeft) {
            jobLeft.push(x)
        }
        else {
            currTime += timeToMixJuice(x)
        }
    }
    return jobLeft
}

console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']))
