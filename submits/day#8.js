// Write a function which accepts 
//two valid dates and returns the difference between them as number of days

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    var d1 = new Date(dateText1)
    var d2 = new Date(dateText2)
    

    return (d2.getTime() - d1.getTime()) / DAY_IN_MILLISECONDS	
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
