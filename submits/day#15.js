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
