const PrintNumberOfSteps = (s1, s2, s3, s4, key) => {
    s1 = s1.split('');
    s2 = s2.split('');
    s3 = s3.split('');
    s4 = s4.split('');
    var inp = key.split(' ')[0];
    var fnd = key.split(' ')[1];
    console.log(fnd);
    inp = inp.split('');
    fnd = fnd.split('');

    let k1 = s1.indexOf(inp[0]);
    let k2 = s2.indexOf(inp[1]);
    let k3 = s3.indexOf(inp[2]);
    let k4 = s4.indexOf(inp[3]);

    let noOfSteps = 0
    noOfSteps = Math.abs(s1.indexOf(fnd[0]) - k1)
    noOfSteps += Math.abs(s2.indexOf(fnd[1]) - k2)
    noOfSteps += Math.abs(s3.indexOf(fnd[2]) - k3)
    noOfSteps += Math.abs(s4.indexOf(fnd[3]) - k4)
    return noOfSteps;
}


console.log(PrintNumberOfSteps('ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'BCDEFGHIJKLMNOPQRSTUVWXYZA',
    'CDEFGHIJKLMNOPQRSTUVWXYZAB',
    'DEFGHIJKLMNOPQRSTUVWXYZABC', 'DFHJ CEGI'));