// Create a regular expression to validate if the given input is valid Indian mobile number or not

const number = '+919876543210';

function validateMobile(number) {
    number = number.replace('+','')
    number = number.replace(' ','')
    if(number[0]=== '9' && number[1]=== '1')
    {
        if(number.length===12)
        {
            return true
        }
        else return false
    }
    else if(number[0]==='0')
    {
        if(number.length>=10)
        {
            return true
        }
        else return false
    }
    else if(number[0]==='9' && number.length==10)
    {return true}
    return false
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
