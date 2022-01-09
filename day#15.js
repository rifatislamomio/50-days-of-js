//Determine if a sentence is a pangram

// const isPangram = (input) => {
// 	input = input.toLocaleLowerCase() + ""
//     input = input.replaceAll(' ', '')
//     input = input.split('')
//     var arr = []
//     for(l of input)
//     {
//         if(!arr.includes(l))
//         {
//             arr.push(l);
//         }
//     }
// 	return arr.length == 26;
// }
//console.log(isPangram('The quick brown fox jumps over the lazy dog'))

//Best Alternative

const isPangram = (input) => {
    input = input.toLocaleLowerCase() + ""
    input = input.replaceAll(' ', '')
    input = input.split('')
    var set = new Set()
    for (x of input) {
        if (x >= 'a' && x <= 'z') {
            set.add(x)
        }
    }
    return set.size == 26
}
