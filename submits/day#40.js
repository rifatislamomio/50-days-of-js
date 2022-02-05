const needsLicense = (kind) => {
    return (kind == 'car' || kind == 'truck')
}

const chooseVehicle = (option1, option2) => {
    if (option1 < option2) {
        return option1 + " is clearly the better choice."
    }

    return option2 + " is clearly the better choice."
}

const calculateResellPrice = (originalPrice, age) => {
    var perc;
    if (age < 3) perc = 0.8
    else if (age > 10) perc = 0.5
    else perc = 0.7

    return originalPrice * perc
}
