//WeIrD StRiNg CaSe
function toWeirdCase(string) {
    string = string.split('')
    for (let i = 0; i < string.length; i++) {
        if (i % 2 == 0) {
            string[i] = string[i].toUpperCase();
        }
        else {
            string[i] = string[i].toLowerCase();
        }
    }
    return string.join('');
}

console.log(
    `The weird case of ${"A test case"} is ${toWeirdCase("This is a test")}`
);
