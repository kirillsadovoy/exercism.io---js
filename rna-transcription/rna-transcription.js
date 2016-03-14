'use strict';
class DnaTranscriber {
  toRna(dna) {
    const rna = dna.split('').map(char => {
      switch (char) {
        case 'C': return 'G';
        case 'G': return 'C';
        case 'A': return 'U';
        case 'T': return 'A';
        default:
          return char;
      }
    }).join('');

    return rna;
  }
}

module.exports = DnaTranscriber;
