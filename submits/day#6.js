//Write a function
//to truncate a string to a certain number of words

const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    var words = 0
    var cat = ""
    for(var x of str)
    {
        if(x==' ')
        {
        	words+=1
        }
        if(words!==wordLimit)
        {
        	cat+=x
        }
        else{
        	break;
        }
    }

    return cat
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
