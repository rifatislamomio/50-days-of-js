//Write a function which can convert the time input 
//given in 12 hours format to 24 hours format
const time = '12:10AM';

function convertTo24HrsFormat(time) {
   var pm = 0
    var hr = parseInt(time.split(':')[0])
    if(hr>=12) hr = hr-12;
    var min = time.split(':')[1]
    min = min.replace('AM', "")
    min = min.replace('PM', "")

    if(time.includes('PM')){
      hr = hr+12
    }
    if(hr<10) hr = '0'+hr
    if(min.length==1) min = '0'+ min

    return hr+':'+min
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
