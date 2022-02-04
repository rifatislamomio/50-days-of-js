const valid = (string) => {
    string = string.toLocaleLowerCase().replaceAll(' ', '')
    sum = 0
    regex = /[a-zA-Z]/
    if (regex.test(string) || string.length <= 1) return false
    for (let i in string) {
        if (i % 2 === 0) {
            mul = parseInt(string[i]) * 2
            if (mul > 9) { mul = mul - 9 }
            sum = sum + mul
        }
        else sum = sum + parseInt(string[i])
    }
    return sum % 10 === 0
}

console.log(valid("4539 3195 0343 6467"))