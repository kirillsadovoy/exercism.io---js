'use strict';
class Pangram {
  constructor(str) {
    this.str = str.toLowerCase();
  }

  isPangram() {
    const keysMap = {};

    this.str.split('').forEach(char => {
      const isLetter = /[a-z]/.test(char);
      if (isLetter) {
        keysMap[char] = true;
      }
    });

    return Object.keys(keysMap).length === 26;
  }

}

module.exports = Pangram;
