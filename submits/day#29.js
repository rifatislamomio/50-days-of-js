//Mumbling
function accum(s) {
    var res = []
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        res.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
    }
    return res.join('-')

}
console.log(accum('ZpglnRxqenU'))
