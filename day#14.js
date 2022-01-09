//Convert given array of digits of a base to another asked base
const convertDigitsToAskedBase = (digits, baseA, baseB) => {
    var num =""
    var converted = []
    for(x of digits)
    {
        num+=x
    }
    num = parseInt(num)

    while(num>=baseB)
    {
        rem = num%baseB;
        converted.push(rem);
        num = parseInt(num/baseB)
    }
    converted.push(num);
    return converted.reverse();
}


