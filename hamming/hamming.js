'use strict';
class Hamming {
  compute(a, b) {
    let diffCount = 0;

    if (a.length !== b.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    for (let i = 0, len = a.length; i < len; i++) {
      if (a[i] !== b[i]) {
        ++diffCount;
      }
    }

    return diffCount;
  }
}
module.exports = Hamming;
