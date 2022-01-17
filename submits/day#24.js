//Write Number in Expanded Form

function expandedForm(num) {
    var ara = num.toString().split('').reverse();
    var res = "";
    for (var i = 0; i < ara.length; i++) {
        ara[i] = ara[i] + "0".repeat(i);
    }
    var ara = ara.reverse();
    for (var i = 0; i < ara.length; i++) {
        res = res + '+' + ara[i]
    }
    res = res.replace('+', '');
    return res.toString();
}

console.log(expandedForm(42))