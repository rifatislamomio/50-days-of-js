const transcription = (dna) => {
    var trans = []
    var cnv = []
    cnv['G'] = 'C'
    cnv['C'] = 'G'
    cnv['T'] = 'A'
    cnv['A'] = 'U'
    for (let i of dna) {
        trans.push(cnv[i])
    }
    return trans.join('')
}

console.log(transcription('GATC'))
