function wave(str) {
    var waves = [];
    str = str.split('');
    for (let i in str) {
        if (str[i] != ' ') {
            let cpy = [...str];
            cpy[i] = cpy[i].toUpperCase();
            waves.push(cpy.join(''));
        }
    }
    return waves;
}

console.log(wave("two words"));
