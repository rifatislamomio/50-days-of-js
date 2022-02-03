//array with unique element
// function set(arrOfNum) {
//     var uarr = []
//     for (let x of arrOfNum) {
//         if (!uarr.includes(x)) {
//             uarr.push(x);
//         }
//     }
//     return uarr;
// }

// const arrOfNum = [1, 1, 1, 1, 1, 1,];

// console.log("result is + " + set(arrOfNum));


//alternative approach
function set(arrOfNum) {
    var mSet = new Set(arrOfNum)
    return [...mSet];
}

const arrOfNum = [1, 1, 1, 1, 1, 1];

console.log("result is + " + set(arrOfNum));