//Write a program to reverse a given integer number
const num = 3849;

function reverseGivenInteger(num) {
    revNum = 0

    while(num)
    {
        revNum = revNum*10 + num%10
        num = Math.floor(num/10)
    }

    return revNum
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
