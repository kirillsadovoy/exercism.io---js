'use strict';
class Anagram {
  constructor(input) {
    this.baseWord = input;
    this.pattern = this.makecomparisonForm(input);
  }
  makecomparisonForm(word) {
    return word.toLowerCase().split('').sort().join('');
  }
  matches(arr) {
    const result = [];
    let args;

    if (Array.isArray(arr)) {
      args = arr;
    } else {
      args = Array.prototype.slice.call(arguments);
    }

    args.forEach((word, i) => {
      if (this.pattern === this.makecomparisonForm(word) && this.baseWord !== word.toLowerCase()) {
        result.push(args[i]);
      }
    });

    return result;
  }
}

module.exports = Anagram;
