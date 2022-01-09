//Write a function which accepts a string argument and returns the count
// of characters between the first and last character 'X'

const str = 'XeroX';

function getTheGapX(str) {
    if(str.lastIndexOf('X') === str.indexOf('X'))
    {
    	if(str.lastIndexOf('X')===-1) return -1
      else{
      	return 0
      }
    }
    else{
    	return str.lastIndexOf('X') - str.indexOf('X')
    }

    
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)


